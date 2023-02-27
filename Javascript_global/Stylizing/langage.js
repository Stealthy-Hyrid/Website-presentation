import { Language_settings, General_settings, Images } from "../Global_settings/variables";
import { lang_select_button } from "./buttons";

export let CurrLang = "en";

/// Check current language
if (CurrLang == "en") {
  for (let i = 0; i < Language_settings.french_text.length; i++) {
    Language_settings.french_text[i].style.display = "none";

    for (let i = 0; i < Language_settings.english_text.length; i++) {
      Language_settings.english_text[i].style.display = "unset";
    }
  }
} else if (CurrLang == "fr") {
  for (let i = 0; i < Language_settings.english_text.length; i++) {
    Language_settings.english_text[i].style.display = "none";
  }

  for (let i = 0; i < Language_settings.french_text.length; i++) {
    Language_settings.french_text[i].style.display = "unset";
  }
}

/// Buttons translation

// Fr 
Language_settings.french_button.addEventListener("click", french);
Language_settings.mobile_french_button.addEventListener("click", french);

function french() {
  CurrLang = "fr";

  lang_select_button();
  select_mark();

  // Switch Bubble language
  Images.default_bubble.src = "/Ressource/Image/speech_fr.gif";
  Images.default_bubble.style.width = "220px";

  // Lang button coloring

  Language_settings.french_button.classList.add("selected_lang");
  Language_settings.english_button.classList.remove("selected_lang");

  if (Images.cat.style.filter == "invert(100%)") {
    Language_settings.english_button.style.color = "black";
    Language_settings.french_button.style.color = "green";
  } else {
    Language_settings.english_button.style.color = "white";
    Language_settings.french_button.style.color = "palevioletred";
  }
}

// En 
Language_settings.english_button.addEventListener("click", english);
Language_settings.mobile_english_button.addEventListener("click", english);

function english() {
  CurrLang = "en";

  lang_select_button();
  select_mark();

  // Switch Bubble language
  Images.default_bubble.style.width = "200px";
  Images.default_bubble.src = "/Ressource/Image/speech.gif";

  // Lang button coloring
  Language_settings.french_button.classList.remove("selected_lang");
  Language_settings.english_button.classList.add("selected_lang");

  if (Images.cat.style.filter == "invert(100%)") {
    Language_settings.french_button.style.color = "black";
    Language_settings.english_button.style.color = "green";
  } else {
    Language_settings.french_button.style.color = "white";
    Language_settings.english_button.style.color = "palevioletred";
  }
}

// Keep the button select style after switching
function select_mark() {
  if (General_settings.selected[0]) {
    General_settings.selected[0].textContent =
      "> " + General_settings.selected[0].textContent + " <";
  }
  if (General_settings.sub_selected[0]) {
    General_settings.sub_selected[0].textContent =
      "> " + General_settings.sub_selected[0].textContent;
  }
}
