---
layout: page
title: Photo Gallery
permalink: /photo-gallery
fa-icon: "fas fa-images"
---
<style>
    /* div#window-right {
    background: #fff;
} */
</style>

<!-- ![photo]({{ "{% thumbnail /assets/img/photo-gallery/photo-1.jpg 50x50 " }}%})   -->
<!-- {{ "{% thumbnail https://niananto.github.io/home/assets/img/photo-gallery/photo-1.png 50x50 " }}%}   -->
<!-- [sex]({{ "{% thumbnail /assets/img/photo-gallery/photo-1.jpg 50x50 " }}%}) -->
<!-- {{ "{%- thumbnail /assets/img/photo-gallery/photo-1.jpg 50x50 " }}-%} -->

<!-- ![gallery-image]({{ myimage.path | relative_url }}){:height="200px"}&nbsp; -->

<br>
<div id="gallery" class="justified-gallery">
<!-- adding class="justified-gallery" here would hide the photos until everything is loaded, which makes it slow unless you uses thumbnails -->

{%- for myimage in site.static_files -%}
{%- if myimage.path contains "assets/img/photo-gallery/" -%}
{%- if myimage.path contains "thumb" or myimage.path contains "backup" -%}
{%- continue -%}
{%- endif -%}

{%- if myimage.extname == ".jpg" or myimage.extname ==  ".JPG" or myimage.extname == ".jpeg" or myimage.extname == ".png" -%}

<a href="{{site.url}}{{ myimage.path | relative_url }}">
<img src="{{site.url}}{{ myimage.path | remove: myimage.name | append: "thumb/" | append: myimage.name | relative_url }}" alt="{{myimage.basename}}" height="150px" />
</a>

{%- endif -%}
{%- endif -%}
{%- endfor -%}

</div>
<br>

{%- include justifiedgallery.html -%}
<!-- {%- include lightbox.html -%} -->
{%- include lightgallery.html -%}