// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Set SITE_URL in the environment (or in .env) once a domain exists.
const site = process.env.SITE_URL ?? 'https://hhungxun.example';

export default defineConfig({
  site,
  trailingSlash: 'never',
  // /poetry -> dist/poetry.html so the static server needs no trailing-slash redirects
  build: { format: 'file' },
  // keep whitespace between inline elements (Astro 7 defaults to JSX-style stripping)
  compressHTML: true,
  integrations: [react(), mdx(), sitemap()],
  markdown: {
    // remark/rehype pipeline so LaTeX ($...$ and $$...$$) renders via KaTeX in .md and .mdx
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
