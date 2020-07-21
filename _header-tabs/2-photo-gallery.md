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
<!-- {%- for i in (1..7) -%} -->
<!-- ![photo](https://niananto.github.io/home/assets/images/photo-gallery/photo-{{i}}.jpg){:height="200px"}&nbsp; -->
<!-- {%- endfor -%} -->

{%- for myimage in site.static_files -%}
{%- if myimage.path contains "assets/images/photo-gallery" -%}
{%- if myimage.extname == ".jpg" or myimage.extname ==  ".JPG" or myimage.extname == ".jpeg" or myimage.extname == ".png" -%}
<a href="{{site.url}}{{ myimage.path | relative_url }}">
<!-- ![gallery-image]({{ myimage.path | relative_url }}){:height="200px"}&nbsp; -->
<img src="{{site.url}}{{ myimage.path | relative_url }}" alt="gallery-image" height="200px" />
</a>
{%- endif -%}
{%- endif -%}
{%- endfor -%}
