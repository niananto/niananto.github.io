---
layout: custom-page
title: Photo Gallery
permalink: /photo-gallery
---

chobi dekhba?<br>
{%- for image in site.static_files -%}
{%- if image.path contains 'images/photo-gallery' -%}
![photo]({{site.url}}{{image.path}})
{%- endif -%}
{%- endfor -%}
