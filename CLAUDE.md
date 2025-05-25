# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ball is Wine is a creative writing project combining wine tasting with basketball watching. Each month, the author watches basketball games, drinks a bottle of wine, and writes about both experiences. The blog is organized chronologically with entries containing two parts: basketball reflections and wine tasting notes.

The project includes a completed "cellar" feature that catalogs wines by producer with geographic visualization, detailed vintage information, and cross-linking with blog posts.

## Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Content**: MDX for enhanced markdown
- **Styling**: TailwindCSS
- **Node.js**: v22

## Project Structure

### Blog Content

- `/src/content/posts/`: Chronological blog entries with date-based subdirectories:
  - `index.md`: Entry metadata
  - `intro.md`: Entry introduction
- `/src/content/thoughts/`: Legacy content structure (being phased out)

### Cellar Content

- `/src/content/makers/`: Wine producer profiles with location data
- `/src/content/vintages/`: Specific wine vintages with tasting notes and images
- `/src/content/wines.json`: Central wine catalog linking producers to wines

### Application Structure

- `/src/pages/`: Route definitions including cellar navigation
- `/src/components/`: Reusable UI components including tabbed interfaces
- `/src/layouts/`: Page layout templates (shell.astro, cellar-shell.astro)
- `/src/styles/`: Global styling and component-specific CSS

## Common Commands

```bash
# Install dependencies
npm install

# Development
npm run dev          # Start dev server at localhost:4321

# Type checking
npm run typewatch    # Watch for type errors
npm run check        # Run type check, format check, and lint

# Formatting & Linting
npm run fmt          # Format code with Prettier
npm run fmt:check    # Check formatting
npm run lint         # Run ESLint

# Building
npm run build        # Build site to ./dist/
npm run preview      # Preview built site locally

# Other
npm run cf:wip       # Commit with "[CF-Pages-Skip] WIP" and push
```

## Content Structure

Content is organized in a specific way:

- Each blog entry has a date-based ID (YYYY-MM-DD)
- The `/content/days/` directory contains references to corresponding thought content
- Actual content is stored in `/content/thoughts/{date}/` with separate files for:
  - `ball.md`: Basketball content
  - `wine.mdx`: Wine content with imported bottle image

## Cellar Features

The cellar section provides a comprehensive wine catalog with:

### Navigation Structure

- `/cellar/` - Landing page with wine/winemaker navigation
- `/cellar/wines/` - Visual wine explorer with bottle grid and filtering
- `/cellar/wines/[id]` - Individual wine pages with vintage tabs
- `/cellar/winemakers/` - Producer list with interactive map view
- `/cellar/winemakers/[id]` - Producer detail pages

### Key Features

- **Visual wine catalog** - Color-coded bottle representations
- **Geographic visualization** - Interactive Leaflet map with producer clustering
- **Tabbed interfaces** - Multiple vintages and list/map toggle views
- **Cross-linking** - Blog posts link to wine details and vice versa
- **Responsive design** - Adaptive grid layouts

### Data Schema

```typescript
// Makers Collection (/src/content/makers/)
interface Maker {
  coordinates: [number, number]; // [latitude, longitude]
  location: string;
  name: string;
  website?: string;
}

// Wines Collection (/src/content/wines.json)
interface Wine {
  hue: string; // Color for UI visualization
  id: string; // Wine identifier
  maker: string; // Reference to maker ID
  name: string;
}

// Vintages Collection (/src/content/vintages/)
interface Vintage {
  cepage: string; // Grape varieties
  dateTried: string; // Format: MM/DD/YYYY
  wine: string; // Reference to wine ID
}

// Posts Collection (/src/content/posts/)
interface Post {
  vintage?: string; // Reference to vintage ID
}
```

### Data Relationships

`Maker (1) → Wine (many) → Vintage (many) → Post (1:1)`

## Styling Guidelines

- Prefer Tailwind v4 directives via class attribute over style tags when styling; style tags are still acceptable when styling requires complex selectors

## Code Guidelines

- MUST follow style and linting guidelines per eslint.config.js, tsconfig.json, and .prettierrc
