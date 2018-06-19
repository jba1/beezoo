---
layout: post
title:  "Layered_Vector_Images"
date:   2018-06-14 12:00:00 -0400
category: halftone-web-graphics
tags: [post, Web Design, Illustration]
---
<div class="post-info">
  <div class="headline">
    <h2>Layered vector images</h2>
  </div>
  <div class="post-intro">
    <p>In a comparison with raster image formats, the advantages of SVG include lossless scaling, reduced file sizes, and support for CSS animations. However, most usage of SVG remains limited to iconography, simple illustrations, and other basic graphics. Photography can be reconstructed from a vast amount of different vector shapes, but the process is tedious and the resulting SVG is too large and performance-intensive for use on the web. <a href="https://en.wikipedia.org/wiki/Halftone">The halftone process</a> can instead be used to simulate a continuous-tone photo. An SVG constructed this way would only require circles of four different fill colors, set on a transparent background.</p>
    <p>In the example below, I converted the original RGB photo into CMYK, separated its color channels into individual files, and then ran each file through Photoshop's halftone screen. I then used Illustrator's image trace to convert the files into vectors, and exported them as SVG's. The four resulting files can be stacked in browser with absolute positioning, or recombined into one SVG.</p>
  </div>
</div>
<figure>
  <img src="/assets/media/hwg/original.png">
  <figcaption><p>Original image (common dandelion flower head)</p></figcaption>
</figure>
<figure class="img-grid eigths">
  <div class="empty one-fourth"></div>
  <img class="one-fourth" src="/assets/media/hwg/y.svg">
  <img class="one-fourth" src="/assets/media/hwg/c.svg">
  <div class="empty one-fourth"></div>
  <div class="empty one-fourth"></div>
  <img class="one-fourth" src="/assets/media/hwg/m.svg">
  <img class="one-fourth" src="/assets/media/hwg/k.svg">
  <div class="empty one-fourth"></div>
  <div class="empty one-fourth"></div>
  <div class="empty"></div>
  <img class="one-fourth" src="/assets/media/hwg/cmyk-svg.svg">
  <figcaption>
    <p>The four separate layers, and the combined SVG</p>
  </figcaption>
</figure>
