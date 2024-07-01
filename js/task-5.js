function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let colorButton = document.querySelector(".change-color");
colorButton.addEventListener("click", (event) => {
  let colorOfBody = document.querySelector(".color");
  let newBody = document.querySelector(".body");
  let randomColor = getRandomHexColor();
  colorOfBody.textContent = randomColor;
  newBody.style.backgroundColor = randomColor;
});
