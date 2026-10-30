---
title: "RoomExchange"
description: "一个学生换房网站，获得 UC Davis Big Bang! 创业比赛第二名。"
date: "2025-04-15"
tags: ["HTML/CSS","JavaScript","Google Maps"]
demoURL: "https://roomexchange.netlify.app/"
repoURL: "https://github.com/hy86652/RoomExchange"
---

一个让大学生发布自己的房间、在地图上找房并安排换房的网站，最初是为了缓解校园住房紧张而做的。

目前完成的是前端部分：16 个用原生 HTML、CSS 和 JavaScript 写的静态页面，覆盖了完整流程，包括首页、搜索、房源列表、房间详情、发布房源、聊天、个人主页、注册登录、评价、帮助与 FAQ，以及 404 页面。搜索和房间详情页接入了 Google Maps JavaScript API，可以在地图上浏览房源；更早的版本用的是 Mapbox。

思路是先把静态站做得像一个真正的产品，以后接入后端时就不用返工界面。后端（Node.js + Express）的结构已经写在仓库的设计文档里，但还没有实现。

项目获得了 **UC Davis Big Bang! 创业比赛（2025）第二名**，评委认可了它的技术可行性和市场潜力。

**技术栈：** HTML、CSS、JavaScript、Google Maps JavaScript API、Netlify
