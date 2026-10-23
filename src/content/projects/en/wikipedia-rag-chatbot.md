---
title: "Wikipedia RAG ChatBot"
description: "A retrieval-augmented chatbot that answers from Wikipedia and cites its sources."
date: "2025-12-04"
tags: ["R","RAG","LLM"]
demoURL: "https://019ae764-a793-59ee-0e7a-bba44f6653b4.share.connect.posit.cloud/"
repoURL: "https://github.com/hy86652/Wiki-ChatBot-RAG-"
---

A retrieval-augmented generation (RAG) web app built with R and Shiny. I led a team of three.

The app turns a user question into an optimized search query, pulls relevant articles through the MediaWiki API, and asks the model to answer **only from those sources**. Grounding the prompt this way cuts down on hallucinated answers. Every answer comes with citations that can be exported.

- Automated query-optimization pipeline
- Source-grounded prompt design
- Reactive UI with session history and exportable citations
- Deployed on Posit Cloud

**Stack:** R, Shiny, OpenAI API, MediaWiki API, Posit Cloud
