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
export async function readMenusRecursively(): Promise<MenuStructure[]> {
  // Usar import.meta.glob para cargar todos los JSON en tiempo de build
  const modules = import.meta.glob('../data/menus/**/*.json', { eager: true }) as Record<string, { default: MenuData }>;

  // Estructura para organizar los archivos por carpetas
  const structure: Map<string, MenuStructure> = new Map();

  for (const [path, module] of Object.entries(modules)) {
    // Extraer el path relativo: ../data/menus/backend/Node.json -> backend/Node.json
    const relativePath = path.replace('../data/menus/', '');
    const parts = relativePath.split('/');

    if (parts.length === 1) {
      // Archivo en raíz (ej: PatronesDiseno.json)
      const name = parts[0].replace('.json', '');
      structure.set(name, {
        name,
        path: name,
        data: module.default
      });
    } else {
      // Archivo dentro de carpetas (ej: backend/Node.json o academic/subfolder/file.json)
      const folderPath = parts.slice(0, -1).join('/');
      const fileName = parts[parts.length - 1].replace('.json', '');

      // Crear estructura de carpetas si no existe
      const folders = parts.slice(0, -1);
      let currentLevel = structure;
      let currentPath = '';

      for (let i = 0; i < folders.length; i++) {
        const folderName = folders[i];
        currentPath += (i > 0 ? '/' : '') + folderName;

        if (!currentLevel.has(folderName)) {
          const newFolder: MenuStructure = {
            name: folderName,
            path: currentPath,
            children: []
          };
          currentLevel.set(folderName, newFolder);
        }

        const folder = currentLevel.get(folderName)!;
        if (!folder.children) {
          folder.children = [];
        }

        // Crear un Map temporal para el siguiente nivel
        const childrenMap = new Map<string, MenuStructure>();
        folder.children.forEach(child => childrenMap.set(child.name, child));
        currentLevel = childrenMap;
      }

      // Agregar el archivo JSON al último nivel
      currentLevel.set(fileName, {
        name: fileName,
        path: folderPath + '/' + fileName,
        data: module.default
      });

      // Actualizar los children del folder padre
      const parentFolder = structure.get(folders[0]);
      if (parentFolder && folders.length === 1) {
        parentFolder.children = Array.from(currentLevel.values());
      }
    }
  }

  // Convertir Map a Array y reconstruir la jerarquía correctamente
  const result: MenuStructure[] = [];

  for (const [path, module] of Object.entries(modules)) {
    const relativePath = path.replace('../data/menus/', '');
    const parts = relativePath.split('/');

    if (parts.length === 1) {
      // Archivo en raíz
      const name = parts[0].replace('.json', '');
      if (!result.find(r => r.name === name)) {
        result.push({
          name,
          path: name,
          data: module.default
        });
      }
    } else {
      // Archivo dentro de carpetas
      const rootFolder = parts[0];
      let folder = result.find(r => r.name === rootFolder);

      if (!folder) {
        folder = {
          name: rootFolder,
          path: rootFolder,
          children: []
        };
        result.push(folder);
      }

      // Navegar por la jerarquía
      let currentFolder = folder;
      for (let i = 1; i < parts.length - 1; i++) {
        const subFolderName = parts[i];
        if (!currentFolder.children) {
          currentFolder.children = [];
        }

        let subFolder = currentFolder.children.find(c => c.name === subFolderName);
        if (!subFolder) {
          subFolder = {
            name: subFolderName,
            path: parts.slice(0, i + 1).join('/'),
            children: []
          };
          currentFolder.children.push(subFolder);
        }
        currentFolder = subFolder;
      }

      // Agregar el archivo JSON
      const fileName = parts[parts.length - 1].replace('.json', '');
      if (!currentFolder.children) {
        currentFolder.children = [];
      }

      if (!currentFolder.children.find(c => c.name === fileName)) {
        currentFolder.children.push({
          name: fileName,
          path: parts.slice(0, -1).join('/') + '/' + fileName,
          data: module.default
        });
      }
    }
  }

  return result;
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
