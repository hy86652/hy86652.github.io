---
title: "NYC Air Quality Analysis"
description: "An interactive dashboard on a decade of New York City air quality, and which neighborhoods carry the burden."
date: "2025-11-24"
tags: ["R","Shiny","Spatial"]
demoURL: "https://019ab6aa-10ac-ce1f-12dc-2205acb314fd.share.connect.posit.cloud/"
repoURL: "https://github.com/hy86652/NYC-Air-Quality-Analysis"
---

A team project for Cornell INFO 5001 (Fall 2025), built by three of us. The Shiny dashboard looks at how air quality, public health, and social equity connect in New York City. It is meant for public-health officials, policymakers, advocates, and residents.

It asks three questions:

1. **Over time:** how have PM2.5, NO₂, and O₃ changed over the past decade?
2. **Across space:** which neighborhoods carry the highest pollution burden?
3. **Against social factors:** how does pollution line up with poverty, health insurance, and health outcomes such as asthma emergency visits?

## Data and cleaning

The core is the NYC DOHMH air-quality dataset from NYC Open Data (about 18.9K records), joined with four neighborhood-level datasets on child poverty, neighborhood poverty, unemployment, and health insurance. Most of the work was cleaning: normalizing place names, finding columns by pattern because the source tables were inconsistent, and parsing messy time-period strings into proper start and end dates. Maps use the UHF neighborhood boundaries published by the health department.

## What we found

- PM2.5 and NO₂ have fallen steadily since 2008. O₃ has not, and has risen in recent years.
- The seasons pull in opposite directions: PM2.5 and NO₂ peak in winter, O₃ in summer. STL time-series decomposition separated these cycles from the long-term trend.
- The highest PM2.5 levels cluster in the Bronx, northern Brooklyn, and parts of Queens, the same areas with higher poverty and lower health-insurance coverage.

## The app

Five tabs: About (method and data dictionary), Overview (citywide trends and the 10 most polluted neighborhoods), Neighborhood Analysis, Health Impact, and a Data Explorer with interactive tables. Maps are interactive `sf` polygons, and the charts carry NAAQS reference lines.

**Stack:** R, Shiny, tidyverse, sf, Quarto, Posit Cloud
