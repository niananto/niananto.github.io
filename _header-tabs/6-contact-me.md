---
layout: page
title: Contact Me
permalink: /contact-me
fa-icon: "far fa-address-card"
---

<style>
    #window-right {
    background: #fff6af;
}
</style>

<link href="{{site.baseurl}}{%- link assets/css/contact-me.css -%}" rel="stylesheet">
<div class="wrapper">
    <div class="contact-us">
        <form   action="https://formspree.io/xpzyklgv" method="POST">
        <input name="name" placeholder="Name" required="" type="text" />
        <input name="_replyto" placeholder="Email" type="email" />
        <input name="message" placeholder="Message" type="text" />
        <button type="submit">Send</button>
        </form>
    </div>
</div>