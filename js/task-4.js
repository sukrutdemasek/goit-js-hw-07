let formElement = document.querySelector(".login-form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;
  if (email.trim() === "" || password.trim() === "") {
    alert("All form fields must be filled in");
  } else {
    const dataObject = {
      email: email.trim(),
      password: password.trim(),
    };
    console.log(dataObject);
    formElement.reset();
  }
});
