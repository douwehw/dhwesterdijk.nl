const HTML_HTML = document.querySelector('html');
const HTML_FLAG = document.querySelector("nav .buttons-left .translator-btn")
const HTML_PROJECTS_BUTTON = document.querySelector('#projects-btn')

//NL text areas
const HTML_GREETING_NL = document.querySelector('#greeting_NL')
const HTML_SHORT_INTRO_NL = document.querySelector('#short-intro_NL')
const HTML_WHY_SOFTWARE_TITLE_NL = document.querySelector('#why-software-title_NL')
const HTML_WHY_SOFTWARE_TEXT_NL = document.querySelector('#why-software-text_NL')
const HTML_EXPERIENCE_TITLE_NL = document.querySelector('#experience-title_NL')
const HTML_EXPERIENCE_TEXT_NL = document.querySelector('#experience-text_NL')
const HTML_WHAT_I_DO_TITLE_NL = document.querySelector('#what-i-do-title_NL')
const HTML_WHAT_I_DO_TEXT_NL = document.querySelector('#what-i-do-text_NL')
const HTML_HOBBIES_TEXT_NL = document.querySelector('#hobbies-text_NL')
/*PROJECTS.HTML*/
const HTML_WHAT_AM_I_WORKING_ON_TITLE_NL = document.querySelector('#what-i-work-on-title_NL')
const HTML_WHAT_AM_I_WORKING_ON_TEXT_NL = document.querySelector('#what-i-work-on-text_NL')
const HTML_RPS_TEXT_NL = document.querySelector('#rps-text_NL')
const HTML_OTHER_LINKS_TITLE_NL = document.querySelector('#other-links-title_NL')
const HTML_OTHER_LINKS_TEXT_NL = document.querySelector('#other-links-text_NL')
const HTML_PYTHON_TEXT_NL = document.querySelector('#python-text_NL')
const HTML_CSHARP_TEXT_NL = document.querySelector('#cs-text_NL')
const HTML_LUA_TEXT_NL = document.querySelector('#lua-text_NL')

//EN text areas
const HTML_GREETING_EN = document.querySelector('#greeting_EN')
const HTML_SHORT_INTRO_EN = document.querySelector('#short-intro_EN')
const HTML_WHY_SOFTWARE_TITLE_EN = document.querySelector('#why-software-title_EN')
const HTML_WHY_SOFTWARE_TEXT_EN = document.querySelector('#why-software-text_EN')
const HTML_EXPERIENCE_TITLE_EN = document.querySelector('#experience-title_EN')
const HTML_EXPERIENCE_TEXT_EN = document.querySelector('#experience-text_EN')
const HTML_WHAT_I_DO_TITLE_EN = document.querySelector('#what-i-do-title_EN')
const HTML_WHAT_I_DO_TEXT_EN = document.querySelector('#what-i-do-text_EN')
const HTML_HOBBIES_TEXT_EN = document.querySelector('#hobbies-text_EN')
/*PROJECTS.HTML*/
const HTML_WHAT_AM_I_WORKING_ON_TITLE_EN = document.querySelector('#what-i-work-on-title_EN')
const HTML_WHAT_AM_I_WORKING_ON_TEXT_EN = document.querySelector('#what-i-work-on-text_EN')
const HTML_RPS_TEXT_EN = document.querySelector('#rps-text_EN')
const HTML_OTHER_LINKS_TITLE_EN = document.querySelector('#other-links-title_EN')
const HTML_OTHER_LINKS_TEXT_EN = document.querySelector('#other-links-text_EN')
const HTML_PYTHON_TEXT_EN = document.querySelector('#python-text_EN')
const HTML_CSHARP_TEXT_EN = document.querySelector('#cs-text_EN')
const HTML_LUA_TEXT_EN = document.querySelector('#lua-text_EN')

var page = window.location.pathname.split("/").pop();
let isDutch = true;

function changeFlag() {
    if (isDutch) {
        HTML_FLAG.innerHTML = "🇬🇧"
    } else {
        HTML_FLAG.innerHTML = "🇳🇱"
    }
}

