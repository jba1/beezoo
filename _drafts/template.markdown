---
layout: post
title:  "Template"
date:   2018-06-11 13:56:00 -0400
category: testing
tags: [post, test]
---
<div class="post-info">
  <div class="headline">
    <h2>Post headline.</h2>
    {%- if page.tags.size > 1 -%}
    {% for tag in page.tags %}
    {% if tag != "post" %}
    {% if page.tags.last != tag %}
    <a href="{{site.baseurl}}/tag/{{tag}}">{{tag}}</a><span> | </span>
    {% else %}
    <a href="{{site.baseurl}}/tag/{{tag}}">{{tag}}</a>
    {% endif %}
    {% endif %}
    {% endfor %}
    {% endif %}
  </div>
  <div class="post-intro">
    <p>Introduction paragraph(s).</p>
  </div>
</div>
<figure class="img-grid fourths">
  <img class="lazy full shadow" src="/assets/media/test-placeholder-1.svg" data-src="/assets/media/test-1.png">
  <img class="lazy one-half" src="/assets/media/test-placeholder-2.svg" data-src="/assets/media/test-2.jpg">
  <img class="lazy one-half" src="/assets/media/test-placeholder-2.svg" data-src="/assets/media/test-3.jpg">
  <img class="lazy" src="/assets/media/test-placeholder-3.svg" data-src="/assets/media/test-4.svg">
  <img class="lazy" src="/assets/media/test-placeholder-3.svg" data-src="/assets/media/test-5.svg">
  <img class="lazy" src="/assets/media/test-placeholder-3.svg" data-src="/assets/media/test-6.svg">
  <img class="lazy" src="/assets/media/test-placeholder-3.svg" data-src="/assets/media/test-7.svg">
  <figcaption>
    <a href="test.com"><span>Visit (test.com) ↗</span></a>
  </figcaption>
</figure
