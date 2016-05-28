---
layout: section
title: Professional profile
titleBefore:
titleAfter:
meta: Professional profile
summary:
author:
image:
keywords:
sectionClass: professional-profile
navigationSection: first
includeInNavigation: false
weight: 0
sitemap:
  lastMod: 2016-05-02
  priority: 0.7
  changeFreq: monthly
  include: true
order: 1
---

{% assign profile = site.data.professional-profile %}

<ul class="list-group push-0 milli">
{% for item in profile %}
  <li class="list-group__item {% if false == forloop.last %}push-1-4{% endif %}">{{item}}</li>
{% endfor %}
</ul>
