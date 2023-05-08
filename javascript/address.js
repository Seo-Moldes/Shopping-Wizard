const sectionAddress = document.createElement("section");
sectionAddress.className = "principal2";

// FORM
const formAddress = document.createElement("form");
formAddress.className = "formType";
formAddress.id = "formAddress1";
sectionAddress.appendChild(formAddress);

// FIELDSET
const fieldsetAddress = document.createElement("fieldset");
fieldsetAddress.className = "background-2";
formAddress.appendChild(fieldsetAddress);

// SECTION INPUTS
const sectionInputsAddress = document.createElement("section");
sectionInputsAddress.className = "sectionInputsAddress";
fieldsetAddress.appendChild(sectionInputsAddress);

// ADDRESS TITLE
const address = document.createElement("legend");
address.className = "titleAddress";
address.textContent = "Address";
sectionInputsAddress.appendChild(address);

// FIRSTNAME
const firstName = document.createElement("label");
firstName.className = "Username";
firstName.textContent = "First Name";
firstName.setAttribute("for", "inputFirstName");
sectionInputsAddress.appendChild(firstName);


// INPUT FIRSTNAME
const inputFirstName = document.createElement("input");
inputFirstName.className = "inputFirstName";
inputFirstName.id = "inputFirstName";
inputFirstName.type = "text";
inputFirstName.placeholder = "First Name";
inputFirstName.maxLength = 20;
inputFirstName.setAttribute("required", "");
sectionInputsAddress.appendChild(inputFirstName);

//FIRSTNAME SPAN
const firstNameCheck = document.createElement("span");
firstNameCheck.textContent = "Please enter correct first name";
firstNameCheck.className = "check";
sectionInputsAddress.appendChild(firstNameCheck);

//LASTNAME
const lastName = document.createElement("label");
lastName.className = "lastName";
lastName.textContent = "Last Name";
lastName.setAttribute("for", "inputLastName");
sectionInputsAddress.appendChild(lastName);


//INPUT LASTNAME
const inputLastName = document.createElement("input");
inputLastName.className = "inputLastName";
inputLastName.id = "inputLastName";
inputLastName.type = "text";
inputLastName.placeholder = "Last Name";
inputLastName.maxLength = 20;
inputLastName.setAttribute("required", '');
sectionInputsAddress.appendChild(inputLastName);

//LASTNAME SPAN
const lastNameCheck = document.createElement("span");
lastNameCheck.textContent = "Please enter correct last name";
lastNameCheck.className = "check";
sectionInputsAddress.appendChild(lastNameCheck);

//BIRTHDAY
const birthday = document.createElement("label");
birthday.className = "birthday";
birthday.textContent = "Birthday";
birthday.setAttribute("for", "inputBirthday");
sectionInputsAddress.appendChild(birthday);

//INPUT BIRTHDAY
const inputBirthday = document.createElement("input");
inputBirthday.className = "inputBirthday";
inputBirthday.id = "inputBirthday";
inputBirthday.type = "date";
inputBirthday.placeholder = "Birthday";
inputBirthday.setAttribute("required", '');
sectionInputsAddress.appendChild(inputBirthday);

//BIRTHDAY SPAN
const birthdayCheck = document.createElement("span");
birthdayCheck.textContent = "Please enter correct date";
birthdayCheck.className = "check";
sectionInputsAddress.appendChild(birthdayCheck);

//ADDRESS 1
const address1 = document.createElement("label");
address1.className = "address1";
address1.textContent = "Address 1";
address1.setAttribute("for", "inputAddress1");
sectionInputsAddress.appendChild(address1);

//INPUT ADDRESS1
const inputAddress1 = document.createElement("input");
inputAddress1.className = "inputAddress1";
inputAddress1.id = "inputAddress1";
inputAddress1.type = "textarea";
inputAddress1.placeholder = "Address 1";
inputAddress1.maxLength = 50;
inputAddress1.setAttribute("required", '');
sectionInputsAddress.appendChild(inputAddress1);

//ADDRESS1 SPAN
const address1Check = document.createElement("span");
address1Check.textContent = "Please enter correct address";
address1Check.className = "check";
sectionInputsAddress.appendChild(address1Check);

//ADDRESS 2
const address2 = document.createElement("label");
address2.className = "address2";
address2.textContent = "Address 2";
address2.setAttribute("for", "inputAddress2");
sectionInputsAddress.appendChild(address2);

//INPUT ADDRESS 2
const inputAddress2 = document.createElement("input");
inputAddress2.className = "inputAddress2";
inputAddress2.id = "inputAddress2";
inputAddress2.type = "textarea";
inputAddress2.maxLength = 50;
inputAddress2.placeholder = "Address 2";
// inputAddress2.setAttribute("required", '');
sectionInputsAddress.appendChild(inputAddress2);

//POSTAL CODE
const postalCode = document.createElement("label");
postalCode.className = "postalCode";
postalCode.textContent = "Postal Code";
postalCode.setAttribute("for", "inputPostalCode");
sectionInputsAddress.appendChild(postalCode);

