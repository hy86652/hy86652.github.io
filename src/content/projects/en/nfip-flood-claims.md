---
title: "Predicting NFIP Flood Claims"
description: "Predicting flood-insurance payouts from ~500K FEMA claims, and explaining why."
date: "2025-05-01"
tags: ["Python","Machine learning"]
---

A regression study on about 500K cleaned claims from FEMA's National Flood Insurance Program, with 54 features.

I compared Lasso, random forest, and XGBoost for predicting payout amounts. XGBoost did best, with **R² = 0.956** and 80% lower RMSE than the baseline.

A good score was not enough on its own. I used SHAP values and partial dependence plots to turn the model into risk drivers people can read, which is what matters for insurance pricing and disaster planning.

**Stack:** Python, XGBoost, scikit-learn, SHAP
