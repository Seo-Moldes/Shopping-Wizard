const sectionShipping = document.createElement("section");
sectionShipping.className = "principal3";

// FORM
const formShipping = document.createElement("form");
formShipping.className = "formType";
formShipping.id = "formShipping";
sectionShipping.appendChild(formShipping);

// FIELDSET
const fieldsetShipping = document.createElement("fieldset");
fieldsetShipping.className = "background-3";
formShipping.appendChild(fieldsetShipping);

// SHIPPING
const shipping = document.createElement("legend");
shipping.className = "titleShipping";
shipping.textContent = "Shipping type";
fieldsetShipping.appendChild(shipping);

// MAIN
const mainShipping = document.createElement("div");
mainShipping.className = "mainShipping";
fieldsetShipping.appendChild(mainShipping);

// SHIPPING TYPE FREE

// Container Free
const containerFreeShipping = document.createElement("div");
containerFreeShipping.className = "containerShipping";
mainShipping.appendChild(containerFreeShipping);


// input FREE SHIPMENT
const inputShippingFree = document.createElement("input");
inputShippingFree.className = "inputShipping";
inputShippingFree.id = "freeShipment";
inputShippingFree.type = "radio";
inputShippingFree.value = "Free Shipping";
inputShippingFree.setAttribute("checked", "");
inputShippingFree.name = "shippingType";
containerFreeShipping.appendChild(inputShippingFree);

// MESSAGE FREE SHIPMENT
const freedLabel = document.createElement("label");
freeLabel.className = "freeLabel";
freeLabel.style.display = "none";
freeLabel.textContent = "Your shipment will be delivered";
fieldsetShipping.appendChild(freeLabel);

inputShippingFree.addEventListener("click", () => {
  if (inputShippingFree.checked) {
    freeLabel.style.display = "block";
  };
});

const date = new Date(); 
const formattedDate = date.toLocaleDateString();

const inputDate = document.createElement("input");
inputDate.type = "date";
inputDate.value = formattedDate;


// label
const shippingTypeFree = document.createElement("label");
shippingTypeFree.className = "shippingType";
shippingTypeFree.textContent = "Free shipping (72h) no extra cost";
shippingTypeFree.setAttribute("for", "freeShipment");
containerFreeShipping.appendChild(shippingTypeFree);

// Container
const containerExtraShipping = document.createElement("div");
containerExtraShipping.className = "containerShipping";
mainShipping.appendChild(containerExtraShipping);

// input
const inputShippingExtra = document.createElement("input");
inputShippingExtra.className = "inputShipping";
inputShippingExtra.id = "extraShipment";
inputShippingExtra.type = "radio";
inputShippingExtra.value = "Extra Shipping";
inputShippingExtra.name = "shippingType";
containerExtraShipping.appendChild(inputShippingExtra);

// label
const shippingTypeExtra = document.createElement("label");
shippingTypeExtra.className = "shippingType";
shippingTypeExtra.textContent = "Extra Shipping (48h) +5€";
shippingTypeExtra.setAttribute("for", "extraShipment");
containerExtraShipping.appendChild(shippingTypeExtra);

// SHIPPING TYPE PREMIUM

// Container
const containerPremiumShipping = document.createElement("div");
containerPremiumShipping.className = "containerShipping";
mainShipping.appendChild(containerPremiumShipping);

// input
const inputShippingTypePremium = document.createElement("input");
inputShippingTypePremium.className = "inputShipping";
inputShippingTypePremium.id = "premiumShipment";
inputShippingTypePremium.type = "radio";
inputShippingTypePremium.value = "Premium Shipping";
inputShippingTypePremium.name = "shippingType";
containerPremiumShipping.appendChild(inputShippingTypePremium);

// label
const shippingTypePremium = document.createElement("label");
shippingTypePremium.className = "shippingType";
shippingTypePremium.textContent = "Premium Shipping (24h) +10€";
shippingTypePremium.setAttribute("for", "premiumShipment");
containerPremiumShipping.appendChild(shippingTypePremium);


// GIFT

// container
const giftContainer = document.createElement("div");
giftContainer.className = "giftContainer";
fieldsetShipping.appendChild(giftContainer);

// input
const inputGift = document.createElement("input");
inputGift.className = "gift";
inputGift.id = "giftSelected";
inputGift.type = "checkbox";
inputGift.addEventListener("click", () => {
  if (inputGift.checked) {
    giftTextContainer.style.display = "block";
    giftTextLabel.style.display = "block";
    message.style.display = "block";

    giftImgContainer.style.display = "block";
    giftImgInput.style.display = "block";
    giftImgLabel.style.display = "block";
  } else {
    giftTextContainer.style.display = "none";
    giftTextLabel.style.display = "none";
    message.style.display = "none";
    giftImgContainer.style.display = "none";
    giftImgInput.style.display = "none";
    giftImgLabel.style.display = "none";
  }
});
giftContainer.appendChild(inputGift);

// label
const giftLabel = document.createElement("label");
giftLabel.className = "giftLabel";
giftLabel.textContent = "Is it a gift?";
giftLabel.setAttribute("for", "giftSelected");
giftContainer.appendChild(giftLabel);

// container for the gift message
const giftTextContainer = document.createElement("div");
giftTextContainer.className = "giftTextContainer";
giftTextContainer.style.display = "none";
giftContainer.appendChild(giftTextContainer);


// laber for the text gift message
const giftTextLabel = document.createElement("label");
giftTextLabel.className = "giftTextLabel";
giftTextLabel.textContent = "Write your message";
giftTextLabel.style.display = "none";
giftTextContainer.appendChild(giftTextLabel);

// Text area for the gift message
const message = document.createElement("textarea");
message.className = "message";
message.maxlength = 200;
message.style.display = "none";
message.style.width = "400px";
message.style.height = "150px";
message.style.padding = "10px";
giftTextContainer.appendChild(message);

// container for the image
const giftImgContainer = document.createElement("div");
giftImgContainer.className = "giftImgContainer";
giftContainer.appendChild(giftImgContainer);
giftImgContainer.style.display = "none";

// input fot the image btn
const giftImgInput = document.createElement("input");
giftImgInput.className = "giftImg";
giftImgInput.id = "giftImgInput";
giftImgInput.type = "file";
giftImgInput.style.display = "none";
giftImgContainer.appendChild(giftImgInput);

// label for the image btn
const giftImgLabel = document.createElement("label");
giftImgLabel.className = "GiftImgLabel";
giftImgLabel.style.display = "none";
giftImgLabel.textContent = "Select your image";
giftImgLabel.setAttribute("for", "giftImgInput");
giftImgContainer.appendChild(giftImgLabel);


// BUTTONS CONTAINER
const divButtons3 = document.createElement("div");
divButtons3.className = "divButtons";
fieldsetShipping.appendChild(divButtons3);

// CLEAR BUTTON
const btnClearShipping = document.createElement("input");
btnClearShipping.className = "btn-Clear";
btnClearShipping.id = "btnClearShipping";
btnClearShipping.type = "reset";
btnClearShipping.value = "Clear form";
divButtons3.appendChild(btnClearShipping);


// Next
const btnNextShipping = document.createElement("input");
btnNextShipping.type = 'submit';
btnNextShipping.className = 'btn-Next';
btnNextShipping.id = 'btnNextShipping';
btnNextShipping.value = 'Next';
divButtons3.appendChild(btnNextShipping);
btnNextShipping.onclick = function() {
  goToFinish();
}