// POSTAL CODE SPAM
const postalCodeCheck = document.createElement("span");
postalCodeCheck.textContent = "Please enter correct postal code";
postalCodeCheck.className = "check";
sectionInputsAddress.appendChild(postalCodeCheck);

//INPUT POSTAL CODE
const inputPostalCode = document.createElement("input");
inputPostalCode.className = "inputPostalCode";
inputPostalCode.id = "inputPostalCode";
inputPostalCode.placeholder = "Postal Code";
inputPostalCode.type = "number";
inputPostalCode.maxLength = 5;
inputPostalCode.setAttribute("required", '');
sectionInputsAddress.appendChild(inputPostalCode);

//COUNTRY
const countryLabel = document.createElement("label");
countryLabel.className = "countryLabel";
countryLabel.textContent = "Country";
countryLabel.setAttribute("for", "country");
sectionInputsAddress.appendChild(countryLabel);

//SELECT COUNTRY
const inputCountry = document.createElement("select");
inputCountry.className = "country";
inputCountry.id = "country";
inputCountry.setAttribute("required", '');
sectionInputsAddress.appendChild(inputCountry);

const countries = [
  "Alemania",
  "Andorra",
  "España",
  "Francia",
  "Grecia",
];

//PHONE 
const phone = document.createElement("label");
phone.className = "phone";
phone.textContent = "Phone";
phone.setAttribute("for", "selectPhone");
sectionInputsAddress.appendChild(phone);

//CONTAINER PHONE
const divPhone = document.createElement("div");
divPhone.className = "divPhone";
sectionInputsAddress.appendChild(divPhone);

//SELECT PHONE
const selectPhone = document.createElement("select");
selectPhone.className = "selectPhone";
selectPhone.id = "selectPhone";
selectPhone.placeholder = "Phone";
selectPhone.setAttribute("required", '');
divPhone.appendChild(selectPhone);
const phonePrefixes = {
  "Alemania": "+49",
  "Andorra": "+376",
  "España": "+34",
  "Francia": "+33",
  "Grecia": "+30",
};
// country options
for (let i = 0; i < countries.length; i++) {
  const countryOption = document.createElement("option");
  countryOption.textContent = countries[i];
  inputCountry.appendChild(countryOption);
};

inputCountry.addEventListener("change", () => {
  const selectedCountry = inputCountry.value;
  const phonePrefix = phonePrefixes[selectedCountry];
  inputPhone.value = phonePrefix;
});

const phones = [
  "AND",
  "ESP",
  "FRA",
  "DEU",
  "GRC",
];
phones.forEach((phone) => {
  const option2 = document.createElement("option");
  option2.text = phone;
  selectPhone.add(option2);
});


//INPUT PHONE
const inputPhone = document.createElement("input");
inputPhone.className = "inputPhone";
inputPhone.id = "inputPhone";
inputPhone.placeholder = "Phone";
inputPhone.maxLength = 9;
inputPhone.setAttribute("required", '');
divPhone.appendChild(inputPhone);


// PHONE SPAM
const phoneCheck = document.createElement("span");
phoneCheck.textContent = "Please enter correct phone number";
phoneCheck.className = "check";
sectionInputsAddress.appendChild(phoneCheck);

//   BUTTONS
const divButtons2 = document.createElement("div");
divButtons2.className = "divButtons2";
fieldsetAddress.appendChild(divButtons2);

//CHECKBOX LABEL 
const boxLabel = document.createElement("label");
boxLabel.className = "boxLabel";
boxLabel.textContent = "This is my regular address";
boxLabel.setAttribute("for", "box");
divButtons2.appendChild(boxLabel);

//CHECKBOX
const box = document.createElement("input");
box.type = "checkbox";
box.className = "box";
box.id = "box";
// box.setAttribute("required", '');
divButtons2.appendChild(box);

// clear
const btnClearAddress = document.createElement("input");
btnClearAddress.className = "btn-Clear";
btnClearAddress.id = "btnClearAddress";
btnClearAddress.type = "reset";
btnClearAddress.value = "Clear form";
divButtons2.appendChild(btnClearAddress);


// Next
const btnNextAddress = document.createElement("input");
btnNextAddress.type = 'submit';
btnNextAddress.className = 'btn-Next';
btnNextAddress.id = 'btnNextAddress';
btnNextAddress.value = 'Next';
divButtons2.appendChild(btnNextAddress);
btnNextAddress.onclick = function() {

  if (inputFirstName.value === "") {
    firstNameCheck.style.display = "block";
    return false;
  }
  if (inputLastName.value === "") {
    firstLastCheck.style.display = "block";
    return false;
  }
  if (inputBirthday.value === "") {
    birthdayCheck.style.display = "block";
    return false;
  }
  if (inputAddress1.value === "") {
    address1Check.style.display = "block";
    return false;
  }
  if (inputPostalCode.value === "") {
    inputPostalCodeCheck.style.display = "block";
    return false;
  }
  if (inputCountry.value === "") {
    countryCheck.style.display = "block";
    return false;
  }
  if (inputPhone.value === "") {
    phoneCheck.style.display = "block";
    return false;

  } else if (formAddress.checkValidity()) {
    goToShipping();
  }
};