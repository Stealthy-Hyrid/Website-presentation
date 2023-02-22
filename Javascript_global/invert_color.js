import { General_settings } from "./variables";
import { Images } from "./variables";
import { Desktop_buttons } from "./variables";

// Switch Dark/Light mode

Images.cat.addEventListener("click", switch_button);

function switch_button() {
  if (Images.cat.style.filter == "invert(100%)") {
    dark_mod();
    Desktop_buttons.selected[0].style.color = "yellow";
  } else {
    light_mod();
    Desktop_buttons.selected[0].style.color = "red";
  }
}

function light_mod() {
  // Body + Logo
  Images.cat.style.filter = "invert(100%)";
  Images.cat.src = "/Ressource/Image/invert.gif";
  General_settings.body.style.backgroundImage = "url(/Ressource/Image/light.jpg)";
  Images.git_large.style.filter = "invert(0%)";
  Images.git_small.style.filter = "invert(0%)";

  // Card
  for (var i = 0; i < General_settings.box.length; i++) {
    General_settings.box[i].style.backgroundColor = "rgba(255,163,163,0.7)";
    General_settings.box[i].style.border = "1px solid white";
    General_settings.box[i].style.boxShadow = "1px 1px 10px 0px black";
    General_settings.box[i].style.color = "rgb(67, 0, 117, 1)";
  }

  // Text
  for (var k = 0; k < General_settings.text.length; k++) {
    General_settings.text[k].style.color = "black";
  }
}

function dark_mod() {
  // Body + Logo
  Images.cat.style.filter = "invert(0%)";
  Images.cat.src = "/Ressource/Image/base.gif";
  General_settings.body.style.backgroundImage = "url(/Ressource/Image/dark.jpg)";
  Images.git_large.style.filter = "invert(100%)";
  Images.git_small.style.filter = "invert(100%)";

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
}