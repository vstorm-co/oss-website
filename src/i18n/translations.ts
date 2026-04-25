export const languages = {
  en: "English",
  pl: "Polski",
  de: "Deutsch",
  es: "Español",
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

  pl: {
    "meta.description":
      "Narzędzia open-source do budowania produkcyjnych agentów AI w Pythonie. Template full-stack (FastAPI + Next.js), pipeline RAG, 5 frameworków AI, middleware, subagenty. Od Vstorm.",

    "nav.back": "Wróć do strony głównej",
    "hero.badge": "Open Source",
    "hero.title.line1": "Twoja pierwsza produkcyjna",
    "hero.title.highlight": "aplikacja AI",
    "hero.title.line2": "w 30 minut",
    "hero.description":
      "Wybierz spośród 5 frameworków AI, skonfiguruj 75+ opcji i wdróż. FastAPI + Next.js z autentykacją, streamingiem i infrastrukturą — gotowe od razu.",
    "hero.cta.configure": "Konfiguruj i pobierz",
    "hero.cta.github": "Zobacz na GitHub",
    "hero.terminal.success": "Projekt utworzony pomyślnie",
    "frameworks.title": "Współpracuje z Twoim stackiem",
    "features.title": "Wszystko czego potrzebujesz",
    "features.subtitle": "Od bazy danych po deployment, skonfigurowane jednym poleceniem.",
    "features.ai.title": "5 frameworków AI",
    "features.ai.desc":
      "Pydantic AI, LangChain, LangGraph, CrewAI i DeepAgents z WebSocket streamingiem.",
    "features.options.title": "75+ opcji",
    "features.options.desc":
      "Baza danych, autoryzacja, zadania w tle, caching, rate limiting, storage, webhooks i więcej.",
    "features.presets.title": "3 presety",
    "features.presets.desc":
      "Minimal, Production lub AI Agent. Jedno polecenie, zero konfiguracji.",
    "features.fullstack.title": "Full-Stack",
    "features.fullstack.desc":
      "Backend FastAPI z frontendem Next.js 15. TypeScript, App Router, Tailwind CSS.",
    "features.production.title": "Gotowy na produkcję",
    "features.production.desc":
      "Docker, reverse proxy, Kubernetes, CI/CD, generowanie .env od razu.",
    "features.observable.title": "Obserwowalny",
    "features.observable.desc":
      "Integracja Logfire, Sentry i Prometheus. Wiedz co robią Twoi agenci.",
    "presets.title": "Zacznij od presetu",
    "presets.subtitle": "Lub dostosuj każdą opcję w konfiguratorze.",
    "presets.minimal.name": "Minimalny",
    "presets.minimal.desc": "Samo API, bez bazy danych, bez autoryzacji. Idealny do prototypów.",
    "presets.minimal.f1": "Bez bazy danych",
    "presets.minimal.f2": "Bez autoryzacji",
    "presets.minimal.f3": "Bez Dockera",
    "presets.minimal.f4": "Podstawowe FastAPI",
    "presets.minimal.cta": "Użyj Minimalny",
    "presets.production.name": "Produkcyjny",
    "presets.production.tag": "Rekomendowany",
    "presets.production.desc": "Pełny setup produkcyjny. Gotowy do deploymentu.",
    "presets.production.f1": "PostgreSQL + JWT",
    "presets.production.f2": "Redis + Caching",
    "presets.production.f3": "Sentry + Prometheus",
    "presets.production.f4": "Docker + Kubernetes",
    "presets.production.f5": "GitHub Actions CI",
    "presets.production.cta": "Użyj Produkcyjny",
    "presets.agent.name": "Agent AI",
    "presets.agent.tag": "Najpopularniejszy",
    "presets.agent.desc": "Aplikacja AI ze streamingiem i historią rozmów.",
    "presets.agent.f1": "Pydantic AI (domyślny)",
    "presets.agent.f2": "WebSocket streaming",
    "presets.agent.f3": "Historia konwersacji",
    "presets.agent.f4": "PostgreSQL + Redis",
    "presets.agent.f5": "Frontend Next.js",
    "presets.agent.cta": "Użyj Agent AI",

    // Template — How It Works
    "template.howitworks.title": "Jak to działa",
    "template.howitworks.subtitle": "Od zera do produkcji w czterech krokach",
    "template.howitworks.step1.title": "Wybierz stos technologiczny",
    "template.howitworks.step1.desc":
      "Wybierz spośród 5 frameworków AI, 3 frontendów i 75+ opcji konfiguracji przez konfigurator webowy lub CLI.",
    "template.howitworks.step2.title": "Wygeneruj i zbuduj",
    "template.howitworks.step2.desc":
      "Jedna komenda generuje w pełni skonfigurowany projekt — Docker, CI/CD, auth, bazę danych i wybrany stos AI.",
    "template.howitworks.step3.title": "Zbuduj swojego agenta",
    "template.howitworks.step3.desc":
      "Skup się na logice AI. Szablon obsługuje routing, streaming, zarządzanie stanem i boilerplate wdrożeniowy.",
    "template.howitworks.step4.title": "Wdróż na produkcję",
    "template.howitworks.step4.desc":
      "Wdróż komendą docker compose up. Monitoring, logowanie i health checki są skonfigurowane od razu.",

    "quickstart.title": "Rozpocznij",
    "quickstart.step1": "Zainstaluj",
    "quickstart.step2": "Utwórz",
    "quickstart.step3": "Uruchom",
    "quickstart.or": "Lub użyj konfiguratora webowego",

    // Blog
    "nav.blog": "Blog",
    "blog.title": "Blog",
    "blog.subtitle":
      "Poradniki, porównania frameworków i przewodniki do budowania produkcyjnych agentów AI w Pythonie. Pydantic AI, LangChain, LangGraph, CrewAI i więcej.",
    "blog.readMore": "Czytaj więcej",
    "blog.publishedOn": "Opublikowano",
    "blog.updatedOn": "Zaktualizowano",
    "blog.backToBlog": "Wróć do bloga",
    "blog.tableOfContents": "Spis treści",
    "blog.availableIn": "Dostępne w",
    "blog.allCategories": "Wszystkie",
    "blog.category.open-source": "Open Source",
    "blog.category.news": "Aktualności",
    "blog.category.article": "Artykuł",

    // FAQ
    "faq.title": "Często zadawane pytania",
    "faq.subtitle":
      "Odpowiedzi na pytania o Full-Stack AI Agent Template, Pydantic DeepAgents i integrację z Logfire. Poradniki i wskazówki dotyczące rozwiązywania problemów.",
    "faq.seeAll": "Zobacz wszystkie pytania",
    "faq.category.template": "Full-Stack AI Agent Template",
    "faq.category.deepagents": "Pydantic DeepAgents",
    "faq.category.logfire": "Logfire Assistant",

    // OSS Landing
    "oss.meta.description":
      "Open-source narzędzia do budowania produkcyjnych agentów AI w Pythonie. Szablony full-stack, middleware, subagenty i więcej. 13 repozytoriów, 1730+ gwiazdek. By Vstorm.",
    "oss.hero.badge": "13 repozytoriów Open Source · 1 730+ gwiazdek",
    "oss.hero.title.line1": "Twórz",
    "oss.hero.title.highlight": "produkcyjne agenty AI",
    "oss.hero.title.line2": "Nie infrastrukturę",
    "oss.hero.description":
      "Open-source'owe narzędzia Python sprawdzone w 30+ wdrożeniach. Frameworki, szablony i biblioteki — buduj agentów, nie boilerplate.",
    "oss.hero.definition":
      "Vstorm OSS to zbiór 13 open-sourcex27owych pakietów Python do budowania produkcyjnych agentów AI. Zawiera generator projektów full-stack (FastAPI + Next.js), framework deep agent (planowanie, sandbox, subagenty), pipeline RAG z 4 bazami wektorowymi, middleware z lifecycle hooks, planowanie zadań, kompresję kontekstu i narzędzia bazodanowe. Używany przez 50 000+ deweloperów, 1 730+ gwiazdek na GitHub i 830K+ pobrań z PyPI.",
    "oss.hero.definition":
      "Vstorm OSS is a collection of 13 open-source Python packages for building production AI agents. It includes a full-stack project generator (FastAPI + Next.js), a deep agent framework (planning, sandboxed execution, subagents), RAG pipeline with 4 vector stores, middleware with lifecycle hooks, task planning, context summarization, and database tooling. Used by 50,000+ developers with 1,730+ GitHub stars and 830K+ PyPI downloads.",
    "oss.hero.cta.configure": "Zbuduj swoją aplikację AI",
    "oss.hero.cta.explore": "Przeglądaj projekty",
    "oss.hero.consultancy.title": "Potrzebujesz pomocy z produkcyjnymi agentami AI?",
    "oss.hero.consultancy.description":
      "Jesteśmy Vstorm — konsultingowa firma inżynierii AI z ponad 30 wdrożeniami agentów AI w produkcji.",
    "oss.projects.title": "Nasze projekty",
    "oss.projects.subtitle":
      "Pakiety open-source dla ekosystemu Pydantic AI — middleware, subagenty, podsumowywanie, monitorowanie i szablon agenta AI full-stack.",
    "oss.projects.viewAll": "Zobacz wszystkie projekty",
    "oss.trustedby.title": "Polecane i zaufane przez",
    "oss.trustedby.reactions": "reakcji na LinkedIn",
    "oss.trustedby.stars": "gwiazdek GitHub",
    "oss.trustedby.downloads": "pobrań PyPI",
    "oss.howwework.title": "Jak to działa",
    "oss.howwework.subtitle": "Od instalacji do produkcji w trzech krokach",
    "oss.howwework.step1.title": "Wybierz pakiet",
    "oss.howwework.step1.desc":
      "Przeglądaj nasz ekosystem 20 pakietów open source. Instaluj przez pip — każdy działa samodzielnie lub razem.",
    "oss.howwework.step2.title": "Konfiguruj i buduj",
    "oss.howwework.step2.desc":
      "Użyj naszych generatorów CLI, presetów i szablonów, aby stworzyć projekt agenta AI w minuty, nie tygodnie.",
    "oss.howwework.step3.title": "Wdróż na produkcję",
    "oss.howwework.step3.desc":
      "Deployuj z Dockerem, dodaj obserwowalność z Logfire i skaluj pewnie z kodem przetestowanym w produkcji.",

    // Manifesto — Why We Build This
    "oss.manifesto.title": "Dlaczego to budujemy",
    "oss.manifesto.quote":
      "Po ponad 30 wdrożeniach AI ciągle uderzaliśmy w ten sam mur: zespoły spędzały miesiące na budowaniu infrastruktury zamiast rozwiązywać swój właściwy problem. Każdy projekt od nowa wymyślał auth, streaming, orkiestrację agentów — od zera. Postanowiliśmy udostępnić open-source wzorce, które faktycznie przeżyły produkcję, żebyś mógł pominąć etap, w którym wszystko się sypie o 2 w nocy.",
    "oss.manifesto.author": "Zespół Vstorm — z okopów produkcyjnego AI",
    "oss.manifesto.p1.title": "Modularnie, nie monolitycznie",
    "oss.manifesto.p1.desc":
      "Wybierz co potrzebujesz, zostaw resztę. Każdy pakiet działa samodzielnie — bez vendor lock-in, bez ukrytych zależności.",
    "oss.manifesto.p2.title": "Najpierw przetestowane w produkcji",
    "oss.manifesto.p2.desc":
      "Nic nie jest publikowane, dopóki nie przetrwa realnego ruchu. To nie weekendowe prototypy — to wzorce wyciągnięte z systemów obsługujących prawdziwych użytkowników.",
    "oss.manifesto.p3.title": "Budowane przez praktyków",
    "oss.manifesto.p3.desc":
      "Sami używamy wszystkiego co wydajemy. Kiedy coś się psuje, czujemy to pierwsi. Dlatego nasze narzędzia skupiają się na tym, co naprawdę ma znaczenie w produkcji.",

    "oss.card.install": "Instalacja",
    "oss.card.comingSoon": "Wkrótce",
    "oss.card.viewProject": "Zobacz projekt",

    // Changelog
    "oss.changelog.title": "Co nowego",
    "oss.changelog.subtitle": "Najnowsze wydania w naszym ekosystemie",
    "oss.changelog.1.title": "DeepResearch i wsparcie wielu providerów",
    "oss.changelog.1.desc":
      "Dodano wzorzec agenta DeepResearch, providery Gemini/Groq oraz ulepszone zarządzanie kontekstem.",
    "oss.changelog.2.title": "Konfigurator webowy i 5 frameworków AI",
    "oss.changelog.2.desc":
      "Interaktywny konfigurator webowy z 75+ opcjami, wsparcie CrewAI i LangGraph, integracja z Logfire.",
    "oss.changelog.3.title": "Logfire Assistant 1.0 — rozszerzenie Chrome",
    "oss.changelog.3.desc":
      "Zapytania w języku naturalnym do danych Logfire. Rozmawiaj ze swoimi trace'ami, metrykami i logami w przeglądarce.",
    "oss.changelog.viewAll": "Zobacz wszystkie wydania na GitHub",

    // Contributors
    "oss.contributors.title": "Tworzone przez społeczność",
    "oss.contributors.subtitle":
      "Kontrybutorzy open source ulepszający nasze narzędzia każdego dnia",
    "oss.contributors.join": "Zostań kontrybutorem →",

    // Recent Posts
    "oss.recentPosts.title": "Z naszego bloga",
    "oss.recentPosts.subtitle": "Najnowsze tutoriale, przewodniki i porady o budowie agentów AI",
    "oss.recentPosts.viewAll": "Zobacz wszystkie posty →",

    // Community
    "oss.community.title": "Społeczność i uznanie",
    "oss.community.subtitle": "Co ekosystem mówi o naszych narzędziach",
    "oss.community.stats.langchain": "Polubień na poście LangChain",
    "oss.community.stats.references": "Odniesień w issues i PR-ach Pydantic AI",
    "oss.community.stats.docs": "Wymienieni w oficjalnej dokumentacji Pydantic AI",
    "oss.community.stats.contributors": "Kontrybutorzy ze społeczności",
    "oss.community.langchain.description":
      "LangChain wyróżnił nasz Full-Stack AI Agent Template jako Community Content Spotlight — generując 600+ polubień, 26 komentarzy i 71 udostępnień.",

    // Generic Project Page
    "project.backToProjects": "Wszystkie projekty",
    "project.install": "Instalacja",
    "project.features": "Funkcje",
    "project.quickStart": "Szybki Start",
    "project.useCases": "Przypadki Użycia",
    "project.lifecycle": "Cykl Życia Hooków",
    "project.links": "Linki",
    "project.comingSoon.title": "Wkrótce",
    "project.comingSoon.description": "Ten projekt jest w trakcie rozwoju.",

    // Nav
    "nav.projects": "Projekty",

    // Pydantic DeepAgents Landing
    "deepagents.meta.description":
      "Produkcyjny framework Python do autonomicznych agentów AI. Architektura Claude Code z planowaniem, dostępem do plików, subagentami i nieograniczonym kontekstem.",
    "deepagents.hero.badge": "Framework Open Source",
    "deepagents.hero.title.line1": "Twórz autonomiczne",
    "deepagents.hero.title.highlight": "agenty AI",
    "deepagents.hero.title.line2": "które naprawdę działają",
    "deepagents.hero.description":
      "Produkcyjny framework Python implementujący wzorzec deep agent — agenty, które planują, kodują, wykonują i delegują jak Claude Code.",
    "deepagents.hero.cta.getStarted": "Wypróbuj Quick Start",
    "deepagents.hero.cta.github": "Zobacz na GitHub",
    "deepagents.hero.terminal.planning": "Planowanie: Rozbijam zadanie na kroki...",
    "deepagents.hero.terminal.reading": "Czytam: src/auth/models.py",
    "deepagents.hero.terminal.editing": "Edytuję: src/auth/jwt_handler.py",
    "deepagents.hero.terminal.delegating": "Deleguję: sub-agent code-review",
    "deepagents.hero.terminal.complete": "Zadanie ukończone — 4 pliki zmodyfikowane",
    "deepagents.howitworks.title": "Zacznij w 4 krokach",
    "deepagents.howitworks.subtitle": "Od pip install do autonomicznych agentów w minuty",
    "deepagents.howitworks.step1.title": "Zainstaluj",
    "deepagents.howitworks.step1.desc":
      "pip install pydantic-deepagents — jeden pakiet, zero konfiguracji, wszystko w zestawie.",
    "deepagents.howitworks.step2.title": "Zdefiniuj agenta",
    "deepagents.howitworks.step2.desc":
      "Opisz co robi Twój agent — typowane narzędzia, system prompts i opcjonalne sub-agenty.",
    "deepagents.howitworks.step3.title": "Uruchom",
    "deepagents.howitworks.step3.desc":
      "Agent planuje, wykonuje i deleguje — streamując wyniki w czasie rzeczywistym przez WebSocket.",
    "deepagents.howitworks.step4.title": "Skaluj sub-agentami",
    "deepagents.howitworks.step4.desc":
      "Podziel złożone zadania na wyspecjalizowane sub-agenty współpracujące autonomicznie.",
    "deepagents.providers.title": "Zbudowany na sprawdzonych narzędziach",
    "deepagents.features.title": "Wszystko czego agent potrzebuje",
    "deepagents.features.subtitle": "Od planowania po deployment — kompletny toolkit deep agent.",
    "deepagents.features.deepagent.title": "Wzorzec Deep Agent",
    "deepagents.features.deepagent.desc":
      "Implementuje architekturę Claude Code — agenty, które rozumują, planują i wykonują złożone zadania autonomicznie.",
    "deepagents.features.context.title": "Nieograniczony kontekst",
    "deepagents.features.context.desc":
      "Wbudowana kompakcja konwersacji pozwala agentom pracować nad zadaniami przekraczającymi okno kontekstu modelu.",
    "deepagents.features.subagents.title": "Delegacja sub-agentów",
    "deepagents.features.subagents.desc":
      "Twórz wyspecjalizowane sub-agenty do równoległego researchu, generowania kodu lub analizy — łącz wyniki.",
    "deepagents.features.memory.title": "Trwała pamięć",
    "deepagents.features.memory.desc":
      "Agenty pamiętają między sesjami. Pamięć na poziomie projektu i globalna z automatycznym filtrowaniem.",
    "deepagents.features.tools.title": "Bogaty system narzędzi",
    "deepagents.features.tools.desc":
      "Dostęp do plików, wykonywanie komend, wyszukiwanie w sieci i własne narzędzia — wszystko z typami Pydantic.",
    "deepagents.features.production.title": "Gotowy na produkcję",
    "deepagents.features.production.desc":
      "Streaming, checkpointy, wsparcie wielu providerów, integracja z Logfire — przetestowane w 30+ wdrożeniach.",
    "deepagents.architecture.title": "Jak to działa",
    "deepagents.architecture.subtitle": "Warstwowa architektura od aplikacji po model LLM.",
    "deepagents.code.title": "Trzy linijki do pierwszego agenta",
    "deepagents.code.subtitle":
      "Od podstawowej konfiguracji po własne narzędzia i delegację sub-agentów.",
    "deepagents.usecases.title": "Stworzony do prawdziwej pracy",
    "deepagents.usecases.subtitle": "Od generowania kodu po pipeliny badawcze.",
    "deepagents.usecases.uc1.name": "Generowanie i refaktoryzacja kodu",
    "deepagents.usecases.uc1.desc":
      "Autonomiczne agenty, które czytają bazy kodu, planują zmiany i implementują je w wielu plikach.",
    "deepagents.usecases.uc1.f1": "Refaktoryzacja wielu plików",
    "deepagents.usecases.uc1.f2": "Automatyczny code review",
    "deepagents.usecases.uc1.f3": "Generowanie testów",
    "deepagents.usecases.uc1.f4": "Aktualizacja zależności",
    "deepagents.usecases.uc2.name": "Agenty badawcze",
    "deepagents.usecases.uc2.desc":
      "Agenty przeszukujące sieć, analizujące wyniki i tworzące strukturalne raporty badawcze.",
    "deepagents.usecases.uc2.f1": "Wyszukiwanie i scraping",
    "deepagents.usecases.uc2.f2": "Krzyżowe weryfikowanie źródeł",
    "deepagents.usecases.uc2.f3": "Strukturalne dane wyjściowe",
    "deepagents.usecases.uc2.f4": "Śledzenie cytowań",
    "deepagents.usecases.uc3.name": "Automatyzacja potoków danych",
    "deepagents.usecases.uc3.desc":
      "Buduj, monitoruj i naprawiaj potoki danych z agentami rozumiejącymi infrastrukturę.",
    "deepagents.usecases.uc3.f1": "Scaffolding potoków",
    "deepagents.usecases.uc3.f2": "Diagnoza błędów",
    "deepagents.usecases.uc3.f3": "Migracje schematów",
    "deepagents.usecases.uc3.f4": "Tuning wydajności",
    "deepagents.showcase.title": "CLI i DeepResearch",
    "deepagents.showcase.subtitle":
      "Interaktywny terminal, integracja z edytorem i autonomiczny research — wszystko w zestawie.",
    "deepagents.showcase.cli.title": "Interaktywne CLI",
    "deepagents.showcase.cli.desc":
      "Pełnofunkcyjny interfejs terminalowy zbudowany na Textual. Wznawiaj rozmowy, przełączaj modele, śledź tokeny — lub podłącz do Zed przez ACP.",
    "deepagents.showcase.cli.f1": "Wznawianie sesji i trwała pamięć",
    "deepagents.showcase.cli.f2": "Przełączanie modeli wielu providerów",
    "deepagents.showcase.cli.f3": "Własne skille i wyszukiwanie w sieci",
    "deepagents.showcase.cli.f4": "Integracja z edytorem Zed przez ACP",
    "deepagents.showcase.research.title": "DeepResearch",
    "deepagents.showcase.research.desc":
      "Autonomiczny agent badawczy planujący zapytania, delegujący do sub-agentów, weryfikujący źródła krzyżowo i piszący strukturalne raporty z cytowaniami.",
    "deepagents.showcase.research.f1": "Wieloetapowe planowanie badań",
    "deepagents.showcase.research.f2": "Równoległa delegacja sub-agentów",
    "deepagents.showcase.research.f3": "Wyszukiwanie z pobieraniem pełnych stron",
    "deepagents.showcase.research.f4": "Strukturalne raporty z cytowaniami",

    "logfire.meta.description":
      "Narzędzie do debugowania i analizy AI dla Pydantic Logfire. Zadawaj pytania po polsku, otrzymuj zapytania SQL i wizualizacje.",
    "logfire.hero.badge": "Rozszerzenie Chrome + Backend FastAPI",
    "logfire.hero.title.line1": "Przestań czytać logi.",
    "logfire.hero.title.highlight": "Pytaj swoje trace'y",
    "logfire.hero.title.line2": "w naturalnym języku",
    "logfire.hero.description":
      "Partner do debugowania AI dla Pydantic Logfire. Zadawaj pytania o trace'y — otrzymuj zapytania SQL, tabele danych i wykresy natychmiast.",
    "logfire.hero.cta.getStarted": "Zainstaluj rozszerzenie",
    "logfire.hero.cta.docs": "Dokumentacja",
    "logfire.features.title": "Wszystko czego potrzebujesz do debugowania",
    "logfire.features.subtitle": "Od zapytań w języku naturalnym po automatyczne wizualizacje.",
    "logfire.features.nlquery.title": "Zapytania w języku naturalnym",
    "logfire.features.nlquery.desc":
      "Pytaj o trace'y po polsku. Nie musisz znać SQL — asystent automatycznie tłumaczy Twoje pytania.",
    "logfire.features.sql.title": "Automatyczne generowanie SQL",
    "logfire.features.sql.desc":
      "Agent Pydantic AI tłumaczy pytania na zoptymalizowany SQL dla Logfire. Podejrzyj zapytanie lub czytaj wyniki.",
    "logfire.features.viz.title": "Automatyczne wizualizacje",
    "logfire.features.viz.desc":
      "Wykresy i tabele danych generowane automatycznie z wyników zapytań. Wykresy słupkowe, osie czasu i podsumowania.",
    "logfire.features.span.title": "Analiza kontekstu spanów",
    "logfire.features.span.desc":
      "Kliknij dowolny span w Logfire — asystent przechwyci trace_id, span_id i pełny kontekst do debugowania.",
    "logfire.features.prompts.title": "Własne prompty",
    "logfire.features.prompts.desc":
      "Twórz szablony promptów ze slash commandami. Wbudowane prompty: /errors, /costs, /slow, /performance i więcej.",
    "logfire.features.memory.title": "Pamięć konwersacji",
    "logfire.features.memory.desc":
      "Pełna historia rozmów z wyszukiwaniem i filtrowaniem projektów. Wznów sesję debugowania tam gdzie skończyłeś.",
    "logfire.howitworks.title": "Jak to działa",
    "logfire.howitworks.subtitle": "Od pytania do wglądu w sekundy.",
    "logfire.howitworks.step1.title": "Zadaj pytanie",
    "logfire.howitworks.step1.desc":
      'Pisz w naturalnym języku — "Jakie były najwolniejsze requesty w ostatniej godzinie?"',
    "logfire.howitworks.step2.title": "AI generuje SQL",
    "logfire.howitworks.step2.desc":
      "Agent Pydantic AI tłumaczy pytanie na zoptymalizowany SQL dla Logfire.",
    "logfire.howitworks.step3.title": "Zapytanie się wykonuje",
    "logfire.howitworks.step3.desc":
      "SQL wykonuje się na Logfire API. Wyniki strumieniowane w czasie rzeczywistym przez WebSocket.",
    "logfire.howitworks.step4.title": "Otrzymujesz wgląd",
    "logfire.howitworks.step4.desc":
      "Tabele danych, wykresy lub odpowiedzi opisowe — dokładnie to czego potrzebujesz.",
    "logfire.usecases.title": "Stworzony do debugowania",
    "logfire.usecases.subtitle": "Od wolnych requestów po śledzenie kosztów.",
    "logfire.usecases.uc1.name": "Debugowanie wolnych requestów",
    "logfire.usecases.uc1.desc":
      "Znajdź wąskie gardła natychmiast. Zapytaj które endpointy są najwolniejsze i otrzymaj rozbicie czasu span po spanie.",
    "logfire.usecases.uc1.f1": "Ranking opóźnień endpointów",
    "logfire.usecases.uc1.f2": "Timing span po spanie",
    "logfire.usecases.uc1.f3": "Analiza percentyli (p50, p95, p99)",
    "logfire.usecases.uc1.f4": "Porównanie okresów czasu",
    "logfire.usecases.uc2.name": "Użycie LLM i koszty",
    "logfire.usecases.uc2.desc":
      "Śledź użycie tokenów, koszty i liczbę wywołań u wszystkich providerów LLM w jednym miejscu.",
    "logfire.usecases.uc2.f1": "Użycie tokenów per model",
    "logfire.usecases.uc2.f2": "Rozbicie kosztów per provider",
    "logfire.usecases.uc2.f3": "Trendy użycia w czasie",
    "logfire.usecases.uc2.f4": "Automatyczne wykresy kosztów",
    "logfire.usecases.uc3.name": "Analiza błędów",
    "logfire.usecases.uc3.desc":
      "Znajdź wzorce błędów, częstotliwość i pierwotne przyczyny. Strukturalna analiza co poszło nie tak.",
    "logfire.usecases.uc3.f1": "Wzorce częstotliwości błędów",
    "logfire.usecases.uc3.f2": "Analiza pierwotnych przyczyn",
    "logfire.usecases.uc3.f3": "Trendy błędów w czasie",
    "logfire.usecases.uc3.f4": "Mapowanie dotkniętych endpointów",
    "logfire.screenshots.title": "Zobacz w akcji",
    "logfire.screenshots.subtitle":
      "Rozszerzenie Chrome żyjące tuż obok Twojego dashboardu Logfire.",
    "logfire.screenshots.chat": "Tabele danych",
    "logfire.screenshots.chart": "Automatyczne wykresy",
    "logfire.screenshots.sql": "Generowanie SQL",
    "logfire.screenshots.span": "Kontekst spanów",
    "logfire.screenshots.prompts": "Własne prompty",
    "logfire.screenshots.conversations": "Historia",
    "logfire.tech.title": "Zbudowane z",

    // Footer — Product Restatement
    "footer.restatement.oss.title": "Gotowy, żeby zbudować swojego pierwszego agenta AI?",
    "footer.restatement.oss.description":
      "Open-source'owe narzędzia, sprawdzone wzorce, zero boilerplate'u. Skonfiguruj swój stos i wyślij w minuty — nie miesiące.",
    "footer.restatement.oss.cta": "Zbuduj swoją aplikację AI",
    "footer.restatement.template.title": "Gotowy, żeby wdrożyć swoją aplikację AI?",
    "footer.restatement.template.description":
      "Wybierz frameworki, wygeneruj projekt gotowy do produkcji i wdróż. 75+ opcji, jedna komenda, zero długu konfiguracyjnego.",
    "footer.restatement.template.cta": "Skonfiguruj i pobierz",
    "footer.restatement.deepagents.title": "Gotowy na agentów, którzy naprawdę myślą?",
    "footer.restatement.deepagents.description":
      "Zainstaluj pydantic-deep, zdefiniuj swojego agenta i pozwól mu planować, kodować i delegować — jak Claude Code, ale Twój.",
    "footer.restatement.deepagents.cta": "Wypróbuj Quick Start",
    "footer.restatement.logfire.title": "Masz dość czytania logów linijka po linijce?",
    "footer.restatement.logfire.description":
      "Zainstaluj rozszerzenie, połącz z Logfire i zadawaj pytania swoim trace'om po polsku. Za darmo i open-source.",
    "footer.restatement.logfire.cta": "Zainstaluj rozszerzenie",

    // Footer — Consultancy
    "footer.built": "Stworzone przez",
    "footer.cta.title": "Potrzebujesz pomocy z wdrożeniem w firmie?",
    "footer.cta.description":
      "konsultingowa firma inżynierii agentów AI z 30+ wdrożeniami produkcyjnymi.",
    "footer.cta.button": "Porozmawiaj z nami",
    "footer.oss.cta.title": "Potrzebujesz pomocy z produkcyjnymi agentami AI?",
    "ui.clickToCopy": "Kliknij aby skopiować",
    "ui.copied": "Skopiowano!",
    "ui.terminal": "Terminal",
    "ui.orWithPreset": "Lub z presetem:",
    "ui.followOnGithub": "Śledź na GitHub",
    "blog.search": "Szukaj artykułów...",
    "blog.noPosts": "Brak wpisów. Wróć wkrótce.",
    "oss.meta.title": "Vstorm OSS — Narzędzia Open Source dla agentów AI w Pythonie",
    "deepagents.code.tab.basic": "Podstawowy",
    "deepagents.code.tab.tools": "Z narzędziami",
    "deepagents.code.tab.subagents": "Sub-agenty",

    // Stats Bar
    "stats.template.v1": "75+",
    "stats.template.l1": "Opcji konfiguracji",
    "stats.template.v2": "5",
    "stats.template.l2": "Frameworków AI",
    "stats.template.v3": "3",
    "stats.template.l3": "Presety",
    "stats.template.v4": "246",
    "stats.template.l4": "Szablonów",
    "stats.deepagents.v1": "30+",
    "stats.deepagents.l1": "Wdrożeń produkcyjnych",
    "stats.deepagents.v2": "5+",
    "stats.deepagents.l2": "Dostawców LLM",
    "stats.deepagents.v3": "100",
    "stats.deepagents.l3": "% Type-Safe",
    "stats.deepagents.v4": "0",
    "stats.deepagents.l4": "Vendor Lock-in",
    "stats.logfire.v1": "6",
    "stats.logfire.l1": "Typów zapytań",
    "stats.logfire.v2": "3",
    "stats.logfire.l2": "Formaty wyjścia",
    "stats.logfire.v3": "10+",
    "stats.logfire.l3": "Dostawców LLM",
    "stats.logfire.v4": "100",
    "stats.logfire.l4": "% Self-Hosted",

    // Before/After
    "beforeafter.title": "Dlaczego warto?",
    "beforeafter.template.before.title": "Bez szablonu",
    "beforeafter.template.after.title": "Z szablonem",
    "beforeafter.template.before.1": "Dni konfiguracji boilerplate FastAPI + Next.js",
    "beforeafter.template.before.2": "Ręczna integracja frameworka AI",
    "beforeafter.template.before.3": "Brak streamingu WebSocket od razu",
    "beforeafter.template.before.4": "Docker i deployment konfigurowane od zera",
    "beforeafter.template.before.5": "Brak obserwowalności dopóki sam nie dodasz",
    "beforeafter.template.after.1": "Projekt gotowy do produkcji w minuty",
    "beforeafter.template.after.2": "5 frameworków AI zintegrowanych i przetestowanych",
    "beforeafter.template.after.3": "Streaming WebSocket z wizualizacją wywołań narzędzi",
    "beforeafter.template.after.4": "Docker, Kubernetes i CI/CD w zestawie",
    "beforeafter.template.after.5": "Logfire, Sentry i Prometheus wbudowane",
    "beforeafter.deepagents.before.title": "Bez DeepAgents",
    "beforeafter.deepagents.after.title": "Z DeepAgents",
    "beforeafter.deepagents.before.1": "Kruche łańcuchy łamiące się na nieoczekiwanych inputach",
    "beforeafter.deepagents.before.2": "Brak type safety — oparte na słownikach, podatne na błędy",
    "beforeafter.deepagents.before.3": "Trudne debugowanie ścieżek decyzji agenta",
    "beforeafter.deepagents.before.4": "Ręczne zarządzanie oknem kontekstu",
    "beforeafter.deepagents.before.5": "Brak wzorca delegacji subagentów",
    "beforeafter.deepagents.after.1": "Modularne agenty ze strukturalnym planowaniem",
    "beforeafter.deepagents.after.2": "W pełni typowo bezpieczne z modelami Pydantic",
    "beforeafter.deepagents.after.3": "Pełna obserwowalność przez Logfire",
    "beforeafter.deepagents.after.4": "Automatyczne podsumowywanie kontekstu",
    "beforeafter.deepagents.after.5": "Wbudowana delegacja i komunikacja subagentów",
    "beforeafter.logfire.before.title": "Bez Logfire Assistant",
    "beforeafter.logfire.after.title": "Z Logfire Assistant",
    "beforeafter.logfire.before.1": "Ręczne pisanie zapytań SQL do schematu Logfire",
    "beforeafter.logfire.before.2": "Przełączanie kontekstu między dashboardem a narzędziami",
    "beforeafter.logfire.before.3": "Brak automatycznej wizualizacji wyników",
    "beforeafter.logfire.before.4": "Powtarzanie częstych zapytań z pamięci",
    "beforeafter.logfire.before.5": "Brak historii konwersacji i kontekstu",
    "beforeafter.logfire.after.1": "Pytaj w prostym języku",
    "beforeafter.logfire.after.2": "Panel boczny wbudowany w dashboard Logfire",
    "beforeafter.logfire.after.3": "Automatycznie generowane tabele i wykresy",
    "beforeafter.logfire.after.4": "Wielorazowe szablony promptów z komendami slash",
    "beforeafter.logfire.after.5": "Pełna historia konwersacji z filtrowaniem projektów",

    // Comparison Tables
    "comparison.title": "Jak wypada w porównaniu?",
    "comparison.subtitle": "Zobacz jak wypada na tle alternatyw.",
    "comparison.feature": "Funkcja",
    "comparison.template.col.ours": "AI Agent Template",
    "comparison.template.col.manual": "Ręczna konfiguracja",
    "comparison.template.col.other": "Inne boilerplate'y",
    "comparison.template.row.ai": "Integracja agentów AI",
    "comparison.template.row.multidb": "Wsparcie wielu baz danych",
    "comparison.template.row.auth": "Wbudowana autoryzacja",
    "comparison.template.row.websocket": "Streaming WebSocket",
    "comparison.template.row.configurator": "Konfigurator webowy",
    "comparison.template.row.typesafe": "Typowo bezpieczny kod",
    "comparison.template.row.observable": "Obserwowalność",
    "comparison.deepagents.col.ours": "DeepAgents",
    "comparison.deepagents.row.typesafe": "Bezpieczeństwo typów",
    "comparison.deepagents.row.subagents": "Delegacja subagentów",
    "comparison.deepagents.row.tools": "System narzędzi",
    "comparison.deepagents.row.multiprovider": "Wielu dostawców",
    "comparison.deepagents.row.observability": "Obserwowalność",
    "comparison.deepagents.row.production": "Przetestowany w produkcji",
    "comparison.logfire.col.ours": "Logfire Assistant",
    "comparison.logfire.col.manual": "Ręczny SQL",
    "comparison.logfire.col.generic": "Generyczny czat AI",
    "comparison.logfire.row.sql": "Natywny SQL Logfire",
    "comparison.logfire.row.context": "Świadomość kontekstu Span",
    "comparison.logfire.row.charts": "Automatyczne wykresy",
    "comparison.logfire.row.prompts": "Własne prompty",
    "comparison.logfire.row.history": "Historia konwersacji",
    "comparison.logfire.row.nl": "Wejście w języku naturalnym",

    // Compare landing pages
    "compare.index.title": "Porównaj nasze narzędzia",
    "compare.index.subtitle":
      "Porównania Pydantic DeepAgents, szablonów agentów AI i narzędzi Python z popularnymi alternatywami. Znajdź odpowiednie narzędzie dla swojego projektu AI.",
    "compare.index.meta.description":
      "Porównania funkcji narzędzi Vstorm OSS vs LangChain, CrewAI, AutoGen i inne frameworki AI",
    "compare.verdict": "Werdykt",
    "compare.highlights": "Kluczowe różnice",
    "compare.table.title": "Porównanie funkcji",
    "compare.code.title": "Porównanie kodu",
    "compare.whenToUse": "Kiedy użyć którego",
    "compare.whenToUse.ours": "Wybierz {product}, gdy:",
    "compare.whenToUse.theirs": "Wybierz {competitor}, gdy:",
    "compare.faq.title": "Często zadawane pytania",
    "compare.relatedTitle": "Powiązane porównania",
    "compare.cta.title": "Gotowy wypróbować {product}?",
    "compare.cta.button": "Rozpocznij",
    "compare.winner.ours": "Przewaga: {product}",
    "compare.winner.theirs": "Przewaga: {competitor}",
    "compare.winner.tie": "Remis",

    // Testimonials
    "testimonials.title": "Co mówią deweloperzy",
    "testimonials.subtitle": "Od wczesnych użytkowników i beta testerów.",
    "testimonials.1.quote":
      "Zaoszczędził nam tygodnie boilerplate'u. Szablon wygenerował gotową do produkcji aplikację AI, którą wdrożyliśmy tego samego dnia.",
    "testimonials.1.name": "Marek K.",
    "testimonials.1.role": "Senior Backend Engineer",
    "testimonials.2.quote":
      "DeepAgents w końcu dał nam typowo bezpieczne agenty z prawdziwą obserwowalnością. Migrowaliśmy z LangChain w weekend.",
    "testimonials.2.name": "Sarah R.",
    "testimonials.2.role": "AI Platform Lead",
    "testimonials.3.quote":
      "Logfire Assistant zamienił debugowanie z 30 minut ręcznego SQL w 30-sekundową rozmowę. Zmiana gry dla naszego zespołu.",
    "testimonials.3.name": "Jan L.",
    "testimonials.3.role": "DevOps Engineer",

    // Newsletter
    "newsletter.title": "Bądź na bieżąco",
    "newsletter.subtitle":
      "Otrzymuj powiadomienia o nowych wydaniach, funkcjach i spostrzeżeniach z inżynierii AI.",
    "newsletter.placeholder": "twoj@email.com",
    "newsletter.button": "Subskrybuj",
    "newsletter.success": "Dzięki! Będziemy informować.",
    "404.title": "Nie znaleziono strony",
    "404.description": "Strona, której szukasz, nie istnieje lub została przeniesiona.",
    "404.back": "Wróć na stronę główną",
    "blog.readingTime": "{min} min czytania",
    "blog.pagination.prev": "Poprzednia",
    "blog.pagination.next": "Następna",
    "blog.share": "Udostępnij artykuł",
    "blog.share.copied": "Link skopiowany!",
    "blog.relatedPosts": "Powiązane artykuły",
    "blog.stickyCta.text": "Potrzebujesz pomocy przy budowie agentów AI?",
    "blog.stickyCta.button": "Porozmawiaj z Vstorm",
    "skip.toContent": "Przejdź do treści",

    // About page
    "about.title": "O Vstorm OSS",
    "about.subtitle":
      "Open-source'owe narzędzia do budowania agentów AI - tworzone przez praktyków, dla praktyków.",
    "about.meta.description":
      "Poznaj Vstorm OSS - 13 repozytoriów open source, 1 730+ gwiazdek na GitHub i 830K+ pobrań z PyPI. Produkcyjne narzędzia AI dla Pythona. Stworzone przez Vstorm.",
    "about.company.title": "Kim jesteśmy",
    "about.company.description":
      "Vstorm to konsulting specjalizujący się w inżynierii agentowej AI. Budujemy produkcyjne systemy agentów AI dla firm w USA, Europie i na Bliskim Wschodzie. Każde narzędzie w tym portfolio powstało z realnego wyzwania produkcyjnego - udostępniamy jako open source to, co budujemy.",
    "about.numbers.title": "W liczbach",
    "about.numbers.stars": "Gwiazdek na GitHub",
    "about.numbers.downloads": "Pobrań z PyPI",
    "about.numbers.repos": "Repozytoriów Open Source",
    "about.numbers.projects": "Projektów klienckich",
    "about.company.details":
      "Założony w 2017 roku, Vstorm specjalizuje się w tworzeniu oprogramowania opartego na AI i LLM. Z zespołem 25+ inżynierów i ponad 90 zrealizowanymi projektami dla klientów w USA, Wielkiej Brytanii i Europie Zachodniej, zwiększamy ROI poprzez hiper-automatyzację, hiper-personalizację i usprawnianie procesów decyzyjnych. Wyróżnieni przez Deloitte Technology Fast 50 i pierwszy konsulting AI przyjęty do Agentic AI Foundation.",
    "about.partners.title": "Partnerzy i ekosystem",
    "about.partners.description":
      "Współtworzymy wiodące frameworki agentowe AI i współpracujemy z organizacjami kształtującymi przyszłość agentów AI.",
    "about.philosophy.title": "Dlaczego open source",
    "about.philosophy.description":
      "Wierzymy, że najlepsze narzędzia do agentów AI powinny być otwarte, modularne i przetestowane w produkcji. Zamknięte monolity uzależniają od decyzji jednego dostawcy. Nasze podejście: budujemy każdą funkcjonalność jako osobny pakiet, testujemy w 90+ projektach klienckich, a potem udostępniamy. Jeśli działa w produkcji, powinno być dostępne dla wszystkich.",
    "about.links.title": "Kontakt",
    "blog.tag.title": "Tag: {tag}",
    "blog.tag.postCount": "{count} postów",
    "oss.githubStars": "gwiazdek na GitHub — Daj gwiazdke!",
    "changelog.title": "Historia zmian",
    "changelog.subtitle":
      "Historia wydań wszystkich projektów Vstorm OSS: Full-Stack AI Agent Template, Pydantic DeepAgents i więcej. Nowe funkcje, poprawki i notatki migracyjne.",
    "roadmap.title": "Plan rozwoju",
    "roadmap.subtitle": "Co budujemy i co nadchodzi",
    "nav.about": "O nas",
    "nav.compare": "Porównaj",
    "nav.usecases": "Przypadki użycia",
    "usecases.index.title": "Przypadki użycia",
    "usecases.index.subtitle":
      "Praktyczne przypadki użycia z działającymi przykładami kodu — agenci badawczy, chatboty RAG, agenci SQL i więcej.",
    "usecases.problem.title": "Problem",
    "usecases.solution.title": "Rozwiązanie",
    "usecases.code.title": "Działający kod",
    "usecases.steps.title": "Krok po kroku",
    "usecases.related.title": "Powiązane przypadki użycia",
    "usecases.cta.title": "Gotowy to zbudować?",
    "usecases.cta.description":
      "Zacznij z open-source'owymi narzędziami Vstorm — przetestowanymi w produkcji, w pełni udokumentowanymi i darmowymi.",
    "usecases.cta.button": "Rozpocznij",
    "nav.guides": "Poradniki",
    "guides.index.title": "Poradniki",
    "guides.index.subtitle":
      "Naucz się budować agentów AI z różnymi frameworkami — poradniki krok po kroku z działającym kodem. Pydantic AI, LangChain, LangGraph, CrewAI i więcej.",
    "guides.step1.title": "Zainstaluj zależności",
    "guides.step1.description":
      "Zainstaluj {framework} i wymagane narzędzia do tego przypadku użycia.",
    "guides.step2.title": "Zdefiniuj narzędzia",
    "guides.step2.description":
      "Stwórz specyficzne dla domeny funkcje narzędzi, których agent będzie używał do interakcji z zewnętrznymi serwisami.",
    "guides.step3.title": "Stwórz agenta i uruchom",
    "guides.step3.description":
      "Zainicjalizuj agenta {framework} z narzędziami, ustaw prompt systemowy i wykonaj zapytanie.",
    "guides.related.frameworks": "Zbuduj z innymi frameworkami",
    "guides.related.usecases": "Więcej poradników z {framework}",
    "guides.cta.title": "Gotowy do budowania z {framework}?",
    "guides.cta.description":
      "Wygeneruj gotowy do produkcji projekt z {framework} — FastAPI + Next.js, autoryzacja, streaming i więcej.",
    "guides.cta.button": "Rozpocznij",

    // Tools
    "nav.tools": "Darmowe narzędzia",
    "tools.index.title": "Darmowe narzędzia AI",
    "tools.index.subtitle":
      "Interaktywne narzędzia do wyboru odpowiedniego frameworka AI, architektury i konfiguracji projektu — bez rejestracji.",
    "tools.tryFree": "Wypróbuj za darmo",
    "tools.badge.free": "Darmowe",
    "tools.badge.interactive": "Interaktywne",
    "tools.badge.calculator": "Kalkulator",
    "tools.badge.quiz": "Quiz — 5 pytań",
    "tools.configurator.title": "Konfigurator projektu AI Agent",
    "tools.configurator.subtitle":
      "Skonfiguruj gotowy do produkcji projekt FastAPI + Next.js z 75+ opcjami. Pobierz jako ZIP lub CLI — uruchom lokalnie w 2 minuty.",
    "tools.configurator.description":
      "Skonfiguruj i pobierz gotowy do produkcji projekt AI. Wybierz spośród 5 frameworków, 4 baz danych i 75+ opcji — bez rejestracji.",
    "tools.configurator.features.title": "Co możesz skonfigurować",
    "tools.configurator.howItWorks": "Jak to działa",
    "tools.configurator.step1": "Wybierz opcje",
    "tools.configurator.step1.desc":
      "Wybierz framework AI, bazę danych, autoryzację, integracje i infrastrukturę w 9 krokach konfiguracji.",
    "tools.configurator.step2": "Podgląd projektu",
    "tools.configurator.step2.desc":
      "Zobacz podgląd struktury projektu, zależności i konfiguracji na bieżąco.",
    "tools.configurator.step3": "Pobierz i uruchom",
    "tools.configurator.step3.desc":
      "Pobierz jako ZIP lub skopiuj komendę CLI. Projekt uruchamia się lokalnie w mniej niż 2 minuty.",
    "tools.configurator.openButton": "Otwórz konfigurator",
    "tools.configurator.cta.title": "Gotowy do budowy projektu AI?",
    "tools.configurator.cta.description":
      "Otwórz konfigurator, wybierz stos technologiczny i pobierz gotowy projekt w kilka minut.",
    "tools.comparison.title": "Kalkulator porównania frameworków AI",
    "tools.comparison.subtitle":
      "Odpowiedz na 6 pytań o swoim projekcie i uzyskaj punktowaną rekomendację spośród 5 frameworków AI w Pythonie.",
    "tools.comparison.description":
      "Odpowiedz na 6 pytań o wymaganiach projektu i uzyskaj spersonalizowaną rekomendację frameworka AI z wynikami.",
    "tools.comparison.frameworks.title": "Porównywane frameworki",
    "tools.comparison.cta.title": "Chcesz dokładniejsze porównanie?",
    "tools.comparison.cta.description":
      "Sprawdź nasze szczegółowe porównania z tabelami funkcji, przykładami kodu i poradnikami migracji.",
    "tools.comparison.cta.button": "Zobacz szczegółowe porównania",
    "tools.quiz.title": "Quiz architektury agenta",
    "tools.quiz.subtitle":
      "Odpowiedz na 5 pytań o swoim projekcie i odkryj idealny wzorzec architektury agenta — z rekomendacją frameworka i kolejnymi krokami.",
    "tools.quiz.description":
      "Rozwiąż quiz z 5 pytań i odkryj najlepszy wzorzec architektury agenta — od prostego ReAct po hierarchiczne systemy wielo-agentowe.",
    "tools.quiz.patterns.title": "Wzorce architektury, które oceniamy",
    "tools.quiz.cta.title": "Znasz architekturę — teraz wybierz framework",
    "tools.quiz.cta.description":
      "Użyj naszego kalkulatora porównania frameworków, aby znaleźć najlepszy framework dla wybranej architektury.",
    "tools.quiz.cta.button": "Porównaj frameworki",
  },

  de: {
    "meta.description":
      "Open-Source-Tools für produktionsreife KI-Agenten mit Python. Full-Stack-Template (FastAPI + Next.js), RAG-Pipeline, 5 KI-Frameworks, Middleware, Subagenten. Von Vstorm.",

    "nav.back": "Zurück zur Startseite",
    "hero.badge": "Open Source",
    "hero.title.line1": "Deine erste produktionsreife",
    "hero.title.highlight": "KI-App",
    "hero.title.line2": "in 30 Minuten",
    "hero.description":
      "Wähle aus 5 KI-Frameworks, konfiguriere 75+ Optionen und deploye. FastAPI + Next.js mit Auth, Streaming und Infrastruktur — sofort einsatzbereit.",
    "hero.cta.configure": "Konfigurieren & Herunterladen",
    "hero.cta.github": "Auf GitHub ansehen",
    "hero.terminal.success": "Projekt erfolgreich erstellt",
    "frameworks.title": "Funktioniert mit deinem Stack",
    "features.title": "Alles was du brauchst",
    "features.subtitle": "Von der Datenbank bis zum Deployment, mit einem Befehl konfiguriert.",
    "features.ai.title": "5 KI-Frameworks",
    "features.ai.desc":
      "Pydantic AI, LangChain, LangGraph, CrewAI und DeepAgents mit WebSocket-Streaming.",
    "features.options.title": "75+ Optionen",
    "features.options.desc":
      "Datenbank, Auth, Hintergrundaufgaben, Caching, Rate-Limiting, Dateispeicher, Webhooks und mehr.",
    "features.presets.title": "3 Vorlagen",
    "features.presets.desc": "Minimal, Production oder AI Agent. Ein Befehl, keine Konfiguration.",
    "features.fullstack.title": "Full-Stack",
    "features.fullstack.desc":
      "FastAPI-Backend mit Next.js 15 Frontend. TypeScript, App Router, Tailwind CSS.",
    "features.production.title": "Produktionsbereit",
    "features.production.desc":
      "Docker, Reverse-Proxy, Kubernetes, CI/CD, .env-Generierung sofort einsatzbereit.",
    "features.observable.title": "Beobachtbar",
    "features.observable.desc":
      "Logfire-, Sentry- und Prometheus-Integration. Wisse was deine Agenten tun.",
    "presets.title": "Starte mit einer Vorlage",
    "presets.subtitle": "Oder passe jede Option im Konfigurator an.",
    "presets.minimal.name": "Minimal",
    "presets.minimal.desc": "Nur API, keine Datenbank, keine Auth. Perfekt für Prototypen.",
    "presets.minimal.f1": "Keine Datenbank",
    "presets.minimal.f2": "Keine Authentifizierung",
    "presets.minimal.f3": "Kein Docker",
    "presets.minimal.f4": "Basis FastAPI",
    "presets.minimal.cta": "Minimal verwenden",
    "presets.production.name": "Produktion",
    "presets.production.tag": "Empfohlen",
    "presets.production.desc": "Vollständiges Produktions-Setup. Sofort einsatzbereit.",
    "presets.production.f1": "PostgreSQL + JWT",
    "presets.production.f2": "Redis + Caching",
    "presets.production.f3": "Sentry + Prometheus",
    "presets.production.f4": "Docker + Kubernetes",
    "presets.production.f5": "GitHub Actions CI",
    "presets.production.cta": "Produktion verwenden",
    "presets.agent.name": "KI-Agent",
    "presets.agent.tag": "Beliebteste",
    "presets.agent.desc": "KI-App mit Streaming und Konversationsverlauf.",
    "presets.agent.f1": "Pydantic AI (Standard)",
    "presets.agent.f2": "WebSocket-Streaming",
    "presets.agent.f3": "Konversationsverlauf",
    "presets.agent.f4": "PostgreSQL + Redis",
    "presets.agent.f5": "Next.js Frontend",
    "presets.agent.cta": "KI-Agent verwenden",

    // Template — How It Works
    "template.howitworks.title": "So funktioniert's",
    "template.howitworks.subtitle": "Von Null zur Produktion in vier Schritten",
    "template.howitworks.step1.title": "Stack wählen",
    "template.howitworks.step1.desc":
      "Wähle aus 5 KI-Frameworks, 3 Frontends und 75+ Konfigurationsoptionen über den Web-Konfigurator oder CLI.",
    "template.howitworks.step2.title": "Generieren & Scaffolden",
    "template.howitworks.step2.desc":
      "Ein Befehl generiert ein vollständig konfiguriertes Projekt — Docker, CI/CD, Auth, Datenbank und deinen KI-Stack.",
    "template.howitworks.step3.title": "Agent entwickeln",
    "template.howitworks.step3.desc":
      "Konzentriere dich auf deine KI-Logik. Das Template übernimmt Routing, Streaming, State-Management und Deployment-Boilerplate.",
    "template.howitworks.step4.title": "In Produktion bringen",
    "template.howitworks.step4.desc":
      "Deploye mit docker compose up. Monitoring, Logging und Health-Checks sind direkt vorkonfiguriert.",

    "quickstart.title": "Loslegen",
    "quickstart.step1": "Installieren",
    "quickstart.step2": "Erstellen",
    "quickstart.step3": "Starten",
    "quickstart.or": "Oder nutze den Web-Konfigurator",

    // Blog
    "nav.blog": "Blog",
    "blog.title": "Blog",
    "blog.subtitle":
      "Tutorials, Framework-Vergleiche und Produktionsleitfäden für KI-Agenten mit Python. Zu Pydantic AI, LangChain, LangGraph, CrewAI und mehr.",
    "blog.readMore": "Weiterlesen",
    "blog.publishedOn": "Veröffentlicht am",
    "blog.updatedOn": "Aktualisiert am",
    "blog.backToBlog": "Zurück zum Blog",
    "blog.tableOfContents": "Inhaltsverzeichnis",
    "blog.availableIn": "Verfügbar in",
    "blog.allCategories": "Alle",
    "blog.category.open-source": "Open Source",
    "blog.category.news": "Neuigkeiten",
    "blog.category.article": "Artikel",

    // FAQ
    "faq.title": "Häufig gestellte Fragen",
    "faq.subtitle":
      "Antworten auf häufige Fragen zum Full-Stack AI Agent Template, Pydantic DeepAgents und Logfire-Integration. Anleitungen und Troubleshooting-Tipps.",
    "faq.seeAll": "Alle Fragen anzeigen",
    "faq.category.template": "Full-Stack AI Agent Template",
    "faq.category.deepagents": "Pydantic DeepAgents",
    "faq.category.logfire": "Logfire Assistant",

    // OSS Landing
    "oss.meta.description":
      "Open-Source-Tools für KI-Agenten in Python. Full-Stack-Templates, Middleware, Subagenten und mehr. 13 Repos, 1.730+ GitHub-Sterne. Von Vstorm.",
    "oss.hero.badge": "13 Open-Source-Repos · 1.730+ Sterne",
    "oss.hero.title.line1": "Baue",
    "oss.hero.title.highlight": "produktionsreife KI-Agenten",
    "oss.hero.title.line2": "Keine Infrastruktur",
    "oss.hero.description":
      "Open-Source-Python-Tools aus 30+ realen Deployments. Frameworks, Templates und Bibliotheken — baue Agenten, nicht Boilerplate.",
    "oss.hero.definition":
      "Vstorm OSS is a collection of 13 open-source Python packages for building production AI agents. It includes a full-stack project generator (FastAPI + Next.js), a deep agent framework (planning, sandboxed execution, subagents), RAG pipeline with 4 vector stores, middleware with lifecycle hooks, task planning, context summarization, and database tooling. Used by 50,000+ developers with 1,730+ GitHub stars and 830K+ PyPI downloads.",
    "oss.hero.definition":
      "Vstorm OSS ist eine Sammlung von 13 Open-Source-Python-Paketen für produktionsreife KI-Agenten. Enthält einen Full-Stack-Projektgenerator (FastAPI + Next.js), ein Deep-Agent-Framework (Planung, Sandbox, Subagenten), RAG-Pipeline mit 4 Vektordatenbanken, Middleware mit Lifecycle-Hooks, Aufgabenplanung, Kontextzusammenfassung und Datenbanktools. Genutzt von 50.000+ Entwicklern, 1.730+ GitHub-Sterne und 830K+ PyPI-Downloads.",
    "oss.hero.cta.configure": "Deine KI-App bauen",
    "oss.hero.cta.explore": "Projekte erkunden",
    "oss.hero.consultancy.title":
      "Brauchen Sie Hilfe beim Aufbau von KI-Agenten für die Produktion?",
    "oss.hero.consultancy.description":
      "Wir sind Vstorm — eine Beratung für angewandtes KI-Engineering mit über 30 produktiven KI-Agenten-Implementierungen.",
    "oss.projects.title": "Unsere Projekte",
    "oss.projects.subtitle":
      "Open-Source-Pakete für das Pydantic AI Ökosystem — Middleware, Subagenten, Zusammenfassung, Monitoring und ein Full-Stack-KI-Agent-Template.",
    "oss.projects.viewAll": "Alle Projekte anzeigen",
    "oss.trustedby.title": "Empfohlen und vertraut von",
    "oss.trustedby.reactions": "LinkedIn-Reaktionen",
    "oss.trustedby.stars": "GitHub-Sterne",
    "oss.trustedby.downloads": "PyPI-Downloads",
    "oss.howwework.title": "So funktioniert es",
    "oss.howwework.subtitle": "Von der Installation zur Produktion in drei Schritten",
    "oss.howwework.step1.title": "Paket wählen",
    "oss.howwework.step1.desc":
      "Durchstöbern Sie unser Ökosystem mit 13 Open-Source-Paketen. Installation via pip — jedes funktioniert eigenständig oder zusammen.",
    "oss.howwework.step2.title": "Konfigurieren & Bauen",
    "oss.howwework.step2.desc":
      "Nutzen Sie unsere CLI-Generatoren, Presets und Templates, um Ihr KI-Agenten-Projekt in Minuten zu erstellen.",
    "oss.howwework.step3.title": "In Produktion bringen",
    "oss.howwework.step3.desc":
      "Deployment mit Docker, Observability mit Logfire und sicher skalieren mit produktionserprobtem Code.",

    // Manifesto — Why We Build This
    "oss.manifesto.title": "Warum wir das bauen",
    "oss.manifesto.quote":
      "Nach über 30 KI-Deployments sind wir immer wieder gegen dieselbe Wand gelaufen: Teams verbrachten Monate damit, Infrastruktur zu bauen, statt ihr eigentliches Problem zu lösen. Jedes Projekt erfand Auth, Streaming, Agent-Orchestrierung — von Grund auf neu. Wir haben uns entschieden, die Patterns open-source zu machen, die tatsächlich die Produktion überlebt haben, damit du den Teil überspringen kannst, in dem um 2 Uhr nachts alles zusammenbricht.",
    "oss.manifesto.author": "Vstorm Team — aus den Schützengräben der Produktions-KI",
    "oss.manifesto.p1.title": "Modular, nicht monolithisch",
    "oss.manifesto.p1.desc":
      "Nimm was du brauchst, lass den Rest. Jedes Paket funktioniert eigenständig — kein Vendor Lock-in, keine versteckten Abhängigkeiten.",
    "oss.manifesto.p2.title": "Zuerst produktionserprobt",
    "oss.manifesto.p2.desc":
      "Nichts wird veröffentlicht, bis es echten Traffic übersteht. Das sind keine Wochenend-Prototypen — sie stammen aus Systemen mit echten Nutzern.",
    "oss.manifesto.p3.title": "Von Praktikern gebaut",
    "oss.manifesto.p3.desc":
      "Wir nutzen alles, was wir veröffentlichen, selbst. Wenn etwas kaputt geht, spüren wir es als Erste. Deshalb fokussieren sich unsere Tools auf das, was in der Produktion wirklich zählt.",

    "oss.card.install": "Installation",
    "oss.card.comingSoon": "Demnächst",
    "oss.card.viewProject": "Projekt ansehen",

    // Changelog
    "oss.changelog.title": "Was gibt's Neues",
    "oss.changelog.subtitle": "Neueste Releases in unserem Ökosystem",
    "oss.changelog.1.title": "DeepResearch & Multi-Provider-Unterstützung",
    "oss.changelog.1.desc":
      "DeepResearch-Agent-Muster, Gemini/Groq-Provider und verbessertes Kontextmanagement hinzugefügt.",
    "oss.changelog.2.title": "Web-Konfigurator & 5 KI-Frameworks",
    "oss.changelog.2.desc":
      "Interaktiver Web-Konfigurator mit 75+ Optionen, CrewAI- & LangGraph-Unterstützung, Logfire-Integration.",
    "oss.changelog.3.title": "Logfire Assistant 1.0 — Chrome-Erweiterung",
    "oss.changelog.3.desc":
      "Natürliche Sprachabfragen für Logfire-Daten. Chatten Sie mit Ihren Traces, Metriken und Logs im Browser.",
    "oss.changelog.viewAll": "Alle Releases auf GitHub ansehen",

    // Contributors
    "oss.contributors.title": "Von der Community gebaut",
    "oss.contributors.subtitle":
      "Open-Source-Mitwirkende, die unsere Tools jeden Tag besser machen",
    "oss.contributors.join": "Mitwirkender werden →",

    // Recent Posts
    "oss.recentPosts.title": "Aus unserem Blog",
    "oss.recentPosts.subtitle":
      "Neueste Tutorials, Anleitungen und Einblicke zum Aufbau von KI-Agenten",
    "oss.recentPosts.viewAll": "Alle Beiträge ansehen →",

    // Community
    "oss.community.title": "Community & Anerkennung",
    "oss.community.subtitle": "Was das Ökosystem über unsere Tools sagt",
    "oss.community.stats.langchain": "Likes auf LangChain-Feature",
    "oss.community.stats.references": "Referenzen in Pydantic AI Issues & PRs",
    "oss.community.stats.docs": "Aufgeführt in der offiziellen Pydantic AI Doku",
    "oss.community.stats.contributors": "Community-Mitwirkende",
    "oss.community.langchain.description":
      "LangChain hat unser Full-Stack AI Agent Template als Community Content Spotlight vorgestellt — mit 600+ Likes, 26 Kommentaren und 71 Reposts.",

    // Generic Project Page
    "project.backToProjects": "Alle Projekte",
    "project.install": "Installation",
    "project.features": "Features",
    "project.quickStart": "Schnellstart",
    "project.useCases": "Anwendungsfälle",
    "project.lifecycle": "Hook-Lebenszyklus",
    "project.links": "Links",
    "project.comingSoon.title": "Demnächst",
    "project.comingSoon.description": "Dieses Projekt befindet sich in Entwicklung.",

    // Nav
    "nav.projects": "Projekte",

    // Pydantic DeepAgents Landing
    "deepagents.meta.description":
      "Produktionsreifes Python-Framework für autonome KI-Agenten. Claude-Code-Architektur mit Planung, Dateizugriff, Subagenten und unbegrenztem Kontext.",
    "deepagents.hero.badge": "Open-Source-Framework",
    "deepagents.hero.title.line1": "Baue autonome",
    "deepagents.hero.title.highlight": "KI-Agenten",
    "deepagents.hero.title.line2": "die wirklich liefern",
    "deepagents.hero.description":
      "Produktionsreifes Python-Framework mit Deep-Agent-Pattern — Agenten die planen, coden, ausführen und delegieren wie Claude Code.",
    "deepagents.hero.cta.getStarted": "Quick Start testen",
    "deepagents.hero.cta.github": "Auf GitHub ansehen",
    "deepagents.hero.terminal.planning": "Planung: Aufgabe in Schritte aufteilen...",
    "deepagents.hero.terminal.reading": "Lesen: src/auth/models.py",
    "deepagents.hero.terminal.editing": "Bearbeiten: src/auth/jwt_handler.py",
    "deepagents.hero.terminal.delegating": "Delegieren: Code-Review-Subagent",
    "deepagents.hero.terminal.complete": "Aufgabe abgeschlossen — 4 Dateien geändert",
    "deepagents.howitworks.title": "In 4 Schritten starten",
    "deepagents.howitworks.subtitle": "Von pip install zu autonomen Agenten in Minuten",
    "deepagents.howitworks.step1.title": "Installieren",
    "deepagents.howitworks.step1.desc":
      "pip install pydantic-deepagents — ein Paket, null Konfiguration, alles inklusive.",
    "deepagents.howitworks.step2.title": "Agent definieren",
    "deepagents.howitworks.step2.desc":
      "Beschreibe was dein Agent tut — typisierte Tools, System-Prompts und optionale Sub-Agenten.",
    "deepagents.howitworks.step3.title": "Ausführen",
    "deepagents.howitworks.step3.desc":
      "Dein Agent plant, führt aus und delegiert — mit Echtzeit-Streaming über WebSocket.",
    "deepagents.howitworks.step4.title": "Mit Sub-Agenten skalieren",
    "deepagents.howitworks.step4.desc":
      "Teile komplexe Aufgaben in spezialisierte Sub-Agenten auf, die autonom zusammenarbeiten.",
    "deepagents.providers.title": "Gebaut auf bewährten Tools",
    "deepagents.features.title": "Alles was ein Agent braucht",
    "deepagents.features.subtitle":
      "Von Planung bis Deployment — das komplette Deep-Agent-Toolkit.",
    "deepagents.features.deepagent.title": "Deep-Agent-Pattern",
    "deepagents.features.deepagent.desc":
      "Implementiert die Claude-Code-Architektur — Agenten die autonom denken, planen und mehrstufige Aufgaben ausführen.",
    "deepagents.features.context.title": "Unbegrenzter Kontext",
    "deepagents.features.context.desc":
      "Eingebaute Konversationskompaktierung ermöglicht Aufgaben die jedes Kontextfenster überschreiten.",
    "deepagents.features.subagents.title": "Subagent-Delegation",
    "deepagents.features.subagents.desc":
      "Spezialisierte Subagenten für parallele Recherche, Code-Generierung oder Analyse — Ergebnisse zusammenführen.",
    "deepagents.features.memory.title": "Persistenter Speicher",
    "deepagents.features.memory.desc":
      "Agenten erinnern sich zwischen Sitzungen. Projekt- und globaler Speicher mit automatischer Relevanzfilterung.",
    "deepagents.features.tools.title": "Umfangreiches Toolsystem",
    "deepagents.features.tools.desc":
      "Dateizugriff, Shell-Ausführung, Web-Suche und Custom-Tools — alles mit typsicheren Pydantic-Modellen.",
    "deepagents.features.production.title": "Produktionsreif",
    "deepagents.features.production.desc":
      "Streaming, Checkpoints, Multi-Provider-Support, Logfire-Integration — bewährt in 30+ Produktionsumgebungen.",
    "deepagents.architecture.title": "So funktioniert's",
    "deepagents.architecture.subtitle": "Eine Schichtarchitektur von der Anwendung bis zum LLM.",
    "deepagents.code.title": "Drei Zeilen zum ersten Agenten",
    "deepagents.code.subtitle": "Vom Basis-Setup über Custom-Tools bis zur Subagent-Delegation.",
    "deepagents.usecases.title": "Gebaut für echte Arbeit",
    "deepagents.usecases.subtitle": "Von Code-Generierung bis Forschungspipelines.",
    "deepagents.usecases.uc1.name": "Code-Generierung & Refactoring",
    "deepagents.usecases.uc1.desc":
      "Autonome Agenten die Codebasen lesen, Änderungen planen und über mehrere Dateien implementieren.",
    "deepagents.usecases.uc1.f1": "Multi-Datei-Refactoring",
    "deepagents.usecases.uc1.f2": "Automatisiertes Code-Review",
    "deepagents.usecases.uc1.f3": "Test-Generierung",
    "deepagents.usecases.uc1.f4": "Dependency-Updates",
    "deepagents.usecases.uc2.name": "Forschungsagenten",
    "deepagents.usecases.uc2.desc":
      "Agenten die das Web durchsuchen, Ergebnisse analysieren und strukturierte Berichte erstellen.",
    "deepagents.usecases.uc2.f1": "Web-Suche & Scraping",
    "deepagents.usecases.uc2.f2": "Quellen-Kreuzreferenz",
    "deepagents.usecases.uc2.f3": "Strukturierte Ausgabe",
    "deepagents.usecases.uc2.f4": "Zitatverfolgung",
    "deepagents.usecases.uc3.name": "Data-Pipeline-Automatisierung",
    "deepagents.usecases.uc3.desc":
      "Pipelines bauen, überwachen und reparieren mit Agenten die deine Infrastruktur verstehen.",
    "deepagents.usecases.uc3.f1": "Pipeline-Scaffolding",
    "deepagents.usecases.uc3.f2": "Fehlerdiagnose",
    "deepagents.usecases.uc3.f3": "Schema-Migrationen",
    "deepagents.usecases.uc3.f4": "Performance-Tuning",
    "deepagents.showcase.title": "CLI & DeepResearch",
    "deepagents.showcase.subtitle":
      "Interaktives Terminal, Editor-Integration und autonome Recherche — alles inklusive.",
    "deepagents.showcase.cli.title": "Interaktives CLI",
    "deepagents.showcase.cli.desc":
      "Vollständiges Terminal-Interface mit Textual. Gespräche fortsetzen, Modelle wechseln, Token-Verbrauch verfolgen — oder in Zed per ACP einbinden.",
    "deepagents.showcase.cli.f1": "Sitzungswiederaufnahme & persistenter Speicher",
    "deepagents.showcase.cli.f2": "Multi-Provider-Modellwechsel",
    "deepagents.showcase.cli.f3": "Custom Skills & Web-Suche",
    "deepagents.showcase.cli.f4": "Zed-Editor-Integration via ACP",
    "deepagents.showcase.research.title": "DeepResearch",
    "deepagents.showcase.research.desc":
      "Autonomer Forschungsagent der Abfragen plant, an Subagenten delegiert, Quellen kreuzreferenziert und strukturierte Berichte mit Zitaten schreibt.",
    "deepagents.showcase.research.f1": "Mehrstufige Forschungsplanung",
    "deepagents.showcase.research.f2": "Parallele Subagent-Delegation",
    "deepagents.showcase.research.f3": "Web-Suche mit vollständigem Seitenabruf",
    "deepagents.showcase.research.f4": "Strukturierte Berichte mit Zitaten",

    "logfire.meta.description":
      "KI-gestütztes Debugging- und Analyse-Tool für Pydantic Logfire. Stelle Fragen auf Deutsch, erhalte SQL-Abfragen und Visualisierungen.",
    "logfire.hero.badge": "Chrome-Erweiterung + FastAPI-Backend",
    "logfire.hero.title.line1": "Schluss mit Log-Lesen.",
    "logfire.hero.title.highlight": "Frag deine Traces",
    "logfire.hero.title.line2": "in natürlicher Sprache",
    "logfire.hero.description":
      "KI-Debugging-Partner für Pydantic Logfire. Stelle Fragen über deine Traces — erhalte SQL-Abfragen, Datentabellen und Diagramme sofort.",
    "logfire.hero.cta.getStarted": "Erweiterung installieren",
    "logfire.hero.cta.docs": "Dokumentation",
    "logfire.features.title": "Alles was du für smarteres Debugging brauchst",
    "logfire.features.subtitle":
      "Von natürlichsprachigen Abfragen bis zu automatischen Visualisierungen.",
    "logfire.features.nlquery.title": "Natürlichsprachige Abfragen",
    "logfire.features.nlquery.desc":
      "Frage nach deinen Traces in natürlicher Sprache. Kein SQL nötig — der Assistent übersetzt automatisch.",
    "logfire.features.sql.title": "Automatische SQL-Generierung",
    "logfire.features.sql.desc":
      "Pydantic-AI-Agent übersetzt Fragen in optimiertes Logfire-SQL. Sieh die Abfrage oder lies die Ergebnisse.",
    "logfire.features.viz.title": "Automatische Visualisierungen",
    "logfire.features.viz.desc":
      "Diagramme und Datentabellen automatisch aus Abfrageergebnissen generiert. Balkendiagramme, Zeitachsen und Zusammenfassungen.",
    "logfire.features.span.title": "Span-Kontext-Analyse",
    "logfire.features.span.desc":
      "Klicke auf einen Span in Logfire — der Assistent erfasst trace_id, span_id und vollen Kontext zum Debugging.",
    "logfire.features.prompts.title": "Eigene Prompts",
    "logfire.features.prompts.desc":
      "Erstelle wiederverwendbare Prompt-Vorlagen mit Slash-Befehlen. Eingebaut: /errors, /costs, /slow, /performance.",
    "logfire.features.memory.title": "Konversationsspeicher",
    "logfire.features.memory.desc":
      "Kompletter Gesprächsverlauf mit Suche und Projektfilterung. Setze jede Debugging-Sitzung fort.",
    "logfire.howitworks.title": "So funktioniert's",
    "logfire.howitworks.subtitle": "Von der Frage zum Ergebnis in Sekunden.",
    "logfire.howitworks.step1.title": "Stelle eine Frage",
    "logfire.howitworks.step1.desc":
      'Tippe in natürlicher Sprache — "Was waren die langsamsten Requests der letzten Stunde?"',
    "logfire.howitworks.step2.title": "KI generiert SQL",
    "logfire.howitworks.step2.desc":
      "Pydantic-AI-Agent übersetzt deine Frage in optimiertes Logfire-SQL.",
    "logfire.howitworks.step3.title": "Abfrage wird ausgeführt",
    "logfire.howitworks.step3.desc":
      "SQL läuft gegen die Logfire-API. Ergebnisse werden in Echtzeit per WebSocket gestreamt.",
    "logfire.howitworks.step4.title": "Erhalte Einblicke",
    "logfire.howitworks.step4.desc":
      "Datentabellen, Diagramme oder narrative Antworten — genau was du zum Debugging brauchst.",
    "logfire.usecases.title": "Gebaut für echtes Debugging",
    "logfire.usecases.subtitle": "Von langsamen Requests bis Kostentracking.",
    "logfire.usecases.uc1.name": "Langsame Requests debuggen",
    "logfire.usecases.uc1.desc":
      "Finde Engpässe sofort. Frage welche Endpoints am langsamsten sind und erhalte Span-für-Span Timing.",
    "logfire.usecases.uc1.f1": "Endpoint-Latenz-Ranking",
    "logfire.usecases.uc1.f2": "Span-für-Span Timing",
    "logfire.usecases.uc1.f3": "Perzentilanalyse (p50, p95, p99)",
    "logfire.usecases.uc1.f4": "Zeitraum-Vergleich",
    "logfire.usecases.uc2.name": "LLM-Nutzung & Kosten",
    "logfire.usecases.uc2.desc":
      "Token-Nutzung, Kosten und Aufrufzahlen aller LLM-Provider an einem Ort verfolgen.",
    "logfire.usecases.uc2.f1": "Token-Nutzung pro Modell",
    "logfire.usecases.uc2.f2": "Kostenaufschlüsselung pro Provider",
    "logfire.usecases.uc2.f3": "Nutzungstrends über Zeit",
    "logfire.usecases.uc2.f4": "Automatische Kostendiagramme",
    "logfire.usecases.uc3.name": "Fehleranalyse",
    "logfire.usecases.uc3.desc":
      "Fehlermuster, Häufigkeiten und Ursachen finden. Strukturierte Analyse was schiefgelaufen ist.",
    "logfire.usecases.uc3.f1": "Fehlerhäufigkeitsmuster",
    "logfire.usecases.uc3.f2": "Ursachenanalyse",
    "logfire.usecases.uc3.f3": "Fehlertrends über Zeit",
    "logfire.usecases.uc3.f4": "Betroffene Endpoints",
    "logfire.screenshots.title": "In Aktion sehen",
    "logfire.screenshots.subtitle":
      "Eine Chrome-Erweiterung direkt neben deinem Logfire-Dashboard.",
    "logfire.screenshots.chat": "Datentabellen",
    "logfire.screenshots.chart": "Auto-Diagramme",
    "logfire.screenshots.sql": "SQL-Generierung",
    "logfire.screenshots.span": "Span-Kontext",
    "logfire.screenshots.prompts": "Eigene Prompts",
    "logfire.screenshots.conversations": "Verlauf",
    "logfire.tech.title": "Gebaut mit",

    // Footer — Product Restatement
    "footer.restatement.oss.title": "Bereit, deinen ersten Produktions-KI-Agenten zu bauen?",
    "footer.restatement.oss.description":
      "Open-Source-Tools, kampferprobte Patterns, null Boilerplate. Konfiguriere deinen Stack und shippe in Minuten — nicht Monaten.",
    "footer.restatement.oss.cta": "Deine KI-App bauen",
    "footer.restatement.template.title": "Bereit, deine KI-App zu shippen?",
    "footer.restatement.template.description":
      "Wähle deine Frameworks, generiere ein produktionsreifes Projekt und deploye. 75+ Optionen, ein Befehl, null Config-Schulden.",
    "footer.restatement.template.cta": "Konfigurieren & Herunterladen",
    "footer.restatement.deepagents.title": "Bereit für Agenten, die wirklich denken?",
    "footer.restatement.deepagents.description":
      "Installiere pydantic-deep, definiere deinen Agenten und lass ihn planen, coden und delegieren — wie Claude Code, aber deiner.",
    "footer.restatement.deepagents.cta": "Quick Start testen",
    "footer.restatement.logfire.title": "Bereit, keine Logs mehr Zeile für Zeile zu lesen?",
    "footer.restatement.logfire.description":
      "Installiere die Erweiterung, verbinde mit Logfire und stelle deinen Traces Fragen auf Deutsch. Kostenlos und Open Source.",
    "footer.restatement.logfire.cta": "Erweiterung installieren",

    // Footer — Consultancy
    "footer.built": "Erstellt von",
    "footer.cta.title": "Brauchen Sie Hilfe bei der Umsetzung in Ihrem Unternehmen?",
    "footer.cta.description":
      "eine Beratungsfirma für Agentic AI Engineering mit 30+ Produktions-Implementierungen.",
    "footer.cta.button": "Kontaktieren Sie uns",
    "footer.oss.cta.title": "Brauchen Sie Hilfe beim Aufbau produktionsreifer KI-Agenten?",
    "ui.clickToCopy": "Klicken zum Kopieren",
    "ui.copied": "Kopiert!",
    "ui.terminal": "Terminal",
    "ui.orWithPreset": "Oder mit einem Preset:",
    "ui.followOnGithub": "Auf GitHub folgen",
    "blog.search": "Artikel suchen...",
    "blog.noPosts": "Noch keine Beiträge. Schauen Sie bald wieder vorbei.",
    "oss.meta.title": "Vstorm OSS — Open-Source-KI-Agent-Tools für Python",
    "deepagents.code.tab.basic": "Einfach",
    "deepagents.code.tab.tools": "Mit Tools",
    "deepagents.code.tab.subagents": "Sub-Agenten",

    // Stats Bar
    "stats.template.v1": "75+",
    "stats.template.l1": "Konfigurationsoptionen",
    "stats.template.v2": "5",
    "stats.template.l2": "KI-Frameworks",
    "stats.template.v3": "3",
    "stats.template.l3": "Presets",
    "stats.template.v4": "246",
    "stats.template.l4": "Templates",
    "stats.deepagents.v1": "30+",
    "stats.deepagents.l1": "Produktions-Deployments",
    "stats.deepagents.v2": "5+",
    "stats.deepagents.l2": "LLM-Anbieter",
    "stats.deepagents.v3": "100",
    "stats.deepagents.l3": "% Typsicher",
    "stats.deepagents.v4": "0",
    "stats.deepagents.l4": "Vendor Lock-in",
    "stats.logfire.v1": "6",
    "stats.logfire.l1": "Abfragetypen",
    "stats.logfire.v2": "3",
    "stats.logfire.l2": "Ausgabeformate",
    "stats.logfire.v3": "10+",
    "stats.logfire.l3": "LLM-Anbieter",
    "stats.logfire.v4": "100",
    "stats.logfire.l4": "% Self-Hosted",

    // Before/After
    "beforeafter.title": "Warum es nutzen?",
    "beforeafter.template.before.title": "Ohne das Template",
    "beforeafter.template.after.title": "Mit dem Template",
    "beforeafter.template.before.1": "Tage für FastAPI + Next.js Boilerplate-Setup",
    "beforeafter.template.before.2": "Manuelle KI-Framework-Integration",
    "beforeafter.template.before.3": "Kein WebSocket-Streaming out of the box",
    "beforeafter.template.before.4": "Docker und Deployment von Grund auf konfiguriert",
    "beforeafter.template.before.5": "Keine Observability bis Sie es selbst hinzufügen",
    "beforeafter.template.after.1": "Produktionsreifes Projekt in Minuten",
    "beforeafter.template.after.2": "5 KI-Frameworks vorintegriert und getestet",
    "beforeafter.template.after.3": "WebSocket-Streaming mit Tool-Call-Visualisierung",
    "beforeafter.template.after.4": "Docker, Kubernetes und CI/CD inklusive",
    "beforeafter.template.after.5": "Logfire, Sentry und Prometheus eingebaut",
    "beforeafter.deepagents.before.title": "Ohne DeepAgents",
    "beforeafter.deepagents.after.title": "Mit DeepAgents",
    "beforeafter.deepagents.before.1": "Fragile Chains die bei unerwarteten Inputs brechen",
    "beforeafter.deepagents.before.2": "Keine Typsicherheit — dict-basiert, fehleranfällig",
    "beforeafter.deepagents.before.3": "Schwer zu debuggende Agent-Entscheidungspfade",
    "beforeafter.deepagents.before.4": "Manuelles Kontextfenster-Management",
    "beforeafter.deepagents.before.5": "Kein Subagent-Delegationsmuster",
    "beforeafter.deepagents.after.1": "Modulare Agenten mit strukturierter Planung",
    "beforeafter.deepagents.after.2": "Vollständig typsicher mit Pydantic-Modellen",
    "beforeafter.deepagents.after.3": "Vollständige Observability über Logfire",
    "beforeafter.deepagents.after.4": "Automatische Kontextzusammenfassung",
    "beforeafter.deepagents.after.5": "Eingebaute Subagent-Delegation und Kommunikation",
    "beforeafter.logfire.before.title": "Ohne Logfire Assistant",
    "beforeafter.logfire.after.title": "Mit Logfire Assistant",
    "beforeafter.logfire.before.1": "Manuelles Schreiben von SQL-Abfragen gegen Logfire-Schema",
    "beforeafter.logfire.before.2": "Kontextwechsel zwischen Logfire-Dashboard und Tools",
    "beforeafter.logfire.before.3": "Keine automatische Visualisierung der Ergebnisse",
    "beforeafter.logfire.before.4": "Wiederholung häufiger Abfragen aus dem Gedächtnis",
    "beforeafter.logfire.before.5": "Keine Konversationshistorie oder Kontext",
    "beforeafter.logfire.after.1": "Fragen in natürlicher Sprache stellen",
    "beforeafter.logfire.after.2": "Inline-Seitenleiste direkt im Logfire-Dashboard",
    "beforeafter.logfire.after.3": "Automatisch generierte Tabellen und Diagramme",
    "beforeafter.logfire.after.4": "Wiederverwendbare Prompt-Templates mit Slash-Befehlen",
    "beforeafter.logfire.after.5": "Vollständige Konversationshistorie mit Projektfilterung",

    // Comparison Tables
    "comparison.title": "Wie schneidet es ab?",
    "comparison.subtitle": "Vergleich mit den Alternativen.",
    "comparison.feature": "Funktion",
    "comparison.template.col.ours": "AI Agent Template",
    "comparison.template.col.manual": "Manuelles Setup",
    "comparison.template.col.other": "Andere Boilerplates",
    "comparison.template.row.ai": "KI-Agent-Integration",
    "comparison.template.row.multidb": "Multi-Datenbank-Support",
    "comparison.template.row.auth": "Eingebaute Auth",
    "comparison.template.row.websocket": "WebSocket-Streaming",
    "comparison.template.row.configurator": "Web-Konfigurator",
    "comparison.template.row.typesafe": "Typsicherer Code",
    "comparison.template.row.observable": "Observability",
    "comparison.deepagents.col.ours": "DeepAgents",
    "comparison.deepagents.row.typesafe": "Typsicherheit",
    "comparison.deepagents.row.subagents": "Subagent-Delegation",
    "comparison.deepagents.row.tools": "Tool-System",
    "comparison.deepagents.row.multiprovider": "Multi-Provider",
    "comparison.deepagents.row.observability": "Observability",
    "comparison.deepagents.row.production": "Produktionsgetestet",
    "comparison.logfire.col.ours": "Logfire Assistant",
    "comparison.logfire.col.manual": "Manuelles SQL",
    "comparison.logfire.col.generic": "Generischer KI-Chat",
    "comparison.logfire.row.sql": "Logfire-natives SQL",
    "comparison.logfire.row.context": "Span-Kontext-bewusst",
    "comparison.logfire.row.charts": "Auto-Diagramme",
    "comparison.logfire.row.prompts": "Eigene Prompts",
    "comparison.logfire.row.history": "Konversationshistorie",
    "comparison.logfire.row.nl": "Natürlichsprachige Eingabe",

    // Compare landing pages
    "compare.index.title": "Unsere Tools vergleichen",
    "compare.index.subtitle":
      "Vergleiche zu Pydantic DeepAgents, KI-Agent-Templates und Python-Tools vs. gängigen Alternativen. Finde das richtige Werkzeug für deinen KI-Stack.",
    "compare.index.meta.description":
      "Funktionsvergleiche von Vstorm OSS Tools vs LangChain, CrewAI, AutoGen und andere KI-Frameworks",
    "compare.verdict": "Das Urteil",
    "compare.highlights": "Wesentliche Unterschiede",
    "compare.table.title": "Funktionsvergleich",
    "compare.code.title": "Code-Vergleich",
    "compare.whenToUse": "Wann welches verwenden",
    "compare.whenToUse.ours": "Wähle {product}, wenn:",
    "compare.whenToUse.theirs": "Wähle {competitor}, wenn:",
    "compare.faq.title": "Häufig gestellte Fragen",
    "compare.relatedTitle": "Verwandte Vergleiche",
    "compare.cta.title": "Bereit {product} auszuprobieren?",
    "compare.cta.button": "Loslegen",
    "compare.winner.ours": "Vorteil: {product}",
    "compare.winner.theirs": "Vorteil: {competitor}",
    "compare.winner.tie": "Unentschieden",

    // Testimonials
    "testimonials.title": "Was Entwickler sagen",
    "testimonials.subtitle": "Von Early Adoptern und Beta-Testern.",
    "testimonials.1.quote":
      "Hat uns Wochen an Boilerplate gespart. Das Template generierte eine produktionsreife KI-App, die wir am selben Tag deployed haben.",
    "testimonials.1.name": "Marek K.",
    "testimonials.1.role": "Senior Backend Engineer",
    "testimonials.2.quote":
      "DeepAgents gab uns endlich typsichere Agenten mit richtiger Observability. Wir sind von LangChain an einem Wochenende migriert.",
    "testimonials.2.name": "Sarah R.",
    "testimonials.2.role": "AI Platform Lead",
    "testimonials.3.quote":
      "Logfire Assistant hat Debugging von 30 Minuten manuellem SQL in ein 30-Sekunden-Gespräch verwandelt. Ein Gamechanger für unser Team.",
    "testimonials.3.name": "Jan L.",
    "testimonials.3.role": "DevOps Engineer",

    // Newsletter
    "newsletter.title": "Auf dem Laufenden bleiben",
    "newsletter.subtitle":
      "Benachrichtigungen über neue Releases, Features und KI-Engineering-Insights.",
    "newsletter.placeholder": "ihre@email.de",
    "newsletter.button": "Abonnieren",
    "newsletter.success": "Danke! Wir halten Sie auf dem Laufenden.",
    "404.title": "Seite nicht gefunden",
    "404.description": "Die gesuchte Seite existiert nicht oder wurde verschoben.",
    "404.back": "Zurück zur Startseite",
    "blog.readingTime": "{min} Min. Lesezeit",
    "blog.pagination.prev": "Zurück",
    "blog.pagination.next": "Weiter",
    "blog.share": "Artikel teilen",
    "blog.share.copied": "Link kopiert!",
    "blog.relatedPosts": "Verwandte Artikel",
    "blog.stickyCta.text": "Brauchen Sie Hilfe beim Aufbau von KI-Agenten?",
    "blog.stickyCta.button": "Sprechen Sie mit Vstorm",
    "skip.toContent": "Zum Inhalt springen",

    // About page
    "about.title": "Über Vstorm OSS",
    "about.subtitle": "Open-Source-KI-Agent-Tools, von Praktikern für Praktiker entwickelt.",
    "about.meta.description":
      "Vstorm OSS: 13 Open-Source-Repos, 1.730+ GitHub-Sterne und 830K+ PyPI-Downloads. Produktionsreife KI-Agent-Tools für Python. Von Vstorm.",
    "about.company.title": "Wer wir sind",
    "about.company.description":
      "Vstorm ist eine Applied Agentic AI Engineering Consultancy. Wir entwickeln produktionsreife KI-Agent-Systeme für Unternehmen in den USA, Europa und dem Nahen Osten. Jedes Tool in diesem Portfolio entstand aus einer echten Produktionsherausforderung - wir veröffentlichen als Open Source, was wir entwickeln.",
    "about.numbers.title": "In Zahlen",
    "about.numbers.stars": "GitHub-Sterne",
    "about.numbers.downloads": "PyPI-Downloads",
    "about.numbers.repos": "Open-Source-Repos",
    "about.numbers.projects": "Kundenprojekte",
    "about.company.details":
      "Vstorm wurde 2017 gegründet und ist auf die Entwicklung maßgeschneiderter KI- und LLM-basierter Software spezialisiert. Mit einem Team von 25+ Ingenieuren und über 90 erfolgreichen Projekten für Kunden in den USA, Großbritannien und Westeuropa steigern wir den ROI durch Hyper-Automatisierung, Hyper-Personalisierung und verbesserte Entscheidungsprozesse. Ausgezeichnet von Deloitte Technology Fast 50 und erstes KI-Beratungsunternehmen in der Agentic AI Foundation.",
    "about.partners.title": "Partner & Ökosystem",
    "about.partners.description":
      "Wir tragen zu führenden Agentic-KI-Frameworks bei und arbeiten mit Organisationen zusammen, die die Zukunft von KI-Agenten gestalten.",
    "about.philosophy.title": "Warum Open Source",
    "about.philosophy.description":
      "Wir glauben, dass die besten KI-Agent-Tools offen, modular und produktionserprobt sein sollten. Geschlossene Monolithen binden Sie an die Entscheidungen eines Anbieters. Unser Ansatz: Jede Fähigkeit als eigenständiges Paket entwickeln, in 90+ Kundenprojekten testen und dann veröffentlichen. Wenn es in der Produktion funktioniert, sollte es für alle verfügbar sein.",
    "about.links.title": "Kontakt",
    "blog.tag.title": "Tag: {tag}",
    "blog.tag.postCount": "{count} Beiträge",
    "oss.githubStars": "Sterne auf GitHub — Gib uns einen Stern!",
    "changelog.title": "Änderungsprotokoll",
    "changelog.subtitle":
      "Alle Versionen der Vstorm OSS-Projekte: Full-Stack AI Agent Template, Pydantic DeepAgents und mehr. Neue Features, Bugfixes und Migrationshinweise.",
    "roadmap.title": "Roadmap",
    "roadmap.subtitle": "Was wir bauen und was als nächstes kommt",
    "nav.about": "Über uns",
    "nav.compare": "Vergleich",
    "nav.usecases": "Anwendungsfälle",
    "usecases.index.title": "Anwendungsfälle",
    "usecases.index.subtitle":
      "Praxisnahe Anwendungsfälle mit funktionierenden Codebeispielen — Research-Agenten, RAG-Chatbots, SQL-Agenten und mehr.",
    "usecases.problem.title": "Das Problem",
    "usecases.solution.title": "Die Lösung",
    "usecases.code.title": "Funktionierender Code",
    "usecases.steps.title": "Schritt für Schritt",
    "usecases.related.title": "Verwandte Anwendungsfälle",
    "usecases.cta.title": "Bereit, das zu bauen?",
    "usecases.cta.description":
      "Starten Sie mit Vstorms Open-Source-Tools — produktionserprobt, vollständig dokumentiert und kostenlos.",
    "usecases.cta.button": "Loslegen",
    "nav.guides": "Anleitungen",
    "guides.index.title": "Anleitungen",
    "guides.index.subtitle":
      "Lernen Sie, KI-Agenten mit verschiedenen Frameworks zu bauen — Schritt-für-Schritt-Anleitungen mit funktionierendem Code. Pydantic AI, LangChain, LangGraph, CrewAI und mehr.",
    "guides.step1.title": "Abhängigkeiten installieren",
    "guides.step1.description":
      "Installieren Sie {framework} und die benötigten Tools für diesen Anwendungsfall.",
    "guides.step2.title": "Tools definieren",
    "guides.step2.description":
      "Erstellen Sie domänenspezifische Tool-Funktionen, die Ihr Agent zur Interaktion mit externen Diensten verwenden wird.",
    "guides.step3.title": "Agent erstellen und ausführen",
    "guides.step3.description":
      "Initialisieren Sie den {framework}-Agenten mit Ihren Tools, setzen Sie den System-Prompt und führen Sie eine Abfrage aus.",
    "guides.related.frameworks": "Mit anderen Frameworks bauen",
    "guides.related.usecases": "Weitere Anleitungen mit {framework}",
    "guides.cta.title": "Bereit, mit {framework} zu bauen?",
    "guides.cta.description":
      "Generieren Sie ein produktionsbereites Projekt mit vorkonfiguriertem {framework} — FastAPI + Next.js, Auth, Streaming und mehr.",
    "guides.cta.button": "Loslegen",

    // Tools
    "nav.tools": "Kostenlose Tools",
    "tools.index.title": "Kostenlose KI-Agent-Tools",
    "tools.index.subtitle":
      "Interaktive Tools zur Auswahl des richtigen KI-Frameworks, der Architektur und der Projekteinrichtung — ohne Registrierung.",
    "tools.tryFree": "Kostenlos testen",
    "tools.badge.free": "Kostenloses Tool",
    "tools.badge.interactive": "Interaktiv",
    "tools.badge.calculator": "Rechner",
    "tools.badge.quiz": "Quiz — 5 Fragen",
    "tools.configurator.title": "KI-Agent-Projekt-Konfigurator",
    "tools.configurator.subtitle":
      "Konfiguriere ein produktionsreifes FastAPI + Next.js KI-Projekt mit 75+ Optionen. Als ZIP herunterladen oder CLI — lokal in 2 Minuten starten.",
    "tools.configurator.description":
      "Konfiguriere und lade ein produktionsreifes KI-Projekt herunter. Wähle aus 5 Frameworks, 4 Datenbanken und 75+ Optionen — ohne Registrierung.",
    "tools.configurator.features.title": "Was du konfigurieren kannst",
    "tools.configurator.howItWorks": "So funktioniert's",
    "tools.configurator.step1": "Optionen wählen",
    "tools.configurator.step1.desc":
      "Wähle KI-Framework, Datenbank, Auth, Integrationen und Infrastruktur in 9 Konfigurationsschritten.",
    "tools.configurator.step2": "Projekt-Vorschau",
    "tools.configurator.step2.desc":
      "Sieh dir eine Live-Vorschau der Projektstruktur, Abhängigkeiten und Konfiguration an.",
    "tools.configurator.step3": "Herunterladen & starten",
    "tools.configurator.step3.desc":
      "Als ZIP herunterladen oder CLI-Befehl kopieren. Dein Projekt läuft lokal in unter 2 Minuten.",
    "tools.configurator.openButton": "Konfigurator öffnen",
    "tools.configurator.cta.title": "Bereit, dein KI-Agent-Projekt zu bauen?",
    "tools.configurator.cta.description":
      "Öffne den Konfigurator, wähle deinen Stack und lade ein produktionsreifes Projekt in Minuten herunter.",
    "tools.comparison.title": "KI-Framework-Vergleichsrechner",
    "tools.comparison.subtitle":
      "Beantworte 6 Fragen zu deinem Projekt und erhalte eine bewertete Empfehlung aus 5 Python-KI-Frameworks.",
    "tools.comparison.description":
      "Beantworte 6 Fragen zu deinen Anforderungen und erhalte eine personalisierte KI-Framework-Empfehlung mit Ergebnissen.",
    "tools.comparison.frameworks.title": "Verglichene Frameworks",
    "tools.comparison.cta.title": "Möchtest du einen detaillierteren Vergleich?",
    "tools.comparison.cta.description":
      "Sieh dir unsere detaillierten Vergleiche mit Feature-Tabellen, Code-Beispielen und Migrationsanleitungen an.",
    "tools.comparison.cta.button": "Detaillierte Vergleiche ansehen",
    "tools.quiz.title": "Agenten-Architektur-Quiz",
    "tools.quiz.subtitle":
      "Beantworte 5 Fragen zu deinem Projekt und entdecke das ideale Architekturmuster — mit Framework-Empfehlung und nächsten Schritten.",
    "tools.quiz.description":
      "Mach ein 5-Fragen-Quiz und finde das beste Agenten-Architekturmuster — von einfachem ReAct bis zu hierarchischen Multi-Agenten-Systemen.",
    "tools.quiz.patterns.title": "Architekturmuster, die wir bewerten",
    "tools.quiz.cta.title": "Architektur klar — jetzt Framework wählen",
    "tools.quiz.cta.description":
      "Nutze unseren Framework-Vergleichsrechner, um das beste Framework für deine gewählte Architektur zu finden.",
    "tools.quiz.cta.button": "Frameworks vergleichen",
  },

  es: {
    "meta.description":
      "Herramientas open-source para construir agentes de IA en producción con Python. Template full-stack (FastAPI + Next.js), pipeline RAG, 5 frameworks de IA, middleware, subagentes. Por Vstorm.",

    "nav.back": "Volver al inicio",
    "hero.badge": "Open Source",
    "hero.title.line1": "Tu primera app de",
    "hero.title.highlight": "IA en producción",
    "hero.title.line2": "en 30 minutos",
    "hero.description":
      "Elige entre 5 frameworks de IA, configura 75+ opciones y despliega. FastAPI + Next.js con auth, streaming e infraestructura — listo para usar.",
    "hero.cta.configure": "Configurar y descargar",
    "hero.cta.github": "Ver en GitHub",
    "hero.terminal.success": "Proyecto creado exitosamente",
    "frameworks.title": "Funciona con tu stack",
    "features.title": "Todo lo que necesitas",
    "features.subtitle": "Desde base de datos hasta despliegue, configurado en un comando.",
    "features.ai.title": "5 Frameworks de IA",
    "features.ai.desc":
      "Pydantic AI, LangChain, LangGraph, CrewAI y DeepAgents con streaming WebSocket.",
    "features.options.title": "75+ Opciones",
    "features.options.desc":
      "Base de datos, auth, tareas en segundo plano, caché, rate limiting, almacenamiento, webhooks y más.",
    "features.presets.title": "3 Presets",
    "features.presets.desc": "Minimal, Production o AI Agent. Un comando, cero configuración.",
    "features.fullstack.title": "Full-Stack",
    "features.fullstack.desc":
      "Backend FastAPI con frontend Next.js 15. TypeScript, App Router, Tailwind CSS.",
    "features.production.title": "Listo para producción",
    "features.production.desc":
      "Docker, reverse proxy, Kubernetes, CI/CD, generación de .env listo para usar.",
    "features.observable.title": "Observable",
    "features.observable.desc":
      "Integración con Logfire, Sentry y Prometheus. Conoce lo que hacen tus agentes.",
    "presets.title": "Empieza con un preset",
    "presets.subtitle": "O personaliza cada opción en el configurador.",
    "presets.minimal.name": "Mínimo",
    "presets.minimal.desc": "Solo API, sin base de datos, sin auth. Perfecto para prototipos.",
    "presets.minimal.f1": "Sin base de datos",
    "presets.minimal.f2": "Sin autenticación",
    "presets.minimal.f3": "Sin Docker",
    "presets.minimal.f4": "FastAPI básico",
    "presets.minimal.cta": "Usar Mínimo",
    "presets.production.name": "Producción",
    "presets.production.tag": "Recomendado",
    "presets.production.desc": "Setup de producción completo. Listo para desplegar.",
    "presets.production.f1": "PostgreSQL + JWT",
    "presets.production.f2": "Redis + Caché",
    "presets.production.f3": "Sentry + Prometheus",
    "presets.production.f4": "Docker + Kubernetes",
    "presets.production.f5": "GitHub Actions CI",
    "presets.production.cta": "Usar Producción",
    "presets.agent.name": "Agente IA",
    "presets.agent.tag": "Más popular",
    "presets.agent.desc": "App con IA, streaming y persistencia de conversaciones.",
    "presets.agent.f1": "Pydantic AI (predeterminado)",
    "presets.agent.f2": "Streaming WebSocket",
    "presets.agent.f3": "Historial de conversación",
    "presets.agent.f4": "PostgreSQL + Redis",
    "presets.agent.f5": "Frontend Next.js",
    "presets.agent.cta": "Usar Agente IA",

    // Template — How It Works
    "template.howitworks.title": "Cómo funciona",
    "template.howitworks.subtitle": "De cero a producción en cuatro pasos",
    "template.howitworks.step1.title": "Elige tu stack",
    "template.howitworks.step1.desc":
      "Elige entre 5 frameworks de IA, 3 frontends y más de 75 opciones de configuración a través del configurador web o CLI.",
    "template.howitworks.step2.title": "Genera y estructura",
    "template.howitworks.step2.desc":
      "Un comando genera un proyecto completamente configurado — Docker, CI/CD, auth, base de datos y tu stack de IA seleccionado.",
    "template.howitworks.step3.title": "Construye tu agente",
    "template.howitworks.step3.desc":
      "Concéntrate en tu lógica de IA. La plantilla maneja routing, streaming, gestión de estado y boilerplate de despliegue.",
    "template.howitworks.step4.title": "Despliega a producción",
    "template.howitworks.step4.desc":
      "Despliega con docker compose up. Monitoreo, logging y health checks están preconfigurados de serie.",

    "quickstart.title": "Empezar",
    "quickstart.step1": "Instalar",
    "quickstart.step2": "Crear",
    "quickstart.step3": "Ejecutar",
    "quickstart.or": "O usa el configurador web",

    // Blog
    "nav.blog": "Blog",
    "blog.title": "Blog",
    "blog.subtitle":
      "Tutoriales, comparaciones de frameworks y guías de producción para agentes de IA con Python. Pydantic AI, LangChain, LangGraph, CrewAI y más.",
    "blog.readMore": "Leer más",
    "blog.publishedOn": "Publicado el",
    "blog.updatedOn": "Actualizado el",
    "blog.backToBlog": "Volver al blog",
    "blog.tableOfContents": "Tabla de contenidos",
    "blog.availableIn": "Disponible en",
    "blog.allCategories": "Todos",
    "blog.category.open-source": "Open Source",
    "blog.category.news": "Noticias",
    "blog.category.article": "Artículo",

    // FAQ
    "faq.title": "Preguntas frecuentes",
    "faq.subtitle":
      "Respuestas a preguntas frecuentes sobre el Full-Stack AI Agent Template, Pydantic DeepAgents e integración con Logfire. Guías y consejos de resolución.",
    "faq.seeAll": "Ver todas las preguntas",
    "faq.category.template": "Full-Stack AI Agent Template",
    "faq.category.deepagents": "Pydantic DeepAgents",
    "faq.category.logfire": "Logfire Assistant",

    // OSS Landing
    "oss.meta.description":
      "Herramientas open source para construir agentes IA de producción con Python. Templates full-stack, middleware, subagentes y más. 13 repos. Por Vstorm.",
    "oss.hero.badge": "13 repos Open Source · 1.730+ estrellas",
    "oss.hero.title.line1": "Construye",
    "oss.hero.title.highlight": "agentes IA de producción",
    "oss.hero.title.line2": "No infraestructura",
    "oss.hero.description":
      "Herramientas Python open source probadas en 30+ despliegues reales. Frameworks, plantillas y bibliotecas — construye agentes, no boilerplate.",
    "oss.hero.definition":
      "Vstorm OSS is a collection of 13 open-source Python packages for building production AI agents. It includes a full-stack project generator (FastAPI + Next.js), a deep agent framework (planning, sandboxed execution, subagents), RAG pipeline with 4 vector stores, middleware with lifecycle hooks, task planning, context summarization, and database tooling. Used by 50,000+ developers with 1,730+ GitHub stars and 830K+ PyPI downloads.",
    "oss.hero.definition":
      "Vstorm OSS es una colección de 13 paquetes Python open-source para construir agentes de IA en producción. Incluye un generador de proyectos full-stack (FastAPI + Next.js), un framework de agentes profundos (planificación, sandbox, subagentes), pipeline RAG con 4 bases vectoriales, middleware con lifecycle hooks, planificación de tareas, compresión de contexto y herramientas de base de datos. Usado por más de 50.000 desarrolladores, 1.730+ estrellas en GitHub y 830K+ descargas de PyPI.",
    "oss.hero.cta.configure": "Crea tu app de IA",
    "oss.hero.cta.explore": "Explorar proyectos",
    "oss.hero.consultancy.title": "¿Necesitas ayuda para construir agentes IA en producción?",
    "oss.hero.consultancy.description":
      "Somos Vstorm — una consultoría de ingeniería de IA aplicada con más de 30 implementaciones de agentes IA en producción.",
    "oss.projects.title": "Nuestros proyectos",
    "oss.projects.subtitle":
      "Paquetes open source para el ecosistema Pydantic AI — middleware, subagentes, resumido, monitoreo y una plantilla de agente IA full-stack.",
    "oss.projects.viewAll": "Ver todos los proyectos",
    "oss.trustedby.title": "Destacado y confiado por",
    "oss.trustedby.reactions": "reacciones en LinkedIn",
    "oss.trustedby.stars": "estrellas en GitHub",
    "oss.trustedby.downloads": "descargas en PyPI",
    "oss.howwework.title": "Cómo funciona",
    "oss.howwework.subtitle": "De la instalación a producción en tres pasos",
    "oss.howwework.step1.title": "Elige un paquete",
    "oss.howwework.step1.desc":
      "Explora nuestro ecosistema de 20 paquetes open source. Instala con pip — cada uno funciona solo o en conjunto.",
    "oss.howwework.step2.title": "Configura y construye",
    "oss.howwework.step2.desc":
      "Usa nuestros generadores CLI, presets y plantillas para crear tu proyecto de agente IA en minutos, no semanas.",
    "oss.howwework.step3.title": "Despliega a producción",
    "oss.howwework.step3.desc":
      "Despliega con Docker, añade observabilidad con Logfire y escala con confianza usando código probado en producción.",

    // Manifesto — Why We Build This
    "oss.manifesto.title": "Por qué construimos esto",
    "oss.manifesto.quote":
      "Después de más de 30 despliegues de IA, seguíamos chocando contra el mismo muro: equipos pasando meses construyendo infraestructura en lugar de resolver su problema real. Cada proyecto reinventaba auth, streaming, orquestación de agentes — desde cero. Decidimos hacer open-source los patrones que realmente sobrevivieron producción, para que puedas saltarte la parte donde todo se rompe a las 2 de la madrugada.",
    "oss.manifesto.author": "Equipo Vstorm — desde las trincheras de la IA en producción",
    "oss.manifesto.p1.title": "Modular, no monolítico",
    "oss.manifesto.p1.desc":
      "Toma lo que necesitas, deja el resto. Cada paquete funciona de forma independiente — sin vendor lock-in, sin dependencias ocultas.",
    "oss.manifesto.p2.title": "Probado en producción primero",
    "oss.manifesto.p2.desc":
      "Nada se publica hasta que sobrevive tráfico real. No son prototipos de fin de semana — están extraídos de sistemas que sirven usuarios reales.",
    "oss.manifesto.p3.title": "Construido por practicantes",
    "oss.manifesto.p3.desc":
      "Usamos todo lo que publicamos. Cuando algo se rompe, lo sentimos primero. Por eso nuestras herramientas se centran en lo que realmente importa en producción.",

    "oss.card.install": "Instalación",
    "oss.card.comingSoon": "Próximamente",
    "oss.card.viewProject": "Ver proyecto",

    // Changelog
    "oss.changelog.title": "Novedades",
    "oss.changelog.subtitle": "Últimos lanzamientos en nuestro ecosistema",
    "oss.changelog.1.title": "DeepResearch y soporte multi-proveedor",
    "oss.changelog.1.desc":
      "Añadido patrón de agente DeepResearch, proveedores Gemini/Groq y gestión de contexto mejorada.",
    "oss.changelog.2.title": "Configurador web y 5 frameworks de IA",
    "oss.changelog.2.desc":
      "Configurador web interactivo con 75+ opciones, soporte CrewAI y LangGraph, integración con Logfire.",
    "oss.changelog.3.title": "Logfire Assistant 1.0 — Extensión de Chrome",
    "oss.changelog.3.desc":
      "Consultas en lenguaje natural para datos de Logfire. Chatea con tus trazas, métricas y logs en el navegador.",
    "oss.changelog.viewAll": "Ver todos los lanzamientos en GitHub",

    // Contributors
    "oss.contributors.title": "Construido por la comunidad",
    "oss.contributors.subtitle":
      "Colaboradores open source mejorando nuestras herramientas cada día",
    "oss.contributors.join": "Conviértete en colaborador →",

    // Recent Posts
    "oss.recentPosts.title": "De nuestro blog",
    "oss.recentPosts.subtitle":
      "Últimos tutoriales, guías y perspectivas sobre la construcción de agentes IA",
    "oss.recentPosts.viewAll": "Ver todos los posts →",

    // Community
    "oss.community.title": "Comunidad y reconocimiento",
    "oss.community.subtitle": "Lo que el ecosistema dice sobre nuestras herramientas",
    "oss.community.stats.langchain": "Likes en publicación de LangChain",
    "oss.community.stats.references": "Referencias en issues y PRs de Pydantic AI",
    "oss.community.stats.docs": "Listados en la documentación oficial de Pydantic AI",
    "oss.community.stats.contributors": "Contribuidores de la comunidad",
    "oss.community.langchain.description":
      "LangChain destacó nuestro Full-Stack AI Agent Template como Community Content Spotlight — generando 600+ likes, 26 comentarios y 71 compartidos.",

    // Generic Project Page
    "project.backToProjects": "Todos los proyectos",
    "project.install": "Instalación",
    "project.features": "Características",
    "project.quickStart": "Inicio Rápido",
    "project.useCases": "Casos de Uso",
    "project.lifecycle": "Ciclo de Vida de Hooks",
    "project.links": "Enlaces",
    "project.comingSoon.title": "Próximamente",
    "project.comingSoon.description": "Este proyecto está en desarrollo.",

    // Nav
    "nav.projects": "Proyectos",

    // Pydantic DeepAgents Landing
    "deepagents.meta.description":
      "Framework Python de producción para agentes autónomos de IA. Arquitectura Claude Code con planificación, acceso a archivos, subagentes y contexto ilimitado.",
    "deepagents.hero.badge": "Framework Open Source",
    "deepagents.hero.title.line1": "Construye agentes",
    "deepagents.hero.title.highlight": "IA autónomos",
    "deepagents.hero.title.line2": "que realmente funcionan",
    "deepagents.hero.description":
      "Framework Python de producción con patrón deep agent — agentes que planifican, programan, ejecutan y delegan como Claude Code.",
    "deepagents.hero.cta.getStarted": "Probar Quick Start",
    "deepagents.hero.cta.github": "Ver en GitHub",
    "deepagents.hero.terminal.planning": "Planificando: Dividir tarea en pasos...",
    "deepagents.hero.terminal.reading": "Leyendo: src/auth/models.py",
    "deepagents.hero.terminal.editing": "Editando: src/auth/jwt_handler.py",
    "deepagents.hero.terminal.delegating": "Delegando: sub-agente code-review",
    "deepagents.hero.terminal.complete": "Tarea completada — 4 archivos modificados",
    "deepagents.howitworks.title": "Empieza en 4 pasos",
    "deepagents.howitworks.subtitle": "De pip install a agentes autónomos en minutos",
    "deepagents.howitworks.step1.title": "Instala",
    "deepagents.howitworks.step1.desc":
      "pip install pydantic-deepagents — un paquete, cero configuración, todo incluido.",
    "deepagents.howitworks.step2.title": "Define tu agente",
    "deepagents.howitworks.step2.desc":
      "Describe qué hace tu agente — herramientas tipadas, system prompts y sub-agentes opcionales.",
    "deepagents.howitworks.step3.title": "Ejecuta",
    "deepagents.howitworks.step3.desc":
      "Tu agente planifica, ejecuta y delega — transmitiendo resultados en tiempo real por WebSocket.",
    "deepagents.howitworks.step4.title": "Escala con sub-agentes",
    "deepagents.howitworks.step4.desc":
      "Divide tareas complejas en sub-agentes especializados que colaboran de forma autónoma.",
    "deepagents.providers.title": "Construido sobre herramientas probadas",
    "deepagents.features.title": "Todo lo que un agente necesita",
    "deepagents.features.subtitle":
      "De la planificación al despliegue — el toolkit completo de deep agent.",
    "deepagents.features.deepagent.title": "Patrón Deep Agent",
    "deepagents.features.deepagent.desc":
      "Implementa la arquitectura Claude Code — agentes que razonan, planifican y ejecutan tareas complejas de forma autónoma.",
    "deepagents.features.context.title": "Contexto ilimitado",
    "deepagents.features.context.desc":
      "La compactación de conversaciones permite trabajar en tareas que exceden la ventana de contexto de cualquier modelo.",
    "deepagents.features.subagents.title": "Delegación de subagentes",
    "deepagents.features.subagents.desc":
      "Crea subagentes especializados para investigación paralela, generación de código o análisis — fusiona resultados.",
    "deepagents.features.memory.title": "Memoria persistente",
    "deepagents.features.memory.desc":
      "Los agentes recuerdan entre sesiones. Memoria por proyecto y global con filtrado automático de relevancia.",
    "deepagents.features.tools.title": "Sistema de herramientas",
    "deepagents.features.tools.desc":
      "Acceso a archivos, ejecución shell, búsqueda web y herramientas custom — todo con modelos Pydantic tipados.",
    "deepagents.features.production.title": "Listo para producción",
    "deepagents.features.production.desc":
      "Streaming, checkpoints, soporte multi-proveedor, integración Logfire — probado en 30+ despliegues.",
    "deepagents.architecture.title": "Cómo funciona",
    "deepagents.architecture.subtitle":
      "Una arquitectura por capas desde tu aplicación hasta el LLM.",
    "deepagents.code.title": "Tres líneas para tu primer agente",
    "deepagents.code.subtitle":
      "Desde configuración básica hasta herramientas custom y delegación de subagentes.",
    "deepagents.usecases.title": "Construido para trabajo real",
    "deepagents.usecases.subtitle": "Desde generación de código hasta pipelines de investigación.",
    "deepagents.usecases.uc1.name": "Generación y refactoring de código",
    "deepagents.usecases.uc1.desc":
      "Agentes autónomos que leen codebases, planifican cambios y los implementan en múltiples archivos.",
    "deepagents.usecases.uc1.f1": "Refactoring multi-archivo",
    "deepagents.usecases.uc1.f2": "Code review automatizado",
    "deepagents.usecases.uc1.f3": "Generación de tests",
    "deepagents.usecases.uc1.f4": "Actualización de dependencias",
    "deepagents.usecases.uc2.name": "Agentes de investigación",
    "deepagents.usecases.uc2.desc":
      "Agentes que buscan en la web, analizan hallazgos y producen informes de investigación estructurados.",
    "deepagents.usecases.uc2.f1": "Búsqueda web y scraping",
    "deepagents.usecases.uc2.f2": "Referencia cruzada de fuentes",
    "deepagents.usecases.uc2.f3": "Salida estructurada",
    "deepagents.usecases.uc2.f4": "Seguimiento de citas",
    "deepagents.usecases.uc3.name": "Automatización de pipelines",
    "deepagents.usecases.uc3.desc":
      "Construye, monitorea y repara pipelines de datos con agentes que entienden tu infraestructura.",
    "deepagents.usecases.uc3.f1": "Scaffolding de pipelines",
    "deepagents.usecases.uc3.f2": "Diagnóstico de errores",
    "deepagents.usecases.uc3.f3": "Migraciones de esquema",
    "deepagents.usecases.uc3.f4": "Tuning de rendimiento",
    "deepagents.showcase.title": "CLI y DeepResearch",
    "deepagents.showcase.subtitle":
      "Terminal interactivo, integración con editor e investigación autónoma — todo incluido.",
    "deepagents.showcase.cli.title": "CLI Interactivo",
    "deepagents.showcase.cli.desc":
      "Interfaz de terminal completa con Textual. Reanuda conversaciones, cambia modelos, rastrea tokens — o conéctalo a Zed vía ACP.",
    "deepagents.showcase.cli.f1": "Reanudación de sesiones y memoria persistente",
    "deepagents.showcase.cli.f2": "Cambio de modelos multi-proveedor",
    "deepagents.showcase.cli.f3": "Skills personalizados y búsqueda web",
    "deepagents.showcase.cli.f4": "Integración con Zed vía ACP",
    "deepagents.showcase.research.title": "DeepResearch",
    "deepagents.showcase.research.desc":
      "Agente de investigación autónomo que planifica consultas, delega a subagentes, cruza fuentes y escribe informes estructurados con citas.",
    "deepagents.showcase.research.f1": "Planificación de investigación multi-paso",
    "deepagents.showcase.research.f2": "Delegación paralela de subagentes",
    "deepagents.showcase.research.f3": "Búsqueda web con descarga completa de páginas",
    "deepagents.showcase.research.f4": "Informes estructurados con citas",

    "logfire.meta.description":
      "Herramienta de depuración y análisis con IA para Pydantic Logfire. Haz preguntas en español, obtén consultas SQL y visualizaciones.",
    "logfire.hero.badge": "Extensión Chrome + Backend FastAPI",
    "logfire.hero.title.line1": "Deja de leer logs.",
    "logfire.hero.title.highlight": "Pregunta a tus traces",
    "logfire.hero.title.line2": "en lenguaje natural",
    "logfire.hero.description":
      "Compañero de depuración con IA para Pydantic Logfire. Haz preguntas sobre tus traces — obtén consultas SQL, tablas y gráficos al instante.",
    "logfire.hero.cta.getStarted": "Instalar extensión",
    "logfire.hero.cta.docs": "Documentación",
    "logfire.features.title": "Todo lo que necesitas para depurar mejor",
    "logfire.features.subtitle":
      "Desde consultas en lenguaje natural hasta visualizaciones automáticas.",
    "logfire.features.nlquery.title": "Consultas en lenguaje natural",
    "logfire.features.nlquery.desc":
      "Pregunta sobre tus traces en español. No necesitas SQL — el asistente traduce automáticamente.",
    "logfire.features.sql.title": "Generación automática de SQL",
    "logfire.features.sql.desc":
      "Agente Pydantic AI traduce preguntas a SQL optimizado para Logfire. Ve la consulta o lee los resultados.",
    "logfire.features.viz.title": "Visualizaciones automáticas",
    "logfire.features.viz.desc":
      "Gráficos y tablas generados automáticamente. Gráficos de barras, líneas de tiempo y resúmenes estructurados.",
    "logfire.features.span.title": "Análisis de contexto de spans",
    "logfire.features.span.desc":
      "Haz clic en cualquier span en Logfire — el asistente captura trace_id, span_id y contexto completo.",
    "logfire.features.prompts.title": "Prompts personalizados",
    "logfire.features.prompts.desc":
      "Crea plantillas con comandos slash. Prompts incluidos: /errors, /costs, /slow, /performance y más.",
    "logfire.features.memory.title": "Memoria de conversación",
    "logfire.features.memory.desc":
      "Historial completo con búsqueda y filtrado por proyecto. Retoma cualquier sesión de depuración.",
    "logfire.howitworks.title": "Cómo funciona",
    "logfire.howitworks.subtitle": "De pregunta a insight en segundos.",
    "logfire.howitworks.step1.title": "Haz una pregunta",
    "logfire.howitworks.step1.desc":
      'Escribe en lenguaje natural — "¿Cuáles fueron las solicitudes más lentas en la última hora?"',
    "logfire.howitworks.step2.title": "La IA genera SQL",
    "logfire.howitworks.step2.desc":
      "Agente Pydantic AI traduce tu pregunta a SQL optimizado para Logfire.",
    "logfire.howitworks.step3.title": "La consulta se ejecuta",
    "logfire.howitworks.step3.desc":
      "SQL se ejecuta contra la API de Logfire. Resultados transmitidos en tiempo real vía WebSocket.",
    "logfire.howitworks.step4.title": "Obtén insights",
    "logfire.howitworks.step4.desc":
      "Tablas, gráficos o respuestas narrativas — exactamente lo que necesitas para depurar.",
    "logfire.usecases.title": "Construido para depuración real",
    "logfire.usecases.subtitle": "Desde solicitudes lentas hasta seguimiento de costos.",
    "logfire.usecases.uc1.name": "Depurar solicitudes lentas",
    "logfire.usecases.uc1.desc":
      "Encuentra cuellos de botella al instante. Pregunta qué endpoints son más lentos y obtén desglose span por span.",
    "logfire.usecases.uc1.f1": "Ranking de latencia de endpoints",
    "logfire.usecases.uc1.f2": "Timing span por span",
    "logfire.usecases.uc1.f3": "Análisis de percentiles (p50, p95, p99)",
    "logfire.usecases.uc1.f4": "Comparación entre períodos",
    "logfire.usecases.uc2.name": "Uso de LLM y costos",
    "logfire.usecases.uc2.desc":
      "Rastrea uso de tokens, costos y llamadas de todos los proveedores LLM en un solo lugar.",
    "logfire.usecases.uc2.f1": "Uso de tokens por modelo",
    "logfire.usecases.uc2.f2": "Desglose de costos por proveedor",
    "logfire.usecases.uc2.f3": "Tendencias de uso en el tiempo",
    "logfire.usecases.uc2.f4": "Gráficos de costos automáticos",
    "logfire.usecases.uc3.name": "Análisis de errores",
    "logfire.usecases.uc3.desc":
      "Encuentra patrones, frecuencias y causas raíz de errores. Análisis estructurado de qué salió mal.",
    "logfire.usecases.uc3.f1": "Patrones de frecuencia de errores",
    "logfire.usecases.uc3.f2": "Análisis de causa raíz",
    "logfire.usecases.uc3.f3": "Tendencias de errores",
    "logfire.usecases.uc3.f4": "Mapeo de endpoints afectados",
    "logfire.screenshots.title": "Véalo en acción",
    "logfire.screenshots.subtitle": "Una extensión Chrome junto a tu dashboard de Logfire.",
    "logfire.screenshots.chat": "Tablas de datos",
    "logfire.screenshots.chart": "Gráficos auto",
    "logfire.screenshots.sql": "Generación SQL",
    "logfire.screenshots.span": "Contexto de spans",
    "logfire.screenshots.prompts": "Prompts custom",
    "logfire.screenshots.conversations": "Historial",
    "logfire.tech.title": "Construido con",

    // Footer — Product Restatement
    "footer.restatement.oss.title": "¿Listo para construir tu primer agente IA en producción?",
    "footer.restatement.oss.description":
      "Herramientas open-source, patrones probados en batalla, cero boilerplate. Configura tu stack y despliega en minutos — no meses.",
    "footer.restatement.oss.cta": "Crea tu app de IA",
    "footer.restatement.template.title": "¿Listo para desplegar tu app de IA?",
    "footer.restatement.template.description":
      "Elige tus frameworks, genera un proyecto listo para producción y despliega. 75+ opciones, un comando, cero deuda de configuración.",
    "footer.restatement.template.cta": "Configurar y descargar",
    "footer.restatement.deepagents.title": "¿Listo para agentes que realmente piensan?",
    "footer.restatement.deepagents.description":
      "Instala pydantic-deep, define tu agente y déjalo planificar, codear y delegar — como Claude Code, pero tuyo.",
    "footer.restatement.deepagents.cta": "Probar Quick Start",
    "footer.restatement.logfire.title": "¿Listo para dejar de leer logs línea por línea?",
    "footer.restatement.logfire.description":
      "Instala la extensión, conéctate a Logfire y pregunta a tus trazas en español. Gratis y open-source.",
    "footer.restatement.logfire.cta": "Instalar extensión",

    // Footer — Consultancy
    "footer.built": "Creado por",
    "footer.cta.title": "¿Necesitas ayuda para implementar esto en tu empresa?",
    "footer.cta.description":
      "una consultora de ingeniería de agentes IA con más de 30 implementaciones en producción.",
    "footer.cta.button": "Habla con nosotros",
    "footer.oss.cta.title": "¿Necesitas ayuda para crear agentes IA en producción?",
    "ui.clickToCopy": "Clic para copiar",
    "ui.copied": "¡Copiado!",
    "ui.terminal": "Terminal",
    "ui.orWithPreset": "O con un preset:",
    "ui.followOnGithub": "Seguir en GitHub",
    "blog.search": "Buscar artículos...",
    "blog.noPosts": "No hay publicaciones aún. Vuelve pronto.",
    "oss.meta.title": "Vstorm OSS — Herramientas Open Source de Agentes IA para Python",
    "deepagents.code.tab.basic": "Básico",
    "deepagents.code.tab.tools": "Con herramientas",
    "deepagents.code.tab.subagents": "Sub-agentes",

    // Stats Bar
    "stats.template.v1": "75+",
    "stats.template.l1": "Opciones de configuración",
    "stats.template.v2": "5",
    "stats.template.l2": "Frameworks de IA",
    "stats.template.v3": "3",
    "stats.template.l3": "Presets",
    "stats.template.v4": "246",
    "stats.template.l4": "Templates",
    "stats.deepagents.v1": "30+",
    "stats.deepagents.l1": "Despliegues en producción",
    "stats.deepagents.v2": "5+",
    "stats.deepagents.l2": "Proveedores LLM",
    "stats.deepagents.v3": "100",
    "stats.deepagents.l3": "% Type-Safe",
    "stats.deepagents.v4": "0",
    "stats.deepagents.l4": "Vendor Lock-in",
    "stats.logfire.v1": "6",
    "stats.logfire.l1": "Tipos de consulta",
    "stats.logfire.v2": "3",
    "stats.logfire.l2": "Formatos de salida",
    "stats.logfire.v3": "10+",
    "stats.logfire.l3": "Proveedores LLM",
    "stats.logfire.v4": "100",
    "stats.logfire.l4": "% Self-Hosted",

    // Before/After
    "beforeafter.title": "¿Por qué usarlo?",
    "beforeafter.template.before.title": "Sin la plantilla",
    "beforeafter.template.after.title": "Con la plantilla",
    "beforeafter.template.before.1": "Días configurando boilerplate FastAPI + Next.js",
    "beforeafter.template.before.2": "Integración manual del framework de IA",
    "beforeafter.template.before.3": "Sin streaming WebSocket de serie",
    "beforeafter.template.before.4": "Docker y despliegue configurados desde cero",
    "beforeafter.template.before.5": "Sin observabilidad hasta que la agregues tú mismo",
    "beforeafter.template.after.1": "Proyecto listo para producción en minutos",
    "beforeafter.template.after.2": "5 frameworks de IA preintegrados y probados",
    "beforeafter.template.after.3":
      "Streaming WebSocket con visualización de llamadas a herramientas",
    "beforeafter.template.after.4": "Docker, Kubernetes y CI/CD incluidos",
    "beforeafter.template.after.5": "Logfire, Sentry y Prometheus integrados",
    "beforeafter.deepagents.before.title": "Sin DeepAgents",
    "beforeafter.deepagents.after.title": "Con DeepAgents",
    "beforeafter.deepagents.before.1": "Cadenas frágiles que se rompen con inputs inesperados",
    "beforeafter.deepagents.before.2": "Sin type safety — basado en dicts, propenso a errores",
    "beforeafter.deepagents.before.3": "Difícil depurar rutas de decisión del agente",
    "beforeafter.deepagents.before.4": "Gestión manual de la ventana de contexto",
    "beforeafter.deepagents.before.5": "Sin patrón de delegación de subagentes",
    "beforeafter.deepagents.after.1": "Agentes modulares con planificación estructurada",
    "beforeafter.deepagents.after.2": "Completamente type-safe con modelos Pydantic",
    "beforeafter.deepagents.after.3": "Observabilidad completa vía Logfire",
    "beforeafter.deepagents.after.4": "Resumen automático de contexto",
    "beforeafter.deepagents.after.5": "Delegación y comunicación de subagentes integrada",
    "beforeafter.logfire.before.title": "Sin Logfire Assistant",
    "beforeafter.logfire.after.title": "Con Logfire Assistant",
    "beforeafter.logfire.before.1":
      "Escribir consultas SQL manualmente contra el esquema de Logfire",
    "beforeafter.logfire.before.2": "Cambio de contexto entre el dashboard y herramientas",
    "beforeafter.logfire.before.3": "Sin visualización automática de resultados",
    "beforeafter.logfire.before.4": "Repetir consultas frecuentes de memoria",
    "beforeafter.logfire.before.5": "Sin historial de conversaciones ni contexto",
    "beforeafter.logfire.after.1": "Pregunta en lenguaje natural",
    "beforeafter.logfire.after.2": "Panel lateral integrado en el dashboard de Logfire",
    "beforeafter.logfire.after.3": "Tablas y gráficos generados automáticamente",
    "beforeafter.logfire.after.4": "Plantillas de prompts reutilizables con comandos slash",
    "beforeafter.logfire.after.5": "Historial completo de conversaciones con filtrado por proyecto",

    // Comparison Tables
    "comparison.title": "¿Cómo se compara?",
    "comparison.subtitle": "Mira cómo se compara con las alternativas.",
    "comparison.feature": "Característica",
    "comparison.template.col.ours": "AI Agent Template",
    "comparison.template.col.manual": "Configuración manual",
    "comparison.template.col.other": "Otros boilerplates",
    "comparison.template.row.ai": "Integración de agentes IA",
    "comparison.template.row.multidb": "Soporte multi-base de datos",
    "comparison.template.row.auth": "Auth integrada",
    "comparison.template.row.websocket": "Streaming WebSocket",
    "comparison.template.row.configurator": "Configurador web",
    "comparison.template.row.typesafe": "Código type-safe",
    "comparison.template.row.observable": "Observabilidad",
    "comparison.deepagents.col.ours": "DeepAgents",
    "comparison.deepagents.row.typesafe": "Type Safety",
    "comparison.deepagents.row.subagents": "Delegación de subagentes",
    "comparison.deepagents.row.tools": "Sistema de herramientas",
    "comparison.deepagents.row.multiprovider": "Multi-proveedor",
    "comparison.deepagents.row.observability": "Observabilidad",
    "comparison.deepagents.row.production": "Probado en producción",
    "comparison.logfire.col.ours": "Logfire Assistant",
    "comparison.logfire.col.manual": "SQL manual",
    "comparison.logfire.col.generic": "Chat IA genérico",
    "comparison.logfire.row.sql": "SQL nativo de Logfire",
    "comparison.logfire.row.context": "Consciente del contexto Span",
    "comparison.logfire.row.charts": "Gráficos automáticos",
    "comparison.logfire.row.prompts": "Prompts personalizados",
    "comparison.logfire.row.history": "Historial de conversaciones",
    "comparison.logfire.row.nl": "Entrada en lenguaje natural",

    // Compare landing pages
    "compare.index.title": "Compara nuestras herramientas",
    "compare.index.subtitle":
      "Comparaciones de Pydantic DeepAgents, plantillas de agentes IA y herramientas Python vs alternativas populares. Elige la herramienta correcta para tu stack.",
    "compare.index.meta.description":
      "Comparaciones de características de herramientas Vstorm OSS vs LangChain, CrewAI, AutoGen y otros frameworks de IA",
    "compare.verdict": "El veredicto",
    "compare.highlights": "Diferencias clave",
    "compare.table.title": "Comparación de características",
    "compare.code.title": "Comparación de código",
    "compare.whenToUse": "Cuándo usar cuál",
    "compare.whenToUse.ours": "Elige {product} cuando:",
    "compare.whenToUse.theirs": "Elige {competitor} cuando:",
    "compare.faq.title": "Preguntas frecuentes",
    "compare.relatedTitle": "Comparaciones relacionadas",
    "compare.cta.title": "¿Listo para probar {product}?",
    "compare.cta.button": "Comenzar",
    "compare.winner.ours": "Ventaja: {product}",
    "compare.winner.theirs": "Ventaja: {competitor}",
    "compare.winner.tie": "Empate",

    // Testimonials
    "testimonials.title": "Lo que dicen los desarrolladores",
    "testimonials.subtitle": "De early adopters y beta testers.",
    "testimonials.1.quote":
      "Nos ahorró semanas de boilerplate. La plantilla generó una app IA lista para producción que desplegamos el mismo día.",
    "testimonials.1.name": "Marek K.",
    "testimonials.1.role": "Senior Backend Engineer",
    "testimonials.2.quote":
      "DeepAgents finalmente nos dio agentes type-safe con observabilidad real. Migramos de LangChain en un fin de semana.",
    "testimonials.2.name": "Sarah R.",
    "testimonials.2.role": "AI Platform Lead",
    "testimonials.3.quote":
      "Logfire Assistant convirtió el debugging de 30 minutos de SQL manual en una conversación de 30 segundos. Un cambio radical para nuestro equipo.",
    "testimonials.3.name": "Jan L.",
    "testimonials.3.role": "DevOps Engineer",

    // Newsletter
    "newsletter.title": "Mantente actualizado",
    "newsletter.subtitle":
      "Recibe notificaciones sobre nuevos lanzamientos, funciones e insights de ingeniería IA.",
    "newsletter.placeholder": "tu@email.com",
    "newsletter.button": "Suscribirse",
    "newsletter.success": "¡Gracias! Te mantendremos informado.",
    "404.title": "Página no encontrada",
    "404.description": "La página que buscas no existe o ha sido movida.",
    "404.back": "Volver al inicio",
    "blog.readingTime": "{min} min de lectura",
    "blog.pagination.prev": "Anterior",
    "blog.pagination.next": "Siguiente",
    "blog.share": "Compartir artículo",
    "blog.share.copied": "¡Enlace copiado!",
    "blog.relatedPosts": "Artículos relacionados",
    "blog.stickyCta.text": "¿Necesitas ayuda construyendo agentes de IA?",
    "blog.stickyCta.button": "Habla con Vstorm",
    "skip.toContent": "Saltar al contenido",

    // About page
    "about.title": "Sobre Vstorm OSS",
    "about.subtitle":
      "Herramientas de agentes de IA de código abierto creadas por profesionales, para profesionales.",
    "about.meta.description":
      "Vstorm OSS: 13 repos open source, 1.730+ estrellas en GitHub y 830K+ descargas de PyPI. Herramientas de agentes de IA en producción para Python. Por Vstorm.",
    "about.company.title": "Quiénes somos",
    "about.company.description":
      "Vstorm es una consultora de ingeniería de IA agéntica aplicada. Construimos sistemas de agentes de IA en producción para empresas en EE.UU., Europa y Oriente Medio. Cada herramienta en este portafolio nació de un desafío real de producción - publicamos como código abierto lo que construimos.",
    "about.numbers.title": "En números",
    "about.numbers.stars": "Estrellas en GitHub",
    "about.numbers.downloads": "Descargas de PyPI",
    "about.numbers.repos": "Repos Open Source",
    "about.numbers.projects": "Proyectos de clientes",
    "about.company.details":
      "Fundada en 2017, Vstorm se especializa en desarrollo de software personalizado basado en IA y LLM. Con un equipo de 25+ ingenieros y más de 90 proyectos exitosos para clientes en EE.UU., Reino Unido y Europa Occidental, impulsamos el ROI mediante hiper-automatización, hiper-personalización y mejora en la toma de decisiones. Reconocidos por Deloitte Technology Fast 50 y primera consultora de IA aceptada en la Agentic AI Foundation.",
    "about.partners.title": "Partners y ecosistema",
    "about.partners.description":
      "Contribuimos a los principales frameworks de IA agéntica y colaboramos con organizaciones que dan forma al futuro de los agentes de IA.",
    "about.philosophy.title": "Por qué código abierto",
    "about.philosophy.description":
      "Creemos que las mejores herramientas para agentes de IA deben ser abiertas, modulares y probadas en producción. Los monolitos cerrados te atan a las decisiones de un proveedor. Nuestro enfoque: construir cada capacidad como un paquete independiente, probarlo en más de 90 proyectos de clientes y luego publicarlo. Si funciona en producción, debería estar disponible para todos.",
    "about.links.title": "Conectar",
    "blog.tag.title": "Etiqueta: {tag}",
    "blog.tag.postCount": "{count} publicaciones",
    "oss.githubStars": "estrellas en GitHub — !Danos una estrella!",
    "changelog.title": "Registro de cambios",
    "changelog.subtitle":
      "Sigue todas las versiones de los proyectos Vstorm OSS: Full-Stack AI Agent Template, Pydantic DeepAgents y más. Nuevas funciones y correcciones de errores.",
    "roadmap.title": "Hoja de ruta",
    "roadmap.subtitle": "Qué estamos construyendo y qué viene después",
    "nav.about": "Acerca de",
    "nav.compare": "Comparar",
    "nav.usecases": "Casos de uso",
    "usecases.index.title": "Casos de uso",
    "usecases.index.subtitle":
      "Casos de uso del mundo real con ejemplos de código funcional — agentes de investigación, chatbots RAG, agentes SQL y más.",
    "usecases.problem.title": "El Problema",
    "usecases.solution.title": "La Solución",
    "usecases.code.title": "Código funcional",
    "usecases.steps.title": "Paso a paso",
    "usecases.related.title": "Casos de uso relacionados",
    "usecases.cta.title": "¿Listo para construir esto?",
    "usecases.cta.description":
      "Comienza con las herramientas open-source de Vstorm — probadas en producción, completamente documentadas y gratuitas.",
    "usecases.cta.button": "Comenzar",
    "nav.guides": "Guías",
    "guides.index.title": "Guías",
    "guides.index.subtitle":
      "Aprende a construir agentes de IA con diferentes frameworks — tutoriales paso a paso con código funcional. Pydantic AI, LangChain, LangGraph, CrewAI y más.",
    "guides.step1.title": "Instalar dependencias",
    "guides.step1.description":
      "Instala {framework} y las herramientas necesarias para este caso de uso.",
    "guides.step2.title": "Definir herramientas",
    "guides.step2.description":
      "Crea las funciones de herramientas específicas del dominio que tu agente usará para interactuar con servicios externos.",
    "guides.step3.title": "Crear el agente y ejecutar",
    "guides.step3.description":
      "Inicializa el agente de {framework} con tus herramientas, establece el prompt del sistema y ejecuta una consulta.",
    "guides.related.frameworks": "Construir con otros frameworks",
    "guides.related.usecases": "Más guías con {framework}",
    "guides.cta.title": "¿Listo para construir con {framework}?",
    "guides.cta.description":
      "Genera un proyecto listo para producción con {framework} preconfigurado — FastAPI + Next.js, auth, streaming y más.",
    "guides.cta.button": "Comenzar",

    // Tools
    "nav.tools": "Herramientas gratis",
    "tools.index.title": "Herramientas de IA gratuitas",
    "tools.index.subtitle":
      "Herramientas interactivas para elegir el framework de IA, la arquitectura y la configuración del proyecto adecuados — sin registro.",
    "tools.tryFree": "Probar gratis",
    "tools.badge.free": "Herramienta gratuita",
    "tools.badge.interactive": "Interactivo",
    "tools.badge.calculator": "Calculadora",
    "tools.badge.quiz": "Quiz — 5 preguntas",
    "tools.configurator.title": "Configurador de proyectos AI Agent",
    "tools.configurator.subtitle":
      "Configura un proyecto FastAPI + Next.js listo para producción con 75+ opciones. Descarga como ZIP o CLI — ejecútalo en 2 minutos.",
    "tools.configurator.description":
      "Configura y descarga un proyecto de IA listo para producción. Elige entre 5 frameworks, 4 bases de datos y 75+ opciones — sin registro.",
    "tools.configurator.features.title": "Qué puedes configurar",
    "tools.configurator.howItWorks": "Cómo funciona",
    "tools.configurator.step1": "Elige tus opciones",
    "tools.configurator.step1.desc":
      "Selecciona el framework de IA, base de datos, autenticación, integraciones e infraestructura en 9 pasos.",
    "tools.configurator.step2": "Vista previa del proyecto",
    "tools.configurator.step2.desc":
      "Ve una vista previa en vivo de la estructura, dependencias y configuración del proyecto.",
    "tools.configurator.step3": "Descarga y ejecuta",
    "tools.configurator.step3.desc":
      "Descarga como ZIP o copia el comando CLI. Tu proyecto se ejecuta localmente en menos de 2 minutos.",
    "tools.configurator.openButton": "Abrir configurador",
    "tools.configurator.cta.title": "¿Listo para construir tu proyecto de agente IA?",
    "tools.configurator.cta.description":
      "Abre el configurador, elige tu stack y descarga un proyecto listo para producción en minutos.",
    "tools.comparison.title": "Calculadora de comparación de frameworks IA",
    "tools.comparison.subtitle":
      "Responde 6 preguntas sobre tu proyecto y obtén una recomendación puntuada de 5 frameworks de IA en Python.",
    "tools.comparison.description":
      "Responde 6 preguntas sobre los requisitos de tu proyecto y obtén una recomendación personalizada con resultados puntuados.",
    "tools.comparison.frameworks.title": "Frameworks que comparamos",
    "tools.comparison.cta.title": "¿Quieres una comparación más detallada?",
    "tools.comparison.cta.description":
      "Consulta nuestras comparaciones detalladas con tablas de características, ejemplos de código y guías de migración.",
    "tools.comparison.cta.button": "Ver comparaciones detalladas",
    "tools.quiz.title": "Quiz de arquitectura de agentes",
    "tools.quiz.subtitle":
      "Responde 5 preguntas sobre tu proyecto y descubre el patrón de arquitectura ideal — con recomendación de framework y próximos pasos.",
    "tools.quiz.description":
      "Haz un quiz de 5 preguntas y descubre el mejor patrón de arquitectura — desde ReAct simple hasta sistemas jerárquicos multi-agente.",
    "tools.quiz.patterns.title": "Patrones de arquitectura que evaluamos",
    "tools.quiz.cta.title": "Conoces la arquitectura — ahora elige un framework",
    "tools.quiz.cta.description":
      "Usa nuestra calculadora de comparación de frameworks para encontrar el mejor framework para tu arquitectura.",
    "tools.quiz.cta.button": "Comparar frameworks",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export function t(lang: Lang, key: TranslationKey): string {
  return translations[lang]?.[key] ?? translations.en[key] ?? key;
}

export function getLangFromUrl(url: URL): Lang {
  const segments = url.pathname.split("/").filter(Boolean);
  const first = segments[0];
  if (first && first in languages) return first as Lang;
  return defaultLang;
}
