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
        // var y = document.getElementById("social-links");
        // if (y.style.display === "inline") {
        //     y.style.display = "none";
        // } else {
        //     y.style.display = "inline";
        // }
    
    } else {

        var burgerMenuIcon = document.querySelector("div.header-content a.burger-icon");
        if ( burgerMenuIcon.style.left === "6%") {
            burgerMenuIcon.style.left = "50%";
        } else {
            burgerMenuIcon.style.left = "6%";
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

        var siteTitle = document.querySelector("h1.site-title");
        if (siteTitle.style.display === "block") {
            siteTitle.style.display = "none";
        } else {
            siteTitle.style.display = "block";
        }

        var profileInfo = document.querySelector("div.profile-info");
        if (profileInfo.style.display === "inline") {
            profileInfo.style.display = "none";
        } else {
            profileInfo.style.display = "inline";
        }

        var headerTabs = document.getElementById("header-tabs");
        var headerTabsP = document.querySelectorAll("div#header-tabs p");
        if (headerTabs.style.marginTop === "18%") {
            headerTabs.style.marginTop = "25vh";
            for ( let i = 0; i<headerTabsP.length; i++) {
                headerTabsP[i].style.paddingLeft = "0px";
                headerTabsP[i].style.paddingTop = "2vh";
                headerTabsP[i].style.paddingBottom = "0vh";
                headerTabsP[i].style.textAlign = "center";
            }
        } else {
            headerTabs.style.marginTop = "18%";
            for ( let i = 0; i<headerTabsP.length; i++) {
                headerTabsP[i].style.paddingLeft = "10px";
                headerTabsP[i].style.paddingTop = "0px";
                headerTabsP[i].style.paddingBottom = "0px";
                headerTabsP[i].style.textAlign = "left";
            }
        }
                
        var windowLeft = document.querySelector("div#window-left");
        var windowRight = document.querySelector("div#window-right");
        if (windowLeft.style.width === "330px") {
            windowLeft.style.width = "56px";
            // windowLeft.style.height = window.innerHeight + 'px';
            // windowRight.style.width = "calc(100vw - 56px)";
            windowRight.style.left = "56px";
        } else {
            windowLeft.style.width = "330px";
            // windowLeft.style.height = window.innerHeight + 'px';
            // windowRight.style.width = "calc(100vw - 330px)";
            windowRight.style.left = "330px";
        }

        // var windowRight = document.querySelector("div#window-right");
        // if ( windowRight.style.width === "95%") {
        //     windowRight.style.width = "75%";
        // } else {
        //     windowRight.style.width = "95%";
        // }
    }
}
