import { General_settings } from "../variables";
import { Images } from "../variables";

const Logo_list = [
  Images.git_large,
  Images.git_small,
  Images.linkedin_large,
  Images.linkedin_small,
];

/// Switch Dark/Light mode

Images.cat.addEventListener("click", switch_button);

function switch_button() {
  if (Images.cat.style.filter == "invert(100%)") {
    dark_mod();
  } else {
    light_mod();
  }
}

/// Light mod
function light_mod() {
 
  // Rain effect
  General_settings.rain.style.visibility= "hidden"

  // Default bubble
  Images.default_bubble.style.visibility = "hidden";
 
  // Light mod bubble
  Images.switched_bubble.style.visibility = "visible";
  Images.switched_bubble.src = "/Ressource/Image/light_bubble.gif";
  Images.switched_bubble.style.filter="invert(0%)"

  // Background
  General_settings.body.style.backgroundImage =
    "url(/Ressource/Image/light.jpg)";

  // Cat
  Images.cat.style.filter = "invert(100%)";
  Images.cat.src = "/Ressource/Image/invert.gif";

  // Logo
  for (let i = 0; i < Logo_list.length; i++) {
    Logo_list[i].style.filter = "invert(0%)";
  }

  // Card
  for (var i = 0; i < General_settings.box.length; i++) {
    General_settings.box[i].style.backgroundColor = "rgba(255,163,163,0.7)";
    General_settings.box[i].style.border = "1px solid white";
    General_settings.box[i].style.boxShadow = "1px 1px 10px 0px black";
    General_settings.box[i].style.color = "rgb(67, 0, 117, 1)";
  }

  // Text
  for (var i= 0; i < General_settings.text.length; i++) {
    General_settings.text[i].style.color = "black";
  }

  for (let i = 0; i < General_settings.selected.length; i++) {
    General_settings.selected[i].style.color = "white";
    General_settings.selected[i].style.textShadow = "black 1px 2px";
  }
}
/// Dark mod
function dark_mod() {
  
  // Rain effect
  General_settings.rain.style.visibility= "visible"
  // Dark mod bubble
  Images.switched_bubble.src = "/Ressource/Image/dark_bubble.gif";
  Images.switched_bubble.style.filter="invert(100%)"

  // Background
  General_settings.body.style.backgroundImage =
    "url(/Ressource/Image/dark.jpg)";

  // Cat
  Images.cat.style.filter = "invert(0%)";
  Images.cat.src = "/Ressource/Image/base.gif";

  // Logo
  for (let i = 0; i < Logo_list.length; i++) {
    Logo_list[i].style.filter = "invert(100%)";
  }

  // Card
  for (let i = 0; i < General_settings.box.length; i++) {
    General_settings.box[i].style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    General_settings.box[i].style.border = "1px solid white";
    General_settings.box[i].style.boxShadow = "1px 1px 10px 0px white";
    General_settings.box[i].style.color = "white";
  }

  // Text
  for (let i = 0; i < General_settings.text.length; i++) {
    General_settings.text[i].style.color = "white";
  }

  for (let i = 0; i < General_settings.selected.length; i++) {
    General_settings.selected[i].style.color = "yellow";
    General_settings.selected[i].style.textShadow = "red 1px 2px";
  }
}