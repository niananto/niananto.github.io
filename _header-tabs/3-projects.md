---
layout: page
title: Projects
permalink: /projects
# fa-icon: "fas fa-project-diagram"
fa-icon: "fas fa-code"
---
<style>
    /* div#window-right {
    background: #ffe8e8;
} */
</style>
  
<!-- This is the list of my projects over the time :  
  
1. [Four In A Row]({{site.baseurl}}{%- link _projects/four-in-a-row.md -%})  

2. [Django Projects](https://github.com/niananto/django_projects)  

Follow me on [GitHub](https://github.com/niananto) -->


<style>
    div#window-right {
        /* background:#ffe8e8; */
        /* background: white; */
        background-image: linear-gradient(to right, rgba(238,255,255,01), #fff);
    }

    .project-list {
        width: 30%;
        float: left;
    }

    .project {
        /* background:#ffe8e8; */
        /* background: lightcyan; */
        /* background: rgb(218,237,244); */
        /* height: fit-content; */
        min-height: 50px;
        line-height: 50px;
        vertical-align: 20px;
        background: rgb(232,244,248);
        color: #000;
        padding: 10px 10px;
        margin: auto;
        margin-bottom: 20px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        font-size: 1.25em;
    }

    .project:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .project:active {
        background: white;
    }

    .project span {
        display: inline-block;
        vertical-align: middle;
        line-height: 25px;
    }

    #readme-container {
        width: 50%;
        /* float: right; */
        position: fixed;
        top: 3vh;
        left: 38%;
        height: calc(100vh - 11vh);
        display:none;
        overflow-y: auto;
        /* background:#ffe8e8; */
        /* background: #d3fcff; */
        /* background: #eee; */
        background-image: linear-gradient(to right, rgba(232,244,248,1), white);
        /* margin-top: 20px; */
        padding:20px 50px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }

    /* On mouse-over, add a deeper shadow */
    #readme-container:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

</style>

<div>  
    <div class="project-list">
        <!-- here would be the list of repos -->
    </div>
    <div id="readme-container">
        <hr style="display:none">
        <h1 id="repo-name" style="text-align:center"></h1>
        <hr style="display:none">
        <div id="readme">
            <!-- here is the test -->
        </div>
    </div>
</div>

<script src="{{site.baseurl}}{%- link assets/js/projects.js -%}"></script>
<script src="{{site.baseurl}}{%- link assets/js/mmd.js -%}"></script>
<!-- <script>console.log( mmd('Markdown is **sweet**') );</script> -->