const newTopic = document.querySelector(".create-new-topic");
const newTopicbtn = document.querySelector("button.new-topic");

let inputUsername = document.querySelector("#username");
let newTopicContent = document.querySelector("form textarea#topic-content");
let clicked = false;

oninput = () => {
   if (inputUsername != null) {
      if (inputUsername.value.length > 18) {
         inputUsername.value = inputUsername.value.slice(0, 18);
      }
   }
   if (newTopicContent != null) {
      console.log(newTopicContent.value.length);
      if (newTopicContent.value.length > 352) {
         newTopicContent.value = newTopicContent.value.slice(0, 352);
         for (let i = 0; i < newTopicContent.value.length; i++) {
            if (i > 352) {
               newTopicContent.value[1] = "";
            }
         }
      }
   }
};

newTopicbtn.onclick = () => {
   if (!clicked) {
      newTopic.style.display = "grid";
      newTopicbtn.innerHTML = "Hide Menu";
      clicked = !clicked;
   } else {
      newTopic.style.display = "none";
      newTopicbtn.innerHTML = "New Thread";
      clicked = !clicked;
   }
};
