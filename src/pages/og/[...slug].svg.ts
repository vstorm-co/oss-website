import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection('blog', ({ data }) => data.lang === 'en' && !data.draft);
  return posts.map((post) => {
    const slug = post.id.split('/').slice(1).join('/');
    return {
      params: { slug },
      props: { title: post.data.title, tags: post.data.tags || [] },
    };
  });
};

export const GET: APIRoute = async ({ props }) => {
  const { title, tags } = props;

  // Word wrap the title for SVG
  const maxCharsPerLine = 30;
  const words = title.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    if ((currentLine + ' ' + word).trim().length > maxCharsPerLine) {
      if (currentLine) lines.push(currentLine.trim());
      currentLine = word;
    } else {
      currentLine = (currentLine + ' ' + word).trim();
    }
  }
  if (currentLine) lines.push(currentLine.trim());

  // Limit to 3 lines
  const displayLines = lines.slice(0, 3);
  if (lines.length > 3) {
    displayLines[2] = displayLines[2] + '...';
  }

  const tagString = tags.slice(0, 3).join(' \u00B7 ');

  const titleY = 280;
  const lineHeight = 60;

  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#09090b"/>
      <stop offset="100%" style="stop-color:#18181b"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" style="stop-color:#ef4444;stop-opacity:0.15"/>
      <stop offset="100%" style="stop-color:#09090b;stop-opacity:0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Grid pattern -->
  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
  </pattern>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <!-- Top accent line -->
  <rect x="80" y="60" width="80" height="4" rx="2" fill="#ef4444"/>

  <!-- Logo text -->
  <text x="80" y="110" font-family="system-ui,-apple-system,sans-serif" font-size="20" font-weight="600" fill="#a1a1aa">Vstorm OSS</text>

  <!-- Title -->
  ${displayLines.map((line, i) =>
    `<text x="80" y="${titleY + i * lineHeight}" font-family="system-ui,-apple-system,sans-serif" font-size="48" font-weight="700" fill="#fafafa">${escapeXml(line)}</text>`
  ).join('\n  ')}

  <!-- Tags -->
  ${tagString ? `<text x="80" y="540" font-family="system-ui,-apple-system,sans-serif" font-size="18" fill="#ef4444">${escapeXml(tagString)}</text>` : ''}

  <!-- Domain -->
  <text x="80" y="580" font-family="system-ui,-apple-system,sans-serif" font-size="16" fill="#52525b">oss.vstorm.co</text>
</svg>`;

  return new Response(svg, {
    headers: { 'Content-Type': 'image/svg+xml' },
  });
};

function escapeXml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}
