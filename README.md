# 📚 Docs - Sistema de Documentación Técnica

Sistema de documentación técnica construido con **Astro**, diseñado con el mismo estilo minimalista y terminal-style del portfolio.

## 🚀 Características

- ✅ **100% JSON-driven**: Todo el contenido se define en archivos JSON
- ✅ **Jerarquía con carpetas**: Organiza documentación en categorías y subcategorías
- ✅ Menú lateral dinámico generado automáticamente
- ✅ **Diseño responsive**: Menu hamburguesa en móvil con overlay
- ✅ Estilo inspirado en terminales de consola
- ✅ **Sonido terminal**: Feedback auditivo en navegación (Web Audio API)
- ✅ 5 tipos de contenido: heading, paragraph, code, list, callout
- ✅ Sin necesidad de crear archivos .astro para cada página
- ✅ Navegación fluida con animaciones suaves

## 📦 Instalación

### Requisitos

- Node.js >= 18.20.8 (requerido por Astro 5)

### Comandos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview

# Ejecutar tests
npm test
```

## 📂 Estructura del Proyecto

```
docs/
├── src/
│   ├── components/
│   │   ├── Sidebar.astro          # Componente de menú lateral (con soporte de categorías)
│   │   └── ContentRenderer.astro  # Renderizador de contenido JSON
│   ├── data/
│   │   └── menus/                 # Archivos JSON organizados en carpetas
│   │       ├── backend/           # Categoría Backend
│   │       │   └── Node.json
│   │       ├── frontend/          # Categoría Frontend
│   │       │   └── React.json
│   │       └── PatronesDiseno.json  # Sin categoría (nivel superior)
│   ├── layouts/
│   │   └── Layout.astro           # Layout principal
│   ├── pages/
│   │   ├── index.astro            # Página de inicio
│   │   └── [...slug].astro        # Rutas dinámicas para toda la documentación
│   ├── styles/
│   │   └── global.css             # Estilos globales
│   └── utils/
│       └── menuLoader.ts          # Carga recursiva de menús desde carpetas
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 📝 Cómo agregar nueva documentación

### 1. Crear el archivo JSON con menú y contenido

#### Opción A: Sin categoría (nivel superior)
Crea un nuevo archivo en `src/data/menus/`, por ejemplo `NuevaTematica.json`

#### Opción B: Con categorías (recomendado)
Organiza tus documentos en carpetas (soporta hasta 3 niveles):
```
src/data/menus/
  backend/                      # Nivel 1: Categoría "Backend"
    Node.json                   # Nivel 2: Documento directo
  academic/                     # Nivel 1: Categoría "Academic"
    logica_y_matematica/        # Nivel 2: Subcategoría "Logica Y Matematica"
      Calculo.json              # Nivel 3: Documento (máxima profundidad)
  frontend/                     # Nivel 1: Categoría "Frontend"
    React.json                  # Nivel 2: Documento directo
  PatronesDiseno.json           # Nivel 1: Sin categoría
```

**Nombres de carpetas:**
- Usa guiones bajos (`_`) o guiones (`-`) en lugar de espacios
- Se mostrarán automáticamente formateados: `logica_y_matematica` → "Logica Y Matematica"
- Ejemplos válidos: `machine_learning`, `inteligencia-artificial`, `bases_de_datos`

**Estructuras soportadas:**
- 1 nivel: `archivo.json` → Ítem de menú principal
- 2 niveles: `carpeta/archivo.json` → Categoría con contenido directo
- 3 niveles: `carpeta/subcarpeta/archivo.json` → Categoría → Subcategoría → Contenido

