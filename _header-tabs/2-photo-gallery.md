---
layout: gallery
title: Photo Gallery
permalink: /photo-gallery
---

<!-- ![photo]({{ "{% thumbnail /assets/img/photo-gallery/photo-1.jpg 50x50 " }}%})   -->
<!-- {{ "{% thumbnail https://niananto.github.io/home/assets/img/photo-gallery/photo-1.png 50x50 " }}%}   -->
<!-- [sex]({{ "{% thumbnail /assets/img/photo-gallery/photo-1.jpg 50x50 " }}%}) -->
<!-- {{ "{%- thumbnail /assets/img/photo-gallery/photo-1.jpg 50x50 " }}-%} -->


<br>
<div id="gallery">
<!-- adding class="justified-gallery" here would hide the photos until everything is loaded, which makes it too slow -->

{%- for myimage in site.static_files -%}
    {%- if myimage.path contains "assets/img/photo-gallery" -%}
        {%- if myimage.extname == ".jpg" or myimage.extname ==  ".JPG" or myimage.extname == ".jpeg" or myimage.extname == ".png" -%}
            <a href="{{site.url}}{{ myimage.path | relative_url }}">
                <!-- ![gallery-image]({{ myimage.path | relative_url }}){:height="200px"}&nbsp; -->
                <img src="{{site.url}}{{ myimage.path | relative_url }}" alt="gallery-image" height="200px" />
            </a>
        {%- endif -%}
    {%- endif -%}
{%- endfor -%}

</div>