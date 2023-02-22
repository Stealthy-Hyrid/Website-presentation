// Image & body
const body = document.body;
const cat_logo = document.getElementById("logo");
const git_logo = document.getElementById("git_logo");
const git_logo_small = document.getElementById("git_logo_small");
// Menu
const card = document.getElementsByClassName("box_settings");
const text = document.getElementsByClassName("text_settings");
const selected_button = document.getElementsByClassName("selected_button");
// Buttons
const main = document.getElementById("main-btn");
const about = document.getElementById("about-btn");
const portfolio = document.getElementById("portfolio-btn");
const contact = document.getElementById("contact-btn");
// Mobile button
const main_mobile = document.getElementById("main_mobile");
const about_mobile = document.getElementById("about_mobile");
const portfolio_mobile = document.getElementById("portfolio_mobile");
const link_mobile = document.getElementById("link_mobile");
const contact_mobile = document.getElementById("contact_mobile");

// Switch Dark/Light mode

cat_logo.addEventListener("click", color_switch_button);

function color_switch_button() {
  if (cat_logo.style.filter == "invert(100%)") {
    dark_mode();
    selected_button[0].style.color = "yellow";
    
  } else {
    light_mode();
    selected_button[0].style.color = "red";
  }
}
function light_mode() {
  // Body + Logo
  cat_logo.style.filter = "invert(100%)";
  cat_logo.src = "/Ressource/Image/invert.gif";
  body.style.backgroundImage = "url(/Ressource/Image/869.jpg)";
  git_logo.style.filter = "invert(0%)";
  git_logo_small.style.filter = "invert(0%)";

  // Card
  for (var i = 0; i < card.length; i++) {
    card[i].style.backgroundColor = "rgba(255,163,163,0.7)";
    card[i].style.border = "1px solid white";
    card[i].style.boxShadow = "1px 1px 10px 0px black";
    card[i].style.color = "rgb(67, 0, 117, 1)";
  }

  // Text
  for (var k = 0; k < text.length; k++) {
    text[k].style.color = "black";
  }
}
function dark_mode() {
  // Body + Logo
  cat_logo.style.filter = "invert(0%)";
  cat_logo.src = "/Ressource/Image/base.gif";
  body.style.backgroundImage = "url(/Ressource/Image/722829.jpg)";
  git_logo.style.filter = "invert(100%)";
  git_logo_small.style.filter = "invert(100%)";

  // Card
  for (var i = 0; i < card.length; i++) {
    card[i].style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    card[i].style.border = "1px solid white";
    card[i].style.boxShadow = "1px 1px 10px 0px white";
    card[i].style.color = "white";
  }

  // Text
  for (var k = 0; k < text.length; k++) {
    text[k].style.color = "white";
  }
}

///Trigger button color + Switch depending of

const button_group = [
  main,
  about,
  portfolio,
  contact,
  main_mobile,
  about_mobile,
  portfolio_mobile,
  contact_mobile,
  link_mobile,
];

button_group.forEach((text) => {
  text.addEventListener("click", button_select);
});

function button_select() {
  button_text_reset();
  
  this.textContent = "> " + this.textContent + " <";
  this.classList.add("selected_button");

  if (cat_logo.style.filter == "invert(100%)") {
    for (let i = 0; i < button_group.length; i++) {
      button_group[i].style.color = "black";
    }
    this.style.color = "red";
  } else {
    for (let i = 0; i < button_group.length; i++) {
      button_group[i].style.color = "white";
    }
    this.style.color = "yellow";
  }
}

function button_text_reset() {
  button_group.forEach((DeleteClass) => {
    DeleteClass.classList.remove("selected_button");
  });
  button_group[0].textContent = "Main";
  button_group[4].textContent = "Main";
  button_group[1].textContent = "About";
  button_group[5].textContent = "About";
  button_group[2].textContent = "Portfolio";
  button_group[6].textContent = "Portfolio";
  button_group[3].textContent = "Contact";
  button_group[7].textContent = "Contact";
  button_group[8].textContent = "Link";
}
