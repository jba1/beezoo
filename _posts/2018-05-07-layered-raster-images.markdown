---
layout: post
title:  "Layered_Raster_Images"
date:   2018-05-07 16:32:34 -0400
category: halftone-web-graphics
tags: [post, Web Design, Illustration]
---
<div class="post-info">
  <div class="headline">
    <h2>Layered raster images</h2>
  </div>
  <div class="post-intro">

  </div>
</div>
<figure class="img-grid fourths">
  <div class="empty"></div>
  <img class="one-half" src="/assets/media/hwg/full3.svg">
</figure>
<figure>
  <img src="/assets/media/hwg/original.png">
  <figcaption><p>Original image (common dandelion flower head)</p></figcaption>
</figure>
<figure class="img-grid eigths">
  <div class="empty one-fourth"></div>
  <img class="one-fourth" src="/assets/media/hwg/false-green.png">
  <img class="one-fourth" src="/assets/media/hwg/false-red.png">
  <div class="empty one-fourth"></div>
  <div class="empty one-fourth"></div>
  <div class="img-stack one-half">
    <img src="/assets/media/hwg/false-green.png" style="animation: layer-split-2 5s ease-in infinite;">
    <img src="/assets/media/hwg/false-red.png" style="animation: layer-split-1 5s ease-in infinite; mix-blend-mode: difference;">
  </div>
  <div class="empty"></div>
  <figcaption><p>Isolated green and red color channels, stacked with absolute positioning and blended with mix-blend-mode: difference to create a false-color image in browser</p></figcaption>
</figure>
<figure class="img-grid eigths">
  <div class="empty"></div>
  <img class="one-fourth" src="/assets/media/hwg/base75.svg">
  <img class="one-fourth" src="/assets/media/hwg/shadows75-45d.png">
  <img class="one-fourth" src="/assets/media/hwg/highlights75-15d.png">
  <div class="empty"></div>
  <div class="empty one-fourth"></div>
  <div class="img-stack one-half">
    <img src="/assets/media/hwg/base75.svg">
    <img src="/assets/media/hwg/shadows75-45d.png" style="animation: wobble-1 8s ease infinite;">
    <img src="/assets/media/hwg/highlights75-15d.png" style="animation: wobble-2 8s ease infinite;">
  </div>
  <figcaption>

  </figcaption>
</figure>
<figure class="img-grid eigths">
  <div class="empty"></div>
  <img class="one-fourth" src="/assets/media/hwg/base75.svg">
  <img class="one-fourth" src="/assets/media/hwg/shadows250-15d.png">
  <img class="one-fourth" src="/assets/media/hwg/highlights250-75d.png">
  <div class="empty"></div>
  <div class="empty one-fourth"></div>
  <img class="one-half" src="/assets/media/hwg/full3.svg">
  <figcaption>

  </figcaption>
</figure>