function swapTexts() {          //this is a big one
    if (isDutch) {
        if (page == "index.html" || page == "") {
            HTML_GREETING_NL.style.display = "none";
            HTML_GREETING_EN.style.display = "block";

            HTML_SHORT_INTRO_NL.style.display = "none";
            HTML_SHORT_INTRO_EN.style.display = "block";

            HTML_WHY_SOFTWARE_TITLE_NL.style.display = "none";
            HTML_WHY_SOFTWARE_TITLE_EN.style.display = "block";

            HTML_WHY_SOFTWARE_TEXT_NL.style.display = "none";
            HTML_WHY_SOFTWARE_TEXT_EN.style.display = "block";

            HTML_EXPERIENCE_TITLE_NL.style.display = "none";
            HTML_EXPERIENCE_TITLE_EN.style.display = "block";

            HTML_EXPERIENCE_TEXT_NL.style.display = "none";
            HTML_EXPERIENCE_TEXT_EN.style.display = "block";

            HTML_WHAT_I_DO_TITLE_NL.style.display = "none";
            HTML_WHAT_I_DO_TITLE_EN.style.display = "block";

            HTML_WHAT_I_DO_TEXT_NL.style.display = "none";
            HTML_WHAT_I_DO_TEXT_EN.style.display = "block";

            HTML_HOBBIES_TEXT_NL.style.display = "none";
            HTML_HOBBIES_TEXT_EN.style.display = "block";
        }

        if (page == "projects.html") {
            HTML_WHAT_AM_I_WORKING_ON_TITLE_NL.style.display = "none";
            HTML_WHAT_AM_I_WORKING_ON_TITLE_EN.style.display = "block";

            HTML_WHAT_AM_I_WORKING_ON_TEXT_NL.style.display = "none";
            HTML_WHAT_AM_I_WORKING_ON_TEXT_EN.style.display = "block";

            HTML_RPS_TEXT_NL.style.display = "none";
            HTML_RPS_TEXT_EN.style.display = "block";

            HTML_OTHER_LINKS_TITLE_NL.style.display = "none";
            HTML_OTHER_LINKS_TITLE_EN.style.display = "block";

            HTML_OTHER_LINKS_TEXT_NL.style.display = "none";
            HTML_OTHER_LINKS_TEXT_EN.style.display = "block";

            HTML_PYTHON_TEXT_NL.style.display = "none";
            HTML_PYTHON_TEXT_EN.style.display = "block";

            HTML_CSHARP_TEXT_NL.style.display = "none";
            HTML_CSHARP_TEXT_EN.style.display = "block";

            HTML_LUA_TEXT_NL.style.display = "none";
            HTML_LUA_TEXT_EN.style.display = "block";
        }
    } else {
        if (page == "index.html" || page == "") {
            HTML_GREETING_NL.style.display = "block";
            HTML_GREETING_EN.style.display = "none";

            HTML_SHORT_INTRO_NL.style.display = "block";
            HTML_SHORT_INTRO_EN.style.display = "none";

            HTML_WHY_SOFTWARE_TITLE_NL.style.display = "block";
            HTML_WHY_SOFTWARE_TITLE_EN.style.display = "none";

            HTML_WHY_SOFTWARE_TEXT_NL.style.display = "block";
            HTML_WHY_SOFTWARE_TEXT_EN.style.display = "none";

            HTML_EXPERIENCE_TITLE_NL.style.display = "block";
            HTML_EXPERIENCE_TITLE_EN.style.display = "none";

            HTML_EXPERIENCE_TEXT_NL.style.display = "block";
            HTML_EXPERIENCE_TEXT_EN.style.display = "none";

            HTML_WHAT_I_DO_TITLE_NL.style.display = "block";
            HTML_WHAT_I_DO_TITLE_EN.style.display = "none";

            HTML_WHAT_I_DO_TEXT_NL.style.display = "block";
            HTML_WHAT_I_DO_TEXT_EN.style.display = "none";

            HTML_HOBBIES_TEXT_NL.style.display = "block";
            HTML_HOBBIES_TEXT_EN.style.display = "none";
        }

        if (page == "projects.html") {
            HTML_WHAT_AM_I_WORKING_ON_TITLE_NL.style.display = "block";
            HTML_WHAT_AM_I_WORKING_ON_TITLE_EN.style.display = "none";

            HTML_WHAT_AM_I_WORKING_ON_TEXT_NL.style.display = "block";
            HTML_WHAT_AM_I_WORKING_ON_TEXT_EN.style.display = "none";

            HTML_RPS_TEXT_NL.style.display = "block";
            HTML_RPS_TEXT_EN.style.display = "none";

            HTML_OTHER_LINKS_TITLE_NL.style.display = "block";
            HTML_OTHER_LINKS_TITLE_EN.style.display = "none";

            HTML_OTHER_LINKS_TEXT_NL.style.display = "block";
            HTML_OTHER_LINKS_TEXT_EN.style.display = "none";

            HTML_PYTHON_TEXT_NL.style.display = "block";
            HTML_PYTHON_TEXT_EN.style.display = "none";

            HTML_CSHARP_TEXT_NL.style.display = "block";
            HTML_CSHARP_TEXT_EN.style.display = "none";

            HTML_LUA_TEXT_NL.style.display = "block";
            HTML_LUA_TEXT_EN.style.display = "none";
        }
    }
}

function translate() {
    changeFlag()
    swapTexts()

    isDutch = !isDutch
}