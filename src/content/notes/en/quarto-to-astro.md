---
title: "Moving this site from Quarto to Astro"
description: "A few things I learned while rebuilding the site on Astro 7 with two languages."
date: "2026-10-22"
tags: ["Astro", "web"]
---

I rebuilt this site on [Astro](https://astro.build), starting from the [Astro Nano](https://github.com/markhorn-dev/astro-nano) template. A few notes for future me:

**Quarto vs. Astro.** Quarto is great when a page *runs* code: notebooks, charts, reports. For a personal site that is mostly prose, Astro gives much finer control over layout with far less fighting against Bootstrap defaults.

**Content collections changed.** In Astro 6+ the old `type: "content"` collections are gone. Each collection now declares a loader in `src/content.config.ts`:

```ts
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: post,
});
```

Entries use `entry.id` instead of `entry.slug`, and you render them with `render(entry)` instead of `entry.render()`.

**Bilingual without duplicated pages.** Every page lives under `src/pages/[lang]/` and gets its language from `getStaticPaths`. Content is split into `en/` and `zh/` folders with matching file names, so the language switch can always find the translated version of a post.

**Tailwind 4 has no config file.** Theme values move into CSS (`@theme { ... }`), plugins load with `@plugin`, and class-based dark mode needs one line:

```css
@custom-variant dark (&:where(.dark, .dark *));
```
