---
layout: default
title: Tera Media
titleBefore:
titleAfter:
meta: Tera Media
summary:
author: Dimitrios Chantzis
image:
keywords:
sectionClass: projects-tera-media
navigationSection: first
includeInNavigation: false
weight: 0
sitemap:
  lastMod: 2016-05-02
  priority: 0.7
  changeFreq: monthly
  include: true
order: 3
company: tera-media
company-url: "http://www.tera-media.net/"
duration: "07/2009 - 10/2010, 02/2011 - 06/2012"
technologies: [ "PHP", "SQL", "MySQL", "(X)HTML", "CSS", "javaScript", "AJAX", "mooTools", "jQuery", "JSON", "XML", "Drupal 6" ]
---

{% assign projects = site.data.projects | where:"company",page.company %}
{% include project-section.html %}
