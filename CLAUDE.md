# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a technical documentation system built with Astro 5. It uses a JSON-driven architecture where documentation content and navigation are defined in JSON files, and pages are generated dynamically at build time.

## Commands

```bash
# Development
npm run dev           # Start dev server (typically http://localhost:4321)
npm run build         # Build for production
npm run preview       # Preview production build locally
npm run lint          # Run Astro type checking

# Package management
npm install           # Install dependencies
```

## Architecture

### JSON-Driven Content System

The entire documentation is driven by JSON files in `src/data/menus/`. The system supports hierarchical organization through folders and subfolders.

**Key principle**: Pages are NOT created as individual .astro files. Instead:
1. Content and structure are defined in JSON files organized in folders/subfolders
2. `src/pages/[...slug].astro` dynamically generates static pages at build time via `getStaticPaths()`
3. The Sidebar component recursively reads all folders and JSON files to build the navigation menu
4. `src/utils/menuLoader.ts` provides utilities to recursively load menu structures

### Folder Structure

You can organize documentation in subcategories using folders:

```
src/data/menus/
  backend/              # Category: Backend
    node/              # Subcategory under Backend
      Node.json        # JSON file with Node.js docs
    python/
      Python.json
  frontend/            # Category: Frontend
    React.json         # Direct JSON file under Frontend
  PatronesDiseno.json  # Top-level JSON (no category)
```

The sidebar will display:
- **Backend** (category from folder name)
  - **Node.js** (from Node.json title)
    - Sections and items from Node.json
  - **Python** (from Python.json title)
- **Frontend** (category from folder name)
  - **React** (from React.json title)
- **Patrones de Diseño** (top-level, from PatronesDiseno.json title)

### JSON File Structure

Each menu JSON file must follow this structure:

```json
{
  "title": "Topic Name",
  "sections": [
    {
      "id": "unique-section-id",
      "title": "Section Name",
      "items": [
        {
          "id": "unique-item-id",
          "title": "Page Title",
          "slug": "topic/section/page",
          "content": {
            "breadcrumb": ["Home", "Topic", "Section", "Page"],
            "sections": [...]
          }
        }
      ]
    }
  ]
}
```

**Required fields:**
- `title` (string): Topic name shown in sidebar
- `sections` (array): Groups of documentation pages
  - `id` (string): Unique section identifier
  - `title` (string): Section name in sidebar
  - `items` (array): Documentation pages in this section
    - `id` (string): Unique item identifier
    - `title` (string): Page title
    - `slug` (string): URL path (without leading slash)
    - `content.breadcrumb` (array): Navigation breadcrumb
    - `content.sections` (array): Content blocks

### Content Types

The `ContentRenderer.astro` component supports these content types in `content.sections`:

**1. heading**: Headings (h2-h6)
```json
{
  "type": "heading",
  "level": 2,
  "text": "Heading text"
}
```

**2. paragraph**: Text paragraphs
```json
{
  "type": "paragraph",
  "text": "Paragraph content"
}
```

**3. code**: Code blocks
```json
{
  "type": "code",
  "text": "const example = 'code';\nconsole.log(example);"
}
```

**4. list**: Lists (supports inline HTML)
```json
{
  "type": "list",
  "items": [
    "Item 1",
    "<strong>Item with HTML</strong>",
    "Item 3"
  ]
}
```

**5. callout**: Highlighted boxes
```json
{
  "type": "callout",
  "title": "💡 Note",
  "text": "Important information"
}
```

### Component Architecture

- **Sidebar.astro**: Auto-discovers all JSON files in `src/data/menus/`, builds collapsible menu, handles active state
- **ContentRenderer.astro**: Type-based content renderer that maps JSON content types to HTML elements
- **[...slug].astro**: Dynamic route handler that generates all documentation pages at build time
- **Layout.astro**: Base layout wrapper

### Static Site Generation

- Build output: Static HTML files (configured in astro.config.mjs)
- All routes are generated at build time from JSON files
- No server-side rendering or API routes

## Adding New Documentation

To add new documentation:

### Option 1: Top-level topic (no category)
1. Create a JSON file in `src/data/menus/` (e.g., `NewTopic.json`)
2. Follow the JSON structure with sections, items, slugs, and content
3. It will appear at the top level in the sidebar

### Option 2: Organized in categories
1. Create a folder in `src/data/menus/` (e.g., `src/data/menus/backend/`)
2. Inside the folder, create a JSON file (e.g., `Node.json`)
3. The folder name becomes the category in the sidebar
4. You can nest folders for deeper hierarchies

**Important**:
- Pages and navigation are automatically generated on next build
- Do NOT create individual .astro page files
- The system recursively scans all folders in `src/data/menus/`

## Styling

Terminal-style theme with:
- Background: Black (#000)
- Text: Light gray (#ddd)
- Accent: Neon green (#08CB00 - CSS var `--accent`)
- Font: Monaco, Courier New (monospace)
- Global styles in `src/styles/global.css`

## Mobile Responsive

The site is fully responsive with mobile-first considerations:
- **Desktop**: Sidebar always visible on the left (280px fixed width)
- **Mobile** (< 768px):
  - Hamburger menu button (top-left, green accent color)
  - Sidebar hidden by default (off-canvas at left: -280px)
  - Click hamburger to open sidebar (slides in from left)
  - Dark overlay appears behind sidebar when open
  - Clicking overlay or any sidebar link closes the menu
  - Body scroll is locked when menu is open

Mobile menu implementation in both `index.astro` and `[...slug].astro` with:
- `.menu-toggle` button (hamburger icon with 3 bars)
- `.sidebar-overlay` for backdrop
- `.sidebar.mobile-open` class triggers slide-in animation
- JavaScript handles toggle logic and cleanup
