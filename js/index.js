// Your code goes here

// Upon loading the page, the user receives this alert.
window.addEventListener("load", event => {
  alert("Look at me. This is my site now, I'm the captain of the Fun Bus.");
});

// //when holding down the key in the window, one of the images will show the troll face

window.addEventListener("keydown", () => {
  images[2].setAttribute(
    "src",
    "https://i.kym-cdn.com/photos/images/newsfeed/000/096/044/trollface.jpg?1296494117"
  );
});

//when letting go of the key in the window, it'll go to the original image for "Adventure Awaits"
window.addEventListener("keyup", () => {
  images[2].setAttribute("src", "img/fun.jpg");
});

// Upon the mouse entering the image of the fun bus, it becomes an image that trolls the user.
let images = document.querySelectorAll("img");
images[0].addEventListener("mouseenter", event => {
  event.target.setAttribute(
    "src",
    "https://memegenerator.net/img/instances/54488955.jpg"
  );
});

// Upon the mouse leaving the image of the fun bus, it reverts back to the origina image.
images[0].addEventListener("mouseleave", event => {
  event.target.setAttribute("src", "img/fun-bus.jpg");
});

// upon clicking on the main navigation, the font family changes.
let header = document.querySelector(".main-navigation");
header.addEventListener("click", event => {
  event.target.style.fontFamily = "Impact";
  event.preventDefault();
});

// Upon clicking the logo "Fun Bus", the log chanes to the color red.
//does not change the font to Impact due to stopPropagation.
let logo = document.querySelector(".logo-heading");
logo.addEventListener("click", event => {
  event.target.style.color = "red";
  event.stopPropagation();
});

//When double clicking the image to the right of the "Let's go!" paragraph, it'll show another trolling image.
images[1].addEventListener("dblclick", event => {
  event.target.setAttribute(
    "src",
    "https://www.sunglasswarehouse.com/blog/wp-content/uploads/2011/05/meme.png"
  );
});

//When double clicking the image to the right of the "Let's go!" paragraph, it'll show another trolling image.

images[2].addEventListener("dblclick", event => {
  event.target.setAttribute(
    "src",
    "https://memegenerator.net/img/instances/72639920.jpg"
  );
});

//When double clicking the image to the right of the "Let's go!" paragraph, it'll show the Lambda Logo Instead.

images[3].addEventListener("dblclick", event => {
  event.target.setAttribute(
    "src",
    "https://i.ytimg.com/vi/LleW1Cs0hFw/maxresdefault_live.jpg"
  );
});

// upon clicking on any of the anchors in the navigation directly, the following alert will pop up each time.
let anchors = document.querySelectorAll("a");
for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener("click", event => {
    alert("I told you, I own this site now.");
  });
}

// Random blinking colors in the background as users scroll;
const colors = ["red", "orange", "yellow"];
let body = document.querySelector("body");
body.addEventListener("wheel", event => {
  body.style.backgroundColor =
    colors[Math.floor(Math.random() * (colors.length - 1))];
});

//When using the scroll bar (without using your mouse wheel), it'll change all the anchor names to "Pwned"
window.addEventListener("scroll", () => {
  const phrase = ["Pwned"];
  for (let i = 0; i < anchors.length; i++) {
    anchors[i].textContent = phrase[i];
  }
});
