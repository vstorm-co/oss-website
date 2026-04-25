/**
 * One-shot script: injects @mdx-snippet / @mdx-label / @mdx-description metadata
 * into src/components/blog/*.astro so the admin component palette works.
 * Run once: bun run scripts/inject-mdx-snippets.ts
 */
import fs from "node:fs";
import path from "node:path";

const BLOG_DIR = path.resolve(process.cwd(), "src/components/blog");

type Meta = { label: string; description: string; snippet: string };

const SNIPPETS: Record<string, Meta> = {
  Accordion: {
    label: "Accordion",
    description: "Multi-panel FAQ with animated expand/collapse",
    snippet: `<Accordion
  items={[
    { title: "Question one?", content: "Answer one." },
    { title: "Question two?", content: "Answer two." },
  ]}
/>`,
  },
  Aside: {
    label: "Aside",
    description: "Tangential side note — floats right on wide screens",
    snippet: `<Aside title="Side note">
  An aside for tangential commentary without breaking the main flow.
</Aside>`,
  },
  Badge: {
    label: "Badge",
    description: "Inline pill — tones: default | success | warn | danger | info",
    snippet: `Here is a <Badge tone="success">stable</Badge> release.`,
  },
  BeforeAfter: {
    label: "Before / After",
    description: "Side-by-side image comparison with draggable slider",
    snippet: `<BeforeAfter
  before={{ src: "/images/before.jpg", alt: "Before" }}
  after={{ src: "/images/after.jpg", alt: "After" }}
  initialPosition={50}
/>`,
  },
  Bookmark: {
    label: "Bookmark",
    description: "Rich link card with title and description",
    snippet: `<Bookmark
  url="https://example.com"
  title="Page title"
  description="Short description of the linked resource."
/>`,
  },
  Callout: {
    label: "Callout",
    description: "Highlighted box — variants: info | warn | success | danger",
    snippet: `<Callout type="info" title="Heads up">
  Your message here.
</Callout>`,
  },
  Carousel: {
    label: "Carousel",
    description: "Swipeable image slider with captions",
    snippet: `<Carousel
  items={[
    { src: "/images/slide1.jpg", alt: "First slide", caption: "Caption" },
    { src: "/images/slide2.jpg", alt: "Second slide" },
  ]}
/>`,
  },
  CodeGroup: {
    label: "Code Group",
    description: "Tabbed code blocks (e.g. npm / pnpm / bun)",
    snippet: `<CodeGroup labels={["bun", "pnpm", "npm"]}>
\`\`\`bash
bun install
\`\`\`

\`\`\`bash
pnpm install
\`\`\`

\`\`\`bash
npm install
\`\`\`
</CodeGroup>`,
  },
  Comparison: {
    label: "Comparison",
    description: "A vs B table with ✓ / ✗ / ~ marks",
    snippet: `<Comparison
  leftHeader="Option A"
  rightHeader="Option B"
  rows={[
    { label: "Feature 1", left: "yes", right: "yes" },
    { label: "Feature 2", left: "yes", right: "no" },
    { label: "Pricing",   left: "Free", right: "$10/mo" },
  ]}
/>`,
  },
  DeploymentStat: {
    label: "Deployment Stat",
    description: "GEO-optimized quotable stat block",
    snippet: `<DeploymentStat
  value="40%"
  unit="of total tokens"
  finding="were consumed by tool-call loops when no summarization layer was in place"
  context="30+ production AI agent deployments at Vstorm"
  source="Vstorm internal data, Q1 2026"
/>`,
  },
  Details: {
    label: "Details",
    description: "Collapsible <details> — good for solution reveals",
    snippet: `<Details summary="Click to reveal">
  Hidden content goes here.
</Details>`,
  },
  Diff: {
    label: "Diff",
    description: "Inline before/after code diff",
    snippet: `<Diff
  lang="ts"
  title="before & after"
  before={\`function greet(name) {\\n  return "Hello " + name\\n}\`}
  after={\`function greet(name: string): string {\\n  return \\\`Hello \\\${name}\\\`\\n}\`}
/>`,
  },
  Divider: {
    label: "Divider",
    description: "Section separator — ornament (✧) or plain rule",
    snippet: `<Divider />`,
  },
  Embed: {
    label: "Embed",
    description: "Lazy iframe for CodePen / StackBlitz / CodeSandbox",
    snippet: `<Embed
  src="https://stackblitz.com/edit/YOUR-PROJECT?embed=1&file=src/main.ts"
  title="Live example"
  height={480}
/>`,
  },
  Figure: {
    label: "Figure",
    description: "Image with optional caption",
    snippet: `<Figure
  src="/images/blog/SLUG/PLACEHOLDER-1.png"
  alt="Describe what should be shown here"
  caption="Optional caption"
/>`,
  },
  FileTree: {
    label: "File Tree",
    description: "Visual directory listing",
    snippet: `<FileTree items={[
  { label: "src", children: [
    { label: "pages", children: [{ label: "index.astro" }] },
    { label: "components" },
  ]},
  { label: "README.md" },
]} />`,
  },
  FrameworkBadge: {
    label: "Framework Badge",
    description: "Inline pill with brand color for AI framework / model provider",
    snippet: `<FrameworkBadge framework="pydantic-ai" />`,
  },
  Gallery: {
    label: "Gallery",
    description: "Grid of images with captions",
    snippet: `<Gallery
  columns={2}
  images={[
    { src: "/images/blog/SLUG/a.png", alt: "First image", caption: "Before" },
    { src: "/images/blog/SLUG/b.png", alt: "Second image", caption: "After" },
  ]}
/>`,
  },
  InfoCard: {
    label: "Info Card",
    description: "Titled card with optional icon and link",
    snippet: `<InfoCard title="Your title" icon="📘" href="/optional-link">
  Body content with **markdown** and links.
</InfoCard>`,
  },
  Kbd: {
    label: "Kbd",
    description: "Inline keyboard key",
    snippet: `Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open search.`,
  },
  MetricsBar: {
    label: "Metrics Bar",
    description: "Horizontal row of headline metrics",
    snippet: `<MetricsBar
  metrics={[
    { value: "1,730+", label: "GitHub Stars" },
    { value: "830K+",  label: "PyPI Downloads" },
    { value: "30+",    label: "Production Deployments" },
    { value: "13",     label: "Open Source Repos" },
  ]}
/>`,
  },
  NewsletterCTA: {
    label: "Newsletter CTA",
    description: "Inline newsletter signup with email field",
    snippet: `<NewsletterCTA
  heading="Stay in the loop"
  description="New articles every week. Zero spam."
  placeholder="your@email.com"
  buttonText="Subscribe"
  action="https://YOUR-LIST-URL/subscribe"
/>`,
  },
  PullQuote: {
    label: "Pull Quote",
    description: "Highlighted pull quote with optional attribution",
    snippet: `<PullQuote author="Jane Doe" role="Staff Engineer">
  The quote text goes here — one or two sentences max.
</PullQuote>`,
  },
  RepoCard: {
    label: "Repo Card",
    description: "GitHub repo card with stars, language, and CTA",
    snippet: `<RepoCard
  repo="vstorm-co/pydantic-deep"
  description="Production-ready Python framework for autonomous AI agents."
  language="Python"
/>`,
  },
  Stat: {
    label: "Stat",
    description: "Big-number stat with optional trend arrow",
    snippet: `<Stat value="10×" label="Faster than manual setup" trend="up" />`,
  },
  Steps: {
    label: "Steps",
    description: "Numbered step list",
    snippet: `<Steps items={[
  { title: "Install", body: "Run \`bun install\`." },
  { title: "Configure", body: "Edit \`config.ts\`." },
  { title: "Deploy", body: "Push to Vercel." },
]} />`,
  },
  TLDR: {
    label: "TL;DR",
    description: "Styled TL;DR block — opens long-form articles",
    snippet: `<TLDR>
  **One-sentence summary.** Supporting detail — what the reader gets from this article.
  Key numbers and outcomes.
</TLDR>`,
  },
  Terminal: {
    label: "Terminal",
    description: "Styled terminal transcript with prompt and output",
    snippet: `<Terminal user="you" host="machine" cwd="~">
  $ bun run dev
  astro dev server running at http://localhost:4321
</Terminal>`,
  },
  Testimonial: {
    label: "Testimonial",
    description: "Pull quote with avatar, name, and role",
    snippet: `<Testimonial
  quote="This tool changed the way we work — we saved 10 hours a week."
  name="Jane Smith"
  role="CTO"
  company="Acme Corp"
/>`,
  },
  Timeline: {
    label: "Timeline",
    description: "Vertical chronological list — ideal for changelogs",
    snippet: `<Timeline items={[
  { date: "2026-04-24", title: "v1.0 shipped", body: "Public release." },
  { date: "2026-04-01", title: "Beta closed",  body: "200 testers onboarded." },
  { date: "2026-03-15", title: "Project kick-off" },
]} />`,
  },
  Tweet: {
    label: "Tweet",
    description: "Static quote-style render of an X post (no Twitter script)",
    snippet: `<Tweet
  author="Jane Doe"
  handle="janedoe"
  url="https://x.com/janedoe/status/1234567890"
  date="2026-04-24"
>
  The tweet body goes here.
</Tweet>`,
  },
  TwoColumn: {
    label: "Two Column",
    description: "Side-by-side comparison with named slots",
    snippet: `<TwoColumn leftTitle="Before" rightTitle="After">
  <Fragment slot="left">
    Left column content.
  </Fragment>
  <Fragment slot="right">
    Right column content.
  </Fragment>
</TwoColumn>`,
  },
  VideoEmbed: {
    label: "Video Embed",
    description: "Responsive iframe — YouTube/Vimeo URLs auto-normalized",
    snippet: `<VideoEmbed src="https://www.youtube.com/watch?v=VIDEO_ID" title="Video title" />`,
  },
  VideoLite: {
    label: "Video Lite",
    description: "YouTube/Vimeo with poster image — iframe loads on click",
    snippet: `<VideoLite
  src="https://www.youtube.com/watch?v=VIDEO_ID"
  title="Video title"
/>`,
  },
};

