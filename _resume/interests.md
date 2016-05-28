---
layout: section
title: Interests
titleBefore:
titleAfter:
meta: Interests
summary:
author:
image:
keywords:
sectionClass: interests
navigationSection: first
includeInNavigation: false
weight: 0
sitemap:
  lastMod: 2016-05-02
  priority: 0.7
  changeFreq: monthly
  include: true
order: 6
---

{% assign interests = site.data.interests %}

<ul class="list-group push-0 milli">
{% for item in interests %}
  <li class="list-group__item {% if false == forloop.last %}push-1-4{% endif %}">{{item}}</li>
{% endfor %}
</ul>

