let inputElement = document.getElementById("name-input");
let spanElement = document.getElementById("name-output");
inputElement.addEventListener("input", (event) => {
  if (inputElement.value.trim() === "") {
    spanElement.textContent = "Anonymous";
  } else {
    spanElement.textContent = inputElement.value.trim();
  }
});
