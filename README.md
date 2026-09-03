# Heah Hung Xun · 連宏勛

Personal site: physics on one side, poetry on the other, a blog in between.
Built with [Astro](https://astro.build) 7, React islands, Tailwind 4, KaTeX, and OpenCC.

## Commands

```bash
pnpm install      # once
pnpm dev          # http://localhost:4321, live reload
pnpm build        # static output in dist/
pnpm preview      # serve dist/ locally
pnpm deploy       # build + upload to the VPS (needs .env.deploy)
```

## Where things live

| What | Where |
|---|---|
| Blog posts | `src/content/blog/*.md` or `*.mdx` |
| Poems | `src/content/poems/*.md` |
| Physics projects | `src/content/projects/*.md` |
| CV data | `src/data/cv.ts` (and `public/cv.pdf`) |
| Names, bios, nav | `src/data/site.ts` |
| Project PDFs | `public/papers/` |
| Colours, fonts, poem layout | `src/styles/global.css` |
| Quantum walk canvas | `src/components/QuantumWalk.tsx` |
| 繁/简 and 直/橫 toggles | `src/scripts/poem-toggles.ts` |
| Deploy script | `scripts/deploy.sh` |

See [docs/WRITING.md](docs/WRITING.md) for how to add a post, a poem, or a project, and how to deploy.

## Deploying

1. Copy `.env.deploy.example` to `.env.deploy` and fill in the server details.
2. `pnpm deploy`. Each deploy lands in `releases/<timestamp>` on the server and the `current` symlink is swapped, so the site is never half-updated.

Set `SITE_URL` once a domain exists so canonical links, the sitemap, and RSS carry the right host.
