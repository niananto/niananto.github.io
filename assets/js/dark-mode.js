function darkMode() {

    if(window.innerWidth < 1000){
        
        ;

    } else {

        var divWindow = document.querySelector(".window");
        var divWindowLeft = document.querySelector("div#window-left");
        var divWindowRight = document.querySelector("div#window-right");
        // var divWindowRights = document.querySelectorAll("div#window-right *");
        var divWindowRightLinks = document.querySelectorAll("div#window-right a:link, div#window-right a:visited");
        var darkModeIcon = document.querySelector("a.dark-mode-icon i");
        var contactWrapper = document.querySelector("#window-right > main > div > article > div > div.wrapper");
        var contactUs = document.querySelector("div.contact-us");
        var contactUsInput = document.querySelectorAll("div.contact-us input");
        var project = document.getElementsByClassName("project");
        var readmeContainer = document.querySelector('#readme-container');
        var githubChart = document.querySelector("#github-chart");

        if ( divWindowLeft.style.borderRightStyle == "unset" ) {

            divWindow.style.background = "#121212";

            divWindowLeft.style.borderRightStyle = "outset";
            divWindowLeft.style.borderRightColor = "silver";

            // important na dileo hocche right now
            divWindowRight.style.setProperty("background", "#121212", "important");
            divWindowRight.style.setProperty("color", "white", "important");

            // for ( let i=0; i<divWindowRights.length; i++ ){
            //     divWindowRights[i].style.setProperty("background", "#121212", "important");
            //     divWindowRights[i].style.setProperty("color", "white", "important");
            // }
        
            for ( let i=0; i < divWindowRightLinks.length; i++ ){
                divWindowRightLinks[i].style.color = "#d3fcff";
            }

            darkModeIcon.setAttribute("class", "fas fa-toggle-on");

            if(contactWrapper){
                contactWrapper.style.setProperty('background', 'url("../assets/img/contact-bg-4.jpg") center center no-repeat');
                contactUs.style.setProperty('background', '#ddd');
            }

            for ( let i=0; i < contactUsInput.length; i++ ){
                contactUsInput[i].style.setProperty("background", "#ddd");
            }

            for ( let i=0; i < project.length; i++ ){
                project[i].style.setProperty("background", "#ddd");
            }

            readmeContainer.style.setProperty('background', '#ccc');

            githubChart.style.setProperty('background', '#ddd');

        } else {

            divWindow.style.background = "#f2faff";

            divWindowLeft.style.borderRightStyle = "unset";
            divWindowLeft.style.borderRightStyle = "unset";

            divWindowRight.style.setProperty("background", "#f2faff");
            divWindowRight.style.setProperty("color", "black");

            // for ( let i=0; i<divWindowRights.length; i++ ){
            //     divWindowRights[i].style.setProperty("background", "#f2faff");
            //     divWindowRights[i].style.setProperty("color", "black");
            // }

            for ( let i=0; i < divWindowRightLinks.length; i++ ){
                divWindowRightLinks[i].style.color = "#006cb0";
            }

            darkModeIcon.setAttribute("class", "fas fa-toggle-off");

            if(contactWrapper){
                contactWrapper.style.setProperty('background', 'url("../assets/img/contact-bg-2.jpg") center center no-repeat');
                contactUs.style.setProperty('background', '#f2faff');
            }

            for( let i=0; i < contactUsInput.length; i++ ){
                contactUsInput[i].style.setProperty("background", "#f2faff");
            }

            for ( let i=0; i < project.length; i++ ){
                project[i].style.setProperty("background", "rgb(232,244,248)");
            }

            readmeContainer.style.setProperty('background', 'linear-gradient(to right, rgba(232,244,248,1), white)');

            githubChart.style.setProperty('background', 'linear-gradient(to right, rgba(232,244,248,1), white)');

        }

    }
}
