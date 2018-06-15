---
layout: post
title:  "Lazy_Load_Test"
date:   2018-06-14 13:21:00 -0400
category: halftone-web-graphics
tags: [post, Web Design]
---
<div class="post-info">
  <div class="headline">
    <h2>Lazy Load Test</h2>
  </div>
  <div class="post-intro">
  </div>
</div>
<figure class="img-grid eigths">
  <div class="one-fourth empty"></div>
  <div class="empty"></div>
  <div class="img-stack one-fourth">
    <img class="lazy-stack" src="/assets/media/hwg/y.svg" data-src="/assets/media/hwg/y.svg">
    <img class="lazy-stack" src="/assets/media/hwg/y.svg" data-src="/assets/media/hwg/c.svg">
    <img class="lazy-stack" src="/assets/media/hwg/y.svg" data-src="/assets/media/hwg/m.svg">
    <img class="lazy-stack" src="/assets/media/hwg/y.svg" data-src="/assets/media/hwg/k.svg">
  </div>
  <div class="empty"></div>
  <figcaption>
    <button onclick="lazy-stack()">load</button>
  </figcaption>
</figure>
<script>
  function lazy-stack() {
      let stack = document.getElementsByClassName("img-stack")[0];
      stack.getElementsByClassName("lazy-stack")[0].attr = "";
  }
</script>
