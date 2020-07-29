function burgerMenu() {
    // console.log(window.innerWidth);
    // console.log(window.innerHeight);

    if(window.innerWidth < 1000){

        var x = document.getElementById("header-tabs");
        if (x.style.display === "inline") {
            x.style.display = "none";
        } else {
            x.style.display = "inline";
        }
        var y = document.getElementById("social-links");
        if (y.style.display === "inline") {
            y.style.display = "none";
        } else {
            y.style.display = "inline";
        }
    
    } else {
        
        var windowLeft = document.querySelector("div#window-left");
        if (windowLeft.style.width === "25%") {
            windowLeft.style.width = "1%";
            windowLeft.style.height = window.innerHeight + 'px';
        } else {
            windowLeft.style.width = "25%";
            windowLeft.style.height = "100%";
        }

        var headerTabTexts = document.querySelectorAll("span.header-tab-text");
        for (let i = 0; i < headerTabTexts.length; i++) {
            if (headerTabTexts[i].style.display === "inline") {
                headerTabTexts[i].style.display = "none";
            } else {
                headerTabTexts[i].style.display = "inline";
            }
        }

        var profilePic = document.querySelector("img.profile-pic");
        if (profilePic.style.display === "inline-block") {
            profilePic.style.display = "none";
        } else {
            profilePic.style.display = "inline-block";
        }

        var siteTitle = document.querySelector("span.site-title");
        if (siteTitle.style.display === "block") {
            siteTitle.style.display = "none";
        } else {
            siteTitle.style.display = "block";
        }

        var profileInfo = document.querySelector("div.profile-info");
        if (profileInfo.style.display === "block") {
            profileInfo.style.display = "none";
        } else {
            profileInfo.style.display = "block";
        }

        var headerTabs = document.getElementById("header-tabs");
        var headerTabsP = document.querySelectorAll("div#header-tabs p");
        if (headerTabs.style.top === "-35px") {
            headerTabs.style.top = "40px";
            for ( let i = 0; i<headerTabsP.length; i++) {
                headerTabsP[i].style.paddingLeft = "0px";
                headerTabsP[i].style.paddingTop = "10px";
                headerTabsP[i].style.paddingBottom = "10px";
                headerTabsP[i].style.textAlign = "center";
            }
        } else {
            headerTabs.style.top = "-35px";
            for ( let i = 0; i<headerTabsP.length; i++) {
                headerTabsP[i].style.paddingLeft = "20px";
                headerTabsP[i].style.paddingTop = "0px";
                headerTabsP[i].style.paddingBottom = "0px";
                headerTabsP[i].style.textAlign = "left";
            }
        }

    }
}
