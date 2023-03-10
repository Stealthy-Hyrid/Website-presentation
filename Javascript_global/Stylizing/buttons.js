import { Images } from "../Global_settings/variables";
import { Desktop_buttons } from "../Global_settings/variables";
import { Mobile_buttons } from "../Global_settings/variables";
import { Language_settings } from "../Global_settings/variables";
import { CurrLang } from "./language";

/// Buttons triggers
const index_button_group = [
  Desktop_buttons.main,
  Desktop_buttons.langage,
  Desktop_buttons.link,
  Mobile_buttons.about,
  Mobile_buttons.portfolio,
  Mobile_buttons.contact,
  Mobile_buttons.link,
  Mobile_buttons.ressource,
];
const sub_button_group = [
  Desktop_buttons.about,
  Desktop_buttons.portfolio,
  Desktop_buttons.contact,
  Desktop_buttons.ressource,
];

index_button_group.forEach((text) => {
  text.addEventListener("click", select_button);
});

sub_button_group.forEach((text) => {
  text.addEventListener("click", select_sub_button);
});

/// Select button
function select_button() {
  
  // Checking if re-click
  if (this.classList.contains("selected_button")) {
    this.classList.remove("sub_selected_button");

    if (Images.cat.style.filter == "invert(100%)") {
      this.style.color = "black";
    } else {
      this.style.color = "white";
    }
  
    button_text_reset();

  } else {

    // Reset
    button_text_reset();

    /// Display which button is clicked on and reset others
    this.textContent = "> " + this.textContent + " <";
    this.classList.add("selected_button");

    /// Invert menu buttons color based of Dark/Light mod
    if (Images.cat.style.filter == "invert(100%)") {
      for (let i = 0; i < index_button_group.length; i++) {
        index_button_group[i].style.color = "black";
      }
      this.style.color = "white";
      this.style.textShadow = "black 1px 2px";
    } else {
      for (let i = 0; i < index_button_group.length; i++) {
        index_button_group[i].style.color = "white";
      }
      this.style.textShadow = "red 1px 2px";
      this.style.color = "yellow";
    }
  }
}
function select_sub_button() {
  // Checking if re-click
  if (this.classList.contains("sub_selected_button")) {
    this.classList.remove("sub_selected_button");
    if (Images.cat.style.filter == "invert(100%)") {
      this.style.color = "black";
    } else {
      this.style.color = "white";
    }
    sub_button_text_reset();

  } else {

    sub_button_text_reset();
    /// Display which button is clicked on and reset others
    this.textContent = "> " + this.textContent;
    this.classList.add("sub_selected_button");

    /// Invert menu buttons color based of Dark/Light mod
    if (Images.cat.style.filter == "invert(100%)") {
      for (let i = 0; i < sub_button_group.length; i++) {
        sub_button_group[i].style.color = "black";
      }
      this.style.color = "white";
      this.style.textShadow = "black 1px 2px";
    } else {
      for (let i = 0; i < sub_button_group.length; i++) {
        sub_button_group[i].style.color = "white";
      }
      this.style.textShadow = "red 1px 2px";
      this.style.color = "yellow";
    }
  }
}

/// Reset buttons
export function button_text_reset() {
  index_button_group.forEach((Reset_this) => {
    Reset_this.classList.remove("selected_button");
    Reset_this.style.textShadow = "unset";
  });

  main_button();
}
export function sub_button_text_reset() {
  sub_button_group.forEach((Reset_this) => {
    Reset_this.classList.remove("sub_selected_button");
    Reset_this.style.textShadow = "unset";
  });

  sub_button();
}

/// Language switch for selected buttons
export function lang_button() {
  main_button();
  sub_button();
}
function main_button() {
  if (CurrLang == "fr") {
    index_button_group[0].textContent = "Index";
    index_button_group[1].textContent = "Langue";
    index_button_group[3].textContent = "Pr??sentation";
    index_button_group[2].textContent = "Liens";
    index_button_group[6].textContent = "Liens";
    index_button_group[4].textContent = "Comp??tences";
  } else if (CurrLang == "en") {
    index_button_group[0].textContent = "Main";
    index_button_group[3].textContent = "About me";
    index_button_group[1].textContent = "Language";
    index_button_group[2].textContent = "Links";
    index_button_group[6].textContent = "Links";
    index_button_group[4].textContent = "Skill set";
  }
  index_button_group[7].textContent = "Ressource";
 
};
function sub_button() {
  if (CurrLang == "fr") {
    sub_button_group[0].textContent = "Pr??sentation";
    sub_button_group[1].textContent = "Comp??tences";
  } else if (CurrLang == "en") {
    sub_button_group[0].textContent = "About me";
    sub_button_group[1].textContent = "Skill set";
  }
  sub_button_group[3].textContent = "Ressource";
  sub_button_group[2].textContent = "Contact";
};


/// Button hover stylizing
const desktop_button_group = [
  Desktop_buttons.main,
  Desktop_buttons.about,
  Desktop_buttons.portfolio,
  Desktop_buttons.contact,
  Desktop_buttons.langage,
  Desktop_buttons.link,
  Desktop_buttons.ressource,
  Language_settings.french_button,
  Language_settings.english_button,
];

desktop_button_group.forEach((trigger) => {
  trigger.addEventListener("mouseover", button_mouseover);
  trigger.addEventListener("mouseout", button_mouseout);
});

function button_mouseover() {
  if (Images.cat.style.filter == "invert(100%)") {
    if (
      this.classList.contains("selected_button") ||
      this.classList.contains("sub_selected_button")
    ) {
      this.style.textShadow = "black 1px 2px";
    } else {
      this.style.textShadow = "white 1px 2px";
    }
  } else {
    this.style.textShadow = "red 1px 2px";
  }
}

function button_mouseout() {
  if ((!this.classList.contains("selected_button")) && (!this.classList.contains("sub_selected_button"))) {
    this.style.textShadow = "";

  }
}
