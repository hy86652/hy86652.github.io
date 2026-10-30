---
title: "Simulated Trading Assistant Agent"
description: "A LangGraph agent that trades a simulated account over MCP, with rule checks and human approval on every order."
date: "2026-10-09"
tags: ["Python","LangGraph","MCP","Agents"]
repoURL: "https://github.com/hy86652/trading-agent"
---

A trading assistant agent built with LangGraph. It answers questions about prices, indicators, and the account, and it can place orders, but every order must pass deterministic rule checks and then a person's approval. Everything is simulated: the market data is generated and the account is a local JSON file. Nothing connects to a real broker.

## How it works

The graph keeps deciding and doing apart:

- **reasoner** decides the next step. It never runs a tool itself.
- **pre_hook** checks every tool call against plain rules: a known ticker and side, a positive quantity, enough cash or shares, and no more than 20% of total assets in one order. A failed check returns a simulated HTTP 400 so the model can correct itself. Three failures in a row end the turn.
- **human_approval** pauses the graph with LangGraph's `interrupt` before any order goes out. Approval happens in the terminal, or through an `/approve` call to the API.
- **tool_exec** calls the four tools (latest price, MA and RSI indicators, account view, place order) through an MCP server.
- **post_hook** summarizes fills, truncates long outputs, and logs every call.
- **summarize** compresses the oldest messages once a conversation passes 10 messages. Sessions are checkpointed in SQLite and can be resumed by ID.

## Evaluation and deployment

An evaluation suite records 10 scripted cases (prices, an unknown ticker, a zero quantity, an order over the 20% cap, a rejected order, and so on) and scores them two ways: with an LLM judge, and with a deterministic check that every number in an answer appears in some tool result. The full run averaged **4.4 / 5**, and 9 of the 10 answers were fully grounded. The run also exposed two bugs in the evaluation code itself, which I fixed.

Traces go to Langfuse. The service is a FastAPI app in Docker, deployed on Render behind a token-protected API.

**Stack:** Python, LangGraph, MCP, Gemini, FastAPI, SQLite, Langfuse, Docker, Render
