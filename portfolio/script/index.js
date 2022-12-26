const HTML_HTML = document.querySelector('html'),
    HTML_FLAG = document.querySelector("nav .buttons-left .translator-btn"),
    HTML_PROJECTS_BUTTON = document.querySelector('#projects-btn'),
    NL = Array.from(document.querySelectorAll('#NL')),
    EN = Array.from(document.querySelectorAll('#EN'));

let page = window.location.pathname;

function translateSite() {
    if (localStorage.getItem('siteLanguage') == 'english') {
        for (let i = 0; i < NL.length; i++) {
            NL[i].style.display = "block";
        }
        for (let i = 0; i < EN.length; i++) {
            EN[i].style.display = "none";
        }
        HTML_FLAG.innerHTML = "🇳🇱"
    } else {
        for (let i = 0; i < NL.length; i++) {
            NL[i].style.display = "none";
        }
        for (let i = 0; i < EN.length; i++) {
            EN[i].style.display = "block";
        }
        HTML_FLAG.innerHTML = "🇬🇧"
    }
}

function swapLocalStorage() {
    if (localStorage.getItem('siteLanguage') == 'english') {
        localStorage.setItem('siteLanguage', 'dutch')
    } else {
        localStorage.setItem('siteLanguage', 'english')
    }
}

/* ENTER TO SUBMIT FORM */
if (page == "/projects/") {
    document.getElementById("text-input-choice").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            run()
        }
    });
}

/* TRANSLATE BUTTON FIX */
document.querySelector(".translator-btn").addEventListener("click", function (event) {
    swapLocalStorage()
    translateSite()
});

translateSite()