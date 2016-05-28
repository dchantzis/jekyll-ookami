---
layout: default
title: Company 01
titleBefore:
titleAfter:
meta:
summary:
author:
image:
keywords:
sectionClass: projects-company-01
navigationSection: first
includeInNavigation: false
weight: 0
sitemap:
  lastMod: 2016-05-02
  priority: 0.7
  changeFreq: monthly
  include: true
order: 1
company: company-01
company-url: "http://www.google.com/"
duration: "01/1996 - 12/1997"
technologies: [ "skill 1", "skill 2", "skill 3", "skill 4", "skill 5", "skill 6", "skill 7", "skill 8", "skill 9", "skill 10" ]
---

{% assign projects = site.data.projects | where:"company",page.company %}
{% include project-section.html %}
