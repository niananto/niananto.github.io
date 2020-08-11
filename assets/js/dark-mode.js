
// const theme = localStorage.getItem('theme');
// if (theme === "dark") {
//     document.documentElement.setAttribute('data-theme', 'dark');
// }

// const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');	

// if (theme === "dark") {
//     document.getElementById("theme-toggle").innerHTML = "Light Mode";
// } else if (theme === "light") {
//     document.getElementById("theme-toggle").innerHTML = "Dark Mode";
// } else if  (userPrefers === "dark") {
//     document.documentElement.setAttribute('data-theme', 'dark');
//     window.localStorage.setItem('theme', 'dark');
//     document.getElementById("theme-toggle").innerHTML = "Light Mode";
// } else {
//     document.documentElement.setAttribute('data-theme', 'light');
//     window.localStorage.setItem('theme', 'light');
//     document.getElementById("theme-toggle").innerHTML = "Dark Mode";
// }

function darkMode() {

    // document.documentElement.setAttribute('data-theme', 'dark');
    // const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');	
    // console.log(userPrefers);

    if(window.innerWidth < 1000){
        
        ;

    } else {

        let currentMode = document.documentElement.getAttribute('data-theme');
        if (currentMode === "dark") {
            document.documentElement.setAttribute('data-theme', 'light');
            window.localStorage.setItem('theme', 'light');
            // document.getElementById("theme-toggle").innerHTML = "Dark Mode";
            document.querySelector("a.dark-mode-icon i").setAttribute("class", "fas fa-toggle-off");
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            window.localStorage.setItem('theme', 'dark');
            // document.getElementById("theme-toggle").innerHTML = "Light Mode";
            document.querySelector("a.dark-mode-icon i").setAttribute("class", "fas fa-toggle-on");
        }

//         let divWindow = document.querySelector(".window");
//         let divWindowLeft = document.querySelector("div#window-left");
//         let divWindowRight = document.querySelector("div#window-right");
//         // let divWindowRights = document.querySelectorAll("div#window-right *");
//         let divWindowRightLinks = document.querySelectorAll("div#window-right a:link, div#window-right a:visited");
//         let darkModeIcon = document.querySelector("a.dark-mode-icon i");
//         let contactWrapper = document.querySelector("#window-right > main > div > article > div > div.wrapper");
//         let contactUs = document.querySelector("div.contact-us");
//         let contactUsInput = document.querySelectorAll("div.contact-us input");
//         let project = document.getElementsByClassName("project");
//         let readmeContainer = document.querySelector('#readme-container');
//         let githubChart = document.querySelector("#github-chart");

//         if ( divWindowLeft.style.borderRightStyle == "unset" ) {

//             divWindow.style.background = "#121212";

//             divWindowLeft.style.borderRightStyle = "outset";
//             divWindowLeft.style.borderRightColor = "silver";

//             // important na dileo hocche right now
//             divWindowRight.style.setProperty("background", "#121212", "important");
//             divWindowRight.style.setProperty("color", "white", "important");

//             // for ( let i=0; i<divWindowRights.length; i++ ){
//             //     divWindowRights[i].style.setProperty("background", "#121212", "important");
//             //     divWindowRights[i].style.setProperty("color", "white", "important");
//             // }
        
//             for ( let i=0; i < divWindowRightLinks.length; i++ ){
//                 divWindowRightLinks[i].style.color = "#d3fcff";
//             }

//             darkModeIcon.setAttribute("class", "fas fa-toggle-on");

//             if(contactWrapper){
//                 contactWrapper.style.setProperty('background', 'url("assets/img/contact-bg-4.jpg") center center no-repeat');
//                 contactUs.style.setProperty('background', '#ddd');
//             }

//             for ( let i=0; i < contactUsInput.length; i++ ){
//                 contactUsInput[i].style.setProperty("background", "#ddd");
//             }

//             for ( let i=0; i < project.length; i++ ){
//                 project[i].style.setProperty("background", "#ddd");
//             }

//             readmeContainer.style.setProperty('background', '#ccc');

//             githubChart.style.setProperty('background', '#ddd');

//         } else {

//             divWindow.style.background = "#f2faff";

//             divWindowLeft.style.borderRightStyle = "unset";
//             divWindowLeft.style.borderRightStyle = "unset";

//             divWindowRight.style.setProperty("background", "#f2faff");
//             divWindowRight.style.setProperty("color", "black");

//             // for ( let i=0; i<divWindowRights.length; i++ ){
//             //     divWindowRights[i].style.setProperty("background", "#f2faff");
//             //     divWindowRights[i].style.setProperty("color", "black");
//             // }

//             for ( let i=0; i < divWindowRightLinks.length; i++ ){
//                 divWindowRightLinks[i].style.color = "#006cb0";
//             }

//             darkModeIcon.setAttribute("class", "fas fa-toggle-off");

//             if(contactWrapper){
//                 contactWrapper.style.setProperty('background', 'url("assets/img/contact-bg-2.jpg") center center no-repeat');
//                 contactUs.style.setProperty('background', '#f2faff');
//             }

//             for( let i=0; i < contactUsInput.length; i++ ){
//                 contactUsInput[i].style.setProperty("background", "#f2faff");
//             }

//             for ( let i=0; i < project.length; i++ ){
//                 project[i].style.setProperty("background", "rgb(232,244,248)");
//             }

//             readmeContainer.style.setProperty('background', 'linear-gradient(to right, rgba(232,244,248,1), white)');

//             githubChart.style.setProperty('background', 'linear-gradient(to right, rgba(232,244,248,1), white)');

//         }

    }
}
