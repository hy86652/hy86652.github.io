# Simon Yan · 个人网站

我的长期职业记录：做了什么、学了什么、想了什么。中英双语。

- 线上地址：https://hy86652.github.io
- 技术栈：[Astro 7](https://astro.build) + Tailwind CSS 4，基于 [Astro Nano](https://github.com/markhorn-dev/astro-nano) 模板改造
- 部署：push 到 `main` 后，由 GitHub Actions 自动构建并发布到 GitHub Pages

## 常用命令

| 命令 | 作用 |
| :--- | :--- |
| `npm install` | 安装依赖（第一次克隆后执行） |
| `npm run dev` | 本地预览，地址为 http://localhost:4321，修改后自动刷新 |
| `npm run build` | 类型检查并构建到 `dist/`。push 之前跑一次，能提前发现错误 |
| `npm run preview` | 预览构建后的网站 |

## 写一篇新内容

所有内容都在 `src/content/` 下，按**栏目 / 语言**分文件夹：

```
src/content/
├── blog/       博客：较长的文章（复盘、思考）
│   ├── en/
│   └── zh/
├── notes/      笔记：简短的学习记录 / TIL
├── projects/   项目
└── work/       工作经历
```

**中英文版本的文件名必须相同**，例如 `blog/en/my-post.md` 和 `blog/zh/my-post.md`，这样语言切换按钮才能找到对应的译文。如果某篇暂时只有一种语言，页面上会提示"还没有另一语言版本"，切换按钮会回到另一语言的列表页。

文件名就是网址：`blog/en/my-post.md` 对应的地址是 `/en/blog/my-post/`。

如果文章需要配图，可以改用文件夹的形式：`blog/en/my-post/index.md`，图片放在同一个文件夹里，用 `![说明](./image.png)` 引用。

### 博客 / 笔记 的开头

```markdown
---
title: "标题"
description: "一句话简介，显示在列表和搜索结果里"
date: "2026-10-22"
tags: ["Python", "learning"]   # 可选
draft: true                    # 可选，写 true 则不发布
---

正文用 Markdown 写……
```

### 项目的开头

和博客一样，另外可以加两个可选字段：

```markdown
demoURL: "https://..."
repoURL: "https://github.com/hy86652/..."
```

### 工作经历的开头

```markdown
---
company: "公司名"
role: "职位"
dateStart: "2026-07-01"
dateEnd: "Present"     # 英文版写 "Present"，中文版写 "至今"；结束后改成日期
---

一段简短描述。
```

## 改其他地方

| 想改的内容 | 文件 |
| :--- | :--- |
| 首页的自我介绍 | `src/components/Intro.astro` |
| 名字、邮箱、社交链接、首页显示的条数 | `src/consts.ts` |
| 导航、按钮等界面文字（中英） | `src/i18n/ui.ts` |
| 颜色、字体、全局样式 | `src/styles/global.css` |

## 发布

```bash
git add .
git commit -m "post: 标题"
git push
```

push 后一两分钟网站就会更新，进度可以在仓库的 **Actions** 页面查看。

## 致谢

模板来自 Mark Horn 的 [Astro Nano](https://github.com/markhorn-dev/astro-nano)，MIT 许可证，见 [LICENSE](LICENSE)。
