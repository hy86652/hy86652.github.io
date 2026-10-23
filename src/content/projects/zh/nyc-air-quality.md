---
title: "纽约市空气质量分析"
description: "一个交互式看板：纽约十年的空气质量，以及它影响了谁。"
date: "2025-11-24"
tags: ["R","Shiny","Spatial"]
demoURL: "https://019ab6aa-10ac-ce1f-12dc-2205acb314fd.share.connect.posit.cloud/"
repoURL: "https://github.com/hy86652/NYC-Air-Quality-Analysis"
---

一个基于 Shiny 的交互式看板，分析纽约市十年的空气质量数据。

我把纽约市卫生局（NYC DOHMH）的数据集（约 1.89 万条记录）和 4 个社会经济数据集合并在一起，从时间趋势、街区之间的差异，以及污染与收入等社会经济因素的关系几个角度做了分析。

大部分工作其实是数据清洗：统一地名、构建指标分类，把混乱的时间段字符串解析成规范的起止日期。最终的应用有 5 个标签页，包含交互式 `sf` 多边形地图和 NAAQS 标准参考线。

**技术栈：** R、Shiny、tidyverse、sf、Posit Cloud
