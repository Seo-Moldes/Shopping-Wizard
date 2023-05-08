const section = document.createElement("section");
section.className = "principal";

// FORM
const form = document.createElement("form");
form.className = "formType";
form.id = "form";
section.appendChild(form);

// FIELDSET
const fieldsetType = document.createElement("fieldset");
fieldsetType.className = "background-1";
form.appendChild(fieldsetType);

// PROFILE
const profile = document.createElement("legend");
profile.className = "titleProfile";
profile.textContent = "Profile";
fieldsetType.appendChild(profile);

// SECTION INPUTS
const sectionInputs = document.createElement("section");
sectionInputs.className = "sectionInputs";
fieldsetType.appendChild(sectionInputs);

// USERNAME
const userName = document.createElement("label");
userName.textContent = "Username";
userName.setAttribute("for", "inputUserName");
sectionInputs.appendChild(userName);

// INPUT USERNAME
const inputUsername = document.createElement("input");
inputUsername.className = "inputUsername";
inputUsername.id = "inputUsername";
inputUsername.type = "text";
inputUsername.minLength = 5;
inputUsername.maxLength = 20;
inputUsername.placeholder = "Your username";
inputUsername.setAttribute("required", '');
inputUsername.addEventListener("keypress", function(event) {
  if (event.code === "Space") {
    event.preventDefault();
  }
});
sectionInputs.appendChild(inputUsername);

//USERNAME SPAN
const usernameCheck = document.createElement("span");
usernameCheck.textContent = "Please enter correct username";
usernameCheck.className = "check";
sectionInputs.appendChild(usernameCheck);

//EMAIL
const email = document.createElement("label");
email.className = "labelEmail";
email.textContent = "Email";
email.setAttribute("for", "inputEmail");
sectionInputs.appendChild(email);

// INPUT EMAIL
const inputEmail = document.createElement("input");
inputEmail.className = "inputEmail";
inputEmail.id = "inputEmail";
inputEmail.type = "email";
inputEmail.maxLength = "50";
inputEmail.setAttribute("required", '');
inputEmail.placeholder = "Your email";
sectionInputs.appendChild(inputEmail);

// EMAIL SPAN
const emailCheck = document.createElement("span");
emailCheck.textContent = "Please enter the email";
emailCheck.className = "check";
sectionInputs.appendChild(emailCheck);

//PASSWORD 
const passWord = document.createElement("label");
passWord.className = "labelPassword";
passWord.textContent = "Password";
passWord.fontSize = "10px";
passWord.setAttribute("for", "inputPassword");
sectionInputs.appendChild(passWord);


//INPUT PASSWORD 
const inputPassword = document.createElement("input");
inputPassword.className = "inputPassword";
inputPassword.id = "inputPassword";
inputPassword.type = "password";
inputPassword.setAttribute("required", '')
inputPassword.minLength = 8;
inputPassword.maxLength = 20;
sectionInputs.appendChild(inputPassword);

// PASSWORD VISIBLE
const togglePasswordBtn = document.createElement("button");
togglePasswordBtn.textContent = "Show";
togglePasswordBtn.className = "togglePasswordBtn";
togglePasswordBtn.type = "button";
sectionInputs.appendChild(togglePasswordBtn);

// FUNCTION PASSWORD VISIBILITY
togglePasswordBtn.addEventListener("click", function() {
  const passwordInputType = inputPassword.getAttribute("type");
  if (passwordInputType === "password") {
    inputPassword.setAttribute("type", "text");
    togglePasswordBtn.textContent = "Hide";
  } else {
    inputPassword.setAttribute("type", "password");
    togglePasswordBtn.textContent = "Show";
  }
});

//CONFIRM PASSWORD 
const confirmPassword = document.createElement("label");
confirmPassword.className = "confirmPassword";
confirmPassword.textContent = "Confirm Password";
confirmPassword.fontSize = "10px";
confirmPassword.setAttribute("for", "inputConfirmPassword");
sectionInputs.appendChild(confirmPassword);

//INPUT CONFIRM PASSWORD 
const inputConfirmPassword = document.createElement("input");
inputConfirmPassword.className = "inputConfirmPassword";
inputConfirmPassword.id = "inputConfirmPassword";
inputConfirmPassword.type = "password";
inputConfirmPassword.setAttribute("required", '');
inputConfirmPassword.minLength = 8;
inputConfirmPassword.maxLength = 20;
sectionInputs.appendChild(inputConfirmPassword);

//INPUT CONFIRM SPAN 
const passwordCheck = document.createElement("span");
passwordCheck.textContent = "Password doesn't match";
passwordCheck.className = "check";
sectionInputs.appendChild(passwordCheck);

//BACKGROUND BUTTONS
const divButtons = document.createElement("div");
divButtons.className = "divButtons";
fieldsetType.appendChild(divButtons);

//BUTTON CLEAR
const btnClear = document.createElement("input");
btnClear.type = 'reset';
btnClear.className = "btn-Clear";
btnClear.id = "btnClear";
btnClear.value = 'Clear form';
divButtons.appendChild(btnClear);
btnClear.onclick = function() {
  if (btnClear.type = "reset") {
    usernameCheck.style.display = "none";
    emailCheck.style.display = "none";
    passwordCheck.style.display = "none";
  }
}

//BUTTON NEXT 
const btnNext = document.createElement("input");
btnNext.type = 'submit';
btnNext.className = 'btn-Next';
btnNext.id = 'btnNext';
btnNext.value = 'Next';
divButtons.appendChild(btnNext);
btnNext.onclick = function() {
  const password = inputPassword.value;
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  if (inputUsername.value.length < 5 || inputUsername.value.length > 20) {
    usernameCheck.style.display = "block";
    return false
  }
  if (inputUsername.value === "") {
    usernameCheck.style.display = "block";
    return false;
  }
  if (inputEmail.value === "") {
    emailCheck.style.display = "block";
    return false;
  }
  if (inputPassword.value !== inputConfirmPassword.value) {
    passwordCheck.style.display = "block";
    return false;
  }
  if (!hasLowercase || !hasUppercase || !hasSpecialChar || !hasNumber) {
    passwordCheck.textContent = "Password needs at least a lowercase, an uppercase, number and special character";
    passwordCheck.style.display = "block";
    return false;
  } else if (form.checkValidity()) {
    goToAddress();
  }
};

// LOCAL STORAGE
const inUsername = document.getElementById("inputUsername").value;
const inEmail= document.getElementById("inputEmail").value;
const inPassword = document.getElementById("inputPassword").value;

localStorage.setItem("username", inUsername);
localStorage.setItem("email", inEmail);
localStorage.setItem("password", inPassword);



