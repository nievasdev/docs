import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const menusDir = join(process.cwd(), 'src/data/menus');

export interface MenuItem {
  title: string;
  slug: string;
  path: string;
  isIndex: boolean;
}

export interface MenuCategory {
  name: string;
  title: string;
  slug: string;
  path: string;
  indexContent?: any;
  items: MenuItem[];
  children?: MenuCategory[];
}

function formatFolderName(n: string): string {
  return n
    .replace(/[_-]/g, ' ')
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}

function normalizeForSlug(t: string): string {
  return t
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[áàäâ]/g, 'a')
    .replace(/[éèëê]/g, 'e')
    .replace(/[íìïî]/g, 'i')
    .replace(/[óòöô]/g, 'o')
    .replace(/[úùüû]/g, 'u')
    .replace(/[ñ]/g, 'n')
    .replace(/[^a-z0-9-_/]/g, '');
}

function processMarkdown(raw: string): { html: string; frontmatter: any; comments: Array<{id: string; text: string}> } {
  const { data, content } = matter(raw);

  // Extract comments with syntax ?? [comment text]
  const comments: Array<{id: string; text: string}> = [];
  let commentId = 0;

  const contentWithMarkers = content.replace(/\?\?\s*\[([^\]]+)\]/g, (match, commentText) => {
    const id = `comment-${commentId++}`;
    comments.push({ id, text: commentText.trim() });
    return `<span class="comment-marker" data-comment-id="${id}" tabindex="0"></span>`;
  });

  const html = String(marked.parse(contentWithMarkers));
  return { html, frontmatter: data, comments };
}

function readMdFiles(dir: string, basePath: string = ''): any[] {
  const items = readdirSync(dir);
  const result: any[] = [];

  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      const subPath = basePath ? `${basePath}/${item}` : item;
      result.push({
        type: 'folder',
        name: item,
        path: subPath,
        children: readMdFiles(fullPath, subPath)
      });
    } else if (item.endsWith('.md')) {
      const raw = readFileSync(fullPath, 'utf-8');
      const isIndex = item === 'index.md';
      const name = item.replace('.md', '');
      const itemPath = basePath ? `${basePath}/${name}` : name;

      result.push({
        type: 'file',
        name,
        path: itemPath,
        raw,
        isIndex
      });
    }
  }

  return result;
}

function buildStructure(items: any[], parentSlug: string = ''): MenuCategory[] {
  const cats: MenuCategory[] = [];

  for (const item of items) {
    if (item.type === 'folder') {
      const slug = parentSlug
        ? `${parentSlug}/${normalizeForSlug(item.name)}`
        : normalizeForSlug(item.name);

      const cat: MenuCategory = {
        name: item.name,
        title: formatFolderName(item.name),
        slug,
        path: item.path,
        items: []
      };

      const indexFile = item.children.find((c: any) => c.isIndex);
      if (indexFile) {
        const { html, frontmatter, comments } = processMarkdown(indexFile.raw);
        cat.indexContent = { html, frontmatter, comments };
      }

      const files = item.children.filter((c: any) => c.type === 'file' && !c.isIndex);
      for (const file of files) {
        const { frontmatter } = processMarkdown(file.raw);
        cat.items.push({
          title: frontmatter.title || formatFolderName(file.name),
          slug: `${slug}/${normalizeForSlug(file.name)}`,
          path: file.path,
          isIndex: false
        });
      }

      const subFolders = item.children.filter((c: any) => c.type === 'folder');
      if (subFolders.length > 0) {
        cat.children = buildStructure(subFolders, slug);
      }

      cats.push(cat);
    } else if (!item.isIndex) {
      const { frontmatter } = processMarkdown(item.raw);
      const slug = parentSlug
        ? `${parentSlug}/${normalizeForSlug(item.name)}`
        : normalizeForSlug(item.name);

      cats.push({
        name: item.name,
        title: frontmatter.title || formatFolderName(item.name),
        slug,
        path: item.path,
        items: [{
          title: frontmatter.title || formatFolderName(item.name),
          slug,
          path: item.path,
          isIndex: false
        }]
      });
    }
  }

  return cats;
}

let cachedMenus: MenuCategory[] | null = null;
let cachedPaths: Array<{ slug: string; title: string; content: any }> | null = null;

export async function readMenusRecursively(): Promise<MenuCategory[]> {
  if (cachedMenus) return cachedMenus;

  const items = readMdFiles(menusDir);
  cachedMenus = buildStructure(items);

  return cachedMenus;
}

export async function extractAllPaths(): Promise<Array<{
  slug: string;
  title: string;
  content: any;
}>> {
  if (cachedPaths) return cachedPaths;

  const paths: Array<{ slug: string; title: string; content: any }> = [];

  function traverse(dir: string, pathParts: string[] = []): void {
    const items = readdirSync(dir);

    for (const item of items) {
      const fullPath = join(dir, item);
      const stat = statSync(fullPath);

      if (stat.isDirectory()) {
        traverse(fullPath, [...pathParts, item]);
      } else if (item.endsWith('.md')) {
        const raw = readFileSync(fullPath, 'utf-8');
        const isIndex = item === 'index.md';
        const name = item.replace('.md', '');

        const slugParts = isIndex ? pathParts : [...pathParts, name];
        const slug = slugParts.map(s => normalizeForSlug(s)).join('/');
        const breadcrumb = ['Inicio', ...slugParts.map(s => formatFolderName(s))];

        const { html, frontmatter, comments } = processMarkdown(raw);
        const title = frontmatter.title || formatFolderName(slugParts[slugParts.length - 1]);

        paths.push({
          slug,
          title,
          content: {
            html,
            breadcrumb,
            frontmatter,
            comments
          }
        });
      }
    }
  }

  traverse(menusDir);
  cachedPaths = paths;

  return paths;
}
