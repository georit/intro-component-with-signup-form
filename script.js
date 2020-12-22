/* *****variables***** */
const signUpForm = document.getElementById("sign-up-form");
const btnSubmit = document.getElementById("btn-submit");
const errorMsgEmail = document.getElementById("error-msg-email");

/* *****functions***** */
// fn to submit form
function submitForm(event) {
  // check if any fields are empty
  let inputFields = [...document.querySelectorAll(".input-field")];

  // reset email error message
  resetErrorMsgEmail();

  inputFields.forEach((inputField) => {
    let emailAddress = document.getElementById("email").value;

    switch (true) {
      case inputField.value.length <= 0:
        // add 'empty' class to input container
        inputField.parentElement.parentElement.classList.add("empty");
        event.preventDefault();
        break;
      // validate email address
      case inputField.value.length > 0 &&
        inputField.id === "email" &&
        !validateEmail(emailAddress):
        // reset email error message
        resetErrorMsgEmail();
        // update email error message
        errorMsgEmail.innerHTML = "Looks like this is not an email";
        // add 'empty' class to input container
        inputField.parentElement.parentElement.classList.add("empty");
        event.preventDefault();
        break;
      default:
        // remove 'empty' class to input container
        inputField.parentElement.parentElement.classList.remove("empty");
    }
  });
}

// fn to validate email address
function validateEmail(email) {
  const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regEx.test(String(email).toLowerCase());
}

function resetErrorMsgEmail() {
  if (errorMsgEmail.innerText !== "Email Address cannot be empty") {
    errorMsgEmail.innerText = "Email Address cannot be empty";
  }
}

/* *****event listeners***** */
signUpForm.addEventListener("submit", (e) => {
  submitForm(e);
});
