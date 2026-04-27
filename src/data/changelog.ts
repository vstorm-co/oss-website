import type { Lang } from "../i18n/translations";

export interface ChangelogEntry {
  date: string;
  version: string;
  project: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  tag: "framework" | "template" | "tool" | "resource";
  breaking?: boolean;
}

export const changelog: ChangelogEntry[] = [
  // ── March 2026 ──────────────────────────────────────────
  {
    date: "2026-03-06",
    version: "v0.2.19",
    project: "pydantic-deepagents",
    title: {
      en: "Todo sync fix & Model object support",
    },
    description: {
      en: "Fixed deps.todos not synchronized with todo tools — create_todo_toolset() created isolated storage. Fixed Model objects (e.g. TestModel(), AnthropicModel()) being silently discarded for subagents.",
    },
    tag: "framework",
  },
  {
    date: "2026-03-06",
    version: "v0.0.8",
    project: "subagents-pydantic-ai",
    title: {
      en: "Model objects & ask_parent async fix",
    },
    description: {
      en: "Subagent configuration now accepts Model objects (not just strings). Fixed ask_parent tool broken in async mode — state injection and Future-based coordination replaced message bus Q&A.",
    },
    tag: "tool",
  },
  {
    date: "2026-03-05",
    version: "v0.2.1",
    project: "full-stack-ai-agent-template",
    title: {
      en: "LangSmith observability & CLI improvements",
    },
    description: {
      en: "LangSmith integration for LangChain, LangGraph and DeepAgents frameworks. CLI runs interactive wizard by default. Fixed unconditional logfire imports, frontend chat cleanup, and 3 missing framework choices.",
    },
    tag: "template",
  },

  // ── February 2026 ───────────────────────────────────────
  {
    date: "2026-02-27",
    version: "v0.2.0",
    project: "full-stack-ai-agent-template",
    title: {
      en: "Repository renamed to full-stack-ai-agent-template",
    },
    description: {
      en: "Repository renamed from full-stack-fastapi-nextjs-llm-template. Marked as GitHub Template — users can click 'Use this template' to create a new repo directly.",
    },
    tag: "template",
  },
  {
    date: "2026-02-27",
    version: "v0.2.18",
    project: "pydantic-deepagents",
    title: {
      en: "Custom commands, diff viewer & tool descriptions",
    },
    description: {
      en: "User-triggered slash commands from .md files (/commit, /pr, /review, /test). Colored unified diffs for file approvals. Tool guidance moved from system prompt to tool descriptions. Removed Textual TUI.",
    },
    tag: "framework",
  },
  {
    date: "2026-02-26",
    version: "v0.2.2",
    project: "pydantic-ai-middleware",
    title: {
      en: "Switched to pydantic-ai-slim dependency",
    },
    description: {
      en: "Replaced pydantic-ai dependency with pydantic-ai-slim to reduce dependency bloat and avoid pulling unnecessary model provider SDKs.",
    },
    tag: "tool",
  },
  {
    date: "2026-02-25",
    version: "v0.1.12",
    project: "pydantic-ai-backend",
    title: {
      en: "DaytonaSandbox — cloud sandbox backend",
    },
    description: {
      en: "New cloud sandbox powered by Daytona ephemeral sandboxes. Sub-90ms startup, no Docker daemon required. Native file APIs for efficient binary and large file handling.",
    },
    tag: "tool",
  },
  {
    date: "2026-02-25",
    version: "v0.0.4",
    project: "summarization-pydantic-ai",
    title: {
      en: "Compression callbacks, persistence & auto-detection",
    },
    description: {
      en: "on_before_compress and on_after_compress callbacks for history archival. Continuous message persistence via messages_path. Auto-detection of model context window from genai-prices. Manual compact() method for CLI commands.",
    },
    tag: "tool",
  },
  {
    date: "2026-02-20",
    version: "v0.1.9",
    project: "pydantic-ai-backend",
    title: {
      en: "Hashline edit format — +5 to +64pp accuracy",
    },
    description: {
      en: "Alternative to str_replace that tags each line with a 2-char content hash. Models reference lines by number:hash pairs, eliminating whitespace-matching errors and reducing output tokens. Based on Can Boluk's hashline research.",
    },
    tag: "tool",
  },
  {
    date: "2026-02-17",
    version: "v0.2.17",
    project: "pydantic-deepagents",
    title: {
      en: "Checkpointing, Teams, Hooks, Memory & Plan Mode",
    },
    description: {
      en: "Major release: checkpoint/rewind/fork sessions, multi-agent teams with shared TODOs, Claude Code-style hooks, persistent agent memory (MEMORY.md), context file discovery, eviction processor, output styles, and plan mode with planner subagent.",
    },
    tag: "framework",
  },
  {
    date: "2026-02-15",
    version: "v0.2.1",
    project: "pydantic-ai-middleware",
    title: {
      en: "Cost Tracking Middleware",
    },
    description: {
      en: "CostTrackingMiddleware for automatic token usage and USD cost monitoring. Budget limits with BudgetExceededError. Uses genai-prices library for cost calculation.",
    },
    tag: "tool",
  },
  {
    date: "2026-02-12",
    version: "v0.2.0",
    project: "pydantic-ai-middleware",
    title: {
      en: "Chains, Parallel, Guardrails & Permissions",
    },
    description: {
      en: "Major release: MiddlewareChain for composable pipelines, ParallelMiddleware with 4 aggregation strategies, AsyncGuardrailMiddleware with 3 timing modes, Permission Decision Protocol (ALLOW/DENY/ASK), context sharing between hooks, config loaders (JSON/YAML), and on_tool_error hook.",
    },
    tag: "tool",
    breaking: true,
  },
  {
    date: "2026-02-07",
    version: "v0.2.15",
    project: "pydantic-deepagents",
    title: {
      en: "Configurable retries & llms.txt support",
    },
    description: {
      en: "New retries parameter for create_deep_agent() (default: 3) — controls max retries for tool calls across all toolsets. Fixed write_file tool exceeding max retries of 1. Added llms.txt generation for documentation.",
    },
    tag: "framework",
  },
  {
    date: "2026-02-02",
    version: "v0.0.1",
    project: "database-pydantic-ai",
    title: {
      en: "SQL Toolset — Initial release",
    },
    description: {
      en: "SQLite and PostgreSQL backends with 5 tools: list_tables, get_schema, describe_table, explain_query, query. Read-only mode, multi-statement prevention, query timeout, and row limit enforcement. 100% test coverage.",
    },
    tag: "tool",
  },

  // ── January 2026 ────────────────────────────────────────
  {
    date: "2026-01-24",
    version: "v0.1.17",
    project: "full-stack-ai-agent-template",
    title: {
      en: "MkDocs documentation site",
    },
    description: {
      en: "Full documentation site with Material theme: installation guide, architecture overview with Mermaid diagrams, step-by-step guides, and configuration reference. Auto-deployed via GitHub Actions.",
    },
    tag: "template",
  },
  {
    date: "2026-01-21",
    version: "v0.2.14",
    project: "pydantic-deepagents",
    title: {
      en: "Modular extraction — external packages",
    },
    description: {
      en: "Extracted processors to summarization-pydantic-ai and subagents to subagents-pydantic-ai as standalone PyPI packages. Added dual-mode subagent execution (sync/async), auto mode, task management tools, and dynamic agent creation.",
    },
    tag: "framework",
    breaking: true,
  },
  {
    date: "2026-01-21",
    version: "v0.1.2",
    project: "pydantic-ai-backend",
    title: {
      en: "Fine-grained permission system",
    },
    description: {
      en: "Pattern-based access control with ALLOW/DENY/ASK actions. 4 presets: DEFAULT, PERMISSIVE, READONLY, STRICT. Glob pattern matching for file operations and shell execution. Async callback support for interactive prompts.",
    },
    tag: "tool",
  },
  {
    date: "2026-01-18",
    version: "v0.1.15",
    project: "full-stack-ai-agent-template",
    title: {
      en: "DeepAgents framework & Human-in-the-Loop",
    },
    description: {
      en: "DeepAgents as 5th AI framework with built-in file ops, code execution, and task management tools. Human-in-the-Loop tool approval workflow with frontend dialog for approve/edit/reject decisions. WebSocket protocol for interrupt handling.",
    },
    tag: "template",
  },
  {
    date: "2026-01-18",
    version: "v0.1.3",
    project: "pydantic-ai-todo",
    title: {
      en: "Todo IDs, subtasks, events & PostgreSQL",
    },
    description: {
      en: "Auto-generated hex IDs, atomic CRUD operations, async storage protocol. Task hierarchy with subtasks and dependency cycle detection. Event system with 5 event types. PostgreSQL backend with multi-tenancy.",
    },
    tag: "tool",
  },
  {
    date: "2026-01-17",
    version: "v0.1.0",
    project: "pydantic-ai-backend",
    title: {
      en: "Backend 0.1 — LocalBackend & Console Toolset",
    },
    description: {
      en: "Unified LocalBackend replacing FilesystemBackend and LocalSandbox. Console Toolset with 7 tools: ls, read_file, write_file, edit_file, glob, grep, execute. Write/execute approval flows and full MkDocs documentation.",
    },
    tag: "tool",
  },
  {
    date: "2026-01-15",
    version: "v0.0.1",
    project: "subagents-pydantic-ai",
    title: {
      en: "Subagents — Initial release",
    },
    description: {
      en: "Multi-agent delegation toolset for Pydantic AI. Dual-mode execution (sync/async) with auto-mode selection. Parent-child Q&A, soft/hard task cancellation, pluggable message bus, and dynamic agent registry. 100% test coverage.",
    },
    tag: "tool",
  },
  {
    date: "2026-01-06",
    version: "v0.1.13",
    project: "full-stack-ai-agent-template",
    title: {
      en: "Comprehensive configuration validation",
    },
    description: {
      en: "11 new validation rules preventing invalid option combinations (WebSocket auth, admin panel, conversation persistence, webhooks, background tasks). Dynamic integration prompts with context-aware options. 290+ new test lines.",
    },
    tag: "template",
  },
  {
    date: "2026-01-02",
    version: "v0.1.11",
    project: "full-stack-ai-agent-template",
    title: {
      en: "LangGraph ReAct Agent support",
    },
    description: {
      en: "LangGraph as 3rd AI framework with ReAct (Reasoning + Acting) agent pattern. Graph-based architecture with conditional edges, memory-based checkpointing, and full WebSocket streaming via astream().",
    },
    tag: "template",
  },

  // ── December 2025 ───────────────────────────────────────
  {
    date: "2025-12-28",
    version: "v0.0.1",
    project: "pydantic-ai-backend",
    title: {
      en: "Backend Toolset — Initial release",
    },
    description: {
      en: "Extracted from pydantic-deepagents. StateBackend, FilesystemBackend, CompositeBackend, DockerSandbox with SessionManager, 5 built-in runtimes. Ripgrep integration, PDF reading, and encoding detection.",
    },
    tag: "tool",
  },
  {
    date: "2025-12-27",
    version: "v0.1.10",
    project: "full-stack-ai-agent-template",
    title: {
      en: "Nginx reverse proxy support",
    },
    description: {
      en: "Nginx as alternative to Traefik with two modes: included in docker-compose or external config template. SSL/TLS configuration, security headers, WebSocket support, and Let's Encrypt ACME.",
    },
    tag: "template",
  },
  {
    date: "2025-12-26",
    version: "v0.1.9",
    project: "full-stack-ai-agent-template",
    title: {
      en: "SQLModel ORM support",
    },
    description: {
      en: "Optional SQLModel as alternative to SQLAlchemy for PostgreSQL and SQLite. Simplified syntax combining SQLAlchemy and Pydantic. Full Alembic and SQLAdmin compatibility maintained.",
    },
    tag: "template",
  },
  {
    date: "2025-12-22",
    version: "v0.1.6",
    project: "full-stack-ai-agent-template",
    title: {
      en: "Multi-LLM providers, CLI & presets",
    },
    description: {
      en: "OpenAI, Anthropic, and OpenRouter providers. Comprehensive CLI with 20+ flags. Configuration presets: production (Redis, Sentry, K8s) and ai-agent (WebSocket streaming, conversation persistence). Generator version metadata.",
    },
    tag: "template",
  },
  {
    date: "2024-12-29",
    version: "v0.1.0",
    project: "pydantic-ai-middleware",
    title: {
      en: "Middleware — Initial release",
    },
    description: {
      en: "AgentMiddleware base class with 6 lifecycle hooks: before_run, after_run, before_model_request, before_tool_call, after_tool_call, on_error. MiddlewareAgent wrapper, decorator-based creation, and custom exceptions. 100% test coverage.",
    },
    tag: "tool",
  },

  // ── January 2025 ────────────────────────────────────────
  {
    date: "2025-01-20",
    version: "v0.0.1",
    project: "summarization-pydantic-ai",
    title: {
      en: "Summarization — Initial release",
    },
    description: {
      en: "SummarizationProcessor with LLM-based intelligent summarization and SlidingWindowProcessor for zero-cost message trimming. Configurable triggers (message count, tokens, fraction), safe cutoff detection that preserves tool call pairs.",
    },
    tag: "tool",
  },
];
