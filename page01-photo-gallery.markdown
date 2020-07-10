---
layout: custom-page
title: Photo Gallery
permalink: /photo-gallery
---

chobi dekhba?<br>
{%- for image in site.static_files -%}
{%- if image.path contains 'images/photo-gallery' -%}
![photo]({{site.baseurl}}{{image.path | relative_url}})
{%- endif -%}
{%- endfor -%}
