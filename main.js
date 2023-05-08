// //We load the functions when we start the webpage
// window.onload = function() {
//   changeBackground();
//   changeBackground2()
// };

// ANOTHER PRODUCT1 DECLARATION
const anotherProduct1 = document.querySelector(".anotherProduct1");
anotherProduct1.addEventListener("click", changeBackground);

// FUNCTION CHANGE BACKGROUND
function changeBackground() {
  // variables
  let price = document.querySelector(".price");
  let description = document.querySelector(".descriptionProduct");
  let big = document.querySelector(".bigProduct");
  let another1 = document.querySelector(".anotherProduct1");
  let small1 = document.querySelector(".smallProduct1");
  let small2 = document.querySelector(".smallProduct2");
  let small3 = document.querySelector(".smallProduct3");

  if (another1.style.backgroundImage.match("../Assets/img/metroid/metroid1.gif")) {
    another1.style.backgroundImage = "url('../Assets/img/pacman/pacman1.gif')";
    big.style.backgroundImage = "url('../Assets/img/metroid/metroid1.gif')";

    // for small images
    small1.style.backgroundImage = "url('../Assets/img/metroid/metroid2.gif')";
    small2.style.backgroundImage = "url('../Assets/img/metroid/metroid3.gif')";
    small3.style.backgroundImage = "url('../Assets/img/metroid/metroid4.gif')";

    // for description
    description.textContent = "Cuphead is a classic run and gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era:traditional hand drawn cel animation, watercolor backgrounds, and original jazz recordings.";
    price.textContent = "From 59,95€";
  } else {
    another1.style.backgroundImage = "url('../Assets/img/metroid/metroid1.gif')";
    big.style.backgroundImage = "url('../Assets/img/pacman/pacman1.gif')";

    // for small images
    small1.style.backgroundImage = "url('../Assets/img/pacman/pacman2.gif')";
    small2.style.backgroundImage = "url('../Assets/img/pacman/pacman3.gif')";
    small3.style.backgroundImage = "url('../Assets/img/pacman/pacman4.gif')";

    // for description
    description.textContent =
      "Dark Souls 3 takes place in a transitory place, revolving around the first flame and the cycle of fire and dark. You play as a protagonist whose goal is to find and return the five Lords of Cinder to their thrones at Firelink Shrine in order to link the flame again";
    price.textContent = "From 79,95€";
  }
}

// ANOTHER PRODUCT2 DECLARATION
const anotherProduct2 = document.querySelector(".anotherProduct2");
anotherProduct2.addEventListener("click", changeBackground2);

function changeBackground2() {
  let price = document.querySelector(".price");
  let description = document.querySelector(".descriptionProduct");
  let big = document.querySelector(".bigProduct");
  let another1 = document.querySelector(".anotherProduct1");
  let another2 = document.querySelector(".anotherProduct2");
  let small1 = document.querySelector(".smallProduct1");
  let small2 = document.querySelector(".smallProduct2");
  let small3 = document.querySelector(".smallProduct3");

  if (another2.style.backgroundImage.match("../Assets/img/mariobros/mario1.gif")) {
    another2.style.backgroundImage = "url('../Assets/img/pacman/pacman1.gif')";
    big.style.backgroundImage = "url('../Assets/img/mariobros/mario1.gif')";
    another1.style.backgroundImage = "url('../Assets/img/metroid/metroid1.gif')";

    // para las imagenes en miniatura
    small1.style.backgroundImage = "url('../Assets/img/mariobros/mario2.gif')";
    small2.style.backgroundImage = "url('../Assets/img/mariobros/mario3.gif')";
    small3.style.backgroundImage = "url('../Assets/img/mariobros/mario4.gif')";

    // para la descripcion
    description.textContent =
      "Players take the role of an unnamed space marine, known as the Doom Slayer, as he battles demonic forces from Hell that have been unleashed by the Union Aerospace Corporation within their energy-mining facility on Mars.";
    price.textContent = "From 49,95€";
  } else {
    big.style.backgroundImage = "url('../Assets/img/pacman/pacman1.gif')";
    another2.style.backgroundImage = "url('../Assets/img/mariobros/mario1.gif')";

    // para las imagenes en miniatura
    small1.style.backgroundImage = "url('../Assets/img/pacman/pacman2.gif')";
    small2.style.backgroundImage = "url('../Assets/img/pacman/pacman3.gif')";
    small3.style.backgroundImage = "url('../Assets/img/pacman/pacman4.gif')";

    description.textContent =
      "Dark Souls 3 takes place in a transitory place, revolving around the first flame and the cycle of fire and dark. You play as a protagonist whose goal is to find and return the five Lords of Cinder to their thrones at Firelink Shrine in order to link the flame again";

    price.textContent = "From 79,95€";
  }
}

const buttonBuy = document.querySelector('.price');
buttonBuy.addEventListener("click", myForm);
function myForm() {
  //timerOn();
  main.removeChild(wrapper);
  // main.appendChild(tracker);
  main.appendChild(section);
}

function goToAddress() {
  //timerOn();
  main.removeChild(section);
  // main.appendChild(tracker);
  main.appendChild(sectionAddress);
}

function goToShipping() {
  //timerOn();
  main.removeChild(sectionAddress);
  // main.appendChild(tracker);
  main.appendChild(sectionShipping);
}
function goToFinish() {
  //timerOn();
  main.removeChild(sectionShipping);
  // main.appendChild(tracker);
  main.appendChild(sectionFinish);
}

