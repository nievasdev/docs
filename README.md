# 📚 Docs - Sistema de Documentación Técnica

Sistema de documentación técnica construido con **Astro**, diseñado con el mismo estilo minimalista y terminal-style del portfolio.

## 🚀 Características

- ✅ Menú lateral dinámico generado desde archivos JSON
- ✅ Diseño responsive optimizado para desktop y mobile
- ✅ Estilo inspirado en terminales de consola
- ✅ Navegación fluida entre secciones
- ✅ Fácil de extender agregando nuevos archivos JSON

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📂 Estructura del Proyecto

```
docs/
├── src/
│   ├── components/
│   │   └── Sidebar.astro          # Componente de menú lateral
│   ├── data/
│   │   └── menus/                 # Archivos JSON de menús
│   │       ├── Node.json
│   │       ├── React.json
│   │       └── PatronesDiseno.json
│   ├── layouts/
│   │   └── Layout.astro           # Layout principal
│   ├── pages/
│   │   ├── index.astro            # Página de inicio
│   │   ├── node/                  # Documentación de Node.js
│   │   ├── react/                 # Documentación de React
│   │   └── patrones/              # Patrones de Diseño
│   └── styles/
│       └── global.css             # Estilos globales
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 📝 Cómo agregar nueva documentación

### 1. Crear el archivo JSON del menú

Crea un nuevo archivo en `src/data/menus/`, por ejemplo `NuevaTematica.json`:

```json
{
  "title": "Nueva Temática",
  "sections": [
    {
      "id": "seccion1",
      "title": "Primera Sección",
      "items": [
        {
          "id": "tema1",
          "title": "Primer Tema",
          "slug": "nueva-tematica/seccion1/tema1"
        }
      ]
    }
  ]
}
```

### 2. Crear las páginas de contenido

Crea las páginas correspondientes en `src/pages/`, siguiendo la estructura del slug:

```
src/pages/nueva-tematica/seccion1/tema1.astro
```

### 3. El menú se genera automáticamente

El componente `Sidebar.astro` lee automáticamente todos los archivos JSON del directorio `src/data/menus/` y genera el menú lateral.

## 🎨 Estilo y Apariencia

El proyecto utiliza el mismo tema oscuro y estilo minimalista del portfolio:

- **Fondo**: Negro (#000)
- **Texto**: Gris claro (#ddd)
- **Acento**: Verde neón (#08CB00)
- **Fuente**: Monaco, Courier New (monospace)
- **Diseño**: Terminal/Consola style

## 🛠️ Tecnologías

- **Astro 5** - Framework de generación de sitios estáticos
- **TypeScript** - Tipado estático
- **CSS3** - Estilos personalizados

## 📖 Temáticas disponibles

- **Node.js** - Fundamentos, APIs, Programación Asíncrona y Bases de Datos
- **React** - Fundamentos, Hooks, Routing y Estado Global
- **Patrones de Diseño** - Patrones Creacionales, Estructurales y de Comportamiento

## 📄 Licencia

MIT
# docs
