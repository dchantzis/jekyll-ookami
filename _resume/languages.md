---
layout: section
title: Languages
titleBefore:
titleAfter:
meta: Languages
summary:
author: Dimitrios Chantzis
image:
keywords:
sectionClass: languages
navigationSection: first
includeInNavigation: false
weight: 0
sitemap:
  lastMod: 2016-05-02
  priority: 0.7
  changeFreq: monthly
  include: true
order: 5
---

{% assign languages = site.data.languages %}

{% for item in languages %}
<div class="grid">

<div class="unit [ xs-1 ] brand brand-highlight brand-color micro push-1-4">{{ item.name }}</div>
<div class="unit [ xs-1 ] {% if false == forloop.last %}push-1-2{% endif %}">
  <ul class="list-group push-0 milli">
  {% for certificate in item.certificates %}
    <li class="push-1-4">
      {{ certificate.title }}
      {% if certificate.grade != "" %}
        (Grade: {{ certificate.grade }},
      {% endif %}
      {% if certificate.year != "" %}
        {{ certificate.year }})
      {% endif %}
    </li>
  {% endfor %}
  </ul>
</div>

</div>
{% endfor %}
