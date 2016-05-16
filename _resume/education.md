---
layout: section
title: Education
titleBefore:
titleAfter:
meta: Education
summary:
author: Dimitrios Chantzis
image:
keywords:
sectionClass: education
navigationSection: first
includeInNavigation: false
weight: 0
sitemap:
  lastMod: 2016-05-02
  priority: 0.7
  changeFreq: monthly
  include: true
order: 2
---

{% assign education = site.data.education %}

{% for item in education %}
<div class="grid">

  <div class="unit [ xs-1 ] pad-b-1-4 micro brand brand-highlight brand-color ">{{item.year}}</div>
  <div class="unit [ xs-1 ]">
    {% for title in item.titles %}
      <p class="push-1-4">{{ title }}</p>
    {% endfor %}
  </div>
  <div class="unit [ xs-1 ] {% if false == forloop.last %}pad-b{% endif %} italic micro">{{item.institute}} - {{item.location}}</div>

</div>
{% endfor %}

