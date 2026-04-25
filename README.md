# oss.vstorm.co

Open-source portfolio and technical blog for [Vstorm](https://vstorm.co) — an Applied Agentic AI Engineering Consultancy.

**Live:** [oss.vstorm.co](https://oss.vstorm.co)

## What's Inside

- **OSS Portfolio** — 13 open-source packages for the Pydantic AI ecosystem
- **3 Product Landings** — Full-Stack AI Agent Template, Pydantic DeepAgents, Logfire Assistant
- **Technical Blog** — MDX articles in 4 languages (EN, PL, DE, ES)
- **Web Configurator** — Visual 9-step wizard to configure and download AI app templates (client-side rendering with Nunjucks + JSZip)
- **FAQ** — Grouped by product with accordion UI
- **i18n** — 344 translation keys across 4 languages

## Tech Stack

| Layer           | Technology                                                                 |
| --------------- | -------------------------------------------------------------------------- |
| Framework       | [Astro](https://astro.build) 5.4 (static output)                           |
| UI              | [React](https://react.dev) 19 (interactive islands)                        |
| Styling         | [Tailwind CSS](https://tailwindcss.com) 4                                  |
| Blog            | MDX + [Expressive Code](https://expressive-code.com)                       |
| Template Engine | [Nunjucks](https://mozilla.github.io/nunjucks/) (client-side configurator) |
| ZIP Generation  | [JSZip](https://stuk.github.io/jszip/) (client-side)                       |
| Package Manager | [Bun](https://bun.sh)                                                      |
| Deployment      | [Vercel](https://vercel.com)                                               |
| Analytics       | Vercel Analytics + Speed Insights                                          |

## Getting Started

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

The dev server runs at `http://localhost:4321` by default.

## Project Structure

```
src/
├── components/          # Astro + React components
│   ├── deepagents/      # Pydantic DeepAgents landing
│   ├── landing/         # Full-Stack Template landing
│   ├── logfire/         # Logfire Assistant landing
│   ├── oss/             # OSS home (hero, project grid, footer)
│   ├── shared/          # Reusable (BeforeAfter, ComparisonTable, StarsBadge, FaqPreview)
│   ├── blog/            # Blog components (TOC, TranslationLinks)
│   └── configurator/    # React configurator wizard
├── data/
│   ├── blog/            # MDX blog posts (en/, pl/, de/, es/)
│   ├── projects.ts      # Project catalog
│   ├── faq.ts           # FAQ items with categories
│   └── comparisons.ts   # Feature comparison data
├── i18n/
│   └── translations.ts  # 344 keys × 4 languages
├── layouts/
│   ├── Layout.astro     # Base layout (SEO, JSON-LD, breadcrumbs)
│   └── BlogLayout.astro # Blog post layout (reading time, TOC)
├── pages/               # File-based routing
│   ├── index.astro      # OSS home (EN)
│   ├── [lang]/          # i18n variants (PL, DE, ES)
│   ├── blog/            # Blog listing + posts
│   ├── faq.astro        # Full FAQ page
│   ├── 404.astro        # Custom 404
│   └── [product]/       # Product landings + configurator
├── styles/
│   ├── global.css       # CSS variables, theme, animations
│   └── prose.css        # Blog typography
└── lib/                 # Utilities
public/
├── deepagents/          # DeepAgents screenshots
├── logfire/             # Logfire screenshots
├── logos/               # Framework logos
└── templates.json       # Configurator template bundle
```

## SEO & Structured Data

Every page includes:

- **BreadcrumbList** JSON-LD (auto-generated from URL path)
- **WebSite** schema with publisher info
- **SoftwareApplication** schema on product pages
- **BlogPosting** schema on blog posts with reading time
- **FAQPage** schema on the FAQ page
- Open Graph + Twitter Card meta tags
- Canonical URLs + hreflang alternates
- Sitemap (`sitemap-index.xml`)

## Build Output

85 static pages across 4 languages:

- 4 OSS home pages (EN + 3 langs)
- 12 product landing pages (3 products × 4 langs)
- 4 configurator pages
- 16 blog posts (4 articles × 4 langs)
- 4 blog listing pages
- 4 FAQ pages
- 40 project detail pages
- 1 custom 404 page

## License

Proprietary. Copyright Vstorm.
