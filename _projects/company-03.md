---
layout: default
title: Company 03
titleBefore:
titleAfter:
meta:
summary:
author:
image:
keywords:
sectionClass: projects-company-03
navigationSection: first
includeInNavigation: false
weight: 0
sitemap:
  lastMod: 2016-05-02
  priority: 0.7
  changeFreq: monthly
  include: true
order: 3
company: company-03
company-url: "http://www.google.com/"
duration: "01/1992 - 12/1994"
technologies: [ "skill 1", "skill 2", "skill 3", "skill 4", "skill 5", "skill 6", "skill 7", "skill 8", "skill 9", "skill 10" ]
---

{% assign projects = site.data.projects | where:"company",page.company %}
{% include project-section.html %}
