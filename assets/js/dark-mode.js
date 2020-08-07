function darkMode() {

    if(window.innerWidth < 1000){
        
        ;

    } else {

        var divWindowLeft = document.querySelector("div#window-left");
        var divWindowRight = document.querySelector("div#window-right");
        var divWindowRightLinks = document.querySelectorAll("div#window-right a:link, div#window-right a:visited");
        var darkModeIcon = document.querySelector("a.dark-mode-icon i");

        if ( divWindowLeft.style.borderRightStyle === "unset" ) {
            divWindowLeft.style.borderRightStyle = "outset";
            divWindowLeft.style.borderRightColor = "silver";

            divWindowRight.style.background = "black";
            divWindowRight.style.color = "white";
            // divWindowRight.style.transition = "1s";
        
            for ( let i=0; i < divWindowRightLinks.length; i++ ){
                divWindowRightLinks[i].style.color = "#d3fcff";
            }

            darkModeIcon.setAttribute("class", "fas fa-toggle-on");

        } else {
            divWindowLeft.style.borderRightStyle = "unset";
            divWindowLeft.style.borderRightStyle = "unset";

            divWindowRight.style.background = "#f2faff";
            divWindowRight.style.color = "black";
            // divWindowRight.style.transition = "1s";

            for ( let i=0; i < divWindowRightLinks.length; i++ ){
                divWindowRightLinks[i].style.color = "#006cb0";
            }

            darkModeIcon.setAttribute("class", "fas fa-toggle-off");

        }

    }
}
