import type { Lang } from "../i18n/translations";

export interface FaqItem {
  id: string;
  category?: "template" | "deepagents" | "logfire";
  question: Record<Lang, string>;
  answer: Record<Lang, string>;
}

export const faqItems: FaqItem[] = [
  {
    id: "what-is",
    category: "template",
    question: {
      en: "What is the Full-Stack AI Agent Template?",
    },
    answer: {
      en: "An open-source project generator that creates production-ready AI/LLM applications with a FastAPI backend and Next.js frontend. One CLI command or the web configurator generates a complete project with your choice of 5 AI frameworks, 3 databases, 4 vector stores, and 75+ configuration options. The project has 1,730+ GitHub stars and 830K+ downloads.",
    },
  },
  {
    id: "which-framework",
    category: "template",
    question: {
      en: "Which AI framework should I choose?",
    },
    answer: {
      en: "The template supports 5 AI frameworks. Choose Pydantic AI for type-safe, production-grade agents with Logfire observability. Pick LangChain for its 700+ integrations. Use LangGraph for complex multi-step workflows with state management. Try CrewAI for multi-agent collaboration. Select DeepAgents for autonomous agents with planning and human-in-the-loop approval.",
    },
  },
  {
    id: "switch-framework",
    category: "template",
    question: {
      en: "Can I switch AI frameworks after generating a project?",
    },
    answer: {
      en: "Yes. Regenerate the project with a different --ai-framework flag. Your custom code outside the generated agent module is preserved if you use version control. The web configurator also lets you export your configuration as JSON and re-import it later. The agent module is isolated to ~150 lines, so switching frameworks requires no changes to your routes, auth, or frontend code.",
    },
  },
  {
    id: "is-free",
    category: "template",
    question: {
      en: "Is the template free to use?",
    },
    answer: {
      en: "Yes, completely free. The template is MIT licensed — use it for personal and commercial projects without restrictions. No premium tiers, no usage limits, no sign-up required. With 1,730+ GitHub stars and an active community, it is one of the most popular open-source AI app generators available.",
    },
  },
  {
    id: "database-choice",
    category: "template",
    question: {
      en: "Which database should I use?",
    },
    answer: {
      en: "PostgreSQL is recommended for production — it supports the admin panel, conversation persistence, and full SQLAlchemy/SQLModel ORM features. Use MongoDB for document-oriented workloads. SQLite is great for development and small deployments with zero configuration. Choose 'None' for stateless API-only services. The template also supports 4 vector stores (Qdrant, ChromaDB, Pinecone, pgvector) for RAG workflows.",
    },
  },
  {
    id: "websocket-streaming",
    category: "template",
    question: {
      en: "How does WebSocket streaming work?",
    },
    answer: {
      en: "The template includes a pre-built WebSocket endpoint that streams AI agent responses token-by-token to the frontend. It supports authenticated connections, tool call visualization, and automatic conversation persistence. The Next.js frontend includes a chat interface that renders streamed responses in real-time with Markdown support. All 5 AI frameworks use the same WebSocket contract, so switching frameworks requires zero frontend changes.",
    },
  },
  {
    id: "configurator-how",
    category: "template",
    question: {
      en: "How does the web configurator work?",
    },
    answer: {
      en: "The configurator is a 9-step wizard that runs entirely in your browser — no server required. It uses Nunjucks (a Jinja2-compatible JavaScript engine) to render 246 project templates client-side, then packages them into a ZIP with JSZip. The entire process takes 1-2 seconds and produces a project with 50-80 files depending on your selections. You can also export your configuration as a CLI command or JSON file.",
    },
  },
  {
    id: "deploy-production",
    category: "template",
    question: {
      en: "How do I deploy to production?",
    },
    answer: {
      en: "The template includes production Docker Compose files with health checks and restart policies. Copy .env.example to .env.prod, configure your credentials and database URL, then run: docker compose -f docker-compose.prod.yml up -d --build. Optional Traefik or Nginx reverse proxy handles automatic TLS certificates. The setup has been battle-tested across 30+ production deployments.",
    },
  },
  {
    id: "python-versions",
    category: "template",
    question: {
      en: "What Python versions are supported?",
    },
    answer: {
      en: "Python 3.11, 3.12, and 3.13. You select the version during project generation. All 5 AI frameworks and their dependencies are tested against each supported version in CI. The generated project includes a CI/CD pipeline (GitHub Actions) that runs tests on your chosen Python version automatically.",
    },
  },
  {
    id: "modify-generated",
    category: "template",
    question: {
      en: "Can I modify the generated project?",
    },
    answer: {
      en: "Absolutely. The generated project is regular Python and TypeScript code — no lock-in, no proprietary runtime. It includes CLAUDE.md and AGENTS.md files so AI coding assistants like Claude Code, Cursor, or Copilot understand the project structure from day one. The codebase uses standard patterns (SQLAlchemy models, FastAPI routers, React components) that any Python or TypeScript developer can extend immediately.",
    },
  },
  {
    id: "observability",
    category: "template",
    question: {
      en: "What observability tools are included?",
    },
    answer: {
      en: "Three options: Logfire (by Pydantic) auto-instruments FastAPI, database queries, Redis, Celery, and HTTPX calls — ideal for Pydantic AI agents with full trace visibility. Sentry provides error tracking and performance monitoring. Prometheus collects metrics for Grafana dashboards. Enable any combination during generation. Each option adds fewer than 20 lines to your codebase thanks to auto-instrumentation.",
    },
  },
  {
    id: "llm-providers",
    category: "template",
    question: {
      en: "Can I use multiple LLM providers?",
    },
    answer: {
      en: "The template configures one primary provider (OpenAI, Anthropic, or OpenRouter). With OpenRouter you get access to 200+ models from multiple providers through a single API key. You can also add additional providers manually after generation — the generated code is standard Python with no vendor lock-in. Provider configuration is centralized in a single settings file, so adding a new provider takes under 5 lines of code.",
    },
  },

  // ── DeepAgents FAQ ─────────────────────────────────────────
  {
    id: "da-what-is",
    category: "deepagents",
    question: {
      en: "What is pydantic-deep?",
    },
    answer: {
      en: "A Python framework for building autonomous AI agents inspired by Claude Code's architecture. It implements the deep agent pattern — agents that can plan, read/write files, delegate to subagents, and maintain persistent memory across sessions. Built on Pydantic AI, it provides type-safe tool definitions, structured outputs, and Logfire observability out of the box.",
    },
  },
  {
    id: "da-vs-langchain",
    category: "deepagents",
    question: {
      en: "How does it differ from LangChain or CrewAI?",
    },
    answer: {
      en: "DeepAgents is type-safe by default (Pydantic models, not dicts), modular (compose tools, not chains), and observable (Logfire integration). It focuses on the deep agent pattern — long-running agents that plan and execute autonomously — rather than simple chain-of-thought or multi-agent chat. A comparable LangChain agent typically requires 3-5x more boilerplate code for the same functionality.",
    },
  },
  {
    id: "da-providers",
    category: "deepagents",
    question: {
      en: "Which LLM providers are supported?",
    },
    answer: {
      en: "Any provider supported by Pydantic AI — OpenAI, Anthropic, Google Gemini, Groq, Mistral, and any OpenAI-compatible API (like Ollama for local models). Swap providers with one line of configuration. That means 6+ cloud providers and unlimited local models via Ollama, all with the same agent code and zero changes to your tool definitions.",
    },
  },
  {
    id: "da-custom-tools",
    category: "deepagents",
    question: {
      en: "Can I use my own tools?",
    },
    answer: {
      en: "Yes. Define tools using the @tool decorator from Pydantic AI. Tools are type-checked at runtime, support async execution, and integrate with the human-in-the-loop permission system. You can also use pre-built toolsets (filesystem, database, console) from companion libraries. Each tool is a plain Python function — no special SDK or wrapper needed beyond the decorator.",
    },
  },
  {
    id: "da-production",
    category: "deepagents",
    question: {
      en: "Is it production-ready?",
    },
    answer: {
      en: "Yes. DeepAgents powers 30+ production deployments at Vstorm. It includes structured logging via Logfire, automatic error recovery with configurable retry policies, and token usage tracking per agent run. The framework has been battle-tested in real-world AI agent applications handling thousands of autonomous tasks.",
    },
  },

  // ── Logfire FAQ ────────────────────────────────────────────
  {
    id: "lf-what-is",
    category: "logfire",
    question: {
      en: "What is Logfire Assistant?",
    },
    answer: {
      en: "A Chrome extension with a FastAPI backend that adds an AI-powered sidebar to the Pydantic Logfire dashboard. Ask questions about your traces in natural language, get SQL queries generated automatically, and see results as tables or charts — all without leaving your browser. It turns the Logfire SQL API into a conversational interface, eliminating the need to write raw trace queries manually.",
    },
  },
  {
    id: "lf-logfire-account",
    category: "logfire",
    question: {
      en: "Do I need a Logfire account?",
    },
    answer: {
      en: "Yes. Logfire Assistant queries your Logfire data via the Logfire API. You need a Logfire account with at least one project that has trace data. The assistant uses your Logfire read token to access your data securely. Logfire offers a generous free tier, so you can start using the assistant at no cost with up to 50M spans per month.",
    },
  },
  {
    id: "lf-llm-providers",
    category: "logfire",
    question: {
      en: "Which LLM providers work?",
    },
    answer: {
      en: "OpenAI, Anthropic, Google Gemini, and any OpenAI-compatible API. Configure your preferred provider in the backend settings. The AI generates Logfire-specific SQL queries optimized for the traces schema, including span attributes, duration metrics, and exception fields. The system prompt includes the full Logfire schema so the LLM produces accurate queries on the first attempt.",
    },
  },
  {
    id: "lf-custom-prompts",
    category: "logfire",
    question: {
      en: "Can I create custom prompts?",
    },
    answer: {
      en: "Yes. Create reusable prompt templates with slash commands like /errors, /costs, or /slow. Templates can include variables (e.g., date ranges, service names) and are saved per-project in PostgreSQL. Share them across your team for consistent debugging workflows. This turns common observability questions into one-click actions.",
    },
  },
  {
    id: "lf-data-storage",
    category: "logfire",
    question: {
      en: "Is my data stored?",
    },
    answer: {
      en: "Conversations are stored in your own PostgreSQL database that you host. No data is sent to third parties beyond the LLM API calls. The Chrome extension communicates only with your self-hosted FastAPI backend. Your Logfire read token never leaves your server — the extension sends natural language queries, and the backend handles all API communication.",
    },
  },
];
