---
layout: post
title:  "Layered_Raster_Images"
date:   2018-06-15 16:32:34 -0400
category: halftone-web-graphics
tags: [post, Web Design, Illustration]
---
<div class="post-info">
  <div class="headline">
    <h2>Layered raster images</h2>
  </div>
  <div class="post-intro">
    <p>Below I test several methods for layering several raster images on top of a vector background shape, to create one raster/vector hybrid halftone image.</p>
    <p>Although this technique produces a less accurate reproduction of the original photo, it creates new opportunities. Opacity, position, and angle, among other properties, can be animated with CSS to create visual effects such as an image moving in and out of alignment/focus. The layers can also be lazy-loaded one at a time, progressively adding visual information as each constituent file is downloaded, rather than forcing viewers to wait for a single large file.</p>
  </div>
</div>
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
  <figcaption><p>Two halftone raster images stacked on top of a vector background fill layer, then animated with transforms.</p></figcaption>
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
    <p>The same construction as before, only with a much finer halftone screen, reproducing the original image more faithfully.</p>
  </figcaption>
</figure>
