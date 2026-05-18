const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

function validateName() {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name cannot be empty!";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
}

function validateEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email cannot be empty!";
    return false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email address!";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validatePassword() {
  if (passwordInput.value.trim() === "") {
    passwordError.textContent = "Password cannot be empty!";
    return false;
  } else if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters!";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

function checkFormValidity() {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (isNameValid && isEmailValid && isPasswordValid) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

// Real-time validation
nameInput.addEventListener("input", checkFormValidity);
emailInput.addEventListener("input", checkFormValidity);
passwordInput.addEventListener("input", checkFormValidity);

// Submit event
document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Form Submitted Successfully!");
});

// Page load la submit disable confirm panna
checkFormValidity();