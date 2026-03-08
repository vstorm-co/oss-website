import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { projects, categories } from "../data/projects";
import { comparisonPages } from "../data/compare-pages";

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site?.origin ?? "https://oss.vstorm.co";

  const projectSections = categories
    .map((cat) => {
      const catProjects = projects.filter((p) => p.category === cat.id);
      if (catProjects.length === 0) return "";

      const entries = catProjects
        .map((p) => {
          const status = p.status === "coming-soon" ? " [COMING SOON]" : "";
          const install = p.installCommand
            ? `\nInstall: \`${p.installCommand}\``
            : "";
          const github = p.github
            ? `\nGitHub: https://github.com/${p.github}`
            : "";
          const pypi = p.pypi
            ? `\nPyPI: https://pypi.org/project/${p.pypi}/`
            : "";
          const features =
            p.features.en.length > 0
              ? `\nFeatures: ${p.features.en.join(", ")}`
              : "";

          return `### ${p.name}${status}

${p.description.en}
${install}${github}${pypi}${features}
URL: ${siteUrl}/${p.slug}/`;
        })
        .join("\n\n");

      return `## ${cat.label.en}

${entries}`;
    })
    .filter(Boolean)
    .join("\n\n---\n\n");

  const posts = (
    await getCollection("blog", ({ data }) => data.lang === "en" && !data.draft)
  ).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const blogList = posts
    .map((post) => {
      const slug = post.id.split("/").slice(1).join("/");
      return `- [${post.data.title}](${siteUrl}/blog/${slug}/): ${post.data.description}`;
    })
    .join("\n");

  const body = `# Vstorm OSS — Complete Reference

> ${siteUrl}

## What is Vstorm OSS?

Vstorm OSS is a collection of ${projects.length} open-source repositories (1,270+ GitHub stars, 285K+ PyPI downloads) for building production AI agent applications in Python. The projects span four categories: project templates, agent frameworks, specialized toolsets, and community resources.

All projects are MIT licensed and built by Vstorm (vstorm.co), an Applied Agentic AI Engineering Consultancy with 30+ production AI agent implementations.

---

${projectSections}

---

## Full-Stack AI Agent Template — Configurator

The web configurator at ${siteUrl}/full-stack-ai-agent-template/configurator/ is a 9-step wizard:

1. **Project Info** — Name, description, author, Python version
2. **Database** — PostgreSQL, MongoDB, SQLite, or none
3. **Authentication** — JWT, API keys, OAuth
4. **AI Agent** — Framework, LLM provider, streaming, persistence
5. **Infrastructure** — Background tasks, Redis, caching, observability
6. **Integrations** — WebSockets, file storage, webhooks, admin panel
7. **Dev Tools** — Docker, Kubernetes, CI/CD, testing
8. **Frontend** — Next.js with optional i18n
9. **Review** — Final config review, download ZIP or copy CLI command

The configurator runs entirely client-side. No server required.

---

## 3 Presets (Full-Stack Template)

### Minimal
API-only FastAPI project. No database, no auth, no Docker. For prototyping or microservices.

### Production
Full-stack with PostgreSQL, JWT auth, Redis caching, Sentry + Prometheus monitoring, Docker + Kubernetes, GitHub Actions CI/CD.

### AI Agent (Most Popular)
Pydantic AI with WebSocket streaming, conversation persistence, PostgreSQL, Redis, Next.js frontend, Docker, GitHub Actions.

---

## Product Landings

### Full-Stack AI Agent Template
${siteUrl}/full-stack-ai-agent-template/

Production-ready FastAPI + Next.js project template with 5 AI agent frameworks (Pydantic AI, LangChain, CrewAI, AutoGen, OpenAI Agents), 75+ configuration options, and a 9-step web configurator. Includes authentication, database setup, WebSocket streaming, Docker, CI/CD, and observability out of the box.

### Pydantic DeepAgents
${siteUrl}/pydantic-deepagents/

Modular AI agent framework inspired by Claude Code architecture. Built on Pydantic AI with 6 standalone PyPI packages: filesystem backend with hashline editing, task planning with dependencies, sub-agent delegation, context compression, lifecycle hooks, and multi-agent teams with shared state.

### Logfire Assistant
${siteUrl}/logfire-assistant/

Chrome extension + FastAPI backend for querying Pydantic Logfire data with natural language. Converts questions to SQL, generates live charts, provides span context analysis. Supports OpenAI, Anthropic, Google, and other LLM providers. Conversations stored locally in PostgreSQL.

---

## Blog Posts (${posts.length} articles)

${blogList}

All blog posts available in 4 languages: English (default), Polish (/pl/), German (/de/), Spanish (/es/).

---

## Site Features

- **Project grid** with category filtering and status badges
- **Interactive configurator** — 9-step React wizard for generating custom projects
- **Blog** with search, category filtering, reading time, related posts, share buttons
- **RSS feed** at ${siteUrl}/rss.xml
- **Comparison pages** — ${comparisonPages.length} side-by-side framework/tool comparisons with feature tables, code examples, and FAQ
- **FAQ** with collapsible Q&A organized by product category
- **Breadcrumbs** on subpages for navigation
- **Dynamic OG images** per blog post (SVG-based)
- **4-language i18n** — English, Polish, German, Spanish
- **Changelog** — latest releases timeline on homepage
- **Contributors** section with GitHub avatars
- **Back to top** button and sticky CTA bar on blog posts

---

## Comparisons (${comparisonPages.length} pages)

Side-by-side comparisons of AI agent frameworks, templates, and tools.
Compare index: ${siteUrl}/compare/

${comparisonPages.map((c) => `### ${c.product} vs ${c.competitor}
${siteUrl}/compare/${c.slug}/

${c.verdict.en}

Key differences: ${c.highlights.map((h) => h.title.en).join(", ")}
Features compared: ${c.tableRows.length}`).join("\n\n")}

---

## Other Pages

- [Home](${siteUrl}/): OSS portfolio landing with project grid, community recognition, changelog
- [Blog](${siteUrl}/blog/): Blog listing with search, category filtering, and pagination
- [Compare](${siteUrl}/compare/): Side-by-side framework and tool comparisons
- [FAQ](${siteUrl}/faq/): Common questions about frameworks and configuration
- [Changelog](${siteUrl}/changelog/): Release history across all projects
- [About](${siteUrl}/about/): About Vstorm OSS — team, philosophy, and company info
- [RSS](${siteUrl}/rss.xml): RSS feed for blog posts

---

## Links

- Website: ${siteUrl}/
- GitHub Org: https://github.com/vstorm-co
- Vstorm: https://vstorm.co/
- Short reference: ${siteUrl}/llms.txt
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
