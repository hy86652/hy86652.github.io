---
title: "预测 NFIP 洪水保险理赔"
description: "用约 50 万条 FEMA 理赔记录预测洪水保险赔付，并解释原因。"
date: "2025-05-01"
tags: ["Python","Machine learning"]
---

基于美国联邦应急管理署（FEMA）国家洪水保险计划约 50 万条清洗后理赔记录（54 个特征）的回归研究。

我比较了 Lasso、随机森林和 XGBoost 预测赔付金额的效果。XGBoost 最好，**R² = 0.956**，RMSE 比基线降低了 80%。

光有好的分数还不够。我用 SHAP 值和部分依赖图把模型转化成人能读懂的风险因素，这对保险定价和灾害风险管理才真正有用。

**技术栈：** Python、XGBoost、scikit-learn、SHAP
