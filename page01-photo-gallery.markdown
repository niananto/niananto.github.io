---
layout: custom-page
title: Photo Gallery
permalink: /photo-gallery
---

{% for image in site.static_files %}
    {% if image.path contains 'images/photo-gallery' and image.extname == '.jpg' %}
<img src="{{ image.path }}" alt="image" height="300px" />
<p>{{ image.path }}</p>
    {% endif %}
{% endfor %}
