import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;
export type Poem = CollectionEntry<'poems'>;
export type Project = CollectionEntry<'projects'>;

const byDateDesc = <T extends { data: { date: Date } }>(a: T, b: T) =>
  b.data.date.valueOf() - a.data.date.valueOf();

/** Published posts, newest first. Drafts are visible in `astro dev` only. */
export async function getPosts(): Promise<Post[]> {
  const all = await getCollection('blog', ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  return all.sort(byDateDesc);
}

/** Poems, newest first. */
export async function getPoems(): Promise<Poem[]> {
  const all = await getCollection('poems', ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  return all.sort(byDateDesc);
}

/** Projects, by explicit `order` then title. */
export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('projects');
  return all.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export function allTags(posts: Post[]): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const p of posts) for (const t of p.data.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

/** URL-safe tag slug; keeps CJK characters (URLs percent-encode them). */
export function tagSlug(tag: string): string {
  return tag
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[^\p{L}\p{N}-]/gu, '');
}

/** Reading time in minutes; CJK counted per character, Latin per word. */
export function readingTime(text: string): number {
  const cjk = (text.match(/[㐀-鿿豈-﫿]/g) ?? []).length;
  const words = text
    .replace(/[㐀-鿿豈-﫿]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(cjk / 350 + words / 220));
}

export function formatDate(d: Date, lang: 'en' | 'zh' = 'en'): string {
  if (lang === 'zh') return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
  return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' });
}

export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/**
 * Parse a poem body into stanzas of lines. A line starting with "## " begins an
 * optional translation section whose title is the heading text.
 */
export function parsePoem(body: string): {
  stanzas: string[][];
  translation?: { title: string; stanzas: string[][] };
} {
  const normalised = body.replace(/\r\n?/g, '\n').trim();
  const idx = normalised.search(/^## /m);
  const main = idx === -1 ? normalised : normalised.slice(0, idx);
  const toStanzas = (s: string) =>
    s
      .trim()
      .split(/\n[ \t]*\n+/)
      .map((st) => st.split('\n').map((l) => l.trim()).filter(Boolean))
      .filter((st) => st.length > 0);
  const result: ReturnType<typeof parsePoem> = { stanzas: toStanzas(main) };
  if (idx !== -1) {
    const rest = normalised.slice(idx);
    const [heading, ...lines] = rest.split('\n');
    result.translation = { title: heading.replace(/^##\s*/, '').trim(), stanzas: toStanzas(lines.join('\n')) };
  }
  return result;
}
