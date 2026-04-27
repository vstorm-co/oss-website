import type { Lang } from "../i18n/translations";

export interface ComparisonHighlight {
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  winner: "ours" | "theirs" | "tie";
}

export interface ComparisonFaq {
  question: Record<Lang, string>;
  answer: Record<Lang, string>;
}

export interface ComparisonPage {
  slug: string;
  product: string;
  productSlug: string;
  competitor: string;
  competitorUrl?: string;
  category: string;
  verdict: Record<Lang, string>;
  highlights: ComparisonHighlight[];
  tableColumns: string[];
  tableHighlight: number;
  tableRows: { feature: Record<Lang, string>; values: (boolean | string)[] }[];
  codeOurs?: { label: string; code: string };
  codeTheirs?: { label: string; code: string };
  whenOurs: Record<Lang, string>;
  whenTheirs: Record<Lang, string>;
  faq: ComparisonFaq[];
  relatedSlugs: string[];
}

export const comparisonPages: ComparisonPage[] = [
  // ─── 1. deepagents-vs-langchain ───────────────────────────────────
  {
    slug: "deepagents-vs-langchain",
    product: "Pydantic DeepAgents",
    productSlug: "pydantic-deepagents",
    competitor: "LangChain Deep Agents",
    competitorUrl: "https://github.com/langchain-ai/deepagents",
    category: "framework",
    verdict: {
      en: "Both implement the deep agent pattern. DeepAgents uses Pydantic AI for full type safety; LangChain Deep Agents uses LangGraph with access to the broader LangChain ecosystem.",
    },
    highlights: [
      {
        title: {
          en: "Foundation & Type Safety",
        },
        description: {
          en: "Pydantic DeepAgents is built on Pydantic AI — full type safety with Pydantic models for inputs, outputs, and structured results. LangChain Deep Agents is built on LangGraph with dict-based message passing.",
        },
        winner: "ours",
      },
      {
        title: {
          en: "Ecosystem & Integrations",
        },
        description: {
          en: "LangChain Deep Agents leverages the full LangChain ecosystem: 800+ integrations, LangSmith tracing, LangGraph Studio, MCP adapters, and sandbox partners (Modal, Runloop, Daytona). It also has a JS/TS variant.",
        },
        winner: "theirs",
      },
      {
        title: {
          en: "Architecture & Modularity",
        },
        description: {
          en: "Pydantic DeepAgents has independently usable packages (planning, subagents, summarization, middleware, backends). LangChain Deep Agents is a single monorepo with tightly coupled packages around LangGraph.",
        },
        winner: "ours",
      },
    ],
    tableColumns: ["Pydantic DeepAgents", "LangChain Deep Agents"],
    tableHighlight: 0,
    tableRows: [
      {
        feature: { en: "Foundation", pl: "Fundament", de: "Fundament", es: "Fundamento" },
        values: ["Pydantic AI", "LangGraph"],
      },
      {
        feature: {
          en: "Type Safety",
        },
        values: [true, false],
      },
      {
        feature: {
          en: "Planning (TODOs)",
        },
        values: [true, true],
      },
      {
        feature: {
          en: "Filesystem Tools",
        },
        values: [true, true],
      },
      {
        feature: {
          en: "Subagent Delegation",
        },
        values: [true, true],
      },
      {
        feature: {
          en: "Context Management",
        },
        values: [true, true],
      },
      {
        feature: {
          en: "Structured Output",
        },
        values: [true, false],
      },
      {
        feature: {
          en: "Lifecycle Hooks",
        },
        values: [true, false],
      },
      {
        feature: {
          en: "Cost Tracking",
        },
        values: [true, false],
      },
      {
        feature: {
          en: "Agent Teams",
        },
        values: [true, false],
      },
      {
        feature: {
          en: "JS/TS Variant",
        },
        values: [false, true],
      },
      {
        feature: {
          en: "Sandbox Partners",
        },
        values: ["Docker", "Modal, Runloop, Daytona"],
      },
      {
        feature: { en: "CLI", pl: "CLI", de: "CLI", es: "CLI" },
        values: [true, true],
      },
      {
        feature: {
          en: "Persistent Memory",
        },
        values: [true, true],
      },
    ],
    codeOurs: {
      label: "Pydantic DeepAgents",
      code: `from pydantic_deep import (
    create_deep_agent, create_default_deps, LocalBackend
)
from pydantic_deep.types import SubAgentConfig

agent = create_deep_agent(
    model="openai:gpt-4.1",
    instructions="You are a senior developer.",
    include_todo=True,
    include_filesystem=True,
    include_subagents=True,
    include_memory=True,
    subagents=[SubAgentConfig(
        name="code-reviewer",
        description="Reviews code for bugs",
        instructions="You are a senior reviewer.",
    )],
)

deps = create_default_deps(LocalBackend("."))
result = await agent.run(
    "Refactor auth module", deps=deps
)`,
    },
    codeTheirs: {
      label: "LangChain Deep Agents",
      code: `from deepagents import create_deep_agent
from langchain.chat_models import init_chat_model

agent = create_deep_agent(
    model=init_chat_model("openai:gpt-4o"),
    tools=[my_custom_tool],
    system_prompt="You are a coding assistant.",
)

result = agent.invoke({
    "messages": [{
        "role": "user",
        "content": "Refactor auth module",
    }]
})`,
    },
    whenOurs: {
      en: "Choose Pydantic DeepAgents when you want type-safe agents built on Pydantic AI, modular architecture with independently usable packages, structured output, lifecycle hooks, and cost tracking.",
    },
    whenTheirs: {
      en: "Choose LangChain Deep Agents when you're already in the LangChain ecosystem, need LangGraph Studio for visual debugging, want JS/TS support, or need sandbox integrations with Modal/Runloop/Daytona.",
    },
    faq: [
      {
        question: {
          en: "Both projects have create_deep_agent() — what's the difference?",
        },
        answer: {
          en: "Both implement the same deep agent pattern but on different foundations. Pydantic DeepAgents (pydantic-deep) returns a Pydantic AI agent you call with await agent.run(). LangChain Deep Agents (deepagents) returns a compiled LangGraph graph you call with agent.invoke(). The core features (planning, filesystem, subagents) are nearly identical.",
        },
      },
      {
        question: {
          en: "Is Pydantic DeepAgents inspired by LangChain Deep Agents?",
        },
        answer: {
          en: "Yes. Pydantic DeepAgents was inspired by LangChain's Deep Agents research on autonomous agent architectures. Both projects aim to replicate the deep agent pattern used by Claude Code, Devin, and Manus AI — but Pydantic DeepAgents builds on Pydantic AI instead of LangGraph.",
        },
      },
      {
        question: {
          en: "Can I use both in the same project?",
        },
        answer: {
          en: "They are separate packages (pydantic-deep vs deepagents) with different dependencies and APIs. While technically you can install both, it's better to pick one foundation: Pydantic AI or LangGraph. Each has its own CLI, tool system, and agent lifecycle.",
        },
      },
      {
        question: {
          en: "Which has better sandbox support?",
        },
        answer: {
          en: "LangChain Deep Agents has more sandbox partners out of the box: Modal, Runloop, and Daytona via dedicated packages. Pydantic DeepAgents supports Docker sandboxing through its backend system. Both isolate agent execution for safety.",
        },
      },
    ],
    relatedSlugs: ["deepagents-vs-crewai", "deepagents-vs-autogen"],
  },

  // ─── 2. deepagents-vs-crewai ──────────────────────────────────────
  {
    slug: "deepagents-vs-crewai",
    product: "Pydantic DeepAgents",
    productSlug: "pydantic-deepagents",
    competitor: "CrewAI",
    competitorUrl: "https://github.com/crewAIInc/crewAI",
    category: "framework",
    verdict: {
      en: "Autonomous deep agents (DeepAgents) vs role-based agent crews (CrewAI). DeepAgents offers more control; CrewAI is faster for multi-agent team prototypes.",
    },
    highlights: [
      {
        title: {
          en: "Agent Pattern",
        },
        description: {
          en: "DeepAgents builds autonomous deep agents (like Claude Code) — one agent with planning, filesystem, subagents, and context management. CrewAI builds teams of role-based agents that collaborate on tasks via sequential, hierarchical, or consensual patterns.",
        },
        winner: "ours",
      },
      {
        title: {
          en: "Team Coordination",
        },
        description: {
          en: "CrewAI has built-in crew coordination: sequential, hierarchical, and consensual processes. Agents have roles, goals, and backstories. DeepAgents supports teams and subagents but you compose the coordination logic yourself.",
        },
        winner: "theirs",
      },
      {
        title: {
          en: "Type Safety & Foundation",
        },
        description: {
          en: "DeepAgents is built on Pydantic AI with full type safety — structured output, typed tools, Pydantic models for everything. CrewAI uses string-based role/goal/backstory definitions with partial Pydantic support for task outputs.",
        },
        winner: "ours",
      },
    ],
    tableColumns: ["Pydantic DeepAgents", "CrewAI"],
    tableHighlight: 0,
    tableRows: [
      {
        feature: { en: "Foundation", pl: "Fundament", de: "Fundament", es: "Fundamento" },
        values: ["Pydantic AI", "LiteLLM"],
      },
      {
        feature: {
          en: "Agent Pattern",
        },
        values: ["Deep agent", "Role-based crew"],
      },
      {
        feature: {
          en: "Type Safety",
        },
        values: [true, "Partial"],
      },
      {
        feature: {
          en: "Planning (TODOs)",
        },
        values: [true, true],
      },
      {
        feature: {
          en: "Filesystem Tools",
        },
        values: [true, false],
      },
      {
        feature: {
          en: "Context Management",
        },
        values: [true, "Partial"],
      },
      {
        feature: {
          en: "Structured Output",
        },
        values: [true, true],
      },
      {
        feature: {
          en: "Role-Based Teams",
        },
        values: ["Manual", true],
      },
      {
        feature: {
          en: "Crew Coordination",
        },
        values: ["Manual", "Sequential, Hierarchical"],
      },
      {
        feature: {
          en: "Lifecycle Hooks",
        },
        values: [true, "Callbacks"],
      },
      {
        feature: {
          en: "Cost Tracking",
        },
        values: [true, false],
      },
      {
        feature: { en: "CLI", pl: "CLI", de: "CLI", es: "CLI" },
        values: [true, true],
      },
      {
        feature: {
          en: "Multi-Provider Support",
        },
        values: [true, true],
      },
      {
        feature: {
          en: "Persistent Memory",
        },
        values: [true, true],
      },
    ],
    codeOurs: {
      label: "Pydantic DeepAgents",
      code: `from pydantic_deep import (
    create_deep_agent, create_default_deps
)
from pydantic_deep.types import SubAgentConfig

agent = create_deep_agent(
    model="openai:gpt-4.1",
    instructions="Research and write articles.",
    include_subagents=True,
    include_todo=True,
    subagents=[
        SubAgentConfig(name="researcher",
            description="Deep-dives into topics",
            instructions="You research thoroughly."),
        SubAgentConfig(name="writer",
            description="Writes articles",
            instructions="You write clearly."),
    ],
)

deps = create_default_deps()
result = await agent.run(
    "Research AI trends and write an article",
    deps=deps,
)`,
    },
    codeTheirs: {
      label: "CrewAI",
      code: `from crewai import Agent, Task, Crew, Process

researcher = Agent(
    role="Senior Researcher",
    goal="Find cutting-edge AI trends",
    backstory="You are an expert researcher...",
)
writer = Agent(
    role="Tech Writer",
    goal="Write engaging articles",
    backstory="You are a skilled writer...",
)

research = Task(
    description="Research AI trends 2026",
    expected_output="List of trends",
    agent=researcher,
)
article = Task(
    description="Write article from research",
    expected_output="Blog post in markdown",
    agent=writer,
)

crew = Crew(
    agents=[researcher, writer],
    tasks=[research, article],
    process=Process.sequential,
)
result = crew.kickoff()`,
    },
    whenOurs: {
      en: "Choose Pydantic DeepAgents when you need autonomous agents that plan, code, and ship — Claude Code-style agents with filesystem access, context management, cost tracking, and modular architecture. Best for production systems where type safety and fine-grained control matter.",
    },
    whenTheirs: {
      en: "Choose CrewAI when you want to quickly build teams of specialized agents with predefined roles, goals, and coordination patterns. Best for prototyping multi-agent workflows where agents have distinct responsibilities and collaborate on tasks sequentially or hierarchically.",
    },
    faq: [
      {
        question: {
          en: "Are they solving the same problem?",
        },
        answer: {
          en: "Not exactly. DeepAgents builds autonomous deep agents (like Claude Code) — a single powerful agent with planning, filesystem, and context management. CrewAI builds teams of role-based agents that collaborate on tasks. DeepAgents is about depth; CrewAI is about breadth across roles.",
        },
      },
      {
        question: {
          en: "Can I replicate CrewAI's team patterns with DeepAgents?",
        },
        answer: {
          en: "Yes. DeepAgents has include_teams and include_subagents — you can define named subagents with descriptions and instructions, and build sequential or parallel coordination. You have more flexibility but need to compose the pattern yourself, while CrewAI gives you Process.sequential and Process.hierarchical out of the box.",
        },
      },
      {
        question: {
          en: "Which handles long-running tasks better?",
        },
        answer: {
          en: "DeepAgents has built-in context management with auto-summarization, checkpointing, and cost tracking — designed for long autonomous sessions. CrewAI has basic memory and context sharing between agents but no automatic context compression for very long conversations.",
        },
      },
      {
        question: {
          en: "Does CrewAI support filesystem operations like DeepAgents?",
        },
        answer: {
          en: "Not natively. DeepAgents has built-in filesystem tools (read, write, edit, glob, grep, execute) as core of the deep agent pattern. CrewAI agents use custom tools — you'd need to build or import file operation tools separately.",
        },
      },
    ],
    relatedSlugs: ["deepagents-vs-langchain", "deepagents-vs-autogen"],
  },

  // ─── 3. deepagents-vs-autogen ─────────────────────────────────────
  {
    slug: "deepagents-vs-autogen",
    product: "Pydantic DeepAgents",
    productSlug: "pydantic-deepagents",
    competitor: "AutoGen (AG2)",
    competitorUrl: "https://github.com/ag2ai/ag2",
    category: "framework",
    verdict: {
      en: "DeepAgents vs AutoGen: Pydantic AI autonomous agents vs multi-agent group chats. DeepAgents is simpler; AutoGen is better for agent-to-agent dialogue use cases.",
    },
    highlights: [
      {
        title: {
          en: "Simplicity & API",
        },
        description: {
          en: "DeepAgents: one function call (create_deep_agent) gives you a working agent. AutoGen v0.4 requires wiring agents, teams (RoundRobinGroupChat or SelectorGroupChat), model clients, and termination conditions separately.",
        },
        winner: "ours",
      },
      {
        title: {
          en: "Multi-Agent Conversations",
        },
        description: {
          en: "AutoGen excels at agent-to-agent dialogues: RoundRobinGroupChat, SelectorGroupChat with LLM-based speaker selection, Swarm orchestration, and MagenticOne for complex multi-agent workflows. DeepAgents uses subagent delegation (one primary agent spawns helpers).",
        },
        winner: "theirs",
      },
      {
        title: {
          en: "Deep Agent Pattern",
        },
        description: {
          en: "DeepAgents implements the full Claude Code pattern: planning, filesystem, context compression, checkpointing, cost tracking, hooks, and persistent memory — all in one call. AutoGen focuses on conversation orchestration and requires custom tooling for these capabilities.",
        },
        winner: "ours",
      },
    ],
    tableColumns: ["Pydantic DeepAgents", "AutoGen (AG2)"],
    tableHighlight: 0,
    tableRows: [
      {
        feature: { en: "Foundation", pl: "Fundament", de: "Fundament", es: "Fundamento" },
        values: ["Pydantic AI", "Custom runtime"],
      },
      {
        feature: {
          en: "Agent Pattern",
        },
        values: ["Deep agent", "Conversational"],
      },
      {
        feature: {
          en: "Type Safety",
        },
        values: [true, "Partial"],
      },
      {
        feature: {
          en: "Planning (TODOs)",
        },
        values: [true, false],
      },
      {
        feature: {
          en: "Filesystem Tools",
        },
        values: [true, false],
      },
      {
        feature: {
          en: "Code Execution",
        },
        values: [true, true],
      },
      {
        feature: { en: "Group Chat", pl: "Czat grupowy", de: "Gruppen-Chat", es: "Chat grupal" },
        values: ["Via subagents", true],
      },
      {
        feature: {
          en: "Context Management",
        },
        values: [true, false],
      },
      {
        feature: { en: "Checkpointing", pl: "Checkpointy", de: "Checkpointing", es: "Checkpoints" },
        values: [true, false],
      },
      {
        feature: {
          en: "Cost Tracking",
        },
        values: [true, false],
      },
      {
        feature: {
          en: "Human-in-the-Loop",
        },
        values: [true, true],
      },
      {
        feature: {
          en: "Persistent Memory",
        },
        values: [true, false],
      },
      {
        feature: { en: "CLI", pl: "CLI", de: "CLI", es: "CLI" },
        values: [true, false],
      },
      {
        feature: {
          en: "Multi-Provider Support",
        },
        values: [true, true],
      },
    ],
    codeOurs: {
      label: "Pydantic DeepAgents",
      code: `from pydantic_deep import (
    create_deep_agent, create_default_deps,
    LocalBackend,
)

agent = create_deep_agent(
    model="openai:gpt-4.1",
    instructions="Research and summarize topics.",
    include_filesystem=True,
    include_subagents=True,
    include_memory=True,
    include_todo=True,
)

deps = create_default_deps(
    LocalBackend("./workspace")
)
result = await agent.run(
    "Research AI safety and summarize",
    deps=deps,
)`,
    },
    codeTheirs: {
      label: "AutoGen (AG2)",
      code: `from autogen_agentchat.agents import AssistantAgent
from autogen_agentchat.teams import (
    RoundRobinGroupChat,
)
from autogen_agentchat.conditions import (
    TextMentionTermination,
)
from autogen_ext.models.openai import (
    OpenAIChatCompletionClient,
)

model = OpenAIChatCompletionClient(model="gpt-4o")
researcher = AssistantAgent(
    "researcher", model_client=model,
)
writer = AssistantAgent(
    "writer", model_client=model,
)
termination = TextMentionTermination("APPROVE")
team = RoundRobinGroupChat(
    [researcher, writer],
    termination_condition=termination,
)
result = await team.run(
    task="Research AI safety and summarize",
)`,
    },
    whenOurs: {
      en: "Choose Pydantic DeepAgents when you want autonomous Claude Code-style agents with planning, filesystem access, context management, and cost tracking. Best for production systems, coding assistants, and long-running autonomous tasks where one powerful agent needs to plan and execute independently.",
    },
    whenTheirs: {
      en: "Choose AutoGen (AG2) when you need sophisticated agent-to-agent conversations, group chat orchestration (RoundRobin, Selector, Swarm), built-in code execution sandboxing, or complex multi-agent research workflows. Best when agents need to debate, negotiate, or iterate on solutions together.",
    },
    faq: [
      {
        question: {
          en: "What happened to the old AutoGen API?",
        },
        answer: {
          en: "AutoGen v0.4 (now AG2) was a complete rewrite. The old AssistantAgent/UserProxyAgent API is deprecated. The new API uses autogen_agentchat with team-based orchestration (RoundRobinGroupChat, SelectorGroupChat, Swarm) and autogen_ext for model clients and tools.",
        },
      },
      {
        question: {
          en: "Can DeepAgents do multi-agent conversations like AutoGen?",
        },
        answer: {
          en: "DeepAgents supports subagent delegation and teams — one primary agent can spawn and coordinate helpers. But it's not designed for the round-robin debate-style conversations AutoGen specializes in. If you need agents talking to each other, AutoGen is the better fit.",
        },
      },
      {
        question: {
          en: "Which handles code execution better?",
        },
        answer: {
          en: "Both support code execution but differently. DeepAgents has built-in execute tool as part of its filesystem toolset, with Docker sandbox support. AutoGen has dedicated code executor extensions (DockerCommandLineCodeExecutor, LocalCommandLineCodeExecutor) designed for agents that generate and run code iteratively.",
        },
      },
      {
        question: {
          en: "Which has better enterprise backing?",
        },
        answer: {
          en: "AutoGen originated at Microsoft Research and is now maintained by the AG2 community with Microsoft's continued involvement. DeepAgents is built by Vstorm with 30+ production AI agent deployments. AutoGen has the larger community; DeepAgents has more focused production experience.",
        },
      },
    ],
    relatedSlugs: ["deepagents-vs-langchain", "deepagents-vs-crewai"],
  },

  // ─── 4. template-vs-manual-setup ──────────────────────────────────
  {
    slug: "template-vs-manual-setup",
    product: "Full-Stack AI Agent Template",
    productSlug: "full-stack-ai-agent-template",
    competitor: "Manual Setup",
    category: "template",
    verdict: {
      en: "Our template saves weeks of boilerplate. Manual setup gives full control but requires deep expertise across the entire stack.",
    },
    highlights: [
      {
        title: {
          en: "Time to Production",
        },
        description: {
          en: "Template: configure and deploy in 5 minutes. Manual: 2-4 weeks of wiring databases, auth, Docker, CI/CD, and observability.",
        },
        winner: "ours",
      },
      {
        title: {
          en: "Flexibility",
        },
        description: {
          en: "Template offers 75+ options covering most use cases. Manual setup has unlimited flexibility for truly unique requirements.",
        },
        winner: "theirs",
      },
      {
        title: {
          en: "Best Practices",
        },
        description: {
          en: "Template includes auth, Docker, CI/CD, and observability configured following best practices by default. Manual setup requires you to know and implement each.",
        },
        winner: "ours",
      },
    ],
    tableColumns: ["AI Agent Template", "Manual Setup"],
    tableHighlight: 0,
    tableRows: [
      {
        feature: {
          en: "Setup Time",
        },
        values: ["5 min", "2-4 weeks"],
      },
      {
        feature: {
          en: "AI Framework Integration",
        },
        values: ["5 built-in", "DIY"],
      },
      {
        feature: {
          en: "Authentication",
        },
        values: [true, "DIY"],
      },
      {
        feature: {
          en: "Database Setup",
        },
        values: [true, "DIY"],
      },
      {
        feature: {
          en: "Docker & Kubernetes",
        },
        values: [true, "DIY"],
      },
      {
        feature: {
          en: "CI/CD Pipeline",
        },
        values: [true, "DIY"],
      },
      {
        feature: {
          en: "Observability",
        },
        values: [true, "DIY"],
      },
    ],
    codeOurs: {
      label: "AI Agent Template",
      code: `# One command to generate a full project
uvx fastapi-fullstack my-project \\
  --preset production \\
  --ai pydantic-ai \\
  --db postgres \\
  --auth jwt`,
    },
    codeTheirs: {
      label: "Manual Setup",
      code: `# Week 1: Project structure, FastAPI, Next.js
# Week 2: Database, migrations, auth
# Week 3: AI integration, WebSocket streaming
# Week 4: Docker, CI/CD, observability, testing
# ... and ongoing maintenance of all the glue code`,
    },
    whenOurs: {
      en: "Choose our template when you want to ship fast with production-grade defaults and 75+ configuration options.",
    },
    whenTheirs: {
      en: "Choose manual setup when you have truly unique requirements that no template can cover, and a team with deep full-stack expertise.",
    },
    faq: [
      {
        question: {
          en: "Can I customize the generated code?",
        },
        answer: {
          en: "Absolutely. The template generates standard Python and TypeScript code that you own completely. There is no lock-in or runtime dependency on the generator.",
        },
      },
      {
        question: {
          en: "What if I need a feature not in the template?",
        },
        answer: {
          en: "Start with the closest preset, then add custom features on top. The generated code follows standard patterns, making it easy to extend.",
        },
      },
      {
        question: {
          en: "Is the template maintained and updated?",
        },
        answer: {
          en: "Yes. We update dependencies, add new AI frameworks, and incorporate community feedback regularly. The template tracks the latest stable versions.",
        },
      },
    ],
    relatedSlugs: ["template-vs-cookiecutter"],
  },

  // ─── 5. template-vs-cookiecutter ──────────────────────────────────
  {
    slug: "template-vs-cookiecutter",
    product: "Full-Stack AI Agent Template",
    productSlug: "full-stack-ai-agent-template",
    competitor: "Cookiecutter / Generic Generators",
    category: "template",
    verdict: {
      en: "Our template generates a production-ready FastAPI + Next.js project with AI agents, auth, Docker, and CI/CD in one command. Cookiecutter is a general-purpose scaffolding tool — you pick a community template, but none offer integrated AI agent support with 5 frameworks, WebSocket streaming, and a 9-step visual configurator.",
    },
    highlights: [
      {
        title: {
          en: "AI Agent Integration",
        },
        description: {
          en: "5 AI frameworks (Pydantic AI, LangChain, LangGraph, CrewAI, DeepAgents) with WebSocket streaming, conversation persistence, and Human-in-the-Loop tool approval — all pre-wired. Cookiecutter templates typically have no AI support; you wire everything from scratch.",
        },
        winner: "ours",
      },
      {
        title: {
          en: "Configuration Options",
        },
        description: {
          en: "75+ options across database (PostgreSQL, SQLite, MongoDB), auth (JWT, API keys, OAuth), infrastructure (Docker, K8s, CI/CD), and observability (Logfire, Sentry, Prometheus). Validated at config time — invalid combinations are rejected. Cookiecutter prompts are freeform with no validation.",
        },
        winner: "ours",
      },
      {
        title: {
          en: "Ecosystem Breadth",
        },
        description: {
          en: "Cookiecutter has 4,000+ community templates covering every language and framework imaginable — Django, Flask, Go, Rust, React. Our template is laser-focused on one thing: production AI agent apps with FastAPI + Next.js.",
        },
        winner: "theirs",
      },
    ],
    tableColumns: ["AI Agent Template", "Cookiecutter"],
    tableHighlight: 0,
    tableRows: [
      {
        feature: {
          en: "AI Framework Support",
        },
        values: ["5 built-in", false],
      },
      {
        feature: {
          en: "WebSocket Streaming",
        },
        values: [true, false],
      },
      {
        feature: {
          en: "Conversation Persistence",
        },
        values: [true, false],
      },
      {
        feature: {
          en: "Human-in-the-Loop",
        },
        values: [true, false],
      },
      {
        feature: {
          en: "Visual Configurator",
        },
        values: ["9-step wizard", false],
      },
      {
        feature: {
          en: "CLI Generator",
        },
        values: [true, true],
      },
      {
        feature: {
          en: "Config Validation",
        },
        values: ["11 rules", false],
      },
      {
        feature: {
          en: "Full-Stack (Backend + Frontend)",
        },
        values: [true, "Varies"],
      },
      {
        feature: {
          en: "Docker + K8s + CI/CD",
        },
        values: [true, "Varies"],
      },
      {
        feature: {
          en: "Auth (JWT, OAuth, API keys)",
        },
        values: [true, "Varies"],
      },
      {
        feature: {
          en: "Observability (Logfire, Sentry)",
        },
        values: [true, false],
      },
      {
        feature: {
          en: "Configuration Presets",
        },
        values: ["3 presets", false],
      },
      {
        feature: {
          en: "Template Variety",
        },
        values: ["AI-focused", "4,000+"],
      },
    ],
    codeOurs: {
      label: "AI Agent Template",
      code: `# Interactive wizard (default):
uvx fastapi-fullstack

# Or non-interactive with flags:
uvx fastapi-fullstack my-project \\
  --preset ai-agent \\
  --ai-framework pydantic_ai \\
  --db postgres \\
  --auth jwt \\
  --websockets \\
  --redis \\
  --sentry \\
  --ci github

# Or use the 9-step web configurator:
# oss.vstorm.co/projects/full-stack-ai-agent-template/configurator/`,
    },
    codeTheirs: {
      label: "Cookiecutter",
      code: `# Pick a generic FastAPI template:
cookiecutter gh:tiangolo/full-stack-fastapi-template

# Then manually add:
# - AI framework (Pydantic AI / LangChain)
# - WebSocket streaming endpoint
# - Conversation history & persistence
# - Human-in-the-Loop approval flow
# - Logfire / Sentry observability
# - Frontend chat UI (Next.js)
# ... weeks of integration work`,
    },
    whenOurs: {
      en: "You are building an AI agent application and want to ship in hours, not weeks. You need WebSocket streaming, conversation persistence, multiple AI frameworks, or Human-in-the-Loop approval. You want validated configuration that prevents broken setups.",
    },
    whenTheirs: {
      en: "You need a project template for a non-AI application (Django, Flask, Go, Rust). You want maximum flexibility to pick any community template. Your project does not need AI agent features like streaming or conversation history.",
    },
    faq: [
      {
        question: {
          en: "Is this actually built on Cookiecutter?",
        },
        answer: {
          en: "Yes. Under the hood, the AI Agent Template uses Cookiecutter for project generation. The difference is what is in the template: 5 AI frameworks, 75+ validated options, WebSocket streaming, conversation persistence, Docker, CI/CD, and observability — all pre-integrated and tested together.",
        },
      },
      {
        question: {
          en: "What AI frameworks are supported?",
        },
        answer: {
          en: "Pydantic AI, LangChain, LangGraph, CrewAI, and DeepAgents. Each comes with a working agent implementation, WebSocket streaming endpoint, and optional conversation persistence. You can also choose between OpenAI, Anthropic, and OpenRouter as LLM providers.",
        },
      },
      {
        question: {
          en: "What does the generated project include?",
        },
        answer: {
          en: "A complete FastAPI backend, Next.js 15 frontend with React 19, your chosen database (PostgreSQL/SQLite/MongoDB) with migrations, authentication, AI agent with streaming, Docker + docker-compose for dev and production, optional Kubernetes manifests, CI/CD pipelines, and observability setup. The code is fully typed, tested, and documented with CLAUDE.md for AI coding assistants.",
        },
      },
      {
        question: {
          en: "Is it open source?",
        },
        answer: {
          en: "Yes, fully open source under MIT license. 560+ stars on GitHub. You can fork, modify, and contribute back.",
        },
      },
      {
        question: {
          en: "What are the 3 presets?",
        },
        answer: {
          en: "Minimal (API-only, no database, no Docker — for prototyping), Production (PostgreSQL, JWT auth, Redis, Sentry + Prometheus, Docker + K8s, GitHub Actions), and AI Agent (Pydantic AI with WebSocket streaming, conversation persistence, PostgreSQL, Redis, Next.js frontend, Docker). You can also configure everything manually with 75+ individual options.",
        },
      },
    ],
    relatedSlugs: ["template-vs-manual-setup"],
  },
];

export function getComparisonBySlug(slug: string): ComparisonPage | undefined {
  return comparisonPages.find((c) => c.slug === slug);
}

export function getAllComparisonSlugs(): string[] {
  return comparisonPages.map((c) => c.slug);
}
