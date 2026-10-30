---
title: "模拟交易助手 Agent"
description: "一个基于 LangGraph 的交易 agent：通过 MCP 操作模拟账户，每笔订单都要经过规则校验和人工审批。"
date: "2026-10-09"
tags: ["Python","LangGraph","MCP","Agents"]
repoURL: "https://github.com/hy86652/trading-agent"
---

一个用 LangGraph 构建的交易助手 agent。它可以回答价格、技术指标和账户相关的问题，也能下单，但每笔订单都必须先通过确定性的规则校验，再经过人工审批。一切都是模拟的：行情数据是生成的，账户是一个本地 JSON 文件，不连接任何真实券商。

## 工作方式

整个图把"决策"和"执行"严格分开：

- **reasoner**：只决定下一步做什么，从不自己调用工具。
- **pre_hook**：用明确的规则检查每次工具调用，包括股票代码和买卖方向是否有效、数量是否为正、现金或持仓是否足够，以及单笔订单不超过总资产的 20%。校验失败时返回一个模拟的 HTTP 400，让模型自行修正；连续失败三次就结束本轮。
- **human_approval**：任何订单发出前，用 LangGraph 的 `interrupt` 暂停整个图，等待审批。可以在终端里审批，也可以调用 API 的 `/approve` 接口。
- **tool_exec**：通过 MCP 服务器调用四个工具：最新价格、MA 和 RSI 指标、账户信息、下单。
- **post_hook**：为成交生成摘要，截断过长的输出，并记录每一次调用。
- **summarize**：对话超过 10 条消息后，压缩最早的消息。会话状态存在 SQLite 里，可以凭会话 ID 恢复。

## 评估与部署

评估套件录制了 10 个预设场景（查价格、未知股票代码、下单数量为 0、超过 20% 上限的订单、被拒绝的订单等），并从两个角度打分：一是 LLM 评委，二是一个确定性检查，确认回答里的每个数字都能在工具返回结果中找到。完整运行的平均分是 **4.4 / 5**，10 个回答里有 9 个完全有据可查。这次运行还暴露了评估代码自身的两个 bug，我都修复了。

调用链路追踪接入了 Langfuse。服务是一个跑在 Docker 里的 FastAPI 应用，部署在 Render 上，API 需要令牌才能访问。

**技术栈：** Python、LangGraph、MCP、Gemini、FastAPI、SQLite、Langfuse、Docker、Render
