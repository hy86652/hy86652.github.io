---
title: "把网站从 Quarto 迁移到 Astro"
description: "用 Astro 7 重建双语网站时学到的几件事。"
date: "2026-10-22"
tags: ["Astro", "web"]
---

我基于 [Astro Nano](https://github.com/markhorn-dev/astro-nano) 模板，用 [Astro](https://astro.build) 重建了这个网站。给未来的自己记几笔：

**Quarto 和 Astro 的区别。** 当页面需要*运行*代码，比如笔记本、图表、报告时，Quarto 非常好用。但对于一个以文字为主的个人网站，Astro 对布局的控制要精细得多，也不用总是和 Bootstrap 的默认样式较劲。

**内容集合的写法变了。** 从 Astro 6 开始，旧的 `type: "content"` 集合被移除了。现在每个集合都要在 `src/content.config.ts` 里声明一个 loader：

```ts
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: post,
});
```

条目用 `entry.id` 代替 `entry.slug`，渲染时用 `render(entry)`，不再是 `entry.render()`。

**双语，但不复制页面。** 所有页面都放在 `src/pages/[lang]/` 下，通过 `getStaticPaths` 拿到当前语言。内容分成 `en/` 和 `zh/` 两个文件夹，文件名一一对应，这样切换语言时总能找到同一篇文章的译文。

**Tailwind 4 不再需要配置文件。** 主题变量写进 CSS（`@theme { ... }`），插件用 `@plugin` 加载，基于 class 的深色模式只需要一行：

```css
@custom-variant dark (&:where(.dark, .dark *));
```
