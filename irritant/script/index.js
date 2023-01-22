clear() // Function die LocalStorage cleared voor de cookies popup. Comment dit uit om de cookies te laten zien.
cookieCheck()

// Function die de website op een random moment kan laten 'crashen' door een console.log loop te maken
function crashlmao() {
    while (true) {
        console.log(Math.floor(Math.random() * 1000))
    }
}
setTimeout(crashlmao, Math.floor(Math.random() * 300000) + 1);

const bgBlur = document.querySelector(".background-blur"),
    cookiePopup = document.querySelector(".cookies-popup"),
    cookieH3 = document.querySelector(".cookies-popup h3"),
    cookieP = document.querySelector(".cookies-popup p"),
    popupScreen = document.querySelector(".popup"),
    vid = document.querySelector(".popup video"),
    adText = document.querySelector(".popup h1"),
    troll = "⣿⣿⣿⣿⣿⠟⣩⣴⣶⡶⣶⣲⡶⠶⣶⠶⣶⣶⣖⣀⣉⣭⣉⣛⠻⢿⣿⣿⣿⣿ ⣿⣿⣿⡿⢃⣾⣿⣻⣟⢮⣿⣮⣽⣿⣿⣻⣿⣿⣶⡲⣾⣿⣿⡳⣿⣶⡌⢿⣿⣿ ⣿⣿⠟⢡⣾⣿⣿⢿⡷⠋⠉⠉⠩⣭⣙⠻⣿⣿⣿⡿⠟⠛⠛⠻⡿⣿⣿⣘⢿⣿ ⡟⣡⣵⠟⣩⡭⣍⡛⠿⠶⠛⣩⣷⣶⣬⣴⣿⣿⣦⠠⣶⣶⣾⣿⠿⠛⠿⡪⣧⢸ ⡇⣿⣿⢘⣛⠁⣬⣙⠛⠿⣿⣛⣻⡝⢩⠽⠿⣿⣿⣶⠍⠻⢷⣶⣾⠹⣿⣣⡟⢸ ⣷⣌⠮⢾⣿⣷⡈⣙⠓⠰⣶⣦⣍⢉⣚⠻⠿⠿⠭⠡⠾⠿⠟⣊⢡⠁⢱⡿⢰⣿ ⣿⣿⣷⡙⢿⣿⣷⣌⠓⣰⣤⣌⡉⡘⠛⠛⠓⠘⠛⠂⠚⠛⠂⠛⠈⠄⢸⡇⣿⣿ ⣿⣿⣿⣷⣌⠻⡿⣿⣿⣦⣙⠛⢡⣿⣿⣷⠄⣦⣤⠄⣤⠄⡤⢠⡀⢢⣿⡇⣿⣿ ⣿⣿⣿⣿⣿⣷⣬⣑⠻⢷⣯⢟⣲⠶⣬⣭⣤⡭⠭⠬⢭⣬⣥⣴⢶⣿⣿⣧⢸⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣍⡓⠿⢿⣤⣿⣿⣟⣛⣿⣿⣿⣷⣛⣿⣾⡿⣸⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣬⣭⣙⣛⡛⠿⠿⠿⠿⠿⢟⣋⣴⣿⣿";


let cookies = "not set",
    randInt = 0,
    placeholder = 12034,
    src = vid.getAttribute('src'),
    audio1 = new Audio("aud/Elevator.mp3"),
    audio2 = new Audio("aud/Elvator.mp3"),
    audio3 = new Audio("aud/What.mp3"),
    audio4 = new Audio("aud/DANGER.mp3"),
    audio5 = new Audio("aud/ive killed god may the remnants help me.mp3");
cookieRejected = false;


popupScreen.style.display = "none" // Dit zorgt ervoor dat de ad pop-up als default niet zichtbaar is

document.querySelector(".download-btn").onclick = function () {
    popUpAd()
}

function clear() {
    localStorage.clear()
}

/* <-- COOKIES --> */
function cookieAccept() {
    cookies = "working"
    localStorage.setItem('value', cookies)
    cookieCheck()
    audio1.play()
    audio2.play()
    audio3.play()
    audio1.loop = true;
    audio2.loop = true;
    audio3.loop = true;
    audio4.pause();
    audio5.pause();
    setTimeout(popUpAd, Math.floor(Math.random() * 10000) + 1);
}

function cookieReject() {
    cookies = "not working"
    localStorage.setItem('value', cookies)
    cookieCheck()
    audio4.play()
    audio4.loop = true;
    audio5.play()
    audio5.loop = true;
    FnCookieRejected();
    cookieRejected = true;
}

function cookieCheck() {
    if (localStorage.getItem('value') == "not working") {
        cookieH3.innerHTML = "We don't value your privacy."
        cookieP.innerHTML = "Accept the cookies."
        cookiePopup.style.height = "175px"
    } else if (localStorage.getItem('value') == "working") {
        bgBlur.style.display = "none"
        cookiePopup.style.display = "none"
    }
}

// Function voor wanneer je 2 keer op Reject Cookies klikt
function FnCookieRejected() {
    if (cookieRejected) {
        while (true) {
            console.log(troll);
            console.log(Math.floor(Math.random() * 1000));
        }
    }
}
/* <-- END COOKIES --> */

/* <-- POP UP AD --> */
function randomInt() {
    randInt = Math.floor(Math.random() * 14) + 1
}

// Function die de advertisement weghaalt
function hardClose() {
    bgBlur.style.display = "none"
    popupScreen.style.display = "none"
    vid.pause()
}

// Functie die je een 20:1 kans geeft om de knop te laten werken
function closeAd() {
    if (placeholder > 50) {
        placeholder = Math.floor(Math.random() * 20)
    }
    if (placeholder == 0) {
        hardClose()
        placeholder = 12034
    }
    --placeholder
}

function popUpAd() {
    randomInt()
    vid.src = `/ads/${randInt}.mp4`
    vid.autoplay = true;
    bgBlur.style.display = "grid"
    popupScreen.style.display = "grid"
}

// EventListener die ervoor zorgt dat de pop-up video automatisch sluit wanneer de video voorbij is
document.querySelector('.popup video').addEventListener('ended', myHandler, false);
function myHandler(e) {
    hardClose()
}
/* <-- END POP UP AD --> */