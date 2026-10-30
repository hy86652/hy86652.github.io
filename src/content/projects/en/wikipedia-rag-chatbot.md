---
title: "Wikipedia RAG ChatBot"
description: "A retrieval-augmented chatbot that answers from Wikipedia and cites its sources."
date: "2025-12-04"
tags: ["R","RAG","LLM"]
demoURL: "https://019b32a6-6f99-d80f-ffef-1cb3decc9655.share.connect.posit.cloud/"
repoURL: "https://github.com/hy86652/Wiki-ChatBot-RAG-"
---

A retrieval-augmented generation (RAG) web app built with R and Shiny for Cornell INFO 4940 (Fall 2025). I led a team of three.

LLMs answer fluently, but often without sources. This app answers only from Wikipedia pages it has just retrieved, and every answer comes with numbered citations.

## How it works

1. **Rewrite the question.** A small model (GPT-4.1 mini) distills the question into a short keyword phrase. Early tests showed that the extra words in a natural question pulled in irrelevant pages, and this step fixed most of that.
2. **Retrieve.** The MediaWiki search API returns candidate articles, and the app fetches each page's raw wikitext, truncated to about 1,200 characters to stay within token limits. Missing pages are skipped instead of breaking the answer.
3. **Answer.** A larger model (GPT-4.1) writes one unified answer using only the retrieved excerpts, with numbered in-text citations and a source list in a strict "TITLE — URL" format.

Getting that format to hold took several rounds of prompt changes. Early versions dropped the citation header, made up URLs, or summarized page by page instead of answering the question.

The interface keeps a searchable query history for the session and offers the citations as a download. The app is deployed on Posit Cloud.

## Limitations

Only the first ~1,200 characters of each page are used, so facts further down an article are missed, and raw wikitext markup can confuse the model. The next steps would be embedding-based retrieval and cleaning passages before they reach the model.

**Stack:** R, Shiny, OpenAI API (GPT-4.1, GPT-4.1 mini), MediaWiki API, Posit Cloud
