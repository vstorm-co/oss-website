import type { Lang } from "../i18n/translations";

export type ProjectStatus = "released" | "coming-soon";

export interface ProjectCategory {
  id: string;
  label: Record<Lang, string>;
  order: number;
}

export interface ProjectQuickStart {
  code: string;
  highlightedHtml: string;
  filename: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: Record<Lang, string>;
  description: Record<Lang, string>;
  status: ProjectStatus;
  category: string;
  github?: string;
  pypi?: string;
  installCommand?: string;
  features: Record<Lang, string[]>;
  hasCustomLanding?: boolean;
  hasConfigurator?: boolean;
  longDescription?: Record<Lang, string>;
  quickStart?: ProjectQuickStart;
  useCases?: Record<Lang, { name: string; description: string }[]>;
  mermaidDiagram?: string;
}

export const categories: ProjectCategory[] = [
  {
    id: "template",
    label: {
      en: "Project Template",
    },
    order: 1,
  },
  {
    id: "framework",
    label: {
      en: "Agent Framework",
    },
    order: 2,
  },
  {
    id: "toolset",
    label: {
      en: "Agent Toolsets",
    },
    order: 3,
  },
  {
    id: "resource",
    label: {
      en: "Resources & Examples",
    },
    order: 4,
  },
];

