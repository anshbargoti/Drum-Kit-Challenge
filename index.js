// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert("I got clicked!");
// }

// anonymous function

// document.querySelector("button").addEventListener("click", function() {
//     alert("Hey! I got clicked using anonymous function");
// });

// all button click with numbers

// var DrumButtonsArray = document.querySelectorAll(".drum");
// DrumButtonsArray.forEach((element) => {
//     element.addEventListener("click", function() {
//         var btnNumber = element.getAttribute("data-key");
//         alert("I got clicked by " + btnNumber + " button");
//     });
// });[]

function play(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

document.body.addEventListener("keydown", (e) =>
  play(e.code.charAt(3).toLowerCase())
);

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document
    .querySelectorAll(".drum")
    [i].addEventListener("mousedown", function () {
      play(this.innerHTML);
    });
}
