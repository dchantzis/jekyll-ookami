---
layout: default
title: Personal / Freelance projects
titleBefore:
titleAfter:
meta: Personal projects
summary:
author: Dimitrios Chantzis
image:
keywords:
sectionClass: projects-personal-freelance
navigationSection: first
includeInNavigation: false
weight: 0
sitemap:
  lastMod: 2016-05-02
  priority: 0.7
  changeFreq: monthly
  include: true
order: 2
company: personal
company-url: "http://www.dimitrioschantzis.com/"
duration: "2005 - ..."
technologies: [ "PHP", "SQL", "MySQL", "HTML5", "CSS3", "javaScript", "AJAX", "jQuery", "Drupal7", "XML", "JSON", "Twig", "Git", "Markdown", "Wordpress", "YAML", "Liquid", "Jekyll" ]
---

{% assign projects-personal = site.data.projects | where:"company",page.company %}
{% assign projects-freelance = site.data.projects | where:"company","freelance" %}
{% for item in projects-personal %}
  {% assign projects-freelance = projects-freelance | push: item %}
{% endfor %}
{% assign projects = projects-freelance | sort:"weight" %}
{% include project-section.html %}
