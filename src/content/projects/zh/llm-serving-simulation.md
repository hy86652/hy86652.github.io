---
title: "LLM 推理服务调度仿真"
description: "用离散事件仿真研究调度策略如何影响大模型推理延迟。"
date: "2025-12-01"
tags: ["Python","Simulation","LLM"]
---

一个单 GPU 大模型推理服务系统的离散事件仿真。

模型覆盖了自回归推理的两个阶段：**prefill** 和 **decode**，请求按泊松过程到达，并有批处理限制。我比较了"完整处理到底"和"prefill 优先"两种调度器在吞吐量、首 token 延迟（TTFT）、token 间延迟（TBT）和总延迟上的表现。

为了验证仿真器，我把它简化成 M/M/1 排队模型，和闭式解公式对比。主要发现：系统存在一个由容量驱动的相变点，而 decode 才是真正的瓶颈。

**技术栈：** Python、Matplotlib、排队论
