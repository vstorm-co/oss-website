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

Vstorm OSS is a collection of 20 open-source repositories (1,270+ GitHub stars, 285K+ PyPI downloads) for building production AI agent applications in Python. The projects span four categories: project templates, agent frameworks, specialized toolsets, and community resources.

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

## Blog Posts

- [Choosing an AI Framework](${siteUrl}/blog/choosing-ai-framework/): How to pick the right AI agent framework for your Python project
- [FastAPI + Next.js AI Template Guide](${siteUrl}/blog/fastapi-nextjs-ai-template-guide/): Step-by-step guide to the Full-Stack AI Agent Template
- [Pydantic AI vs LangChain](${siteUrl}/blog/pydantic-ai-vs-langchain/): Feature comparison of the two leading Python AI frameworks
- [WebSocket Streaming for AI Agents](${siteUrl}/blog/websocket-streaming-ai-agents/): Real-time token streaming with FastAPI WebSockets
- [AI Agent Memory Management](${siteUrl}/blog/ai-agent-memory-management/): How to fix context loss after 50 messages with summarization and persistent memory
- [Task Planning for AI Agents](${siteUrl}/blog/task-planning-ai-agents/): Structured todo lists with subtasks, dependencies, and cycle detection for agents
- [Ship a Production AI App in 5 Minutes](${siteUrl}/blog/ship-production-ai-app-fast/): FastAPI + Next.js template with 20+ integrations via one CLI command
- [AI Agent Observability](${siteUrl}/blog/ai-agent-observability/): Why standard observability fails for agents and how Logfire Assistant fixes it
- [AI Agent Selective Memory](${siteUrl}/blog/ai-agent-selective-memory/): File-based persistent memory that stores less and remembers better
- [Predictive AI Docker Sandbox](${siteUrl}/blog/predictive-ai-docker-sandbox/): Give your agent a Docker lab to run ML models and data pipelines
- [Hashline File Editing](${siteUrl}/blog/hashline-file-editing/): How 2-character content hashes fixed AI file editing accuracy

All blog posts available in 4 languages: English (default), Polish (/pl/), German (/de/), Spanish (/es/).

---

## Other Pages

- [Home](${siteUrl}/): OSS portfolio landing, all projects grouped by category
- [Blog](${siteUrl}/blog/): Blog listing with all articles
- [FAQ](${siteUrl}/faq/): Common questions about frameworks and configuration
- [About](${siteUrl}/about/): About Vstorm OSS - team, philosophy, and company info

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