export const projects: Project[] = [
  // ── Template ──────────────────────────────────────────────
  {
    slug: "full-stack-ai-agent-template",
    name: "Full-Stack AI Agent Template",
    tagline: {
      en: "Zero-to-production AI app in minutes",
    },
    description: {
      en: "Generate complete FastAPI + Next.js projects with 5 AI frameworks, 75+ configuration options, and production-grade infrastructure. CLI generator + web configurator.",
    },
    status: "released",
    category: "template",
    github: "vstorm-co/full-stack-ai-agent-template",
    pypi: "fastapi-fullstack",
    installCommand: "pip install fastapi-fullstack",
    features: {
      en: ["5 AI Frameworks", "75+ Config Options", "Web Configurator", "Docker + Kubernetes"],
    },
    hasCustomLanding: true,
    hasConfigurator: true,
  },

  // ── Framework ─────────────────────────────────────────────
  {
    slug: "pydantic-deepagents",
    name: "Pydantic DeepAgents",
    tagline: {
      en: "Autonomous AI agents that plan, code, and ship",
    },
    description: {
      en: "Production-grade Python framework implementing the deep agent pattern (Claude Code architecture) with planning, filesystem access, subagents, persistent memory, and unlimited context.",
    },
    status: "released",
    category: "framework",
    github: "vstorm-co/pydantic-deepagents",
    pypi: "pydantic-deep",
    installCommand: "pip install pydantic-deep",
    features: {
      en: ["Unlimited Context", "Subagent Delegation", "Persistent Memory", "CLI Assistant"],
    },
    hasCustomLanding: true,
  },

  // ── Toolsets ──────────────────────────────────────────────
  {
    slug: "pydantic-ai-middleware",
    name: "Pydantic AI Middleware",
    tagline: {
      en: "Intercept, transform, and guard every AI call",
    },
    description: {
      en: "Lightweight middleware library with 7 lifecycle hooks for Pydantic AI. Supports parallel execution, async guardrails, cost tracking, and permission decisions.",
    },
    status: "released",
    category: "toolset",
    github: "vstorm-co/pydantic-ai-middleware",
    pypi: "pydantic-ai-middleware",
    installCommand: "pip install pydantic-ai-middleware",
    features: {
      en: ["7 Lifecycle Hooks", "Async Guardrails", "Cost Tracking", "Permission System"],
    },
    longDescription: {
      en: "Pydantic AI Middleware provides 7 lifecycle hooks that let you intercept every stage of an agent run: before_run, after_run, before_model_request, before_tool_call, after_tool_call, on_tool_error, and on_run_error. Multiple middleware hooks execute in parallel with configurable aggregation strategies (first_response, all_responses, majority_vote). Async guardrails support three timing modes — BLOCKING (wait before proceeding), CONCURRENT (run alongside the agent), and ASYNC_POST (fire-and-forget after completion).",
    },
    quickStart: {
      filename: "middleware_example.py",
      code: `from pydantic_ai import Agent
from pydantic_ai_middleware import MiddlewareAgent, AgentMiddleware

class CostTracker(AgentMiddleware[None]):
    """Track token usage and costs across all agent runs."""

    async def after_run(self, prompt, output, deps, ctx=None):
        print(f"Tokens used: {ctx.usage.total_tokens}")
        return output

base_agent = Agent("openai:gpt-4o", instructions="You are a helpful assistant.")
agent = MiddlewareAgent(agent=base_agent, middleware=[CostTracker()])
result = await agent.run("Hello, how are you?")`,
      highlightedHtml: `<span class="text-violet-400">from</span> <span class="text-cyan-400">pydantic_ai</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">Agent</span>
<span class="text-violet-400">from</span> <span class="text-cyan-400">pydantic_ai_middleware</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">MiddlewareAgent</span><span class="text-text-secondary">,</span> <span class="text-cyan-400">AgentMiddleware</span>

<span class="text-violet-400">class</span> <span class="text-cyan-400">CostTracker</span><span class="text-text-secondary">(</span><span class="text-cyan-400">AgentMiddleware</span><span class="text-text-secondary">[</span><span class="text-cyan-400">None</span><span class="text-text-secondary">]):</span>
    <span class="text-amber-400">"""Track token usage and costs across all agent runs."""</span>

    <span class="text-violet-400">async def</span> <span class="text-cyan-400">after_run</span><span class="text-text-secondary">(</span><span class="text-text">self</span><span class="text-text-secondary">,</span> <span class="text-text">prompt</span><span class="text-text-secondary">,</span> <span class="text-text">output</span><span class="text-text-secondary">,</span> <span class="text-text">deps</span><span class="text-text-secondary">,</span> <span class="text-text">ctx</span><span class="text-text-secondary">=</span><span class="text-cyan-400">None</span><span class="text-text-secondary">):</span>
        <span class="text-cyan-400">print</span><span class="text-text-secondary">(</span><span class="text-violet-400">f</span><span class="text-amber-400">"Tokens used: {ctx.usage.total_tokens}"</span><span class="text-text-secondary">)</span>
        <span class="text-violet-400">return</span> <span class="text-text">output</span>

<span class="text-text">base_agent</span> <span class="text-violet-400">=</span> <span class="text-cyan-400">Agent</span><span class="text-text-secondary">(</span><span class="text-amber-400">"openai:gpt-4o"</span><span class="text-text-secondary">,</span> <span class="text-text-secondary">instructions</span><span class="text-violet-400">=</span><span class="text-amber-400">"You are a helpful assistant."</span><span class="text-text-secondary">)</span>
<span class="text-text">agent</span> <span class="text-violet-400">=</span> <span class="text-cyan-400">MiddlewareAgent</span><span class="text-text-secondary">(</span><span class="text-text-secondary">agent</span><span class="text-violet-400">=</span><span class="text-text">base_agent</span><span class="text-text-secondary">,</span> <span class="text-text-secondary">middleware</span><span class="text-violet-400">=</span><span class="text-text-secondary">[</span><span class="text-cyan-400">CostTracker</span><span class="text-text-secondary">()])</span>
<span class="text-text">result</span> <span class="text-violet-400">=</span> <span class="text-violet-400">await</span> <span class="text-text">agent</span><span class="text-text-secondary">.</span><span class="text-cyan-400">run</span><span class="text-text-secondary">(</span><span class="text-amber-400">"Hello, how are you?"</span><span class="text-text-secondary">)</span>`,
    },
    useCases: {
      en: [
        {
          name: "Cost Tracking & Budgets",
          description:
            "Monitor token usage per run, set spending limits, and get alerts when agents exceed budget thresholds.",
        },
        {
          name: "Content Filtering & Guardrails",
          description:
            "Block prompt injection attempts, redact PII from outputs, and enforce content safety policies.",
        },
        {
          name: "Permission Control",
          description:
            "Authorize tool calls based on user roles, block dangerous operations, and enforce fine-grained access policies.",
        },
        {
          name: "Logging & Observability",
          description:
            "Audit every agent decision, track request/response pairs, and integrate with observability platforms.",
        },
      ],
    },
    mermaidDiagram: `flowchart LR
    Input[Input] --> before_run[before_run]
    before_run --> before_model[before_model_request]
    before_model --> Agent[Agent]
    Agent -->|tool call| before_tool[before_tool_call]
    before_tool --> Tool[Tool]
    Tool --> after_tool[after_tool_call]
    after_tool --> Agent
    Tool -.->|error| on_error[on_tool_error]
    on_error -.-> Agent
    Agent -->|finish| after_run[after_run]
    after_run --> Output[Output]`,
  },
  {
    slug: "subagents-pydantic-ai",
    name: "Subagents for Pydantic AI",
    tagline: {
      en: "Multi-agent orchestration with dynamic agent creation",
    },
    description: {
      en: "Multi-agent delegation toolset with synchronous, asynchronous, and auto-selected execution modes. Supports nested subagents, runtime agent creation, and parent-child communication.",
    },
    status: "released",
    category: "toolset",
    github: "vstorm-co/subagents-pydantic-ai",
    pypi: "subagents-pydantic-ai",
    installCommand: "pip install subagents-pydantic-ai",
    features: {
      en: [
        "Sync/Async/Auto Modes",
        "Nested Subagents",
        "Runtime Agent Creation",
        "Parent-Child Comms",
      ],
    },
    longDescription: {
      en: "Define specialist subagents and let a parent agent delegate tasks to them automatically. Three execution modes give you full control: synchronous (blocking — wait for results), asynchronous (background — fire tasks and check later), and auto (the agent chooses the best mode). Subagents can spawn their own subagents for deep delegation chains, and a questions feature lets child agents ask the parent for clarification mid-task.",
    },
    quickStart: {
      filename: "subagents_example.py",
      code: `from pydantic_ai import Agent
from subagents_pydantic_ai import create_subagent_toolset, SubAgentConfig

subagents = [
    SubAgentConfig(
        name="researcher",
        description="Researches topics and gathers information",
        instructions="You are a research assistant. Investigate thoroughly.",
    ),
    SubAgentConfig(
        name="writer",
        description="Writes content based on research",
        instructions="You are a technical writer. Write clear, concise content.",
    ),
]

toolset = create_subagent_toolset(subagents=subagents)
agent = Agent("openai:gpt-4o", deps_type=Deps, toolsets=[toolset])
result = agent.run_sync("Research Python async patterns and write a blog post", deps=Deps())`,
      highlightedHtml: `<span class="text-violet-400">from</span> <span class="text-cyan-400">pydantic_ai</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">Agent</span>
<span class="text-violet-400">from</span> <span class="text-cyan-400">subagents_pydantic_ai</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">create_subagent_toolset</span><span class="text-text-secondary">,</span> <span class="text-cyan-400">SubAgentConfig</span>

<span class="text-text">subagents</span> <span class="text-violet-400">=</span> <span class="text-text-secondary">[</span>
    <span class="text-cyan-400">SubAgentConfig</span><span class="text-text-secondary">(</span>
        <span class="text-text-secondary">name</span><span class="text-violet-400">=</span><span class="text-amber-400">"researcher"</span><span class="text-text-secondary">,</span>
        <span class="text-text-secondary">description</span><span class="text-violet-400">=</span><span class="text-amber-400">"Researches topics and gathers information"</span><span class="text-text-secondary">,</span>
        <span class="text-text-secondary">instructions</span><span class="text-violet-400">=</span><span class="text-amber-400">"You are a research assistant. Investigate thoroughly."</span><span class="text-text-secondary">,</span>
    <span class="text-text-secondary">),</span>
    <span class="text-cyan-400">SubAgentConfig</span><span class="text-text-secondary">(</span>
        <span class="text-text-secondary">name</span><span class="text-violet-400">=</span><span class="text-amber-400">"writer"</span><span class="text-text-secondary">,</span>
        <span class="text-text-secondary">description</span><span class="text-violet-400">=</span><span class="text-amber-400">"Writes content based on research"</span><span class="text-text-secondary">,</span>
        <span class="text-text-secondary">instructions</span><span class="text-violet-400">=</span><span class="text-amber-400">"You are a technical writer. Write clear, concise content."</span><span class="text-text-secondary">,</span>
    <span class="text-text-secondary">),</span>
<span class="text-text-secondary">]</span>

<span class="text-text">toolset</span> <span class="text-violet-400">=</span> <span class="text-cyan-400">create_subagent_toolset</span><span class="text-text-secondary">(</span><span class="text-text-secondary">subagents</span><span class="text-violet-400">=</span><span class="text-text">subagents</span><span class="text-text-secondary">)</span>
<span class="text-text">agent</span> <span class="text-violet-400">=</span> <span class="text-cyan-400">Agent</span><span class="text-text-secondary">(</span><span class="text-amber-400">"openai:gpt-4o"</span><span class="text-text-secondary">,</span> <span class="text-text-secondary">deps_type</span><span class="text-violet-400">=</span><span class="text-cyan-400">Deps</span><span class="text-text-secondary">,</span> <span class="text-text-secondary">toolsets</span><span class="text-violet-400">=</span><span class="text-text-secondary">[</span><span class="text-text">toolset</span><span class="text-text-secondary">])</span>
<span class="text-text">result</span> <span class="text-violet-400">=</span> <span class="text-text">agent</span><span class="text-text-secondary">.</span><span class="text-cyan-400">run_sync</span><span class="text-text-secondary">(</span><span class="text-amber-400">"Research Python async patterns and write a blog post"</span><span class="text-text-secondary">,</span> <span class="text-text-secondary">deps</span><span class="text-violet-400">=</span><span class="text-cyan-400">Deps</span><span class="text-text-secondary">())</span>`,
    },
    useCases: {
      en: [
        {
          name: "Research Pipelines",
          description:
            "Delegate research to specialist agents that gather, analyze, and synthesize information from multiple sources.",
        },
        {
          name: "Code Review Delegation",
          description:
            "Spawn parallel review agents for security, style, and performance analysis, then merge their findings.",
        },
        {
          name: "Multi-Step Analysis",
          description:
            "Chain agents for complex workflows — researcher gathers data, analyst interprets it, writer produces the report.",
        },
        {
          name: "Parallel Task Execution",
          description:
            "Fire multiple background tasks simultaneously and collect results as they complete, with automatic status tracking.",
        },
      ],
    },
  },
  {
    slug: "pydantic-ai-backend",
    name: "Pydantic AI Backend",
    tagline: {
      en: "File storage, sandbox backends, and console toolset",
    },
    description: {
      en: "Multiple backend options (in-memory, local filesystem, Docker sandbox) with a console toolset (ls, read, write, edit, grep, execute) and fine-grained permission system.",
    },
    status: "released",
    category: "toolset",
    github: "vstorm-co/pydantic-ai-backend",
    pypi: "pydantic-ai-backend",
    installCommand: "pip install pydantic-ai-backend",
    features: {
      en: [
        "State/Local/Docker Backends",
        "Console Toolset",
        "Permission Presets",
        "Docker Runtimes",
      ],
    },
    longDescription: {
      en: "Choose from three backend options depending on your needs: StateBackend (in-memory, ephemeral — perfect for tests), LocalBackend (real filesystem with a sandboxed root directory), or DockerSandbox (full Docker container isolation with pre-configured runtimes for Python, Node.js, and data science). The console toolset provides 7 tools (ls, read_file, write_file, edit_file, glob, grep, execute) with a permission system offering 4 presets: DEFAULT, PERMISSIVE, READONLY, and STRICT.",
    },
    quickStart: {
      filename: "backend_example.py",
      code: `from dataclasses import dataclass
from pydantic_ai import Agent
from pydantic_ai_backends import LocalBackend, create_console_toolset

@dataclass
class Deps:
    backend: LocalBackend

agent = Agent(
    "openai:gpt-4o",
    deps_type=Deps,
    toolsets=[create_console_toolset()],
)

backend = LocalBackend(root_dir="./workspace")
result = agent.run_sync(
    "Create a Python script that calculates fibonacci and run it",
    deps=Deps(backend=backend),
)`,
      highlightedHtml: `<span class="text-violet-400">from</span> <span class="text-cyan-400">dataclasses</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">dataclass</span>
<span class="text-violet-400">from</span> <span class="text-cyan-400">pydantic_ai</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">Agent</span>
<span class="text-violet-400">from</span> <span class="text-cyan-400">pydantic_ai_backends</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">LocalBackend</span><span class="text-text-secondary">,</span> <span class="text-cyan-400">create_console_toolset</span>

<span class="text-cyan-400">@dataclass</span>
<span class="text-violet-400">class</span> <span class="text-cyan-400">Deps</span><span class="text-text-secondary">:</span>
    <span class="text-text">backend</span><span class="text-text-secondary">:</span> <span class="text-cyan-400">LocalBackend</span>

<span class="text-text">agent</span> <span class="text-violet-400">=</span> <span class="text-cyan-400">Agent</span><span class="text-text-secondary">(</span>
    <span class="text-amber-400">"openai:gpt-4o"</span><span class="text-text-secondary">,</span>
    <span class="text-text-secondary">deps_type</span><span class="text-violet-400">=</span><span class="text-cyan-400">Deps</span><span class="text-text-secondary">,</span>
    <span class="text-text-secondary">toolsets</span><span class="text-violet-400">=</span><span class="text-text-secondary">[</span><span class="text-cyan-400">create_console_toolset</span><span class="text-text-secondary">()],</span>
<span class="text-text-secondary">)</span>

<span class="text-text">backend</span> <span class="text-violet-400">=</span> <span class="text-cyan-400">LocalBackend</span><span class="text-text-secondary">(</span><span class="text-text-secondary">root_dir</span><span class="text-violet-400">=</span><span class="text-amber-400">"./workspace"</span><span class="text-text-secondary">)</span>
<span class="text-text">result</span> <span class="text-violet-400">=</span> <span class="text-text">agent</span><span class="text-text-secondary">.</span><span class="text-cyan-400">run_sync</span><span class="text-text-secondary">(</span>
    <span class="text-amber-400">"Create a Python script that calculates fibonacci and run it"</span><span class="text-text-secondary">,</span>
    <span class="text-text-secondary">deps</span><span class="text-violet-400">=</span><span class="text-cyan-400">Deps</span><span class="text-text-secondary">(</span><span class="text-text-secondary">backend</span><span class="text-violet-400">=</span><span class="text-text">backend</span><span class="text-text-secondary">),</span>
<span class="text-text-secondary">)</span>`,
    },
    useCases: {
      en: [
        {
          name: "AI Coding Assistants",
          description:
            "Give agents full file read/write/execute capabilities with sandboxed access to your project workspace.",
        },
        {
          name: "Sandboxed Code Execution",
          description:
            "Run untrusted agent-generated code safely inside Docker containers with pre-configured Python and Node.js runtimes.",
        },
        {
          name: "File Management Agents",
          description:
            "Build agents that organize, search, and transform files using grep, glob, and edit tools with permission guardrails.",
        },
        {
          name: "Testing & CI Pipelines",
          description:
            "Use ephemeral in-memory backends for fast, isolated test runs that leave no artifacts behind.",
        },
      ],
    },
  },
  {
    slug: "pydantic-ai-todo",
    name: "Pydantic AI Todo",
    tagline: {
      en: "Task planning and tracking with subtasks and dependencies",
    },
    description: {
      en: "Hierarchical task management toolset for AI agents with subtask support, dependency tracking, cycle detection, and multiple storage backends (in-memory, PostgreSQL).",
    },
    status: "released",
    category: "toolset",
    github: "vstorm-co/pydantic-ai-todo",
    pypi: "pydantic-ai-todo",
    installCommand: "pip install pydantic-ai-todo",
    features: {
      en: ["Subtask Hierarchy", "Dependency Tracking", "Cycle Detection", "PostgreSQL Backend"],
    },
    longDescription: {
      en: "Give your AI agents the ability to break down complex tasks into manageable subtasks with dependency tracking. The toolset provides 8 tools including add_todo, add_subtask, set_dependency, complete_todo, and get_available_tasks. Automatic cycle detection prevents circular dependencies. Choose between in-memory storage for quick sessions or PostgreSQL for persistent, multi-tenant task management with session-based isolation.",
    },
    quickStart: {
      filename: "todo_example.py",
      code: `from pydantic_ai import Agent
from pydantic_ai_todo import create_todo_toolset

agent = Agent(
    "openai:gpt-4o",
    toolsets=[create_todo_toolset()],
)

result = await agent.run("Create a todo list for building a REST API")`,
      highlightedHtml: `<span class="text-violet-400">from</span> <span class="text-cyan-400">pydantic_ai</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">Agent</span>
<span class="text-violet-400">from</span> <span class="text-cyan-400">pydantic_ai_todo</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">create_todo_toolset</span>

<span class="text-text">agent</span> <span class="text-violet-400">=</span> <span class="text-cyan-400">Agent</span><span class="text-text-secondary">(</span>
    <span class="text-amber-400">"openai:gpt-4o"</span><span class="text-text-secondary">,</span>
    <span class="text-text-secondary">toolsets</span><span class="text-violet-400">=</span><span class="text-text-secondary">[</span><span class="text-cyan-400">create_todo_toolset</span><span class="text-text-secondary">()],</span>
<span class="text-text-secondary">)</span>

<span class="text-text">result</span> <span class="text-violet-400">=</span> <span class="text-violet-400">await</span> <span class="text-text">agent</span><span class="text-text-secondary">.</span><span class="text-cyan-400">run</span><span class="text-text-secondary">(</span><span class="text-amber-400">"Create a todo list for building a REST API"</span><span class="text-text-secondary">)</span>`,
    },
    useCases: {
      en: [
        {
          name: "Project Planning Agents",
          description:
            "Let agents decompose complex features into trackable task hierarchies with dependencies and subtasks.",
        },
        {
          name: "Development Workflow",
          description:
            "Automate sprint planning — agents create, prioritize, and track tasks with dependency-aware ordering.",
        },
        {
          name: "Task Decomposition",
          description:
            "Break vague requests into concrete, actionable steps with clear completion criteria and blocking relationships.",
        },
        {
          name: "Multi-User Apps",
          description:
            "Use PostgreSQL backend for persistent, session-isolated task management across multiple users and conversations.",
        },
      ],
    },
  },
  {
    slug: "summarization-pydantic-ai",
    name: "Summarization for Pydantic AI",
    tagline: {
      en: "Automatic conversation summarization for unlimited context",
    },
    description: {
      en: "Three strategies for managing agent context: intelligent LLM-based summarization, zero-cost sliding window trimming, and real-time context manager middleware with token tracking.",
    },
    status: "released",
    category: "toolset",
    github: "vstorm-co/summarization-pydantic-ai",
    pypi: "summarization-pydantic-ai",
    installCommand: "pip install summarization-pydantic-ai",
    features: {
      en: ["LLM Summarization", "Sliding Window", "Real-time Context Manager", "Token Tracking"],
    },
    longDescription: {
      en: "Two strategies for keeping agent conversations within context limits. LLM-based summarization intelligently compresses older messages while preserving key information — triggered by message count, token count, or context fraction. Zero-cost sliding window trimming simply drops the oldest messages with a safe cutoff that never breaks tool call/response pairs. A real-time context manager middleware tracks token usage live, truncates long tool outputs, and auto-detects model context windows.",
    },
    quickStart: {
      filename: "summarization_example.py",
      code: `from pydantic_ai import Agent
from pydantic_ai_summarization import create_summarization_processor

processor = create_summarization_processor(
    trigger=("tokens", 100000),
    keep=("messages", 20),
)

agent = Agent(
    "openai:gpt-4o",
    history_processors=[processor],
)

result = await agent.run("Hello!")`,
      highlightedHtml: `<span class="text-violet-400">from</span> <span class="text-cyan-400">pydantic_ai</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">Agent</span>
<span class="text-violet-400">from</span> <span class="text-cyan-400">pydantic_ai_summarization</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">create_summarization_processor</span>

<span class="text-text">processor</span> <span class="text-violet-400">=</span> <span class="text-cyan-400">create_summarization_processor</span><span class="text-text-secondary">(</span>
    <span class="text-text-secondary">trigger</span><span class="text-violet-400">=</span><span class="text-text-secondary">(</span><span class="text-amber-400">"tokens"</span><span class="text-text-secondary">,</span> <span class="text-cyan-400">100000</span><span class="text-text-secondary">),</span>
    <span class="text-text-secondary">keep</span><span class="text-violet-400">=</span><span class="text-text-secondary">(</span><span class="text-amber-400">"messages"</span><span class="text-text-secondary">,</span> <span class="text-cyan-400">20</span><span class="text-text-secondary">),</span>
<span class="text-text-secondary">)</span>

<span class="text-text">agent</span> <span class="text-violet-400">=</span> <span class="text-cyan-400">Agent</span><span class="text-text-secondary">(</span>
    <span class="text-amber-400">"openai:gpt-4o"</span><span class="text-text-secondary">,</span>
    <span class="text-text-secondary">history_processors</span><span class="text-violet-400">=</span><span class="text-text-secondary">[</span><span class="text-text">processor</span><span class="text-text-secondary">],</span>
<span class="text-text-secondary">)</span>

<span class="text-text">result</span> <span class="text-violet-400">=</span> <span class="text-violet-400">await</span> <span class="text-text">agent</span><span class="text-text-secondary">.</span><span class="text-cyan-400">run</span><span class="text-text-secondary">(</span><span class="text-amber-400">"Hello!"</span><span class="text-text-secondary">)</span>`,
    },
    useCases: {
      en: [
        {
          name: "Long Conversations",
          description:
            "Keep agents running for hours without hitting context limits — older messages get summarized automatically.",
        },
        {
          name: "Customer Support Bots",
          description:
            "Preserve key customer details (name, issue, order ID) while discarding routine back-and-forth exchanges.",
        },
        {
          name: "Research Assistants",
          description:
            "Maintain research context across deep investigation sessions where accumulated findings would exceed the context window.",
        },
        {
          name: "Cost-Sensitive Apps",
          description:
            "Choose zero-cost sliding window for maximum throughput, or LLM summarization when quality matters more than speed.",
        },
      ],
    },
  },
  {
    slug: "database-pydantic-ai",
    name: "Database Toolset for Pydantic AI",
    tagline: {
      en: "Empower AI agents with SQL database capabilities",
    },
    description: {
      en: "SQL database toolset that lets AI agents query, analyze, and interact with databases. Supports schema introspection, safe query execution, and result formatting.",
    },
    status: "released",
    category: "toolset",
    github: "vstorm-co/database-pydantic-ai",
    pypi: "database-pydantic-ai",
    installCommand: "pip install database-pydantic-ai",
    features: {
      en: ["SQL Query Execution", "Schema Introspection", "Result Formatting", "Safe by Default"],
    },
    longDescription: {
      en: "Five tools give agents full database interaction: list_tables, get_schema, describe_table, explain_query, and query. Supports both SQLite (via aiosqlite) and PostgreSQL (via asyncpg) with a unified interface. Security-first: read-only mode blocks 15+ dangerous SQL keywords including DROP, DELETE, and ALTER. Resource control with configurable query timeouts (30s default) and row limits (100 default). Comment-aware parsing detects dangerous keywords hidden behind -- and /* */ comments.",
    },
    quickStart: {
      filename: "database_example.py",
      code: `from pydantic_ai import Agent
from database_pydantic_ai import (
    SQLiteDatabase,
    SQLDatabaseDeps,
    SQLITE_SYSTEM_PROMPT,
    create_database_toolset,
)

async with SQLiteDatabase("data.db") as db:
    deps = SQLDatabaseDeps(database=db, read_only=True)
    agent = Agent(
        "openai:gpt-4o",
        deps_type=SQLDatabaseDeps,
        toolsets=[create_database_toolset()],
        system_prompt=SQLITE_SYSTEM_PROMPT,
    )
    result = await agent.run("What are the top 5 most expensive products?", deps=deps)`,
      highlightedHtml: `<span class="text-violet-400">from</span> <span class="text-cyan-400">pydantic_ai</span> <span class="text-violet-400">import</span> <span class="text-cyan-400">Agent</span>
<span class="text-violet-400">from</span> <span class="text-cyan-400">database_pydantic_ai</span> <span class="text-violet-400">import</span> <span class="text-text-secondary">(</span>
    <span class="text-cyan-400">SQLiteDatabase</span><span class="text-text-secondary">,</span>
    <span class="text-cyan-400">SQLDatabaseDeps</span><span class="text-text-secondary">,</span>
    <span class="text-cyan-400">SQLITE_SYSTEM_PROMPT</span><span class="text-text-secondary">,</span>
    <span class="text-cyan-400">create_database_toolset</span><span class="text-text-secondary">,</span>
<span class="text-text-secondary">)</span>

<span class="text-violet-400">async with</span> <span class="text-cyan-400">SQLiteDatabase</span><span class="text-text-secondary">(</span><span class="text-amber-400">"data.db"</span><span class="text-text-secondary">)</span> <span class="text-violet-400">as</span> <span class="text-text">db</span><span class="text-text-secondary">:</span>
    <span class="text-text">deps</span> <span class="text-violet-400">=</span> <span class="text-cyan-400">SQLDatabaseDeps</span><span class="text-text-secondary">(</span><span class="text-text-secondary">database</span><span class="text-violet-400">=</span><span class="text-text">db</span><span class="text-text-secondary">,</span> <span class="text-text-secondary">read_only</span><span class="text-violet-400">=</span><span class="text-cyan-400">True</span><span class="text-text-secondary">)</span>
    <span class="text-text">agent</span> <span class="text-violet-400">=</span> <span class="text-cyan-400">Agent</span><span class="text-text-secondary">(</span>
        <span class="text-amber-400">"openai:gpt-4o"</span><span class="text-text-secondary">,</span>
        <span class="text-text-secondary">deps_type</span><span class="text-violet-400">=</span><span class="text-cyan-400">SQLDatabaseDeps</span><span class="text-text-secondary">,</span>
        <span class="text-text-secondary">toolsets</span><span class="text-violet-400">=</span><span class="text-text-secondary">[</span><span class="text-cyan-400">create_database_toolset</span><span class="text-text-secondary">()],</span>
        <span class="text-text-secondary">system_prompt</span><span class="text-violet-400">=</span><span class="text-cyan-400">SQLITE_SYSTEM_PROMPT</span><span class="text-text-secondary">,</span>
    <span class="text-text-secondary">)</span>
    <span class="text-text">result</span> <span class="text-violet-400">=</span> <span class="text-violet-400">await</span> <span class="text-text">agent</span><span class="text-text-secondary">.</span><span class="text-cyan-400">run</span><span class="text-text-secondary">(</span><span class="text-amber-400">"What are the top 5 most expensive products?"</span><span class="text-text-secondary">,</span> <span class="text-text-secondary">deps</span><span class="text-violet-400">=</span><span class="text-text">deps</span><span class="text-text-secondary">)</span>`,
    },
    useCases: {
      en: [
        {
          name: "Data Analysis Agents",
          description:
            "Let agents explore schemas, write queries, and analyze results from SQLite or PostgreSQL databases using natural language.",
        },
        {
          name: "Report Generation",
          description:
            "Build agents that query production databases, format results, and generate human-readable reports automatically.",
        },
        {
          name: "Database Administration",
          description:
            "Create assistants that help with schema discovery, query optimization via EXPLAIN, and database documentation.",
        },
        {
          name: "Business Intelligence",
          description:
            "Give non-technical users natural language access to their data with read-only safety guarantees and query timeouts.",
        },
      ],
    },
  },
  {
    slug: "logfire-assistant",
    name: "Logfire Assistant",
    tagline: {
      en: "AI-powered debugging and analysis for Pydantic Logfire",
    },
    description: {
      en: "AI assistant that queries and analyzes your Logfire traces, spans, and logs. Helps debug production AI agent systems with natural language queries.",
    },
    status: "released",
    category: "toolset",
    github: "vstorm-co/logfire-assistant",
    pypi: "polly-logfire",
    installCommand: "pip install polly-logfire",
    features: {
      en: ["Trace Analysis", "Natural Language Queries", "Span Debugging", "Production Insights"],
    },
  },

  // ── Coming Soon ───────────────────────────────────────────
  {
    slug: "memv",
    name: "memv",
    tagline: {
      en: "Persistent memory for AI agents",
    },
    description: {
      en: "Coming soon. Persistent memory system for AI agents.",
    },
    status: "coming-soon",
    category: "toolset",
    features: {
      en: ["Coming Soon"],
    },
  },
  {
    slug: "pydantic-ai-rlm",
    name: "Pydantic AI RLM",
    tagline: {
      en: "Reinforcement learning for AI agent optimization",
    },
    description: {
      en: "Coming soon. Reinforcement learning module for Pydantic AI agents.",
    },
    status: "coming-soon",
    category: "toolset",
    features: {
      en: ["Coming Soon"],
    },
  },

  // ── Resources ─────────────────────────────────────────────
  {
    slug: "awesome-pydantic-ai",
    name: "Awesome Pydantic AI",
    tagline: {
      en: "Curated list of Pydantic AI resources and libraries",
    },
    description: {
      en: "Community-curated index of Pydantic AI resources: frameworks, templates, examples, observability tools, and production case studies.",
    },
    status: "released",
    category: "resource",
    github: "vstorm-co/awesome-pydantic-ai",
    features: {
      en: ["30+ Projects Listed", "Frameworks & Templates", "Case Studies", "Community Curated"],
    },
    longDescription: {
      en: "A comprehensive, community-curated collection of the best Pydantic AI ecosystem resources. Browse production-grade frameworks and libraries (pydantic-deep, middleware, backend, subagents, summarization, database toolsets), full-stack templates with 20+ enterprise integrations, observability tools powered by Pydantic Logfire, and real-world case studies from companies like Mixam, Sophos, and Boosted.ai. Updated regularly with new projects and resources.",
    },
  },
  {
    slug: "pydantic-ai-examples",
    name: "Pydantic AI Examples",
    tagline: {
      en: "Production-ready example applications",
    },
    description: {
      en: "Coming soon. Collection of production-ready example applications built with the Pydantic AI ecosystem.",
    },
    status: "coming-soon",
    category: "resource",
    features: {
      en: ["Coming Soon"],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(lang: Lang = "en") {
  return categories
    .sort((a, b) => a.order - b.order)
    .map((cat) => ({
      ...cat,
      projects: projects.filter((p) => p.category === cat.id),
    }));
}

export function getGenericProjects(): Project[] {
  return projects.filter((p) => !p.hasCustomLanding);
}
