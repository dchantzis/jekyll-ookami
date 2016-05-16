---
layout: default
title: MSc Design and Digital Media / BSc Computer Sciences
titleBefore:
titleAfter:
meta: MSc / BSc
summary:
author: Dimitrios Chantzis
image:
keywords:
sectionClass: projects-msc-bsc
navigationSection: first
includeInNavigation: false
weight: 0
sitemap:
  lastMod: 2016-05-02
  priority: 0.7
  changeFreq: monthly
  include: true
order: 5
company: msc-bsc
company-url: ""
duration:
technologies:
---

{% assign projects = site.data.projects | where:"company",page.company %}
{% include project-section.html %}
