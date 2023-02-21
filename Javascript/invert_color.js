let cat_logo = document.getElementById("logo");
let git_logo = document.getElementById("git_logo")
let body = document.body;
let card = document.getElementsByClassName("box_settings");
let text = document.getElementsByClassName("text_settings");
let menu = document.getElementsByClassName("accordion-item");
let btn = document.getElementsByTagName("button");

console.log(text);

cat_logo.addEventListener("click", switch_button);

function switch_button() {
  if (cat_logo.style.filter == "invert(100%)") {
    dark_mode();
  } else {
    light_mode();
  }
}

function light_mode() {
  
  // Body + Logo
  cat_logo.style.filter = "invert(100%)";
  body.style.background =
    "linear-gradient(90deg, rgba(222,177,255,1) 38%, rgba(255,163,163,1) 94%)";
  git_logo.style.filter = "invert(0%)"
  // Card
  for (var i = 0; i < card.length; i++) {
    card[i].style.backgroundColor = "rgba(255,163,163,0.2)";
    card[i].style.border = "1px solid white";
    card[i].style.boxShadow = "1px 1px 10px 0px black";
    card[i].style.color = "rgb(67, 0, 117, 1)";
  }

  // Text
  for (var k = 0; k < text.length; k++) {
    text[k].style.color = "rgb(67, 0, 117, 1)";
  }
}

function dark_mode() {
  
  // Body + Logo
  cat_logo.style.filter = "invert(0%)";
  git_logo.style.filter = "invert(100%)"
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
