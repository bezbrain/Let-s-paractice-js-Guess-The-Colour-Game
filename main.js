const allColors = ["red", "blue", "green"];

const playerPointOne = document.querySelector(".player-point-1");
const playerPointTwo = document.querySelector(".player-point-2");
const btnOne = document.querySelector(".btn-1");
const btnTwo = document.querySelector(".btn-2");
const colorOne = document.querySelector(".color-1");
const colorTwo = document.querySelector(".color-2");
const inputOne = document.querySelector(".input-1");
const inputTwo = document.querySelector(".input-2");
const colorOutput = document.querySelector(".color-output");
const footerColor = document.querySelector("footer");
const winner = document.querySelector(".winner");
const startGame = document.querySelector(".start");

let btnOneCounter = 0;
let btnTwoCounter = 0;
let resultOne = 0;
let resultTwo = 0;

window.onload = () => {
  btnOne.setAttribute("disabled", true);
  btnTwo.setAttribute("disabled", true);
};

// =====>>>
// Player One functionalities
// =====>>>
btnOne.onclick = () => {
  colorOne.textContent = inputOne.value;
  let rand = randomColorOutput();
  colorOutput.textContent = allColors[rand];
  colorOutput.style.backgroundColor = allColors[rand];
  if (colorOne.textContent == colorOutput.textContent) {
    resultOne += 5;
  } else {
    resultOne += -2;
  }
  playerPointOne.textContent = resultOne;
  btnOneCounter++;
  //   console.log(btnOneCounter);

  // Program to disable the button on the tenth click
  if (btnOneCounter >= 3) {
    btnOne.setAttribute("disabled", true);
  }
};

// =====>>>
// Player Two functionalities
// =====>>>
btnTwo.onclick = () => {
  colorTwo.textContent = inputTwo.value;
  let rand = randomColorOutput();
  colorOutput.textContent = allColors[rand];
  colorOutput.style.backgroundColor = allColors[rand];
  if (colorTwo.textContent == colorOutput.textContent) {
    resultTwo += 5;
  } else {
    resultTwo += -2;
  }
  playerPointTwo.textContent = resultTwo;
  //   console.log(resultTwo);
  btnTwoCounter++;
  if (btnTwoCounter === 3) {
    if (resultTwo > resultOne) {
      winner.textContent = "Player 2 is the Winner";
    } else {
      winner.textContent = "Player 1 is the Winner";
    }
    if (resultOne === resultTwo) {
      winner.textContent = "This is a tie, replay";
    }
    // console.log(btnTwoCounter);
  }

  // Program to disable the button on the tenth click
  if (btnTwoCounter >= 3) {
    btnTwo.setAttribute("disabled", true);
  }
};

startGame.onclick = () => {
  btnOne.removeAttribute("disabled");
  btnTwo.removeAttribute("disabled");
  resultOne = 0;
  resultTwo = 0;
  playerPointOne.textContent = resultOne;
  playerPointTwo.textContent = resultTwo;
  winner.textContent = "Winner";
};

// Color output section
function randomColorOutput() {
  let randomColor = Math.floor(Math.random() * allColors.length);
  //   console.log(randomColor);
  return randomColor;
}