Ejemplo de JSON:

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
          "slug": "nueva-tematica/seccion1/tema1",
          "content": {
            "breadcrumb": ["Inicio", "Nueva Temática", "Primera Sección", "Primer Tema"],
            "sections": [
              {
                "type": "heading",
                "level": 2,
                "text": "Título del tema"
              },
              {
                "type": "paragraph",
                "text": "Descripción del tema..."
              },
              {
                "type": "code",
                "text": "// Código de ejemplo\nconsole.log('Hola');"
              },
              {
                "type": "list",
                "items": ["Item 1", "Item 2", "Item 3"]
              },
              {
                "type": "callout",
                "title": "💡 Nota",
                "text": "Información importante"
              }
            ]
          }
        }
      ]
    }
  ]
}
```

### 2. Estructura de los archivos JSON

Cada archivo JSON debe tener la siguiente estructura:

```json
{
  "title": "Nombre del tema",
  "sections": [...]
}
```

#### Propiedades principales:

- **`title`** (string, obligatorio): El nombre del tema que aparece en el sidebar
- **`sections`** (array, obligatorio): Array de secciones que agrupan los documentos

#### Estructura de una sección:

```json
{
  "id": "identificador-unico",
  "title": "Nombre de la Sección",
  "items": [...]
}
```

- **`id`** (string, obligatorio): Identificador único de la sección
- **`title`** (string, obligatorio): Nombre que aparece en el sidebar
- **`items`** (array, obligatorio): Array de documentos dentro de esta sección

#### Estructura de un item/documento:

```json
{
  "id": "identificador-unico",
  "title": "Título del documento",
  "slug": "ruta/del/documento",
  "content": {
    "breadcrumb": ["Inicio", "Tema", "Sección", "Documento"],
    "sections": [...]
  }
}
```

- **`id`** (string, obligatorio): Identificador único del documento
- **`title`** (string, obligatorio): Título que aparece en el sidebar y en la página
- **`slug`** (string, obligatorio): Ruta URL del documento (sin barra inicial)
- **`content`** (object, obligatorio): Contenido del documento
  - **`breadcrumb`** (array, obligatorio): Ruta de navegación
  - **`sections`** (array, obligatorio): Bloques de contenido

### 3. Tipos de contenido disponibles

Dentro del array `content.sections` puedes usar los siguientes tipos:

#### 3.1. Heading (Encabezados)
```json
{
  "type": "heading",
  "level": 2,
  "text": "Título del encabezado"
}
```
- **`level`** (number): Nivel del heading (2 = h2, 3 = h3, 4 = h4, etc.)
- **`text`** (string): Texto del encabezado

#### 3.2. Paragraph (Párrafos)
```json
{
  "type": "paragraph",
  "text": "Este es un párrafo de texto. Puede contener múltiples líneas de información."
}
```
- **`text`** (string): Contenido del párrafo

#### 3.3. Code (Bloques de código)
```json
{
  "type": "code",
  "text": "const ejemplo = 'Hola mundo';\nconsole.log(ejemplo);"
}
```
- **`text`** (string): Código a mostrar. Usa `\n` para saltos de línea

#### 3.4. List (Listas)
```json
{
  "type": "list",
  "items": [
    "Primer elemento de la lista",
    "<strong>Elemento con HTML</strong>",
    "Tercer elemento"
  ]
}
```
- **`items`** (array): Array de strings. Soporta HTML inline

#### 3.5. Callout (Cajas destacadas)
```json
{
  "type": "callout",
  "title": "💡 Nota Importante",
  "text": "Esta es una caja destacada para información importante o advertencias."
}
```
- **`title`** (string): Título de la caja (puede incluir emojis)
- **`text`** (string): Contenido de la caja

### 4. Ejemplo completo

```json
{
  "title": "JavaScript",
  "sections": [
    {
      "id": "fundamentos",
      "title": "Fundamentos",
      "items": [
        {
          "id": "variables",
          "title": "Variables y Tipos",
          "slug": "javascript/fundamentos/variables",
          "content": {
            "breadcrumb": ["Inicio", "JavaScript", "Fundamentos", "Variables y Tipos"],
            "sections": [
              {
                "type": "heading",
                "level": 2,
                "text": "Variables en JavaScript"
              },
              {
                "type": "paragraph",
                "text": "JavaScript tiene tres formas de declarar variables: var, let y const."
              },
              {
                "type": "heading",
                "level": 3,
                "text": "Ejemplos"
              },
              {
                "type": "code",
                "text": "// Declaración con let\nlet nombre = 'Juan';\n\n// Declaración con const\nconst PI = 3.14159;\n\n// Declaración con var (no recomendado)\nvar edad = 25;"
              },
              {
                "type": "heading",
                "level": 3,
                "text": "Diferencias principales"
              },
              {
                "type": "list",
                "items": [
                  "<strong>let</strong> - Variable con scope de bloque, puede reasignarse",
                  "<strong>const</strong> - Constante con scope de bloque, no puede reasignarse",
                  "<strong>var</strong> - Variable con scope de función (obsoleto)"
                ]
              },
              {
                "type": "callout",
                "title": "⚠️ Buena práctica",
                "text": "Usa const por defecto. Usa let solo cuando necesites reasignar. Evita var."
              }
            ]
          }
        }
      ]
    }
  ]
}
```

### 5. El sistema genera todo automáticamente

Una vez creado el archivo JSON:

- El **menú lateral** se genera recursivamente desde carpetas y archivos JSON (usando `menuLoader.ts`)
- Las **categorías** se crean automáticamente desde los nombres de las carpetas
- Las **páginas** se crean dinámicamente usando `[...slug].astro`
- El **contenido** se renderiza desde el JSON usando `ContentRenderer.astro`
- **No necesitas crear archivos .astro** para cada página
- Solo ejecuta `npm run dev` para ver los cambios

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

### Backend
- **Node.js** - Fundamentos, APIs, Programación Asíncrona y Bases de Datos

### Frontend
- **React** - Fundamentos, Hooks, Routing y Estado Global

### Sin categoría
- **Patrones de Diseño** - Patrones Creacionales, Estructurales y de Comportamiento

## 📋 Referencia rápida

### Plantilla completa de archivo JSON

Puedes copiar esta plantilla para crear nuevos temas de documentación:

```json
{
  "title": "Nombre del Tema",
  "sections": [
    {
      "id": "seccion-ejemplo",
      "title": "Sección de Ejemplo",
      "items": [
        {
          "id": "documento-ejemplo",
          "title": "Documento de Ejemplo",
          "slug": "tema/seccion/documento",
          "content": {
            "breadcrumb": ["Inicio", "Tema", "Sección", "Documento"],
            "sections": [
              { "type": "heading", "level": 2, "text": "Título Principal" },
              { "type": "paragraph", "text": "Introducción..." },
              { "type": "heading", "level": 3, "text": "Subtítulo" },
              { "type": "code", "text": "const ejemplo = 'código';" },
              { "type": "list", "items": ["Item 1", "Item 2"] },
              { "type": "callout", "title": "💡 Nota", "text": "Información" }
            ]
          }
        }
      ]
    }
  ]
}
```

### Plantilla básica de documento

```json
{
  "id": "mi-documento",
  "title": "Mi Documento",
  "slug": "categoria/seccion/mi-documento",
  "content": {
    "breadcrumb": ["Inicio", "Categoría", "Sección", "Mi Documento"],
    "sections": [
      { "type": "heading", "level": 2, "text": "Título principal" },
      { "type": "paragraph", "text": "Descripción..." },
      { "type": "heading", "level": 3, "text": "Subtítulo" },
      { "type": "code", "text": "console.log('ejemplo');" },
      { "type": "list", "items": ["Item 1", "Item 2"] },
      { "type": "callout", "title": "💡 Nota", "text": "Info importante" }
    ]
  }
}
```

### Todos los tipos disponibles

| Tipo | Campos obligatorios | Ejemplo |
|------|---------------------|---------|
| **heading** | `type`, `level`, `text` | `{ "type": "heading", "level": 2, "text": "Título" }` |
| **paragraph** | `type`, `text` | `{ "type": "paragraph", "text": "Texto..." }` |
| **code** | `type`, `text` | `{ "type": "code", "text": "const x = 1;" }` |
| **list** | `type`, `items` | `{ "type": "list", "items": ["A", "B"] }` |
| **callout** | `type`, `title`, `text` | `{ "type": "callout", "title": "💡", "text": "..." }` |

## 📄 Licencia

MIT
