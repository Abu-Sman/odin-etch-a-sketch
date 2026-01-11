"use strict";

const containerEl = document.querySelector(".container");
let squaresPerSide = 8;

const drawCanvas = function (squaresPerSide) {
  for (let i = 0; i < squaresPerSide ** 2; i++) {
    const square = document.createElement("div");
    square.style.flex = `1 0 calc(100% / ${squaresPerSide})`;
    containerEl.appendChild(square);
  }
};
drawCanvas(squaresPerSide);

const getRandomColor = function () {
  const random1 = Math.floor(Math.random() * 256);
  const random2 = Math.floor(Math.random() * 256);
  const random3 = Math.floor(Math.random() * 256);
  return `${random1}, ${random2}, ${random3}`;
};

const updateOpacity = function (el, e) {
  const currentOpactiy = window
    .getComputedStyle(el)
    .getPropertyValue(`opacity`);
  e.target.style.opacity = `${Number(currentOpactiy) + 0.1}`;
};

const getDrawing = function () {
  const squareEls = containerEl.querySelectorAll("div");
  squareEls.forEach((square) => {
    // Set initial opcaity
    square.style.opacity = `0.0`;
    // Set random color
    square.style.background = `rgba(${getRandomColor()})`;

    square.addEventListener("mouseenter", (e) => {
      updateOpacity(square, e);
    });
  });
};
getDrawing();

const bntEl = document.querySelector(".btn");
bntEl.addEventListener("click", function () {
  let input;
  while (!(input > 0 && input < 100)) {
    input = Number(prompt("Enter squares per side: "));
  }
  squaresPerSide = input;
  while (containerEl.firstChild)
    containerEl.removeChild(containerEl.firstChild);
  drawCanvas(squaresPerSide);
  getDrawing();
});
