# AGENTS.md

## Project Overview

Static website for **oss.vstorm.co** — Vstorm's open-source portfolio and technical blog. Built with Astro 5 + React 19 + Tailwind CSS 4. Deployed on Vercel.

## Commands

```bash
bun run dev          # Dev server (localhost:4321)
bun run build        # Production build (must pass with 0 errors)
bun run preview      # Preview production build
```

**Always run `bun run build` after making changes** to verify 0 errors and correct page count (85 pages).

## Architecture

- **Astro** for static site generation with file-based routing
- **React** islands for interactive components (configurator wizard)
- **Tailwind CSS 4** with CSS custom properties for theming (dark/light)
- **MDX** for blog posts with Expressive Code syntax highlighting
- **i18n** via central `src/i18n/translations.ts` — 344 keys × 4 languages (en, pl, de, es)

### Routing Pattern

- `/` — English (default lang)
- `/[lang]/` — Other languages (pl, de, es)
- Product pages: `/[product-slug]/` and `/[lang]/[product-slug]/`
- Blog: `/blog/[slug]/` and `/[lang]/blog/[slug]/`

### Component Conventions

- Props: `{ t: typeof translations.en }` for translated components
- Scroll animations: `reveal` class + IntersectionObserver in Layout
- Hover effects: `glow-card` class
- CSS namespace prefixes to avoid collisions: `lf-` (Logfire), `da-` (DeepAgents)

### Translation Keys

All translation keys live in `src/i18n/translations.ts`. When adding new keys:

1. Add to ALL 4 language blocks (en, pl, de, es)
2. Keep the same key count across all languages
3. Verify with build (type errors if keys are missing)

### Blog Posts

Blog content is in `src/data/blog/{lang}/{slug}.mdx`. Posts use a `translationKey` frontmatter field to link translations across languages.

### FAQ Data

FAQ items in `src/data/faq.ts` have a `category` field: `"template"`, `"deepagents"`, or `"logfire"`. The `FaqPreview` component accepts an optional `category` prop to filter by product.

### Comparison Data

Feature comparison tables are generated from `src/data/comparisons.ts`. Functions: `getTemplateComparison()`, `getDeepagentsComparison()`, `getLogfireComparison()`.

### Configurator

Client-side template rendering using Nunjucks + JSZip. Templates are bundled at build time via `scripts/bundle-templates.ts` into `public/templates.json`.

## Key Files

| File                           | Purpose                                                    |
| ------------------------------ | ---------------------------------------------------------- |
| `src/i18n/translations.ts`     | All translation strings (344 keys × 4 langs)               |
| `src/layouts/Layout.astro`     | Base layout (meta, JSON-LD, breadcrumbs, skip-to-content)  |
| `src/layouts/BlogLayout.astro` | Blog post layout (BlogPosting schema, reading time)        |
| `src/data/projects.ts`         | Project catalog (names, slugs, GitHub repos, descriptions) |
| `src/data/faq.ts`              | FAQ items with categories                                  |
| `src/data/comparisons.ts`      | Feature comparison data per product                        |
| `src/components/Navbar.astro`  | Site-wide navigation                                       |
| `astro.config.mjs`             | Astro configuration                                        |
| `vercel.json`                  | Vercel redirects                                           |

## Style Guide

- Use existing CSS variables from `src/styles/global.css` (e.g., `text-accent`, `bg-surface`, `border-border`)
- Prefix component-specific CSS classes to avoid collisions
- Use `reveal` class for scroll-triggered animations
- Keep components in their product-specific folders (`deepagents/`, `logfire/`, `landing/`)
- Shared components go in `components/shared/`
