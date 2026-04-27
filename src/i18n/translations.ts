export const languages = {
  en: "English",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

export const translations = {
  en: {
    // Meta
    "meta.description":
      "Open-source tools for building production AI agents with Python. Full-stack template (FastAPI + Next.js), RAG pipeline, 5 AI frameworks, middleware, subagents. By Vstorm.",

    // Nav
    "nav.back": "Back to home",

    // Hero
    "hero.badge": "Open Source",
    "hero.title.line1": "Your First Production",
    "hero.title.highlight": "AI App",
    "hero.title.line2": "in 30 Minutes",
    "hero.description":
      "Choose from 5 AI frameworks, configure 75+ options, and deploy. FastAPI + Next.js with auth, streaming, and infrastructure — ready out of the box.",
    "hero.cta.configure": "Configure & Download",
    "hero.cta.github": "View on GitHub",
    "hero.terminal.success": "Project created successfully",

    // Frameworks
    "frameworks.title": "Works with your stack",

    // Features
    "features.title": "Everything you need",
    "features.subtitle": "From database to deployment, configured in one command.",
    "features.ai.title": "5 AI Frameworks",
    "features.ai.desc":
      "Pydantic AI, LangChain, LangGraph, CrewAI, and DeepAgents with WebSocket streaming.",
    "features.options.title": "75+ Options",
    "features.options.desc":
      "Database, auth, background tasks, caching, rate limiting, file storage, webhooks, and more.",
    "features.presets.title": "3 Presets",
    "features.presets.desc": "Minimal, Production, or AI Agent. One command, zero configuration.",
    "features.fullstack.title": "Full-Stack",
    "features.fullstack.desc":
      "FastAPI backend with Next.js 15 frontend. TypeScript, App Router, Tailwind CSS.",
    "features.production.title": "Production Ready",
    "features.production.desc":
      "Docker, reverse proxy, Kubernetes, CI/CD, .env generation out of the box.",
    "features.observable.title": "Observable",
    "features.observable.desc":
      "Logfire, Sentry, and Prometheus integration. Know what your agents are doing.",

    // Presets
    "presets.title": "Start with a preset",
    "presets.subtitle": "Or customize every option in the configurator.",
    "presets.minimal.name": "Minimal",
    "presets.minimal.desc": "API-only, no database, no auth. Perfect for prototyping.",
    "presets.minimal.f1": "No database",
    "presets.minimal.f2": "No authentication",
    "presets.minimal.f3": "No Docker",
    "presets.minimal.f4": "Basic FastAPI",
    "presets.minimal.cta": "Use Minimal",
    "presets.production.name": "Production",
    "presets.production.tag": "Recommended",
    "presets.production.desc": "Full production setup. Deploy-ready from day one.",
    "presets.production.f1": "PostgreSQL + JWT auth",
    "presets.production.f2": "Redis + Caching",
    "presets.production.f3": "Sentry + Prometheus",
    "presets.production.f4": "Docker + Kubernetes",
    "presets.production.f5": "GitHub Actions CI",
    "presets.production.cta": "Use Production",
    "presets.agent.name": "AI Agent",
    "presets.agent.tag": "Most Popular",
    "presets.agent.desc": "AI-powered app with streaming and persistence.",
    "presets.agent.f1": "Pydantic AI (default)",
    "presets.agent.f2": "WebSocket streaming",
    "presets.agent.f3": "Conversation history",
    "presets.agent.f4": "PostgreSQL + Redis",
    "presets.agent.f5": "Next.js frontend",
    "presets.agent.cta": "Use AI Agent",

    // Template — How It Works
    "template.howitworks.title": "How It Works",
    "template.howitworks.subtitle": "From zero to production in four steps",
    "template.howitworks.step1.title": "Pick Your Stack",
    "template.howitworks.step1.desc":
      "Choose from 5 AI frameworks, 3 frontends, and 75+ configuration options via the web configurator or CLI.",
    "template.howitworks.step2.title": "Generate & Scaffold",
    "template.howitworks.step2.desc":
      "One command generates a fully configured project — Docker, CI/CD, auth, database, and your selected AI stack.",
    "template.howitworks.step3.title": "Build Your Agent",
    "template.howitworks.step3.desc":
      "Focus on your AI logic. The template handles routing, streaming, state management, and deployment boilerplate.",
    "template.howitworks.step4.title": "Ship to Production",
    "template.howitworks.step4.desc":
      "Deploy with docker compose up. Monitoring, logging, and health checks are pre-configured out of the box.",

    // QuickStart
    "quickstart.title": "Get started",
    "quickstart.step1": "Install",
    "quickstart.step2": "Create",
    "quickstart.step3": "Run",
    "quickstart.or": "Or use the web configurator",

    // Blog
    "nav.blog": "Blog",
    "blog.title": "AI Agent Blog",
    "blog.subtitle":
      "Tutorials, framework comparisons, and production guides for building AI agents with Python. Covering Pydantic AI, LangChain, LangGraph, CrewAI, and more.",
    "blog.readMore": "Read more",
    "blog.publishedOn": "Published on",
    "blog.updatedOn": "Updated on",
    "blog.backToBlog": "Back to blog",
    "blog.tableOfContents": "Table of Contents",
    "blog.availableIn": "Available in",
    "blog.allCategories": "All",
    "blog.category.open-source": "Open Source",
    "blog.category.news": "News",
    "blog.category.article": "Article",
    "blog.category.tutorial": "Tutorial",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle":
      "Answers to common questions about the Full-Stack AI Agent Template, Pydantic DeepAgents, and Logfire integration. Find guides and troubleshooting tips.",
    "faq.seeAll": "See all questions",
    "faq.category.template": "Full-Stack AI Agent Template",
    "faq.category.deepagents": "Pydantic DeepAgents",
    "faq.category.logfire": "Logfire Assistant",

    // OSS Landing
    "oss.meta.description":
      "Open-source tools for building production AI agents with Python. Full-stack templates, middleware, subagents, and more. 13 repos, 1,730+ GitHub stars. By Vstorm.",
    "oss.hero.badge": "13 Open Source Repos · 1,730+ Stars",
    "oss.hero.title.line1": "Build",
    "oss.hero.title.highlight": "Production AI Agents",
    "oss.hero.title.line2": "Not Infrastructure",
    "oss.hero.description":
      "Open-source Python tools battle-tested across 30+ deployments. Frameworks, templates, and libraries so you ship agents — not boilerplate.",
    "oss.hero.definition":
      "Vstorm OSS is a collection of 13 open-source Python packages for building production AI agents. It includes a full-stack project generator (FastAPI + Next.js), a deep agent framework (planning, sandboxed execution, subagents), RAG pipeline with 4 vector stores, middleware with lifecycle hooks, task planning, context summarization, and database tooling. Used by 50,000+ developers with 1,730+ GitHub stars and 830K+ PyPI downloads.",
    "oss.hero.cta.configure": "Build Your AI App",
    "oss.hero.cta.explore": "Explore Projects",
    "oss.hero.consultancy.title": "Need help building production AI agents?",
    "oss.hero.consultancy.description":
      "We're Vstorm — an Applied Agentic AI Engineering Consultancy with 30+ production AI agent implementations.",
    "oss.projects.title": "Our Projects",
    "oss.projects.subtitle":
      "Open-source packages for the Pydantic AI ecosystem — middleware, subagents, summarization, monitoring, and a full-stack AI agent template.",
    "oss.projects.viewAll": "View all projects",
    "oss.trustedby.title": "Featured & trusted by",
    "oss.trustedby.reactions": "LinkedIn reactions",
    "oss.trustedby.stars": "GitHub stars",
    "oss.trustedby.downloads": "PyPI downloads",
    "oss.howwework.title": "How It Works",
    "oss.howwework.subtitle": "From install to production in three steps",
    "oss.howwework.step1.title": "Pick a Package",
    "oss.howwework.step1.desc":
      "Browse our ecosystem of 20 open-source packages. Install via pip — each one works standalone or together.",
    "oss.howwework.step2.title": "Configure & Build",
    "oss.howwework.step2.desc":
      "Use our CLI generators, presets, and templates to scaffold your AI agent project in minutes, not weeks.",
    "oss.howwework.step3.title": "Ship to Production",
    "oss.howwework.step3.desc":
      "Deploy with Docker, add observability with Logfire, and scale confidently with production-tested code.",

    // Manifesto — Why We Build This
    "oss.manifesto.title": "Why We Build This",
    "oss.manifesto.quote":
      "After 30+ AI deployments, we kept hitting the same wall: teams spending months building infrastructure instead of solving their actual problem. Every project reinvented auth, streaming, agent orchestration — from scratch. We decided to open-source the patterns that actually survived production, so you can skip the part where everything breaks at 2 AM.",
    "oss.manifesto.author": "Vstorm Team — from the trenches of production AI",
    "oss.manifesto.p1.title": "Modular, Not Monolithic",
    "oss.manifesto.p1.desc":
      "Pick what you need, leave what you don't. Every package works standalone — no vendor lock-in, no hidden dependencies.",
    "oss.manifesto.p2.title": "Production-Tested First",
    "oss.manifesto.p2.desc":
      "Nothing ships until it survives real traffic. These aren't weekend prototypes — they're extracted from systems handling real users.",
    "oss.manifesto.p3.title": "Built by Practitioners",
    "oss.manifesto.p3.desc":
      "We use everything we ship. When something breaks, we feel it first. That's why our tools focus on what actually matters in production.",

    "oss.card.install": "Install",
    "oss.card.comingSoon": "Coming Soon",
    "oss.card.viewProject": "View Project",

    // Changelog
    "oss.changelog.title": "What's New",
    "oss.changelog.subtitle": "Latest releases across our ecosystem",
    "oss.changelog.1.title": "DeepResearch & Multi-provider Support",
    "oss.changelog.1.desc":
      "Added DeepResearch agent pattern, Gemini/Groq providers, and improved context management.",
    "oss.changelog.2.title": "Web Configurator & 5 AI Frameworks",
    "oss.changelog.2.desc":
      "Interactive web configurator with 75+ options, CrewAI & LangGraph support, Logfire integration.",
    "oss.changelog.3.title": "Logfire Assistant 1.0 — Chrome Extension",
    "oss.changelog.3.desc":
      "Natural language queries for Logfire data. Chat with your traces, metrics, and logs directly in the browser.",
    "oss.changelog.viewAll": "View all releases on GitHub",

    // Contributors
    "oss.contributors.title": "Built by the Community",
    "oss.contributors.subtitle": "Open source contributors making our tools better every day",
    "oss.contributors.join": "Become a contributor →",

    // Recent Posts
    "oss.recentPosts.title": "From Our Blog",
    "oss.recentPosts.subtitle": "Latest tutorials, guides, and insights on building AI agents",
    "oss.recentPosts.viewAll": "View all posts →",

    // Community
    "oss.community.title": "Community & Recognition",
    "oss.community.subtitle": "What the ecosystem says about our tools",
    "oss.community.stats.langchain": "Likes on LangChain feature",
    "oss.community.stats.references": "References in Pydantic AI issues & PRs",
    "oss.community.stats.docs": "Listed in official Pydantic AI docs",
    "oss.community.stats.contributors": "Community contributors",
    "oss.community.langchain.description":
      "LangChain featured our Full-Stack AI Agent Template as a Community Content Spotlight — generating 600+ likes, 26 comments, and 71 reshares.",

    // Generic Project Page
    "project.backToProjects": "All Projects",
    "project.install": "Installation",
    "project.features": "Features",
    "project.quickStart": "Quick Start",
    "project.useCases": "Use Cases",
    "project.lifecycle": "Hook Lifecycle",
    "project.links": "Links",
    "project.comingSoon.title": "Coming Soon",
    "project.comingSoon.description": "This project is currently in development.",

    // Nav
    "nav.projects": "Projects",

    // Pydantic DeepAgents Landing
    "deepagents.meta.description":
      "Production-grade Python framework for autonomous AI agents. Claude Code architecture with planning, filesystem access, subagents, and unlimited context.",
    "deepagents.hero.badge": "Open Source Framework",
    "deepagents.hero.title.line1": "Build Autonomous",
    "deepagents.hero.title.highlight": "AI Agents",
    "deepagents.hero.title.line2": "That Actually Ship",
    "deepagents.hero.description":
      "Production-grade Python framework implementing the deep agent pattern — agents that plan, code, execute, and delegate like Claude Code.",
    "deepagents.hero.cta.getStarted": "Try Quick Start",
    "deepagents.hero.cta.github": "View on GitHub",
    "deepagents.hero.terminal.planning": "Planning: Break task into steps...",
    "deepagents.hero.terminal.reading": "Reading: src/auth/models.py",
    "deepagents.hero.terminal.editing": "Editing: src/auth/jwt_handler.py",
    "deepagents.hero.terminal.delegating": "Delegating: code-review sub-agent",
    "deepagents.hero.terminal.complete": "Task complete — 4 files modified",
    "deepagents.howitworks.title": "Get Started in 4 Steps",
    "deepagents.howitworks.subtitle": "From pip install to autonomous agents in minutes",
    "deepagents.howitworks.step1.title": "Install",
    "deepagents.howitworks.step1.desc":
      "pip install pydantic-deepagents — one package, zero config, all batteries included.",
    "deepagents.howitworks.step2.title": "Define Your Agent",
    "deepagents.howitworks.step2.desc":
      "Describe what your agent does with typed tools, system prompts, and optional sub-agents.",
    "deepagents.howitworks.step3.title": "Run",
    "deepagents.howitworks.step3.desc":
      "Your agent plans, executes, and delegates — streaming results in real time via WebSocket.",
    "deepagents.howitworks.step4.title": "Scale with Sub-Agents",
    "deepagents.howitworks.step4.desc":
      "Break complex tasks into specialized sub-agents that collaborate autonomously.",
    "deepagents.providers.title": "Built on battle-tested tools",
    "deepagents.features.title": "Everything an agent needs",
    "deepagents.features.subtitle": "From planning to deployment, the complete deep agent toolkit.",
    "deepagents.features.deepagent.title": "Deep Agent Pattern",
    "deepagents.features.deepagent.desc":
      "Implements the Claude Code architecture — agents that reason, plan, and execute multi-step tasks autonomously.",
    "deepagents.features.context.title": "Unlimited Context",
    "deepagents.features.context.desc":
      "Built-in conversation compaction lets agents work on tasks that exceed any model's context window.",
    "deepagents.features.subagents.title": "Sub-agent Delegation",
    "deepagents.features.subagents.desc":
      "Spawn specialized sub-agents for parallel research, code generation, or analysis — then merge results.",
    "deepagents.features.memory.title": "Persistent Memory",
    "deepagents.features.memory.desc":
      "Agents remember across sessions. Project-scoped and global memory with automatic relevance filtering.",
    "deepagents.features.tools.title": "Rich Tool System",
    "deepagents.features.tools.desc":
      "Filesystem access, shell execution, web search, and custom tools — all with type-safe Pydantic models.",
    "deepagents.features.production.title": "Production-Grade",
    "deepagents.features.production.desc":
      "Streaming, checkpoints, multi-provider support, Logfire integration, and battle-tested in 30+ deployments.",
    "deepagents.architecture.title": "How it works",
    "deepagents.architecture.subtitle":
      "A layered architecture from your application down to the LLM.",
    "deepagents.code.title": "Three lines to your first agent",
    "deepagents.code.subtitle": "From basic setup to custom tools and sub-agent delegation.",
    "deepagents.usecases.title": "Built for real work",
    "deepagents.usecases.subtitle": "From code generation to research pipelines.",
    "deepagents.usecases.uc1.name": "Code Generation & Refactoring",
    "deepagents.usecases.uc1.desc":
      "Autonomous agents that read codebases, plan changes, and implement them across multiple files.",
    "deepagents.usecases.uc1.f1": "Multi-file refactoring",
    "deepagents.usecases.uc1.f2": "Automated code review",
    "deepagents.usecases.uc1.f3": "Test generation",
    "deepagents.usecases.uc1.f4": "Dependency updates",
    "deepagents.usecases.uc2.name": "Research Agents",
    "deepagents.usecases.uc2.desc":
      "Agents that search the web, analyze findings, and produce structured research reports.",
    "deepagents.usecases.uc2.f1": "Web search & scraping",
    "deepagents.usecases.uc2.f2": "Source cross-referencing",
    "deepagents.usecases.uc2.f3": "Structured output",
    "deepagents.usecases.uc2.f4": "Citation tracking",
    "deepagents.usecases.uc3.name": "Data Pipeline Automation",
    "deepagents.usecases.uc3.desc":
      "Build, monitor, and fix data pipelines with agents that understand your infrastructure.",
    "deepagents.usecases.uc3.f1": "Pipeline scaffolding",
    "deepagents.usecases.uc3.f2": "Error diagnosis",
    "deepagents.usecases.uc3.f3": "Schema migrations",
    "deepagents.usecases.uc3.f4": "Performance tuning",
    "deepagents.showcase.title": "CLI & DeepResearch",
    "deepagents.showcase.subtitle":
      "Interactive terminal, editor integration, and autonomous research — all included.",
    "deepagents.showcase.cli.title": "Interactive CLI",
    "deepagents.showcase.cli.desc":
      "A full-featured terminal interface built with Textual. Resume conversations, switch models, track token usage — or plug into Zed via ACP.",
    "deepagents.showcase.cli.f1": "Session resume & persistent memory",
    "deepagents.showcase.cli.f2": "Multi-provider model switching",
    "deepagents.showcase.cli.f3": "Custom skills & web search",
    "deepagents.showcase.cli.f4": "Zed editor integration via ACP",
    "deepagents.showcase.research.title": "DeepResearch",
    "deepagents.showcase.research.desc":
      "Autonomous research agent that plans queries, delegates to sub-agents, cross-references sources, and writes structured reports with citations.",
    "deepagents.showcase.research.f1": "Multi-step research planning",
    "deepagents.showcase.research.f2": "Parallel sub-agent delegation",
    "deepagents.showcase.research.f3": "Web search with full page fetching",
    "deepagents.showcase.research.f4": "Structured reports with citations",

    // Logfire Assistant
    "logfire.meta.description":
      "AI-powered debugging and analysis tool for Pydantic Logfire. Ask questions in plain English, get SQL queries and visualizations.",
    "logfire.hero.badge": "Chrome Extension + FastAPI Backend",
    "logfire.hero.title.line1": "Stop Reading Logs.",
    "logfire.hero.title.highlight": "Ask Your Traces",
    "logfire.hero.title.line2": "in Plain English",
    "logfire.hero.description":
      "AI-powered debugging companion for Pydantic Logfire. Ask questions about your traces — get SQL queries, data tables, and charts back instantly.",
    "logfire.hero.cta.getStarted": "Install Extension",
    "logfire.hero.cta.docs": "View Docs",
    "logfire.features.title": "Everything you need to debug smarter",
    "logfire.features.subtitle": "From natural language queries to auto-generated visualizations.",
    "logfire.features.nlquery.title": "Natural Language Queries",
    "logfire.features.nlquery.desc":
      "Ask about your traces in plain English. No SQL knowledge required — the assistant translates your questions automatically.",
    "logfire.features.sql.title": "Auto SQL Generation",
    "logfire.features.sql.desc":
      "Pydantic AI agent translates questions to optimized Logfire SQL. View the generated query or just read the results.",
    "logfire.features.viz.title": "Auto Visualizations",
    "logfire.features.viz.desc":
      "Charts and data tables generated automatically from query results. Bar charts, timelines, and structured summaries.",
    "logfire.features.span.title": "Span Context Analysis",
    "logfire.features.span.desc":
      "Click any span in Logfire — the assistant captures trace_id, span_id, and full context for precise debugging.",
    "logfire.features.prompts.title": "Custom Prompts",
    "logfire.features.prompts.desc":
      "Create reusable prompt templates with slash commands. Built-in prompts for /errors, /costs, /slow, /performance, and more.",
    "logfire.features.memory.title": "Conversation Memory",
    "logfire.features.memory.desc":
      "Full conversation history with search and project filtering. Resume any debugging session where you left off.",
    "logfire.howitworks.title": "How it works",
    "logfire.howitworks.subtitle": "From question to insight in seconds.",
    "logfire.howitworks.step1.title": "Ask a question",
    "logfire.howitworks.step1.desc":
      'Type in plain English — "What were the slowest requests in the last hour?"',
    "logfire.howitworks.step2.title": "AI generates SQL",
    "logfire.howitworks.step2.desc":
      "Pydantic AI agent translates your question to optimized Logfire SQL.",
    "logfire.howitworks.step3.title": "Query executes",
    "logfire.howitworks.step3.desc":
      "SQL runs against the Logfire API. Results stream back in real-time via WebSocket.",
    "logfire.howitworks.step4.title": "Get insights",
    "logfire.howitworks.step4.desc":
      "Data tables, charts, or narrative answers — exactly what you need to debug.",
    "logfire.usecases.title": "Built for real debugging",
    "logfire.usecases.subtitle": "From slow requests to cost tracking.",
    "logfire.usecases.uc1.name": "Debug Slow Requests",
    "logfire.usecases.uc1.desc":
      "Find bottlenecks instantly. Ask which endpoints are slowest and get span-by-span timing breakdowns.",
    "logfire.usecases.uc1.f1": "Endpoint latency ranking",
    "logfire.usecases.uc1.f2": "Span-by-span timing",
    "logfire.usecases.uc1.f3": "Percentile analysis (p50, p95, p99)",
    "logfire.usecases.uc1.f4": "Comparison across time periods",
    "logfire.usecases.uc2.name": "LLM Usage & Costs",
    "logfire.usecases.uc2.desc":
      "Track token usage, costs, and call counts across all your LLM providers in one place.",
    "logfire.usecases.uc2.f1": "Token usage by model",
    "logfire.usecases.uc2.f2": "Cost breakdown per provider",
    "logfire.usecases.uc2.f3": "Usage trends over time",
    "logfire.usecases.uc2.f4": "Auto-generated cost charts",
    "logfire.usecases.uc3.name": "Error Analysis",
    "logfire.usecases.uc3.desc":
      "Find error patterns, frequencies, and root causes. Get structured analysis of what went wrong.",
    "logfire.usecases.uc3.f1": "Error frequency patterns",
    "logfire.usecases.uc3.f2": "Root cause analysis",
    "logfire.usecases.uc3.f3": "Error trends over time",
    "logfire.usecases.uc3.f4": "Affected endpoint mapping",
    "logfire.screenshots.title": "See it in action",
    "logfire.screenshots.subtitle":
      "A Chrome extension that lives right next to your Logfire dashboard.",
    "logfire.screenshots.chat": "Data tables",
    "logfire.screenshots.chart": "Auto charts",
    "logfire.screenshots.sql": "SQL generation",
    "logfire.screenshots.span": "Span context",
    "logfire.screenshots.prompts": "Custom prompts",
    "logfire.screenshots.conversations": "History",
    "logfire.tech.title": "Built with",

    // Footer — Product Restatement
    "footer.restatement.oss.title": "Ready to build your first production AI agent?",
    "footer.restatement.oss.description":
      "Open-source tools, battle-tested patterns, zero boilerplate. Configure your stack and ship in minutes — not months.",
    "footer.restatement.oss.cta": "Build Your AI App",
    "footer.restatement.template.title": "Ready to ship your AI app?",
    "footer.restatement.template.description":
      "Pick your frameworks, generate a production-ready project, and deploy. 75+ options, one command, zero config debt.",
    "footer.restatement.template.cta": "Configure & Download",
    "footer.restatement.deepagents.title": "Ready to build agents that actually think?",
    "footer.restatement.deepagents.description":
      "Install pydantic-deep, define your agent, and let it plan, code, and delegate — just like Claude Code, but yours.",
    "footer.restatement.deepagents.cta": "Try Quick Start",
    "footer.restatement.logfire.title": "Ready to stop reading logs line by line?",
    "footer.restatement.logfire.description":
      "Install the extension, connect to Logfire, and ask your traces questions in plain English. Free and open-source.",
    "footer.restatement.logfire.cta": "Install Extension",

    // Footer — Consultancy
    "footer.built": "Built by",
    "footer.cta.title": "Need help implementing this in your company?",
    "footer.cta.description":
      "an Applied Agentic AI Engineering Consultancy with 30+ production AI agent implementations.",
    "footer.cta.button": "Talk to us",
    "footer.oss.cta.title": "Need help building production AI agents?",

    // UI shared
    "ui.clickToCopy": "Click to copy",
    "ui.copied": "Copied!",
    "ui.terminal": "Terminal",
    "ui.orWithPreset": "Or with a preset:",
    "ui.followOnGithub": "Follow on GitHub",

    // Blog
    "blog.search": "Search articles...",
    "blog.noPosts": "No posts yet. Check back soon.",

    // Home
    "oss.meta.title": "Vstorm OSS — Open Source AI Agent Tools for Python",

    // Code tabs
    "deepagents.code.tab.basic": "Basic",
    "deepagents.code.tab.tools": "With Tools",
    "deepagents.code.tab.subagents": "Sub-agents",

    // Stats Bar
    "stats.template.v1": "75+",
    "stats.template.l1": "Config Options",
    "stats.template.v2": "5",
    "stats.template.l2": "AI Frameworks",
    "stats.template.v3": "3",
    "stats.template.l3": "Presets",
    "stats.template.v4": "246",
    "stats.template.l4": "Templates",
    "stats.deepagents.v1": "30+",
    "stats.deepagents.l1": "Production Deployments",
    "stats.deepagents.v2": "5+",
    "stats.deepagents.l2": "LLM Providers",
    "stats.deepagents.v3": "100",
    "stats.deepagents.l3": "% Type-Safe",
    "stats.deepagents.v4": "0",
    "stats.deepagents.l4": "Vendor Lock-in",
    "stats.logfire.v1": "6",
    "stats.logfire.l1": "Query Types",
    "stats.logfire.v2": "3",
    "stats.logfire.l2": "Output Formats",
    "stats.logfire.v3": "10+",
    "stats.logfire.l3": "LLM Providers",
    "stats.logfire.v4": "100",
    "stats.logfire.l4": "% Self-Hosted",

    // Before/After
    "beforeafter.title": "Why use this?",
    "beforeafter.template.before.title": "Without the template",
    "beforeafter.template.after.title": "With the template",
    "beforeafter.template.before.1": "Days setting up FastAPI + Next.js boilerplate",
    "beforeafter.template.before.2": "Manual AI framework integration",
    "beforeafter.template.before.3": "No WebSocket streaming out of the box",
    "beforeafter.template.before.4": "Docker and deployment configured from scratch",
    "beforeafter.template.before.5": "No observability until you add it yourself",
    "beforeafter.template.after.1": "Production-ready project in minutes",
    "beforeafter.template.after.2": "5 AI frameworks pre-integrated and tested",
    "beforeafter.template.after.3": "WebSocket streaming with tool call visualization",
    "beforeafter.template.after.4": "Docker, Kubernetes, and CI/CD included",
    "beforeafter.template.after.5": "Logfire, Sentry, and Prometheus built-in",
    "beforeafter.deepagents.before.title": "Without DeepAgents",
    "beforeafter.deepagents.after.title": "With DeepAgents",
    "beforeafter.deepagents.before.1": "Fragile chains that break on unexpected inputs",
    "beforeafter.deepagents.before.2": "No type safety — dict-based, error-prone",
    "beforeafter.deepagents.before.3": "Hard to debug agent decision paths",
    "beforeafter.deepagents.before.4": "Manual context window management",
    "beforeafter.deepagents.before.5": "No subagent delegation pattern",
    "beforeafter.deepagents.after.1": "Modular agents with structured planning",
    "beforeafter.deepagents.after.2": "Fully type-safe with Pydantic models",
    "beforeafter.deepagents.after.3": "Complete observability via Logfire",
    "beforeafter.deepagents.after.4": "Automatic context summarization",
    "beforeafter.deepagents.after.5": "Built-in subagent delegation and communication",
    "beforeafter.logfire.before.title": "Without Logfire Assistant",
    "beforeafter.logfire.after.title": "With Logfire Assistant",
    "beforeafter.logfire.before.1": "Writing SQL queries manually against Logfire schema",
    "beforeafter.logfire.before.2": "Context-switching between Logfire dashboard and tools",
    "beforeafter.logfire.before.3": "No automatic visualization of query results",
    "beforeafter.logfire.before.4": "Repeating common queries from memory",
    "beforeafter.logfire.before.5": "No conversation history or context",
    "beforeafter.logfire.after.1": "Ask questions in plain English",
    "beforeafter.logfire.after.2": "Inline sidebar right in the Logfire dashboard",
    "beforeafter.logfire.after.3": "Auto-generated tables and charts",
    "beforeafter.logfire.after.4": "Reusable prompt templates with slash commands",
    "beforeafter.logfire.after.5": "Full conversation history with project filtering",

    // Comparison Tables
    "comparison.title": "How does it compare?",
    "comparison.subtitle": "See how it stacks up against alternatives.",
    "comparison.feature": "Feature",
    "comparison.template.col.ours": "AI Agent Template",
    "comparison.template.col.manual": "Manual Setup",
    "comparison.template.col.other": "Other Boilerplates",
    "comparison.template.row.ai": "AI Agent Integration",
    "comparison.template.row.multidb": "Multi-Database Support",
    "comparison.template.row.auth": "Auth Built-in",
    "comparison.template.row.websocket": "WebSocket Streaming",
    "comparison.template.row.configurator": "Web Configurator",
    "comparison.template.row.typesafe": "Type-Safe Code",
    "comparison.template.row.observable": "Observability",
    "comparison.deepagents.col.ours": "DeepAgents",
    "comparison.deepagents.row.typesafe": "Type Safety",
    "comparison.deepagents.row.subagents": "Subagent Delegation",
    "comparison.deepagents.row.tools": "Tool System",
    "comparison.deepagents.row.multiprovider": "Multi-Provider",
    "comparison.deepagents.row.observability": "Observability",
    "comparison.deepagents.row.production": "Production Tested",
    "comparison.logfire.col.ours": "Logfire Assistant",
    "comparison.logfire.col.manual": "Manual SQL",
    "comparison.logfire.col.generic": "Generic AI Chat",
    "comparison.logfire.row.sql": "Logfire-native SQL",
    "comparison.logfire.row.context": "Span Context Aware",
    "comparison.logfire.row.charts": "Auto Charts",
    "comparison.logfire.row.prompts": "Custom Prompts",
    "comparison.logfire.row.history": "Conversation History",
    "comparison.logfire.row.nl": "Natural Language Input",

    // Compare landing pages
    "compare.index.title": "Compare Our Tools",
    "compare.index.subtitle":
      "Side-by-side comparisons of Pydantic DeepAgents, AI agent templates, and Python tools vs popular alternatives. Find the right tool for your AI stack.",
    "compare.index.meta.description":
      "Feature comparisons of Vstorm OSS tools vs LangChain, CrewAI, AutoGen, and other AI frameworks",
    "compare.verdict": "The Verdict",
    "compare.highlights": "Key Differences",
    "compare.table.title": "Feature Comparison",
    "compare.code.title": "Code Comparison",
    "compare.whenToUse": "When to Use Which",
    "compare.whenToUse.ours": "Choose {product} when:",
    "compare.whenToUse.theirs": "Choose {competitor} when:",
    "compare.faq.title": "Frequently Asked Questions",
    "compare.relatedTitle": "Related Comparisons",
    "compare.cta.title": "Ready to try {product}?",
    "compare.cta.button": "Get Started",
    "compare.winner.ours": "Advantage: {product}",
    "compare.winner.theirs": "Advantage: {competitor}",
    "compare.winner.tie": "Tie",

    // Testimonials
    "testimonials.title": "What developers say",
    "testimonials.subtitle": "From early adopters and beta testers.",
    "testimonials.1.quote":
      "Saved us weeks of boilerplate. The template generated a production-ready AI app that we deployed the same day.",
    "testimonials.1.name": "Marek K.",
    "testimonials.1.role": "Senior Backend Engineer",
    "testimonials.2.quote":
      "DeepAgents finally gave us type-safe agents with proper observability. We migrated from LangChain in a weekend.",
    "testimonials.2.name": "Sarah R.",
    "testimonials.2.role": "AI Platform Lead",
    "testimonials.3.quote":
      "Logfire Assistant turned debugging from 30 minutes of manual SQL into a 30-second conversation. Game changer for our team.",
    "testimonials.3.name": "Jan L.",
    "testimonials.3.role": "DevOps Engineer",

    // Newsletter
    "newsletter.title": "Stay updated",
    "newsletter.subtitle":
      "Get notified about new releases, features, and AI engineering insights.",
    "newsletter.placeholder": "your@email.com",
    "newsletter.button": "Subscribe",
    "newsletter.success": "Thanks! We'll keep you posted.",
    "404.title": "Page Not Found",
    "404.description": "The page you're looking for doesn't exist or has been moved.",
    "404.back": "Back to Home",
    "blog.readingTime": "{min} min read",
    "blog.pagination.prev": "Previous",
    "blog.pagination.next": "Next",
    "blog.share": "Share this article",
    "blog.share.copied": "Link copied!",
    "blog.relatedPosts": "Related Articles",
    "blog.stickyCta.text": "Need help building production AI agents?",
    "blog.stickyCta.button": "Talk to Vstorm",
    "skip.toContent": "Skip to content",

    // About page
    "about.title": "About Vstorm OSS",
    "about.subtitle": "Open-source AI agent tools built by practitioners, for practitioners.",
    "about.meta.description":
      "Learn about Vstorm OSS - 13 open-source repositories, 1,730+ GitHub stars, and 830K+ PyPI downloads. Production AI agent tools for Python. Built by Vstorm.",
    "about.company.title": "Who We Are",
    "about.company.description":
      "Vstorm is an Applied Agentic AI Engineering Consultancy. We build production AI agent systems for companies across the US, Europe, and the Middle East. Every tool in this portfolio was born from a real production challenge - we open-source what we build.",
    "about.numbers.title": "By the Numbers",
    "about.numbers.stars": "GitHub Stars",
    "about.numbers.downloads": "PyPI Downloads",
    "about.numbers.repos": "Open-Source Repos",
    "about.numbers.projects": "Client Projects",
    "about.company.details":
      "Founded in 2017, Vstorm specializes in custom AI and LLM-based software development. With a team of 25+ engineers and over 90 successful projects for clients in the US, UK, and Western Europe, we drive ROI through hyper-automation, hyper-personalization, and enhanced decision-making. Recognized by Deloitte Technology Fast 50 and the first AI consultancy accepted into the Agentic AI Foundation.",
    "about.partners.title": "Partners & Ecosystem",
    "about.partners.description":
      "We contribute to leading Agentic AI frameworks and collaborate with organizations shaping the future of AI agents.",
    "about.philosophy.title": "Why Open Source",
    "about.philosophy.description":
      "We believe the best AI agent tooling should be open, modular, and production-tested. Closed-source monoliths lock you into one vendor's decisions. Our approach: build each capability as a standalone package, test it across 90+ client projects, then release it. If it works in production, it should be available to everyone.",
    "about.links.title": "Connect",
    "blog.tag.title": "Tag: {tag}",
    "blog.tag.postCount": "{count} posts",
    "oss.githubStars": "stars on GitHub — Star us!",
    "changelog.title": "Changelog",
    "changelog.subtitle":
      "Track releases across all Vstorm OSS projects — Full-Stack AI Agent Template, Pydantic DeepAgents, and more. New features, bug fixes, and migration notes.",
    "roadmap.title": "Roadmap",
    "roadmap.subtitle": "What we're building and what's coming next",
    "nav.about": "About",
    "nav.compare": "Compare",
    "nav.usecases": "Use Cases",
    "usecases.index.title": "Use Cases",
    "usecases.index.subtitle":
      "Real-world use cases with working code examples — research agents, RAG chatbots, SQL agents, and more.",
    "usecases.problem.title": "The Problem",
    "usecases.solution.title": "The Solution",
    "usecases.code.title": "Working Code",
    "usecases.steps.title": "Step by Step",
    "usecases.related.title": "Related Use Cases",
    "usecases.cta.title": "Ready to build this?",
    "usecases.cta.description":
      "Get started with Vstorm's open-source tools — production-tested, fully documented, and free.",
    "usecases.cta.button": "Get Started",
    "nav.guides": "Guides",
    "guides.index.title": "Guides",
    "guides.index.subtitle":
      "Learn how to build AI agents with different frameworks — step-by-step tutorials with working code. Pydantic AI, LangChain, LangGraph, CrewAI, and more.",
    "guides.step1.title": "Install dependencies",
    "guides.step1.description": "Install {framework} and the required tools for this use case.",
    "guides.step2.title": "Define your tools",
    "guides.step2.description":
      "Create the domain-specific tool functions your agent will use to interact with external services.",
    "guides.step3.title": "Create the agent and run",
    "guides.step3.description":
      "Initialize the {framework} agent with your tools, set the system prompt, and execute a query.",
    "guides.related.frameworks": "Build with other frameworks",
    "guides.related.usecases": "More guides with {framework}",
    "guides.cta.title": "Ready to build with {framework}?",
    "guides.cta.description":
      "Generate a production-ready project with {framework} pre-configured — FastAPI + Next.js, auth, streaming, and more.",
    "guides.cta.button": "Get Started",

    // Tools
    "nav.tools": "Free Tools",
    "tools.index.title": "Free AI Agent Tools",
    "tools.index.subtitle":
      "Interactive tools to help you choose the right AI framework, architecture, and project setup — no signup required.",
    "tools.tryFree": "Try it free",
    "tools.badge.free": "Free Tool",
    "tools.badge.interactive": "Interactive",
    "tools.badge.calculator": "Calculator",
    "tools.badge.quiz": "Free Quiz — 5 Questions",
    "tools.configurator.title": "AI Agent Project Configurator",
    "tools.configurator.subtitle":
      "Configure a production-ready FastAPI + Next.js AI agent project with 75+ options. Download as ZIP or CLI — runs locally in under 2 minutes.",
    "tools.configurator.description":
      "Configure and download a production-ready FastAPI + Next.js AI agent project. Choose from 5 frameworks, 4 databases, and 75+ options — no signup required.",
    "tools.configurator.features.title": "What you can configure",
    "tools.configurator.howItWorks": "How It Works",
    "tools.configurator.step1": "Choose your options",
    "tools.configurator.step1.desc":
      "Select AI framework, database, auth, integrations, and infrastructure across 9 configuration steps.",
    "tools.configurator.step2": "Preview your project",
    "tools.configurator.step2.desc":
      "See a live preview of your project structure, dependencies, and configuration as you build.",
    "tools.configurator.step3": "Download & run",
    "tools.configurator.step3.desc":
      "Download as ZIP or copy the CLI command. Your project runs locally in under 2 minutes.",
    "tools.configurator.openButton": "Open Configurator",
    "tools.configurator.cta.title": "Ready to build your AI agent project?",
    "tools.configurator.cta.description":
      "Open the configurator, choose your stack, and download a production-ready project in minutes.",
    "tools.comparison.title": "AI Framework Comparison Calculator",
    "tools.comparison.subtitle":
      "Answer 6 questions about your project and get a scored recommendation across 5 Python AI agent frameworks.",
    "tools.comparison.description":
      "Answer 6 quick questions about your project requirements and get a personalized AI framework recommendation with scored results.",
    "tools.comparison.frameworks.title": "Frameworks We Compare",
    "tools.comparison.cta.title": "Want a deeper comparison?",
    "tools.comparison.cta.description":
      "Check our detailed side-by-side comparisons with feature tables, code examples, and migration guides.",
    "tools.comparison.cta.button": "See Detailed Comparisons",
    "tools.quiz.title": "Agent Architecture Quiz",
    "tools.quiz.subtitle":
      "Answer 5 quick questions about your project and discover the ideal agent architecture pattern — with a framework recommendation and next steps.",
    "tools.quiz.description":
      "Take a 5-question quiz to discover the best agent architecture pattern for your use case — from simple ReAct to hierarchical multi-agent systems.",
    "tools.quiz.patterns.title": "Architecture Patterns We Evaluate",
    "tools.quiz.cta.title": "Know your architecture — now pick a framework",
    "tools.quiz.cta.description":
      "Use our framework comparison calculator to find the best framework for your chosen architecture.",
    "tools.quiz.cta.button": "Compare Frameworks",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export function t(_lang: Lang, key: TranslationKey): string {
  return translations.en[key] ?? key;
}

export function getLangFromUrl(_url: URL): Lang {
  return defaultLang;
}
