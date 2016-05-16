---
layout: default
title: Mosaic Digital
titleBefore: Projects at
titleAfter:
meta: Mosaic Digital
summary:
author: Dimitrios Chantzis
image:
keywords:
sectionClass: projects-mosaic-digital
navigationSection: first
includeInNavigation: false
weight: 0
sitemap:
  lastMod: 2016-05-02
  priority: 0.7
  changeFreq: monthly
  include: true
order: 1
company: mosaic-digital
company-url: "http://www.dimitrioschantzis.com/"
duration: "01/2013 - 06/2015"
technologies: [ "PHP", "Zend", "SQL", "MySQL", "HTML5", "CSS3", "javaScript", "AJAX", "jQuery", "Drupal7", "XML", "JSON", "Twig", "Git", "Markdown", "Idiorm & Paris" ]
---

{% assign projects = site.data.projects | where:"company",page.company %}
<section class="{{page.sectionClass}} js-section" id="{{page.sectionClass}}">
  <h3 class="brand brand-highlight push-1-2">
    <a href="{{ page.company-url }}" target="_blank">{{ page.title }}</a>
  </h3>
  <p class="push-0 brand brand-highlight brand-color micro pad-b-1-4">{{ page.duration }}</p>
  <p class="push-0 milli">{{ page.description }}</p>
  {% if page.technologies.size >= 1 %}
    <div class="push technologies milli">
    <span>Technologies:</span>
    <ul class="list-group--inline push-0">
      {% for item in page.technologies %}
        <li class="list-group__item">{{item}}{% if false == forloop.last %}, {% endif %}</li>
      {% endfor %}
    </ul>
    </div>
  {% endif %}

  <div class="grid">
  {% for i in (1..4) %}
    <div class="unit [ xs-1 s-1-2 m-1-4 ] gutter-1-4 push-0">

    {% assign loop_index = forloop.index0 | times:14 %}
    <ul class="list-group push-0">
      {% for item in projects limit:14 offset:loop_index %}
      <li class="list-group__item {%if false == forloop.last%}pad-b-1-4{%endif%}">
        <a href="{{ item.url }}" target="_blank">{{ item.title }}</a>
      </li>
      {% endfor %}
    </ul>

    </div>
  {% endfor %}
  </div>

</section>
