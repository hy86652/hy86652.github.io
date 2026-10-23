---
title: "维基百科 RAG 聊天机器人"
description: "基于维基百科回答问题、并给出引用来源的检索增强聊天机器人。"
date: "2025-12-04"
tags: ["R","RAG","LLM"]
demoURL: "https://019ae764-a793-59ee-0e7a-bba44f6653b4.share.connect.posit.cloud/"
repoURL: "https://github.com/hy86652/Wiki-ChatBot-RAG-"
---

一个用 R 和 Shiny 构建的检索增强生成（RAG）网页应用，我带领 3 人团队完成。

应用先把用户的问题改写成更好的搜索查询，再通过 MediaWiki API 获取相关文章，然后要求模型**只根据这些来源**作答。这样约束提示词，可以减少模型"编造"答案。每个回答都附带可以导出的引用。

- 自动化的查询优化流程
- 基于来源的提示词设计
- 带会话历史和引用导出的响应式界面
- 部署在 Posit Cloud

**技术栈：** R、Shiny、OpenAI API、MediaWiki API、Posit Cloud
