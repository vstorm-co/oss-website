import type { APIRoute } from "astro";
import { projects, categories } from "../data/projects";

export const GET: APIRoute = ({ site }) => {
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

  const body = `# Vstorm OSS — Complete Reference

> ${siteUrl}

## What is Vstorm OSS?

Vstorm OSS is a collection of 13 open-source projects for building production AI agent applications in Python. The projects span four categories: project templates, agent frameworks, specialized toolsets, and community resources.

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

## Links

- Website: ${siteUrl}/
- GitHub Org: https://github.com/vstorm-co
- Vstorm: https://vstorm.co/
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
