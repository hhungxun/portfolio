import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Blog posts: src/content/blog/*.md or *.mdx */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    /** language of the post body; controls <html lang> and fonts */
    lang: z.enum(['en', 'zh']).default('en'),
    /** which side of the site this belongs to */
    side: z.enum(['physics', 'poetry', 'misc']).default('misc'),
    draft: z.boolean().default(false),
    /** placeholder content shipped with the scaffold; shows a "sample" badge */
    sample: z.boolean().default(false),
  }),
});

/** Poems: src/content/poems/*.md — body is plain lines; blank line = stanza break */
const poems = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/poems' }),
  schema: z.object({
    title: z.string(),
    /** e.g. 致C */
    dedication: z.string().optional(),
    date: z.coerce.date(),
    /** where it was first published */
    venue: z.string().optional(),
    /** link to the original publication */
    source: z.string().url().optional(),
    /** special feature label, e.g. 新秀個人特輯 */
    feature: z.string().optional(),
    /** author's note printed under the poem */
    note: z.string().optional(),
    /** if the body contains a translation after a "## Title" heading, its language code */
    translation: z.string().optional(),
    /** optional collection/series name for later grouping */
    collection: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/** Physics projects: src/content/projects/*.md */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    period: z.string(),
    summary: z.string(),
    /** path under /public, e.g. /papers/foo.pdf */
    pdf: z.string().optional(),
    repo: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

export const collections = { blog, poems, projects };
