function validateEmail() {
  const email = document.getElementById("email").value;
  const emailError = document.getElementById("emailError");
  const successMessage = document.getElementById("successMessage");

  if (email.length > 3 && email.includes("@") && email.includes(".")) {
    emailError.style.display = "none";
    checkAllValid();
  } else {
    emailError.textContent =
      "Make sure email is more than 3 characters and has @ and .";
    emailError.style.display = "block";
    successMessage.style.display = "none";
  }
}

function validatePassword() {
  const password = document.getElementById("password").value;
  const passwordError = document.getElementById("passwordError");
  const successMessage = document.getElementById("successMessage");

  if (password.length > 8) {
    passwordError.style.display = "none";
    checkAllValid();
  } else {
    passwordError.textContent = "Make sure password is more than 8 characters.";
    passwordError.style.display = "block";
    successMessage.style.display = "none";
  }
}

function checkAllValid() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const emailError =
    document.getElementById("emailError").style.display === "none";
  const passwordError =
    document.getElementById("passwordError").style.display === "none";
  const successMessage = document.getElementById("successMessage");

  if (
    email.length > 3 &&
    email.includes("@") &&
    email.includes(".") &&
    password.length > 8 &&
    emailError &&
    passwordError
  ) {
    successMessage.textContent = "All good to go!";
    successMessage.style.display = "block";
  } else {
    successMessage.style.display = "none";
  }
}

function handleSubmit() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const emailError =
    document.getElementById("emailError").style.display === "none";
  const passwordError =
    document.getElementById("passwordError").style.display === "none";

  if (
    email.length > 3 &&
    email.includes("@") &&
    email.includes(".") &&
    password.length > 8 &&
    emailError &&
    passwordError
  ) {
    document.getElementById("confirmationPopup").style.display = "block";
  } else {
    alert("Please fix the errors before submitting.");
  }
}

function confirmSubmit(confirm) {
  document.getElementById("confirmationPopup").style.display = "none";
  if (confirm) {
    alert("Successful signup!");
    document.getElementById("signupForm").reset();
    document.getElementById("successMessage").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";
  } else {
    window.location.reload();
  }
}
