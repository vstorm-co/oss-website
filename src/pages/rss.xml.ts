import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: any) {
  const posts = (await getCollection("blog", ({ data }) => data.lang === "en" && !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: "Vstorm OSS Blog",
    description: "Tutorials, comparisons, and guides for building production AI agents with Python",
    site: context.site ?? "https://oss.vstorm.co",
    items: posts.map((post) => {
      const slug = post.id.split("/").slice(1).join("/");
      return {
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${slug}/`,
        categories: post.data.tags,
      };
    }),
    customData: "<language>en</language>",
  });
}
