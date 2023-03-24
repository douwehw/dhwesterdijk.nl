import { randInt } from "./exports.js";

const logwarning = () => {
   console.log(
      "%cDO NOT PASTE ANYTHING IN HERE",
      "font-size:50px; color: #fa1505;"
   );
   console.log(
      "%cIf people are telling you to paste anything in here there is a 11/10 chance that YOU ARE BEING SCAMMED",
      "font-size: 20px; color: #fff"
   );
};
const bgBlur = document.querySelector(".background-blur");
const cookiePopup = document.querySelector(".cookies-popup");
const cookieH3 = document.querySelector(".cookies-popup h3");
const cookieP = document.querySelector(".cookies-popup p");
const popupScreen = document.querySelector(".popup");
const vid = document.querySelector(".popup video");
const adText = document.querySelector(".popup h1");
const scrollingText = document.querySelector(".marquee");
const troll =
   "⣿⣿⣿⣿⣿⠟⣩⣴⣶⡶⣶⣲⡶⠶⣶⠶⣶⣶⣖⣀⣉⣭⣉⣛⠻⢿⣿⣿⣿⣿ ⣿⣿⣿⡿⢃⣾⣿⣻⣟⢮⣿⣮⣽⣿⣿⣻⣿⣿⣶⡲⣾⣿⣿⡳⣿⣶⡌⢿⣿⣿ ⣿⣿⠟⢡⣾⣿⣿⢿⡷⠋⠉⠉⠩⣭⣙⠻⣿⣿⣿⡿⠟⠛⠛⠻⡿⣿⣿⣘⢿⣿ ⡟⣡⣵⠟⣩⡭⣍⡛⠿⠶⠛⣩⣷⣶⣬⣴⣿⣿⣦⠠⣶⣶⣾⣿⠿⠛⠿⡪⣧⢸ ⡇⣿⣿⢘⣛⠁⣬⣙⠛⠿⣿⣛⣻⡝⢩⠽⠿⣿⣿⣶⠍⠻⢷⣶⣾⠹⣿⣣⡟⢸ ⣷⣌⠮⢾⣿⣷⡈⣙⠓⠰⣶⣦⣍⢉⣚⠻⠿⠿⠭⠡⠾⠿⠟⣊⢡⠁⢱⡿⢰⣿ ⣿⣿⣷⡙⢿⣿⣷⣌⠓⣰⣤⣌⡉⡘⠛⠛⠓⠘⠛⠂⠚⠛⠂⠛⠈⠄⢸⡇⣿⣿ ⣿⣿⣿⣷⣌⠻⡿⣿⣿⣦⣙⠛⢡⣿⣿⣷⠄⣦⣤⠄⣤⠄⡤⢠⡀⢢⣿⡇⣿⣿ ⣿⣿⣿⣿⣿⣷⣬⣑⠻⢷⣯⢟⣲⠶⣬⣭⣤⡭⠭⠬⢭⣬⣥⣴⢶⣿⣿⣧⢸⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣍⡓⠿⢿⣤⣿⣿⣟⣛⣿⣿⣿⣷⣛⣿⣾⡿⣸⣿ ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣬⣭⣙⣛⡛⠿⠿⠿⠿⠿⢟⣋⣴⣿⣿";

let clicksToClose = false;
let src = vid.getAttribute("src");
let audio1 = new Audio("aud/Elevator.mp3");
let audio2 = new Audio("aud/Elvator.mp3");
let audio3 = new Audio("aud/What.mp3");
let audio4 = new Audio("aud/DANGER.mp3");
let audio5 = new Audio("aud/ive killed god may the remnants help me.mp3");
let cookieRejected = false;

popupScreen.style.display = "none"; // Dit zorgt ervoor dat de ad pop-up als default niet zichtbaar is.

lsClear("cookies");
cookieCheck();
setTimeout(crashSite, randInt(1, 300000));
logwarning();

(function () {
   for (let i = 0; i < randInt(10, 35); i++) {
      console.error(
         `Error at line onepager-ux/script/main.js:${randInt(
            0,
            150
         )}. Fix immediately`
      );
   }
   for (let i = 0; i < randInt(25, 99); i++) {
      console.warn(
         `DevTools failed to load source map: Could not load content for https://ipify.grabInfo?=apikey=${randInt(
            5623635364,
            4867956923734685686795679
         )}/mappedinfowrapper : HTTP error: status code 404, net::ERR_HTTP_RESPONSE_CODE_FAILURE`
      );
   }
})();

function crashSite() {
   while (true) {
      console.error(troll);
      console.log(randInt(0, 1000));
   }
}

function cookieCheck() {
   switch (localStorage.getItem("cookies")) {
      case "working":
         bgBlur.style.display = "none";
         cookiePopup.style.display = "none";
         break;
      default:
         cookieH3.innerHTML = "We don't value your privacy.";
         cookieP.innerHTML = "Accept the cookies.";
         cookiePopup.style.height = "175px";
         break;
   }
}

function FnCookieRejected() {
   if (cookieRejected) {
      while (true) {
         console.log(troll);
         console.log(randInt(0, 1000));
      }
   }
}

function cookieAccept() {
   localStorage.setItem("cookies", "working");
   cookieCheck();

   audio1.play();
   audio2.play();
   audio3.play();
   audio1.loop = true;
   audio2.loop = true;
   audio3.loop = true;
   audio4.pause();
   audio5.pause();

   setTimeout(popUpAd, randInt(1, 10000));
}

function cookieReject() {
   localStorage.setItem("cookies", "not working");
   cookieCheck();

   audio4.play();
   audio4.loop = true;
   audio5.play();
   audio5.loop = true;

   FnCookieRejected();
   cookieRejected = true;
}

function hardClose() {
   bgBlur.style.display = "none";
   popupScreen.style.display = "none";
   vid.pause();

   setTimeout(popUpAd, randInt(1, 10000));
}

function closeAd() {
   if (!clicksToClose) {
      clicksToClose = randInt(1, 20);
   }
   --clicksToClose;
   console.error(
      `Failed to close onepager-ux/${vid.getAttribute(
         "src"
      )}. Error code 3${randInt(10, 99)}.`
   );
   if (clicksToClose == 0) {
      hardClose();
      clicksToClose = false;
   }
}

function popUpAd() {
   vid.src = `/irritant/ads/${randInt(1, 14)}.mp4`;
   vid.autoplay = true;
   vid.addEventListener("ended", hardClose);
   bgBlur.style.display = "grid";
   popupScreen.style.display = "grid";
   logwarning();
}

//Grabbing your ip and ip-tied geolocation through ipapi's check api
fetch(
   "http://api.ipapi.com/api/check?access_key=69e810ec7f10244f64064f36479ac161"
)
   .then(function (results) {
      results.json().then(function (data) {
         scrollingText.innerHTML = `Your ${data.type} is ${data.ip}. Pinging to ${data.zip}, ${data.city}, ${data.region_name}, ${data.country_name}, ${data.continent_name}. Geocoordinates are: Lat: ${data.latitude}, Long: ${data.longitude}. Your privacy is safe with us :) We promise!`;
      });
   })
   .catch(function (err) {
      console.warn(
         "Unable to process API fetch request. Resorting to placeholder text.",
         err
      );
   });
