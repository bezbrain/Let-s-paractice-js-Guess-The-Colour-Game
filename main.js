const allColors = ["red", "blue", "green"];

// const mainContainer = document.querySelector("main");
const playerPointOne = document.querySelector(".player-point-1");
const playerPointTwo = document.querySelector(".player-point-2");
const btnOne = document.querySelector(".btn-1");
const btnTwo = document.querySelector(".btn-2");
const colorOne = document.querySelector(".color-1");
const colorTwo = document.querySelector(".color-2");
const inputOne = document.querySelector(".input-1");
const inputTwo = document.querySelector(".input-2");
const colorOutput = document.querySelector(".color-output");
const winner = document.querySelector(".winner");
const startGame = document.querySelector(".start");
const winnerImgage = document.querySelector("img");

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
  inputOne.value = "";
  console.log(resultOne);
  btnOneCounter++;
  console.log(btnOneCounter);
  interchange();
  disableSaveBtn();
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
  inputTwo.value = "";
  console.log(resultTwo);
  btnTwoCounter++;
  playerOneTwo();
  winnerCup();
  interchange();
  console.log(btnTwoCounter);
  disableSaveBtn();
};

// Allow P2 save btn not to click when P1 save btn is clickable and vice versa
function interchange() {
  if (btnOneCounter <= btnTwoCounter) {
    btnTwo.setAttribute("disabled", true);
    btnOne.removeAttribute("disabled");
  } else {
    btnTwo.removeAttribute("disabled");
    btnOne.setAttribute("disabled", true);
  }
}

// Disable save btn when game is over
const disableSaveBtn = () => {
  if (btnOneCounter >= 3 && btnTwoCounter >= 3) {
    btnOne.setAttribute("disabled", true);
    btnTwo.setAttribute("disabled", true);
  }
};

// Display of Player of the winner of the game
function playerOneTwo() {
  if (btnTwoCounter === 3) {
    if (resultTwo > resultOne) {
      winner.textContent = "Player 2 is the Winner";
    } else {
      winner.textContent = "Player 1 is the Winner";
    }
    if (resultOne === resultTwo) {
      winner.textContent = "This is a tie, replay";
    }
  }
}

startGame.onclick = () => {
  btnOne.removeAttribute("disabled");
  btnTwo.removeAttribute("disabled");
  resultOne = 0;
  resultTwo = 0;
  btnOneCounter = 0;
  btnTwoCounter = 0;
  playerPointOne.textContent = resultOne;
  playerPointTwo.textContent = resultTwo;
  winner.textContent = "Winner";
  colorOutput.textContent = "Output";
  colorOutput.style.backgroundColor = "unset";
  inputOne.value = "";
  inputTwo.value = "";
  colorOne.textContent = "";
  colorTwo.textContent = "";
  winnerImgage.classList.remove("winner-class");
  interchange();
};

// The cup that moves upward when we have a winner
function winnerCup() {
  if (
    winner.textContent.includes("Player 1 is the Winner") ||
    winner.textContent.includes("Player 1 is the Winner")
  ) {
    winnerImgage.classList.add("winner-class");
    // document.body.classList.add("winner-body-background");
  }
}

const randomColorOutput = () => Math.floor(Math.random() * allColors.length);
