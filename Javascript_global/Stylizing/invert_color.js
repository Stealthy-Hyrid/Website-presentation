import { General_settings } from "../Global_settings/variables";
import { Images } from "../Global_settings/variables";
import { Hyperlink } from "../Global_settings/variables";

/// Switch Dark/Light mode



Images.cat.addEventListener("click", switch_button);

function switch_button() {
  if (Images.cat.style.filter == "invert(100%)") {
    dark_mod();
  } else {
    light_mod();
  }
}

function light_mod() {

  // Rain effect
  General_settings.rain.style.display = "none";

  // Hiding bubble
  for (let i = 0; i < Images.bubble.length; i++) {
    Images.bubble[i].style.visibility = "hidden";
  }

  // Background
  General_settings.body.style.backgroundImage =
    "url(/Ressource/Image/light.jpg)";

  // Cat
  Images.cat.style.filter = "invert(100%)";
  Images.cat.src = "/Ressource/Image/invert.gif";

  // SVG
  for (let i = 0; i < Images.svg_bw.length; i++) {
    Images.svg_bw[i].style.filter = "invert(0%)"
  }


  // Card
  for (var i = 0; i < General_settings.box.length; i++) {
    General_settings.box[i].style.backgroundColor = "rgba(255,163,163,0.7)";
    General_settings.box[i].style.border = "1px solid white";
    General_settings.box[i].style.boxShadow = "1px 1px 10px 0px black";
    General_settings.box[i].style.color = "black";
  }

  // Text
  for (var i = 0; i < General_settings.text.length; i++) {
    General_settings.text[i].style.color = "black";
  }

  for (let i = 0; i < General_settings.selected.length; i++) {
    General_settings.selected[i].style.color = "white";
    General_settings.selected[i].style.textShadow = "black 1px 2px";
  }

  for (let i = 0; i < General_settings.sub_selected.length; i++) {
    General_settings.sub_selected[i].style.color = "white";
    General_settings.sub_selected[i].style.textShadow = "black 1px 2px";
  }

  // Hyperlink
  
  for (let i = 0; i < Hyperlink.a.length; i++) {
    Hyperlink.a[i].style.color = "white";
  }

  // Langue button

  General_settings.selected_lang[0].style.color = "green";
}

function dark_mod() {
  // Rain effect
  General_settings.rain.style.display = "unset";

  // Background
  General_settings.body.style.backgroundImage =
    "url(/Ressource/Image/dark.jpg)";

  // Cat
  Images.cat.style.filter = "invert(0%)";
  Images.cat.src = "/Ressource/Image/base.gif";

  // SVG
  for (let i = 0; i < Images.svg_bw.length; i++) {
    Images.svg_bw[i].style.filter = "invert(100%)"
  }

  // Card
  for (let i = 0; i < General_settings.box.length; i++) {
    General_settings.box[i].style.backgroundColor = "rgba(0, 0, 0, 0.8)";
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

  for (let i = 0; i < General_settings.sub_selected.length; i++) {
    General_settings.sub_selected[i].style.color = "yellow";
    General_settings.sub_selected[i].style.textShadow = "red 1px 2px";
  }

   // Hyperlink
  
   for (let i = 0; i < Hyperlink.a.length; i++) {
    Hyperlink.a[i].style.color = "yellow";
  }

  // Langue button

  General_settings.selected_lang[0].style.color = "palevioletred";
}
