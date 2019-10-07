var input = document.querySelector('#namebox');
var button = document.querySelector('#submit');
var newDoggo = document.querySelector('#dogname');

button.addEventListener('click', changeDoggo);

function changeDoggo() {
  newDoggo.innerText = input.value;
  event.preventdefault();
}

// var hide = document.querySelector
// var button2 = document.querySelector('.doggo-buttons');
//
// button.addEventListener('click', hideColumn);
//
// function hideColumn() {
//
// }

// button.addEventListener('click', hideColumn);
//
// function hideColumn() {
//   var x = document.getElementById(".how-to");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
