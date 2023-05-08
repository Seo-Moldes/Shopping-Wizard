const sectionFinish = document.createElement("section");
sectionFinish.className = "principal4";

// FORM
const formFinish = document.createElement("form");
formFinish.className = "formType";
formFinish.id = "formFinish";
sectionFinish.appendChild(formFinish);

// FIELDSET
const fieldsetFinish = document.createElement("fieldset");
fieldsetFinish.className = "background-4";
fieldsetFinish.id = "background4";
formFinish.appendChild(fieldsetFinish);

// DIV COVER
const divCover1 = document.createElement("div");
divCover1.className = "divCover1";
fieldsetFinish.appendChild(divCover1);

//DIV COMPRA
const divCover2 = document.createElement("div");
divCover2.className = "divCover2";
fieldsetFinish.appendChild(divCover2);

// TITLE COVER
const titleCover = document.createElement("legend");
titleCover.className = "titleCover";
titleCover.textContent = "Your Purchase";
divCover1.appendChild(titleCover);

// TITLE COMPRA
const titlePurchase = document.createElement("legend");
titlePurchase.className = "titlePurchase";
titlePurchase.textContent = "Your order";
// titlePurchase.style.color= "white";
// // titePurchase.style.position= "absolute";
// titlePurchase.style.fontSize= "20px";
// titlePurchase.style.textTransform= "uppercase";
// titlePurchase.style.fontWeight= "bold";
// titlePurchase.style.marginTop="400px"
divCover2.appendChild(titlePurchase);

// DIV PRODUCTO
const divCover3 = document.createElement("div");
divCover3.className = "divCover3";
divCover3.id = "coverDiv3";
divCover1.appendChild(divCover3);

// DIV CARACTERISTICAS
const divCover4 = document.createElement("div");
divCover4.className = "divCover4";
divCover1.appendChild(divCover4);

// DIV CARACTERISTICAS
const inputFinish = document.createElement("input");
inputFinish.className = "inputFinishClass";
inputFinish.type = "checkbox";
inputFinish.id = "inputFinish";
inputFinish.setAttribute("required", "");
divCover1.appendChild(inputFinish);

// LABEL CHECKBOX
const labelFinish = document.createElement("label");
labelFinish.className = "finishLabel";
labelFinish.textName = "finishLabel";
labelFinish.textContent = "I have read and I accept the terms and conditions"
labelFinish.setAttribute("for", "inputFinish");
divCover1.appendChild(labelFinish);

// SPAN FINISH
const spanFinish = document.createElement("span");
spanFinish.className = "spanFinish";
spanFinish.textContent = "Please, accept terms and conditions.";
divCover1.appendChild(spanFinish);

// Next
const btnFinish = document.createElement("input");
btnFinish.type = 'submit';
btnFinish.className = 'btnFinish';
btnFinish.id = 'btnFinishId';
btnFinish.value = 'Finish';
divCover1.appendChild(btnFinish);





