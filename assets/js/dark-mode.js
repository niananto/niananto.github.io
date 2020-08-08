function darkMode() {

    if(window.innerWidth < 1000){
        
        ;

    } else {

        var divWindow = document.querySelector(".window");
        var divWindowLeft = document.querySelector("div#window-left");
        var divWindowRight = document.querySelector("div#window-right");
        var divWindowRightLinks = document.querySelectorAll("div#window-right a:link, div#window-right a:visited");
        var darkModeIcon = document.querySelector("a.dark-mode-icon i");
        var contactWrapper = document.querySelector("div.wrapper");

        if ( divWindowLeft.style.borderRightStyle == "unset" ) {

            divWindow.style.background = "#121212";

            divWindowLeft.style.borderRightStyle = "outset";
            divWindowLeft.style.borderRightColor = "silver";

            // important na dileo hocche right now
            divWindowRight.style.setProperty("background", "#121212", "important");
            divWindowRight.style.setProperty("color", "white", "important");
        
            for ( let i=0; i < divWindowRightLinks.length; i++ ){
                divWindowRightLinks[i].style.color = "#d3fcff";
            }

            darkModeIcon.setAttribute("class", "fas fa-toggle-on");

            contactWrapper.style.setProperty('background', 'url("/assets/img/contact-bg-4.jpg") center center no-repeat');

        } else {

            divWindow.style.background = "#f2faff";

            divWindowLeft.style.borderRightStyle = "unset";
            divWindowLeft.style.borderRightStyle = "unset";

            divWindowRight.style.setProperty("background", "#f2faff");
            divWindowRight.style.setProperty("color", "black");

            for ( let i=0; i < divWindowRightLinks.length; i++ ){
                divWindowRightLinks[i].style.color = "#006cb0";
            }

            darkModeIcon.setAttribute("class", "fas fa-toggle-off");

            contactWrapper.style.setProperty('background', 'url("/assets/img/contact-bg-2.jpg") center center no-repeat');

        }

    }
}
