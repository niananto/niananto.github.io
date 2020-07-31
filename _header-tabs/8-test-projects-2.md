---
layout: page
title: Test Projects 2
permalink: /test-projects-2
---
<style>
    div#window-right {
        background: white;
    }

    #readme-container {
        /* Add shadows to create the "card" effect */
        display:none;
        background:#ffe8e8;
        padding:20px 50px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }

    /* On mouse-over, add a deeper shadow */
    #readme-container:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .project {
        /* Add shadows to create the "card" effect */
        background:#ffe8e8;
        padding: 5px 10px;
        margin: 10px 0px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }

    /* On mouse-over, add a deeper shadow */
    .project:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

</style>
  
This is the list of my projects over the time :  
  
<div class="project-list">
<!-- here would be the list of repos -->
</div>

<br>
<div id="readme-container">
    <hr style="display:none">
    <h1 id="repo-name" style="text-align:center"></h1>
    <hr style="display:none">
    <div id="readme">
        <!-- here is the test -->
    </div>
</div>

<script src="/assets/js/test-projects-2.js"></script>
<script src="/assets/js/mmd.js"></script>
<!-- <script>console.log( mmd('Markdown is **sweet**') );</script> -->