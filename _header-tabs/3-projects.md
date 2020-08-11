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


<link rel="stylesheet" href="{{site.baseurl}}{%- link assets/css/projects.css -%}">

<div class="project-flex-container">  
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
        <hr>
        <em id="github-link"><a href="#"></a></em>
    </div>
</div>

<div class="github-chart-container">
    <h1>My Github Contribution Chart</h1>
    <a href="https://github.com/nazmulislamananto">
        <div id="github-chart">
            <img src="http://ghchart.rshah.org/niananto" alt="Ananto's Github chart" />
        </div>
    </a>    
</div>

<script src="{{site.baseurl}}{%- link assets/js/projects.js -%}"></script>
<!-- <script src="{{site.baseurl}}{%- link assets/js/mmd.js -%}"></script> -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.1/showdown.min.js" integrity="sha512-L03kznCrNOfVxOUovR6ESfCz9Gfny7gihUX/huVbQB9zjODtYpxaVtIaAkpetoiyV2eqWbvxMH9fiSv5enX7bw==" crossorigin="anonymous"></script>

<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.1/showdown.js" integrity="sha512-bvV1V1YSjP1fbfKJjTlNmdnUO2XpsLYUdKwmz5UXBi5U+x40rx9JpA0ooQUMZfpz1MaaBC0ydNLoC6r0sitPUQ==" crossorigin="anonymous"></script> -->

<script>
    // const converter = new showdown.Converter();
    // console.log( converter.makeHtml('Markdown is **sweet**') );
</script>
