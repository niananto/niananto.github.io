---
layout: custom-page
title: Photo Gallery
permalink: /photo-gallery
---

<!-- ![photo]({{ "{% thumbnail /assets/images/photo-gallery/photo-1.jpg 50x50 " }}%})   -->
<!-- {{ "{% thumbnail https://niananto.github.io/home/assets/images/photo-gallery/photo-1.png 50x50 " }}%}   -->
<!-- [sex]({{ "{% thumbnail /assets/images/photo-gallery/photo-1.jpg 50x50 " }}%}) -->
<!-- {{ "{%- thumbnail /assets/images/photo-gallery/photo-1.jpg 50x50 " }}-%} -->


<br>
{%- for i in (1..7) -%}
![photo](https://niananto.github.io/home/assets/images/photo-gallery/photo-{{i}}.jpg){:height="200px"}&nbsp;
{%- endfor -%}
