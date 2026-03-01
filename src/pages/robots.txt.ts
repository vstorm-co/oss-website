import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site?.origin ?? "https://oss.vstorm.co";
  const body = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap-index.xml
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
