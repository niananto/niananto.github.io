---
layout: custom-page
title: Photo Gallery
permalink: /photo-gallery
---

![photo](assets/images/photo-gallery/photo-gallery-01.jpg){% for image in site.static_files %}
    {% if image.path contains 'images/photo-gallery' and image.extname == '.jpg' %}
![photo]({{image.path}})
    {% endif %}
{% endfor %}
