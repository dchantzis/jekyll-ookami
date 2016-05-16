---
layout: section
title: Experience
titleBefore:
titleAfter:
meta: Experience
summary:
author: Dimitrios Chantzis
image:
keywords:
sectionClass: professional-experience
navigationSection: first
includeInNavigation: false
weight: 0
sitemap:
  lastMod: 2016-05-02
  priority: 0.7
  changeFreq: monthly
  include: true
order: 3
---

{% assign experience = site.data.professional-experience %}

  {% for item in experience %}
  <div {% if false == forloop.last %}class="push-2"{% endif %}>
  <div class="grid">
    <div class="unit [ xs-1 ] brand brand-highlight brand-color micro pad-b-1-4">{{ item.duration }}</div>
    <div class="unit [ xs-1 ] giga">{{ item.role | newline_to_br}}</div>
    <div class="unit [ xs-1 ] pad-b-1-2 italic micro">
      {% if item.company-url != "" %}
        <a href="{{ item.company-url }}" target="_blank">{{ item.company }}</a>
      {% else %}
        {{ item.company }}
      {% endif %}
       - {{ item.location }}
    </div>
    <div class="unit [ xs-1 ] milli">

      <ul class="list-group push-0">
      {% for line in item.description %}
        <li class="push-0 pad-b-1-4">{{ line }}</li>
      {% endfor %}
      </ul>

      {% if item.additional-info != "" %}
        <p class="push-0 pad-b-1-4">{{ item.additional-info }}</p>
      {% endif %}
      {% if item.project-highlights != "" %}
        <p class="push-0 pad-b-1-4">{{ item.project-highlights }}</p>
      {% endif %}

      {% if item.technologies.size >= 1 %}
      <div class="push-0 technologies">
        <span>Technologies:</span>
        <ul class="list-group--inline push-0">
          {% for tool in item.technologies %}
            <li class="list-group__item">{{ tool }}{% if false == forloop.last %}, {% endif %}</li>
          {% endfor %}
        </ul>
      </div>
      {% endif %}

      {% if item.work-section %}

        {% if false == site.single-page-layout %}
          {% capture item-url %}/work#{{item.work-section | downcase}}{% endcapture %}
          {% assign site-layout = ""; %}
        {% else %}
          {% capture item-url %}#{{item.work-section | downcase}}{% endcapture %}
          {% assign site-layout = "single-page-layout"; %}
        {% endif %}

      <div class="pad-t-1-4">
        <a href="{{item-url}}" class="anchor {{site-layout}}">List of projects</a>
      </div>
      {% endif %}

    </div>
  </div>
  </div>
  {% endfor %}
