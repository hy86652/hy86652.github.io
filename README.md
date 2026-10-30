# Simon Yan · Personal Website

A long-running record of my career: what I work on, what I learn, and what I think. Written in English and Chinese.

- Live site: https://hy86652.github.io
- Stack: [Astro 7](https://astro.build) + Tailwind CSS 4, adapted from the [Astro Nano](https://github.com/markhorn-dev/astro-nano) template
- Deployment: every push to `main` is built by GitHub Actions and published to GitHub Pages

## Commands

| Command | What it does |
| :--- | :--- |
| `npm install` | Install dependencies (run once after cloning) |
| `npm run dev` | Start a local preview at http://localhost:4321 that reloads on change |
| `npm run build` | Type-check and build to `dist/`. Run it before pushing to catch errors early |
| `npm run preview` | Preview the built site |

## Writing new content

All content lives in `src/content/`, organized by **section / language**:

```
src/content/
├── blog/            Blog: longer posts (retrospectives, reflections)
│   ├── en/
│   └── zh/
├── notes/           Notes: short learning records / TIL
├── projects/        Projects
├── work/            Work experience
├── education/       Education
├── certifications/  Certifications
└── awards/          Awards
```

The Work page shows work experience, education, certifications, and awards, in that order.

**The English and Chinese versions must have the same file name**, e.g. `blog/en/my-post.md` and `blog/zh/my-post.md`, so the language switch can find the translation. If an entry exists in only one language, the page says the other version is not available yet, and the language switch goes to the other language's section index instead.

The file name is the URL: `blog/en/my-post.md` is served at `/en/blog/my-post/`.

If a post needs images, use a folder instead: `blog/en/my-post/index.md`, with the images in the same folder, referenced as `![caption](./image.png)`.

### Blog / note frontmatter

```markdown
---
title: "Title"
description: "One-line summary, shown in lists and search results"
date: "2026-10-22"
tags: ["Python", "learning"]   # optional
draft: true                    # optional; true means it is not published
---

Body text in Markdown...
```

### Project frontmatter

Same as a blog post, plus two optional fields:

```markdown
demoURL: "https://..."
repoURL: "https://github.com/hy86652/..."
```

### Work experience frontmatter

```markdown
---
company: "Company name"
role: "Job title"
dateStart: "2026-07-01"
dateEnd: "Present"     # "Present" in English, "至今" in Chinese; replace with a date once it ends
---

A short description.
```

### Education frontmatter

```markdown
---
school: "School · City"
degree: "Degree and major"
dateStart: "2025-08-01"
dateEnd: "2026-05-31"
---

GPA, coursework, and other details.
```

### Certification / award frontmatter

```markdown
---
title: "Name of the certification or award"
issuer: "Who issued it"
date: "2026-10-01"
---

Optional details, such as a credential ID or what the award was for.
```

## Changing other things

| What to change | File |
| :--- | :--- |
| Homepage introduction | `src/components/Intro.astro` |
| Name, email, social links, number of items on the homepage | `src/consts.ts` |
| Navigation, buttons, and other UI text (both languages) | `src/i18n/ui.ts` |
| Colors, fonts, global styles | `src/styles/global.css` |

## Publishing

```bash
git add .
git commit -m "post: title"
git push
```

The site updates a minute or two after the push. Progress is visible on the repository's **Actions** page.

## Credits

Based on [Astro Nano](https://github.com/markhorn-dev/astro-nano) by Mark Horn, MIT License. See [LICENSE](LICENSE).
