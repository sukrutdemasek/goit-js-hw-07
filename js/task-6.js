function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let divHolder = document.querySelector("#boxes");
  divHolder.innerHTML = "";
  let divSize = 30;

  for (let i = 1; i <= amount; i++) {
    let divElement = document.createElement("div");

    let randomColor = getRandomHexColor();
    divElement.style.width = `${divSize}px`;
    divElement.style.height = `${divSize}px`;
    divElement.style.backgroundColor = randomColor;
    divHolder.appendChild(divElement);
    divSize += 10;
  }
}
function destroyBoxes() {
  let divHolder = document.querySelector("#boxes");
  divHolder.innerHTML = "";
}
let createData = document.querySelector("[data-create]");
let destroyData = document.querySelector("[data-destroy]");
createData.addEventListener("click", (event) => {
  let numberString = document.querySelector(".number").value;
  let number = parseInt(numberString, 10);
  if (number >= 1 && number <= 100) createBoxes(number);
  else alert("Please enter a number between 1 and 100");
});
destroyData.addEventListener("click", (event) => {
  destroyBoxes();
});
