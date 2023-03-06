import { Language_settings, General_settings, Images, } from "../Global_settings/variables";
import { lang_button } from "./buttons";

/// Default Lang

export let CurrLang;

function load_lang() {
  
  if (navigator.language == "fr-FR" || navigator.language == "fr") {
    CurrLang = "fr"
  } else {
    CurrLang = "en" 
  }

  text_change()
  flag_style()

}
addEventListener("load", load_lang())


/// Stylizing

function flag_style() {

  if (CurrLang == "en") {
    Language_settings.mobile_english_button.style.filter = "blur(0px)"
    Language_settings.mobile_french_button.style.filter = "blur(.8px)"
    Language_settings.mobile_english_button.style.border = "1px solid white"
    Language_settings.mobile_french_button.style.border = "none"

  } else if (CurrLang == "fr") {
    Language_settings.mobile_english_button.style.filter = "blur(.8px)"
    Language_settings.mobile_french_button.style.filter = "blur(0px)"
    Language_settings.mobile_french_button.style.border = "1px solid white"
    Language_settings.mobile_english_button.style.border = "none"
  }
}

function selected_button_mark() {
  if (General_settings.selected[0]) {
    General_settings.selected[0].textContent =
      "> " + General_settings.selected[0].textContent + " <";
  }
  if (General_settings.sub_selected[0]) {
    General_settings.sub_selected[0].textContent =
      "> " + General_settings.sub_selected[0].textContent;
  }
}

function text_change() {
  if (CurrLang == "en") {
    
    Images.cat.alt = "Cat pixel art"

    Language_settings.french_button.classList.remove("selected_lang");
    Language_settings.english_button.classList.add("selected_lang");

    for (let i = 0; i < Language_settings.french_text.length; i++) {
      Language_settings.french_text[i].style.display = "none";
    }

    for (let i = 0; i < Language_settings.english_text.length; i++) {
      Language_settings.english_text[i].style.display = "unset";
    }
    

    if (Images.cat.style.filter == "invert(100%)") {
      Language_settings.french_button.style.color = "black";
      Language_settings.english_button.style.color = "green";
    } else {
      Language_settings.french_button.style.color = "white";
      Language_settings.english_button.style.color = "palevioletred";
    }

  } else if (CurrLang == "fr") {

    Images.cat.alt = "Pixel art d'un chat"

    Language_settings.french_button.classList.add("selected_lang");
    Language_settings.english_button.classList.remove("selected_lang");

    for (let i = 0; i < Language_settings.english_text.length; i++) {
      Language_settings.english_text[i].style.display = "none";
    }

    for (let i = 0; i < Language_settings.french_text.length; i++) {
      Language_settings.french_text[i].style.display = "unset";
    }
    
    if (Images.cat.style.filter == "invert(100%)") {
      Language_settings.english_button.style.color = "black";
      Language_settings.french_button.style.color = "green";
    } else {
      Language_settings.english_button.style.color = "white";
      Language_settings.french_button.style.color = "palevioletred";
    }
  }
}

/// Translation

function lang() {
  lang_button();
  text_change()
  selected_button_mark();
  flag_style()
}

Language_settings.french_button.addEventListener("click", french);
Language_settings.mobile_french_button.addEventListener("click", french);

function french() {
  CurrLang = "fr";
  lang();
}

Language_settings.english_button.addEventListener("click", english);
Language_settings.mobile_english_button.addEventListener("click", english);

function english() {
  CurrLang = "en";
  lang();
}
