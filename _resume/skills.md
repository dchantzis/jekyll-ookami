---
layout: section
title: Technical skills
titleBefore:
titleAfter:
meta: Technical skills
summary:
author: Dimitrios Chantzis
image:
keywords:
sectionClass: skills
navigationSection: first
includeInNavigation: false
weight: 0
sitemap:
  lastMod: 2016-05-02
  priority: 0.7
  changeFreq: monthly
  include: true
order: 4
---

{% assign skills = site.data.skills %}

<div class="grid milli">
{% for item in skills %}
  <div class="unit [ xs-1 l-1-2 ] island-1-4">{{item.tools}}</div>
{% endfor %}
</div>

