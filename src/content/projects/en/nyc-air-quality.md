---
title: "NYC Air Quality Analysis"
description: "An interactive dashboard on a decade of New York City air quality and who it affects."
date: "2025-11-24"
tags: ["R","Shiny","Spatial"]
demoURL: "https://019ab6aa-10ac-ce1f-12dc-2205acb314fd.share.connect.posit.cloud/"
repoURL: "https://github.com/hy86652/NYC-Air-Quality-Analysis"
---

An interactive Shiny dashboard on ten years of air-quality data in New York City.

I joined the NYC DOHMH dataset (~18.9K records) with four socioeconomic datasets. The dashboard looks at trends over time, gaps between neighborhoods, and how pollution relates to income and other socioeconomic factors.

Most of the work was cleaning: normalizing place names, building indicator categories, and parsing messy time-period strings into proper start and end dates. The final app has five tabs, interactive `sf` polygon maps, and NAAQS reference lines.

**Stack:** R, Shiny, tidyverse, sf, Posit Cloud
