import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { projects } from "../data/projects";
import { comparisonPages } from "../data/compare-pages";

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site?.origin ?? "https://oss.vstorm.co";

  const projectList = projects
    .map((p) => {
      const status = p.status === "coming-soon" ? " (coming soon)" : "";
      const url = `${siteUrl}/${p.slug}/`;
      return `- [${p.name}${status}](${url}): ${p.tagline.en}`;
    })
    .join("\n");

  const posts = (await getCollection("blog", ({ data }) => data.lang === "en" && !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  const blogList = posts
    .map((post) => {
      const slug = post.id.split("/").slice(1).join("/");
      return `- [${post.data.title}](${siteUrl}/blog/${slug}/): ${post.data.description}`;
    })
    .join("\n");

  const compareList = comparisonPages
    .map(
      (c) => `- [${c.product} vs ${c.competitor}](${siteUrl}/compare/${c.slug}/): ${c.verdict.en}`,
    )
    .join("\n");

  const body = `# ${new URL(siteUrl).hostname}

> Vstorm OSS — Open-source AI agent tools for Python.
> ${projects.length} projects: templates, frameworks, toolsets, and resources.
> Built by Vstorm — Applied Agentic AI Engineering Consultancy with 30+ production deployments.

## Projects

${projectList}

## Product Landings

- [Full-Stack AI Agent Template](${siteUrl}/projects/full-stack-ai-agent-template/): Production-ready FastAPI + Next.js template with 5 AI frameworks, 75+ config options
- [Configurator](${siteUrl}/projects/full-stack-ai-agent-template/configurator/): 9-step visual wizard to generate and download custom projects
- [Pydantic DeepAgents](${siteUrl}/projects/pydantic-deepagents/): Modular AI agent framework inspired by Claude Code architecture
- [Logfire Assistant](${siteUrl}/projects/logfire-assistant/): Chrome extension + backend for querying Pydantic Logfire with natural language

## Comparisons (${comparisonPages.length} pages)

- [Compare Index](${siteUrl}/compare/): Side-by-side comparisons of AI agent frameworks, templates, and tools
${compareList}

## Pages

- [Home](${siteUrl}/): OSS portfolio landing with project grid, community recognition, changelog
- [Blog](${siteUrl}/blog/): Tutorials, framework comparisons, and implementation guides (with search and category filtering)
- [Compare](${siteUrl}/compare/): Side-by-side framework and tool comparisons
- [FAQ](${siteUrl}/faq/): Common questions about frameworks and configuration
- [Changelog](${siteUrl}/changelog/): Release history across all projects
- [About](${siteUrl}/about/): About Vstorm OSS — team, philosophy, and company info
- [RSS Feed](${siteUrl}/rss.xml): RSS feed for blog posts

## Blog Posts (${posts.length} articles)

${blogList}

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
