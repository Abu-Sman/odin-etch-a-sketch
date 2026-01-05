"use strict";

const containerEl = document.querySelector(".container");
let squaresPerSide = 16;

const drawCanvas = function (squaresPerSide) {
  for (let i = 0; i < squaresPerSide ** 2; i++) {
    const sqaure = document.createElement("div");
    sqaure.style.flex = `1 0 calc(100% / ${squaresPerSide})`;
    containerEl.appendChild(sqaure);
  }
};

drawCanvas(squaresPerSide);

const getDrawing = function () {
  const squareEls = containerEl.querySelectorAll("div");
  squareEls.forEach((square) => {
    square.addEventListener("mouseenter", (e) => {
      e.target.style.background = `#000`;
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
