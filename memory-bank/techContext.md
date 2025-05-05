# Technical Context

## Technology Stack

Ball is Wine is built with the following core technologies:

### Frontend Framework

- **[Astro](https://astro.build/)** (v5.7.10): A modern static site generator with a focus on performance
  - **[@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)** (v4.2.6): Enables MDX support for enhanced markdown capabilities
  - **[@astrojs/check](https://docs.astro.build/en/guides/typescript/)** (v0.9.4): TypeScript type checking for Astro components

### Styling

- **[Tailwind CSS](https://tailwindcss.com/)** (v4.1.5): Utility-first CSS framework
  - **[@tailwindcss/vite](https://tailwindcss.com/docs/guides/vite)** (v4.1.5): Tailwind CSS integration with Vite

### Typography

- **[@fontsource-variable/noto-emoji](https://github.com/fontsource/fontsource)** (v5.2.5): Variable font version of Noto Emoji
- **[@fontsource/geist-mono](https://github.com/fontsource/fontsource)** (v5.2.6): Geist Mono font
- **[@fontsource/geist-sans](https://github.com/fontsource/fontsource)** (v5.2.5): Geist Sans font
- **[@fontsource/pacifico](https://github.com/fontsource/fontsource)** (v5.2.5): Pacifico font

### Utilities

- **[TypeScript](https://www.typescriptlang.org/)** (v5.8.3): Typed JavaScript
- **[clsx](https://github.com/lukeed/clsx)** (v2.1.1): Utility for constructing className strings conditionally
- **[lite-youtube-embed](https://github.com/paulirish/lite-youtube-embed)** (v0.3.3): Lightweight YouTube embed component

### Development Tools

- **[ESLint](https://eslint.org/)** (v9.26.0): JavaScript linting
  - Multiple ESLint plugins for comprehensive linting
- **[Prettier](https://prettier.io/)** (v3.5.3): Code formatting
  - **[prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro)** (v0.14.1): Prettier support for Astro files
  - **[prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)** (v0.6.11): Prettier plugin for Tailwind CSS class sorting
- **[concurrently](https://github.com/open-cli-tools/concurrently)** (v9.1.2): Run multiple commands concurrently
- **[npm-check-updates](https://github.com/raineorshine/npm-check-updates)** (v18.0.1): Check for package updates

## Development Environment

### Node.js Requirements

- **Node.js**: v22.x (strict requirement via `engines` field in package.json)

### Development Workflow

The project uses npm scripts for common development tasks:

- **`npm run dev`**: Start development server with concurrent TypeScript checking
- **`npm run build`**: Build the production site with TypeScript checking
- **`npm run check`**: Run TypeScript checking, format checking, and linting
- **`npm run fmt`**: Format code with Prettier
- **`npm run lint`**: Lint code with ESLint
- **`npm run preview`**: Preview the production build locally

### Content Management

Content is managed through Astro's content collections system:

1. **Content Creation**: Add new markdown/MDX files to the appropriate collections
2. **Type Safety**: TypeScript ensures content adheres to defined schemas
3. **Build Process**: Content is processed during the build to generate static pages

## Technical Constraints

### Static Site Generation

The site is built as a static site, which means:

- No server-side processing at runtime
- Content must be available at build time
- Dynamic features require client-side JavaScript or external services

### Content Structure

The content structure follows specific patterns:

- Date-based organization (YYYY-MM-DD format)
- Separation of basketball and wine content
- Co-location of content and related assets

### Browser Compatibility

The site targets modern browsers with:

- ES6+ JavaScript features
- Modern CSS capabilities (Flexbox, Grid, etc.)
- Responsive design for various screen sizes

## Deployment

While specific deployment details aren't explicitly documented in the codebase, the project is set up for static site deployment to any platform that supports static sites, such as:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

## Development Patterns

### Component Development

Components follow these patterns:

1. **Astro Components**: `.astro` files with HTML-like syntax and component script sections
2. **Props Interface**: TypeScript interfaces define component props
3. **Tailwind Styling**: Utility classes for styling directly in components

### Content Querying

Content is accessed through Astro's content collections API:

```typescript
import { getCollection } from "astro:content";

// Get all entries from the "days" collection
const days = await getCollection("days");

// Sort entries by date (descending)
days.sort((a, b) => b.id.localeCompare(a.id));
```

### Utility Functions

Utility functions are centralized in `utils.ts` for reuse across the project:

```typescript
// Example: Format a date string (YYYY-MM-DD) to a readable format
function formatYYYYMMDD(dateString: string): string {
  // Implementation
}
```
