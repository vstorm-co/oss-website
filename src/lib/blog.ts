import type { CollectionEntry } from "astro:content";

type BlogData = CollectionEntry<"blog">["data"];

/**
 * Returns true if a post should appear in the published build.
 * A post is published when:
 *   1. draft is false (or absent)
 *   2. pubDate is not in the future
 *
 * Scheduled posts: set draft: false + a future pubDate. The daily
 * Vercel rebuild (triggered by GitHub Actions cron) will include the
 * post once its pubDate has passed.
 */
export function isPublished(data: BlogData): boolean {
  if (data.draft) return false;
  return data.pubDate <= new Date();
}
