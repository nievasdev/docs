# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a technical documentation system built with Astro 5. It uses a Markdown-driven architecture where documentation content is written in Markdown files with frontmatter, organized in folders, and pages are generated dynamically at build time.

## Commands

```bash
# Development
npm run dev           # Start dev server (typically http://localhost:4321)
npm run build         # Build for production
npm run preview       # Preview production build locally
npm run lint          # Run Astro type checking
npm test              # Run test suite

# Package management
npm install           # Install dependencies
```

## Testing

The project includes a test suite in `tests/`:

**Test Suites:**
1. **formatFolderName** (8 tests) - Validates folder name formatting logic
2. **folderStructure** (10 tests) - Verifies directory structure and file existence
3. **jsonContent** (8 tests) - Validates file structure (legacy from JSON era, may need updates)

**Run tests:**
```bash
npm test              # Run all test suites
bash tests/runAll.sh  # Direct execution
```

**Total: 26 tests** covering:
- Folder naming conventions (`_` and `-` to spaces, capitalization)
- Multi-level folder hierarchy support
- File structure and validity

See `tests/README.md` for detailed documentation.

**Note**: The test suite was originally designed for the JSON-based architecture. Some tests may need updates to align with the current Markdown-based implementation.

## Architecture

### Markdown-Driven Content System

The entire documentation is driven by Markdown files in `src/data/menus/`. The system supports hierarchical organization through folders and subfolders.

**Key principle**: Pages are NOT created as individual .astro files. Instead:
1. Content is written in Markdown files with frontmatter, organized in folders/subfolders
2. `src/pages/[...slug].astro` dynamically generates static pages at build time via `getStaticPaths()`
3. The Sidebar component recursively reads all folders and Markdown files to build the navigation menu
4. `src/utils/menuLoader.ts` provides utilities to recursively load menu structures, process frontmatter with `gray-matter`, and convert Markdown to HTML with `marked`

### Folder Structure

Documentation is organized in a hierarchical folder structure with Markdown files. The system supports unlimited nesting levels:

```
src/data/menus/
  backend/                          # Level 1: Category
    Node/                           # Level 2: Topic
      index.md                      # Optional: Category/topic landing page
      Fundamentos/                  # Level 3: Subtopic
        index.md                    # Optional: Section landing page
        Introduccion.md             # Individual page
        NPM-y-Package-json.md       # Individual page
  academic/                         # Level 1: Category
    index.md                        # Optional: Category landing page
    Logica_y_Matematica_Discreta/   # Level 2: Topic
      Logica-Proposicional.md       # Individual page
  PatronesDiseno/                   # Level 1: Top-level topic
    Creacionales/                   # Level 2: Subtopic
      Singleton.md                  # Individual page
```

**Folder naming:**
- Use underscores (`_`) or hyphens (`-`) instead of spaces in folder names
- Names are automatically formatted: `Logica_y_Matematica_Discreta` displays as "Logica Y Matematica Discreta"
- Examples: `machine_learning`, `design-patterns`, `data_structures`

**index.md files:**
- Create `index.md` in any folder to provide a landing page for that category/section
- `index.md` makes the folder name itself clickable in the sidebar
- Without `index.md`, the folder name is just a collapsible header

**Formatting logic** (src/utils/menuLoader.ts:27-33):
- Folder names are processed by `formatFolderName()` function
- Replaces `_` and `-` with spaces
- Capitalizes each word

### Markdown File Structure

Each Markdown file uses frontmatter for metadata and standard Markdown for content:

```markdown
---
title: Page Title
---

## Heading

Content goes here in standard Markdown format.

### Subheading

- List item 1
- List item 2

\`\`\`javascript
// Code blocks
const example = 'code';
console.log(example);
\`\`\`

> **💡 Callouts**
>
> Use blockquotes for callouts and highlighted information.
```

**Frontmatter fields:**
- `title` (required): Page title shown in sidebar and as page heading
- Additional custom fields can be added as needed

**Markdown features:**
- Standard Markdown syntax (processed by `marked` library)
- Code blocks with syntax highlighting
- Lists (ordered and unordered)
- Blockquotes for callouts
- Inline HTML is supported
- Tables, links, images, etc.

### Component Architecture

- **Sidebar.astro** (src/components/Sidebar.astro): Auto-discovers all Markdown files recursively in `src/data/menus/`, builds hierarchical collapsible menu, handles active state and font size controls
- **ContentRenderer.astro** (src/components/ContentRenderer.astro): Simple component that renders HTML content converted from Markdown using `set:html`
- **[...slug].astro** (src/pages/[...slug].astro): Dynamic route handler that generates all documentation pages at build time via `getStaticPaths()`, uses `extractAllPaths()` from menuLoader
- **Layout.astro** (src/layouts/Layout.astro): Base layout wrapper with terminal sound effects
- **menuLoader.ts** (src/utils/menuLoader.ts): Core utility that recursively scans folders, processes Markdown with frontmatter, and builds menu structure

### Static Site Generation

- Build output: Static HTML files (configured in astro.config.mjs)
- All routes are generated at build time from Markdown files
- No server-side rendering or API routes
- Optimized with compression (gzip and brotli), minification, and inlined stylesheets

## Adding New Documentation

To add new documentation:

### Option 1: Add a page to existing category
1. Navigate to the appropriate folder in `src/data/menus/`
2. Create a new `.md` file (e.g., `New-Topic.md`)
3. Add frontmatter with `title` field and write content in Markdown
4. File appears automatically in sidebar on next build

### Option 2: Create new category/topic
1. Create a new folder in `src/data/menus/` (e.g., `src/data/menus/machine_learning/`)
2. Optionally create `index.md` for a landing page
3. Add Markdown files for individual pages
4. Folder name becomes a collapsible section in sidebar

### Option 3: Deep hierarchies
1. Create nested folders as needed (unlimited depth supported)
2. Each folder can have an optional `index.md` for that level
3. Add Markdown files at any level of nesting
4. Navigation structure mirrors folder structure

**Important**:
- Pages and navigation are automatically generated on next build
- Do NOT create individual .astro page files
- The system recursively scans all folders and `.md` files in `src/data/menus/`
- Folder and file names are auto-formatted for display (underscores/hyphens → spaces, capitalized)

## Styling

Terminal-style theme with:
- Background: Black (#000)
- Text: Light gray (#ddd)
- Accent: Neon green (#08CB00 - CSS var `--accent`)
- Font: Monaco, Courier New (monospace)
- Global styles in `src/styles/global.css`

## Sound Effects

The site includes terminal-style beep sounds for navigation:
- **Implementation**: `playTerminalSound()` function in `src/layouts/Layout.astro`
- **Technology**: Web Audio API (no audio files needed)
- **Sound profile**: Two-tone beep (2000Hz + 1400Hz sine waves)
- **Triggers**:
  - Clicking sidebar links
  - Expanding/collapsing menu sections
  - Clicking breadcrumb links
  - Opening/closing mobile hamburger menu
  - Clicking overlay to close menu
- All onclick handlers call `playTerminalSound()` inline

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
