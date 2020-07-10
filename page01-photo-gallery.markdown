---
layout: custom-page
title: Photo Gallery
permalink: /photo-gallery
---

{% for image in site.static_files %}
    {% if image.path contains 'images/photo-gallery' and image.extname == '.jpg' %}
<img src="{{ site.url }}{{ image.path | relative_url }}" alt="image" height="300px" />
    {% endif %}
{% endfor %}
