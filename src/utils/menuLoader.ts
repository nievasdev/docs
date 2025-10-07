import { readdir, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';

export interface MenuItem {
  id: string;
  title: string;
  slug: string;
  content: any;
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface MenuData {
  title: string;
  sections: MenuSection[];
}

export interface MenuStructure {
  name: string;
  path: string;
  data?: MenuData;
  children?: MenuStructure[];
}

/**
 * Lee recursivamente todos los archivos JSON y carpetas desde un directorio
 */
export async function readMenusRecursively(
  basePath: string,
  currentPath: string = basePath
): Promise<MenuStructure[]> {
  const entries = await readdir(currentPath, { withFileTypes: true });
  const results: MenuStructure[] = [];

  for (const entry of entries) {
    const fullPath = join(currentPath, entry.name);
    const relativePath = relative(basePath, fullPath);

    if (entry.isDirectory()) {
      // Es una carpeta, leer recursivamente
      const children = await readMenusRecursively(basePath, fullPath);

      results.push({
        name: entry.name,
        path: relativePath,
        children: children
      });
    } else if (entry.isFile() && entry.name.endsWith('.json')) {
      // Es un archivo JSON, cargarlo
      const content = await import(`../data/menus/${relativePath}`);

      results.push({
        name: entry.name.replace('.json', ''),
        path: relativePath.replace('.json', ''),
        data: content.default
      });
    }
  }

  return results;
}

/**
 * Extrae todos los paths de un array de estructuras de menú (recursivamente)
 */
export function extractAllPaths(menus: MenuStructure[]): Array<{
  slug: string;
  title: string;
  content: any;
}> {
  const paths: Array<{ slug: string; title: string; content: any }> = [];

  for (const menu of menus) {
    if (menu.data) {
      // Es un archivo JSON con contenido
      for (const section of menu.data.sections) {
        for (const item of section.items) {
          paths.push({
            slug: item.slug,
            title: item.title,
            content: item.content
          });
        }
      }
    }

    if (menu.children) {
      // Tiene hijos, procesar recursivamente
      paths.push(...extractAllPaths(menu.children));
    }
  }

  return paths;
}
