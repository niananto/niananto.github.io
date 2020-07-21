---
layout: custom-page
title: Photo Gallery 2
permalink: /photo-gallery-2
---

<!-- ![photo]({{ "{% thumbnail /assets/images/photo-gallery/photo-1.jpg 50x50 " }}%})   -->
<!-- {{ "{% thumbnail https://niananto.github.io/home/assets/images/photo-gallery/photo-1.png 50x50 " }}%}   -->
<!-- [sex]({{ "{% thumbnail /assets/images/photo-gallery/photo-1.jpg 50x50 " }}%}) -->
<!-- {{ "{%- thumbnail /assets/images/photo-gallery/photo-1.jpg 50x50 " }}-%} -->

<br>
{%- assign image_files = site.static_files -%}
{%- for myimage in image_files -%}
{% if myimage.path contains "assets/images/photo-gallery" %}
{{myimage.path}}  
{{myimage.path | relative_url }}  
{{site.baseurl}}{{myimage.path | relative_url }}  
{{site.url}}{{myimage.path | relative_url }}  
![photo]({{ myimage.path | relative_url }})  <br>
<img src="{{site.url}}{{ myimage.path | relative_url }}" />
{% endif %}
{%- endfor -%}