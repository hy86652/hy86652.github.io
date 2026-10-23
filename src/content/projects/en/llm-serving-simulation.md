---
title: "LLM Serving: Scheduling Simulation"
description: "A discrete-event simulation of how scheduling policy shapes LLM inference latency."
date: "2025-12-01"
tags: ["Python","Simulation","LLM"]
---

A discrete-event simulation of a single-GPU LLM serving system.

The model covers both phases of autoregressive inference, **prefill** and **decode**, with Poisson arrivals and batching limits. I compared a complete-to-end scheduler with a prefill-first scheduler on throughput, time to first token (TTFT), time between tokens (TBT), and total latency.

To check the simulator, I reduced it to an M/M/1 queue and compared its output with the closed-form formulas. The main finding: there is a capacity-driven phase transition, and decode is the real bottleneck.

**Stack:** Python, Matplotlib, queueing theory
