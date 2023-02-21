// Image & body
const body = document.body;
const cat_logo = document.getElementById("logo");
const git_logo = document.getElementById("git_logo");
// Menu
const card = document.getElementsByClassName("box_settings");
const text = document.getElementsByClassName("text_settings");
const selected_button = document.getElementsByClassName("selected_button");
// Buttons
const main = document.getElementById("main-btn");
const about = document.getElementById("about-btn");
const portfolio = document.getElementById("portfolio-btn");
const contact = document.getElementById("contact-btn");

// Switch Dark/Light mode
cat_logo.addEventListener("click", switch_button);

function switch_button() {
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
  body.style.background =
    "linear-gradient(90deg, rgba(222,177,255,1) 38%, rgba(255,163,163,1) 94%)";
  git_logo.style.filter = "invert(0%)";

  // Card
  for (var i = 0; i < card.length; i++) {
    card[i].style.backgroundColor = "rgba(255,163,163,0.2)";
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
  git_logo.style.filter = "invert(100%)";
  body.style.background =
    "linear-gradient(90deg, rgba(200, 0, 223, 1) 0%,rgba(67, 0, 117, 1) 49%,rgba(0, 0, 0, 1) 94%)";

  // Card
  for (var i = 0; i < card.length; i++) {
    card[i].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    card[i].style.border = "1px solid white";
    card[i].style.boxShadow = "1px 1px 10px 0px white";
    card[i].style.color = "white";
  }

  // Text
  for (var k = 0; k < text.length; k++) {
    text[k].style.color = "white";
  }
}

/// Switch selected button when triggering Dark/Light mode
const button_group = [main, about, portfolio, contact];

button_group.forEach((text) => {
  text.addEventListener("click", select);
});

function select() {
  main.textContent = "Main";
  portfolio.textContent = "Portfolio";
  about.textContent = "About";
  contact.textContent = "Contact";

  button_group.forEach((DeleteClass) => {
    DeleteClass.classList.remove("selected_button");
  });

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
