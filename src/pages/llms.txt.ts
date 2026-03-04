import type { APIRoute } from "astro";
import { projects } from "../data/projects";

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site?.origin ?? "https://oss.vstorm.co";
  const projectList = projects
    .map((p) => {
      const status = p.status === "coming-soon" ? " (coming soon)" : "";
      const url = `${siteUrl}/${p.slug}/`;
      return `- [${p.name}${status}](${url}): ${p.tagline.en}`;
    })
    .join("\n");

  const body = `# ${new URL(siteUrl).hostname}

> Vstorm OSS - Open-source AI agent tools for Python.
> 13 projects: templates, frameworks, toolsets, and resources.
> Built by Vstorm - Applied Agentic AI Engineering Consultancy with 30+ production deployments.

## Projects

${projectList}

## Product Landings

- [Full-Stack AI Agent Template](${siteUrl}/full-stack-ai-agent-template/): Production-ready FastAPI + Next.js template with 5 AI frameworks, 75+ config options
- [Configurator](${siteUrl}/full-stack-ai-agent-template/configurator/): 9-step visual wizard to generate and download custom projects
- [Pydantic DeepAgents](${siteUrl}/pydantic-deepagents/): Modular AI agent framework inspired by Claude Code architecture
- [Logfire Assistant](${siteUrl}/logfire-assistant/): Chrome extension + backend for querying Pydantic Logfire with natural language

## Pages

- [Home](${siteUrl}/): OSS portfolio landing, all projects grouped by category
- [Blog](${siteUrl}/blog/): Tutorials, framework comparisons, and implementation guides
- [FAQ](${siteUrl}/faq/): Common questions about frameworks and configuration
- [About](${siteUrl}/about/): About Vstorm OSS - team, philosophy, and company info
- [404](${siteUrl}/404/): Custom error page

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

## i18n

All pages available in 4 languages: English (default), Polish (/pl/), German (/de/), Spanish (/es/).

## Links

- GitHub: https://github.com/vstorm-co
- Website: ${siteUrl}/
- Vstorm: https://vstorm.co/
- Full reference: ${siteUrl}/llms-full.txt
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
