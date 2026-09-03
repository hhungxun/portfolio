import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '../data/site';
import { getPosts, getPoems } from '../lib/content';

export async function GET(context: APIContext) {
  const [posts, poems] = await Promise.all([getPosts(), getPoems()]);
  const items = [
    ...posts.map((p) => ({
      title: p.data.title,
      description: p.data.description ?? '',
      pubDate: p.data.date,
      link: `/blog/${p.id}`,
      categories: p.data.tags,
    })),
    ...poems.map((p) => ({
      title: `${p.data.title}${p.data.dedication ? ' ' + p.data.dedication : ''}`,
      description: p.data.venue ?? '',
      pubDate: p.data.date,
      link: `/poetry/${p.id}`,
      categories: ['詩'],
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: site.name,
    description: site.description,
    site: context.site ?? 'https://hhungxun.example',
    items,
    customData: '<language>en</language>',
  });
}
