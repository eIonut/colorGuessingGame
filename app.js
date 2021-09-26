window.addEventListener("load", function () {
  init();
});

const colors = document.querySelectorAll(".colors");
const rgbDisplay = document.querySelector("h2");
const livesDisplay = document.querySelector("h3");
const scoreDisplay = document.querySelector("#score");
const colorOneSquare = document.querySelector("#color-1");
const colorTwoSquare = document.querySelector("#color-2");
const colorThreeSquare = document.querySelector("#color-3");
const colorFourSquare = document.querySelector("#color-4");
const btnReset = document.querySelector("#btn-reset");
const btnSet = document.querySelector("#btn-set");
const modal = document.querySelector(".modal");
const xIcon = document.querySelector("#x-icon");

xIcon.addEventListener("click", function () {
  modal.classList.remove("show-modal");
  modal.classList.add("hide-modal");
});

let lives = 3;
let score = 0;
let play = true;

function stillPlaying() {
  if (lives === 0) {
    play = false;
    lives = 4;
    score = 0;
    livesDisplay.textContent = `You have: ${lives} left`;
    scoreDisplay.textContent = `Score: ${score}`;
    modal.classList.remove("hide-modal");
    modal.classList.add("show-modal");
  }
}

function randomColor() {
  let randomCol1 = Math.floor(Math.random() * 255) + 1;
  let randomCol2 = Math.floor(Math.random() * 255) + 1;
  let randomCol3 = Math.floor(Math.random() * 255) + 1;
  let rgbCol = `rgb(${randomCol1}, ${randomCol2}, ${randomCol3})`;
  return rgbCol;
}

function afterLoss() {
  init();
  play = true;
  lives = 3;
  score = 0;
  livesDisplay.textContent = `Lives: ${lives}`;
  scoreDisplay.textContent = `Score: ${score}`;
}

btnReset.addEventListener("click", function () {
  afterLoss();
});

function init() {
  const color = randomColor();
  const color_2 = randomColor();
  const color_3 = randomColor();
  const color_4 = randomColor();
  const randomNumber = Math.floor(Math.random() * 4) + 1;
  rgbDisplay.innerHTML = color;
  scoreDisplay.textContent = `Score: ${score}`;
  console.log(randomNumber);

  if (randomNumber === 1) {
    colorOneSquare.style.backgroundColor = color;
    colorTwoSquare.style.backgroundColor = color_2;
    colorThreeSquare.style.backgroundColor = color_3;
    colorFourSquare.style.backgroundColor = color_4;
  } else if (randomNumber === 2) {
    colorTwoSquare.style.backgroundColor = color;
    colorOneSquare.style.backgroundColor = color_2;
    colorThreeSquare.style.backgroundColor = color_3;
    colorFourSquare.style.backgroundColor = color_4;
  } else if (randomNumber === 3) {
    colorThreeSquare.style.backgroundColor = color;
    colorTwoSquare.style.backgroundColor = color_2;
    colorOneSquare.style.backgroundColor = color_3;

    colorFourSquare.style.backgroundColor = color_4;
  } else {
    colorOneSquare.style.backgroundColor = color;
    colorTwoSquare.style.backgroundColor = color_2;
    colorThreeSquare.style.backgroundColor = color_3;
    colorFourSquare.style.backgroundColor = color_4;
  }
}

colorOneSquare.addEventListener("click", function () {
  if (play) {
    stillPlaying();
    if (rgbDisplay.innerHTML === colorOneSquare.style.backgroundColor) {
      score = score + 10;
      document.querySelector("#score").innerHTML = `Score: ${score}`;
    } else {
      lives--;
      livesDisplay.textContent = `Lives left: ${lives}`;
      console.log("nu");
    }
    init();
  }
});

colorTwoSquare.addEventListener("click", function () {
  if (play) {
    stillPlaying();
    if (rgbDisplay.innerHTML === colorTwoSquare.style.backgroundColor) {
      score = score + 10;
      document.querySelector("#score").innerHTML = `Score: ${score}`;
      console.log("da");
    } else {
      lives--;
      livesDisplay.textContent = `Lives left: ${lives}`;
      console.log("nu");
    }
    init();
  }
});

colorThreeSquare.addEventListener("click", function () {
  if (play) {
    stillPlaying();
    if (rgbDisplay.innerHTML === colorThreeSquare.style.backgroundColor) {
      score = score + 10;
      document.querySelector("#score").innerHTML = `Score: ${score}`;
      console.log("da");
    } else {
      lives--;
      livesDisplay.textContent = `Lives left: ${lives}`;
      console.log("nu");
    }
    init();
  }
});

colorFourSquare.addEventListener("click", function () {
  if (play) {
    stillPlaying();
    if (rgbDisplay.innerHTML === colorFourSquare.style.backgroundColor) {
      score = score + 10;
      document.querySelector("#score").innerHTML = `Score:${score}`;
      console.log("da");
    } else {
      lives--;
      livesDisplay.textContent = `Lives left: ${lives}`;
      console.log("nu");
    }
    init();
  }
});
