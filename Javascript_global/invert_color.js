import { General_settings } from "./variables";
import { Images } from "./variables";

// Switch Dark/Light mode

Images.cat.addEventListener("click", switch_button);

function switch_button() {
  if (Images.cat.style.filter == "invert(100%)") {
    dark_mod();
    General_settings.selected[0].style.color = "yellow";
    General_settings.selected[1].style.color = "yellow";
  } else {
    light_mod();
    Images.default_bubble.style.visibility="hidden"
    Images.switched_bubble.style.visibility="visible"
    General_settings.selected[0].style.color = "white";
    General_settings.selected[1].style.color = "white";
  }
}

const Logo_list = [
  Images.git_large,
  Images.git_small,
  Images.linkedin_large,
  Images.linkedin_small,
];

function light_mod() {
 
  // Body + Logo
  Images.cat.style.filter = "invert(100%)";
  Images.cat.src = "/Ressource/Image/invert.gif";
  Images.switched_bubble.src="/Ressource/Image/light_bubble.png"
  General_settings.body.style.backgroundImage =
    "url(/Ressource/Image/light.jpg)";

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
  for (var k = 0; k < General_settings.text.length; k++) {
    General_settings.text[k].style.color = "black";
  }
}

function dark_mod() {
  
  // Body + Logo
  Images.cat.style.filter = "invert(0%)";
  Images.cat.src = "/Ressource/Image/base.gif";
  Images.switched_bubble.src="/Ressource/Image/dark_bubble.png"
  
  General_settings.body.style.backgroundImage =
    "url(/Ressource/Image/dark.jpg)";

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
}
