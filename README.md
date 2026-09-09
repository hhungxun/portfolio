# Heah Hung Xun · 連宏勛

Personal site: physics on one side, poetry on the other, a blog in between.
Built with [Astro](https://astro.build) 7, React islands, Tailwind 4, KaTeX, and OpenCC.

## Commands

```bash
pnpm install      # once
pnpm dev          # http://localhost:4321, live reload
pnpm build        # static output in dist/
pnpm preview      # serve dist/ locally
pnpm deploy       # optional VPS fallback (needs .env.deploy)
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

Pushes to `main` are built and published automatically by GitHub Actions to
GitHub Pages. The SSH deployment script is retained only as a VPS fallback.

The production URL is `https://hhungxun.my`. See [docs/DOMAIN.md](docs/DOMAIN.md)
for the GitHub Pages and Hostinger DNS setup.