// Components that are admin/system UI — skip them
const SKIP = new Set([
  "BlogCard",
  "BlogSearch",
  "ImageZoom",
  "Pagination",
  "RelatedPosts",
  "ShareButtons",
  "StickyCTA",
  "TableOfContents",
  "TranslationLinks",
]);

let updated = 0;
let skipped = 0;

for (const file of fs.readdirSync(BLOG_DIR)) {
  if (!file.endsWith(".astro")) continue;
  const name = file.replace(/\.astro$/, "");
  if (SKIP.has(name)) {
    skipped++;
    continue;
  }
  const meta = SNIPPETS[name];
  if (!meta) {
    console.log(`  ⚠ No snippet defined for ${name} — skipping`);
    continue;
  }

  const filePath = path.join(BLOG_DIR, file);
  const raw = fs.readFileSync(filePath, "utf8");

  // Already has metadata — skip
  if (raw.includes("@mdx-snippet")) {
    console.log(`  ✓ ${name} already has @mdx-snippet`);
    continue;
  }

  // Find the end of the frontmatter (second ---) and insert after it
  const fmEnd = raw.indexOf("\n---\n", 3); // skip the opening ---
  const insertAt = fmEnd !== -1 ? fmEnd + 5 : 0; // after the closing ---\n

  const comment = [
    `<!-- @mdx-label ${meta.label} -->`,
    `<!-- @mdx-description ${meta.description} -->`,
    `<!-- @mdx-snippet\n${meta.snippet}\n-->`,
    "",
  ].join("\n");

  const patched = raw.slice(0, insertAt) + comment + "\n" + raw.slice(insertAt);
  fs.writeFileSync(filePath, patched);
  updated++;
  console.log(`  ✓ ${name}`);
}

console.log(`\nDone — ${updated} updated, ${skipped} skipped (system components)`);
