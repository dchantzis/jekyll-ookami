---
layout: default
title: Freelance
titleBefore:
titleAfter:
meta: Freelance
summary:
author: Dimitrios Chantzis
image:
keywords:
sectionClass: projects-freelance
navigationSection: first
includeInNavigation: false
weight: 0
sitemap:
  lastMod: 2016-05-02
  priority: 0.7
  changeFreq: monthly
  include: true
order: 0
company: Freelance
company-url: "http://www.dimitrioschantzis.com/"
duration: ""
technologies:
---

{% assign projects = site.data.projects | where:"company",page.company %}
{% include project-section.html %}
