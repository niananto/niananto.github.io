---
layout: page
title: Contact Me
permalink: /contact-me
fa-icon: "far fa-address-card"
---

<style>
    div#window-right {
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

*or send me a mail directly :*  
<span id="copy-target">nazmulislamananto@gmail.com</span> 
<a href="javascript:void(0);" style="color:unset"><i id="copy-button" class="far fa-copy"></i></a>

<!-- <input type="text" id="copyTarget" value="Text to Copy">  -->
<!-- <button id="copy-button">Copy</button><br><br> -->
<!-- <input type="text" placeholder="Click here and press Ctrl-V to see clipboard contents"> -->

<script>

    document.getElementById("copy-button").addEventListener("click", function() {
        copyToClipboard(document.getElementById("copy-target"));
    });
    
    function copyToClipboard(elem) {
            // create hidden text element, if it doesn't already exist
        var targetId = "_hiddenCopyText_";
        var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
        var origSelectionStart, origSelectionEnd;
        if (isInput) {
            // can just use the original source element for the selection and copy
            target = elem;
            origSelectionStart = elem.selectionStart;
            origSelectionEnd = elem.selectionEnd;
        } else {
            // must use a temporary form element for the selection and copy
            target = document.getElementById(targetId);
            if (!target) {
                var target = document.createElement("textarea");
                target.style.position = "absolute";
                target.style.left = "-9999px";
                target.style.top = "0";
                target.id = targetId;
                document.body.appendChild(target);
            }
            target.textContent = elem.textContent;
        }
        // select the content
        var currentFocus = document.activeElement;
        target.focus();
        target.setSelectionRange(0, target.value.length);
        
        // copy the selection
        var succeed;
        try {
                succeed = document.execCommand("copy");
        } catch(e) {
            succeed = false;
        }
        // restore original focus
        if (currentFocus && typeof currentFocus.focus === "function") {
            currentFocus.focus();
        }
        
        if (isInput) {
            // restore prior selection
            elem.setSelectionRange(origSelectionStart, origSelectionEnd);
        } else {
            // clear temporary content
            target.textContent = "";
        }
        return succeed;
    }
    
</script>