import { Images } from "../variables";
import { Desktop_buttons } from "../variables";
import { Mobile_buttons } from "../variables";
import { Language_settings } from "../variables";

/// Menu index buttons
const index_button_group = [
  Desktop_buttons.main,
  Desktop_buttons.langage,
  Desktop_buttons.link,
  Mobile_buttons.main,
  Mobile_buttons.about,
  Mobile_buttons.portfolio,
  Mobile_buttons.contact,
  Mobile_buttons.link
];

index_button_group.forEach((text) => {
  text.addEventListener("click", select_button);
});
import { CurrLang } from "./langage";
// Select button
function select_button() {
  
  button_text_reset()
 
  /// Display which button is clicked on and reset others
  if (!this.classList.contains("selected_button")) {
    this.textContent = "> " + this.textContent + " <";
    this.classList.add("selected_button");
    this.disabled = true;

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

// Reset all other button
function button_text_reset() {
  index_button_group.forEach((Reset) => {
    Reset.classList.remove("selected_button");
    Reset.disabled = false;
    Reset.style.textShadow = "";
  });

  if (CurrLang=="fr") {

  index_button_group[0].textContent = "Index";
  index_button_group[1].textContent = "Langue";
  index_button_group[2].textContent = "Liens";
  index_button_group[3].textContent = "Index";
  index_button_group[4].textContent = "Présentation";
  index_button_group[5].textContent = "Portfolio";
  index_button_group[6].textContent = "Contact";
  index_button_group[7].textContent = "Liens";

  } else if (CurrLang == "en") {

    index_button_group[0].textContent = "Main";
    index_button_group[1].textContent = "Language";
    index_button_group[2].textContent = "Links";
    index_button_group[3].textContent = "Main";
    index_button_group[4].textContent = "About";
    index_button_group[5].textContent = "Portfolio";
    index_button_group[6].textContent = "Contact";
    index_button_group[7].textContent = "Links";
  }
}


/// Menu index sub buttons
const sub_button_group = [
  Desktop_buttons.about,
  Desktop_buttons.portfolio,
  Desktop_buttons.contact
];

sub_button_group.forEach((text) => {
  text.addEventListener("click", sub_select_button);
});

// Select sub button
function sub_select_button() {
  /// Display which button is clicked on and reset others
  if (!this.classList.contains("sub_selected_button")) {
    sub_button_text_reset();
    this.textContent = "> " + this.textContent;
    this.classList.add("sub_selected_button");
    this.disabled = true;

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

// Reset all other sub button
function sub_button_text_reset() {
  sub_button_group.forEach((Reset) => {
    Reset.classList.remove("sub_selected_button");
    Reset.disabled = false;
    Reset.style.textShadow = "";
  });
  if (CurrLang=="fr") {
    sub_button_group[0].textContent = "Présentation";
    sub_button_group[1].textContent = "Portfolio";
    sub_button_group[2].textContent = "Contact";
  } else if (CurrLang=="en") {

    sub_button_group[0].textContent = "About";
    sub_button_group[1].textContent = "Portfolio";
    sub_button_group[2].textContent = "Contact";
  }
}



////////////// Hover

const desktop_button_group = [
  Desktop_buttons.main,
  Desktop_buttons.about,
  Desktop_buttons.portfolio,
  Desktop_buttons.contact,
  Desktop_buttons.langage,
  Desktop_buttons.link,
  Language_settings.french,
  Language_settings.english,
];

// Hover In
desktop_button_group.forEach((text) => {
  text.addEventListener("mouseover", button_mouseover);
});

function button_mouseover() {
  if (Images.cat.style.filter == "invert(100%)") {
    this.style.textShadow = "white 1px 2px";
  } else {
    this.style.textShadow = "red 1px 2px";
  }
}

// Hover Out
desktop_button_group.forEach((text) => {
  text.addEventListener("mouseout", button_mouseout);
});

function button_mouseout() {
  this.style.textShadow = "";
}
