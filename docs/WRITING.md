# Writing guide

Everything on the site is a file in the repo. Add or edit a file, run `pnpm dev` to check it, commit, then `pnpm deploy`.

## A blog post

Create `src/content/blog/<slug>.md` (or `.mdx` if you want components). The file name becomes the URL: `src/content/blog/my-note.md` → `/blog/my-note`.

```md
---
title: Why a quantum walk spreads faster than a random one
description: One-line summary shown in lists and RSS.   # optional
date: 2026-09-03
tags: [quantum walks, notes]
lang: en          # en | zh — sets fonts and <html lang>
side: physics     # physics | poetry | misc — which name shows in the masthead
draft: false      # true hides it from builds but keeps it in `pnpm dev`
---

Body in Markdown. Inline math $E = \hbar\omega$ and display math:

$$
i\hbar\,\partial_t \psi = \hat H \psi
$$
```

Code blocks are highlighted automatically. For an interactive component, use `.mdx` and import it after the frontmatter:

```mdx
import QuantumWalk from '../../components/QuantumWalk.tsx';

<QuantumWalk client:visible interactive steps={40} />
```

Any React component in `src/components` works the same way. `client:visible` loads it when scrolled into view.

Delete the two files marked `sample: true` when you have real posts.

## A poem

Create `src/content/poems/<yyyy-mm-dd>-<slug>.md`. Store the text in **Traditional Chinese**; the site converts to Simplified on demand.

```md
---
title: "鼻之外"
dedication: "致C"                       # optional
date: 2024-01-12
venue: "星洲日報・文藝春秋"              # optional
source: "https://www.sinchew.com.my/…"  # optional link to the original
feature: "新秀個人特輯"                  # optional label
note: "本詩改自洛夫〈煙之外〉。"          # optional, printed under the poem
translation: "ms"                       # only if a translation follows
---

第一節第一行
第一節第二行

第二節第一行
```

Rules: one line per line, a blank line between stanzas, no Markdown needed. To include a translation, add a `## Title` heading after the poem and put the translated stanzas below it; set `translation` to its language code (`ms`, `en`). Translations stay horizontal even in vertical mode.

Vertical (直排) is the default on screens wider than 640px; readers can switch, and the choice is remembered.

## A physics project

Create `src/content/projects/<slug>.md`. Put the PDF in `public/papers/`.

```md
---
title: "Reach for the ⋆: Quantum Mechanics Without Wavefunctions"
subtitle: Phase-space quantum mechanics        # optional
period: 2026/01
summary: One or two sentences shown on cards.
pdf: /papers/phase-space-quantum-mechanics.pdf # optional
repo: https://github.com/hhungxun/…            # optional
tags: [phase space, semiclassical]
order: 1                                       # lower = earlier on the page
---

Optional longer description in Markdown, shown on /physics.
```

## The CV

Edit `src/data/cv.ts`; the `/cv` page is generated from it. Replace `public/cv.pdf` when you re-export the LaTeX version, and bump `updated`.

## Names, bios, navigation

`src/data/site.ts`.

## Deploying

```bash
cp .env.deploy.example .env.deploy   # first time only, then fill it in
pnpm deploy
```

The script builds, uploads `dist/` to `releases/<timestamp>` on the server, and points `current` at it. Old releases are pruned, keeping the last five.
