let exclamation = document.getElementsByClassName("error");
let form = document.getElementById("form");
let alert = document.getElementById("alert");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let formError = document.getElementsByClassName("form_error");
let inputs = document.getElementsByTagName("input");

/* validation */
function formValidation(event) {
  let formValid = true;

  /* for loop for all input fields except submit input, so it is 4 */
  for (i = 0; i < inputs.length - 1; i++) {
    /* clear the form */
    inputs[i].classList.remove("error");
    formError[i].style.display = "none";

    /* email validation */
    if (inputs[i].type === "email" && !inputs[2].validity.valid) {
      formError[2].style.display = "block";
      inputs[2].classList.add("error");
      formValid = false;
    }

    /* validation of other fields */
    if (
      inputs[i].type !== "email" &&
      inputs[i].type !== "submit" &&
      inputs[i].value === ""
    ) {
      formError[i].style.display = "block";
      inputs[i].classList.add("error");
      formValid = false;
    }
  }

  if (
    firstName.value &&
    lastName.value &&
    email.value &&
    password.value &&
    formValid
  ) {
    alert.style.display = "block";
    setTimeout(function () {
      alert.style.display = "none";
    }, 100000);
  } else {
    event.preventDefault();
  }
}

/* event listener on button, call the formValidation function */
form.addEventListener("submit", formValidation, false);
