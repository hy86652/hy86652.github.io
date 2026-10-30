---
title: "Personal Algorithmic Trading System"
description: "A personal quant platform, from data and factor research to backtesting, risk controls, and live execution."
date: "2026-02-01"
tags: ["Python","Quant","Claude Code"]
---

A personal research and execution platform that covers the whole loop: data, factor research, strategy development, backtesting, risk management, live execution, and monitoring. It is one repository running as one process, and it handles both US equities (Alpaca, with YFinance as a free fallback) and crypto (OKX, with CCXT as a fallback). I build it with Claude Code. The repository is private.

## How it is built

- **Data layer.** Market data is stored as Parquet, with a SQLite index that records each symbol's frequency and last update, so the daily job only pulls what is new.
- **Strategies only emit signals.** A strategy returns a target weight and the reason for the trade. It never places orders. Position sizing (Kelly, fixed fraction, or volatility targeting) and execution happen downstream, so the same strategy code runs in a backtest and live.
- **A backtester I wrote myself.** About 500 lines of event-driven core instead of backtrader, so I control the matching logic, slippage, fees, and price-limit handling. It reports Sharpe, Sortino, Calmar, and max drawdown.
- **Layered risk controls**, configured in YAML and checked before every order: a per-trade stop loss, a daily loss circuit breaker, a drawdown breaker, a 20% cap per symbol, and a correlation check.
- **Strategies:** momentum, mean reversion (z-score with a holding-time limit), cross-sectional multi-factor, and all 101 alphas from Kakushadze's *101 Formulaic Alphas* paper, implemented in pandas under their original numbers.
- **Execution through adapters.** A simulated broker, Alpaca, and OKX share one interface, so moving from paper trading to live is a one-line config change.
- **Monitoring:** a six-page Streamlit dashboard for backtests, data, positions, configuration, history, and research notes.

## Where it stands

The data, strategy, backtesting, risk, and dashboard layers are done, covered by unit tests and an end-to-end backtest on real YFinance data. The live-trading loop and broker adapters are built and waiting for API keys. Notifications are not written yet.

The rule I work by: nothing is committed until I have checked it against real market behavior. Financial data is full of edge cases, and that is exactly where AI-generated code tends to be confidently wrong.

**Stack:** Python, pandas, Parquet, SQLite, Streamlit, Alpaca API, OKX / CCXT, pytest
