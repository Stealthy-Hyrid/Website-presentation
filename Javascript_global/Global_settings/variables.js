/// Buttons
class Buttons {
  constructor(main, about, portfolio, contact, link, ressource, langage) {
    this.main = main;
    this.about = about;
    this.portfolio = portfolio;
    this.contact = contact;
    this.link = link;
    this.langage = langage;
    this.ressource = ressource
  }
}

export const Desktop_buttons = new Buttons(
  document.getElementById("main-btn"),
  document.getElementById("about-btn"),
  document.getElementById("portfolio-btn"),
  document.getElementById("contact-btn"),
  document.getElementById("link-btn"),
  document.getElementById("ressource-btn"),
  document.getElementById("langage-btn")
);

export const Mobile_buttons = new Buttons(
  document.getElementById("main_mobile"),
  document.getElementById("about_mobile"),
  document.getElementById("portfolio_mobile"),
  document.getElementById("contact_mobile"),
  document.getElementById("link_mobile"),
  document.getElementById("ressource_mobile")
);

/// Images
class Images_list {
  constructor(
    cat,
    bubble,
    svg_bw
  ) {
    this.cat = cat;
    this.bubble = bubble; 
    this.svg_bw = svg_bw;
  }
}

export const Images = new Images_list(
  document.getElementById("cat"),
  document.getElementsByClassName("bubble"),
  document.getElementsByClassName("svg_settings")
);

/// General
class General {
  constructor(text, box, body, selected, sub_selected, selected_lang, rain) {
    this.text = text;
    this.box = box;
    this.body = body;
    this.selected = selected;
    this.sub_selected = sub_selected;
    this.selected_lang = selected_lang;
    this.rain = rain;
  }
}

export const General_settings = new General(
  document.getElementsByClassName("text_settings"),
  document.getElementsByClassName("box_settings"),
  document.body,
  document.getElementsByClassName("selected_button"),
  document.getElementsByClassName("sub_selected_button"),
  document.getElementsByClassName("selected_lang"),
  document.getElementById("rain")
);

class Language_button {
  constructor(
    french_button,
    english_button,
    mobile_french_button,
    mobile_english_button,
    french_text,
    english_text,
    mobile_language_settings
  ) {
    this.french_button = french_button;
    this.english_button = english_button;
    this.mobile_french_button = mobile_french_button;
    this.mobile_english_button = mobile_english_button;
    this.french_text = french_text;
    this.english_text = english_text;
    this.mobile_language_settings = mobile_language_settings
  }
}

export const Language_settings = new Language_button(
  document.getElementById("switch_french"),
  document.getElementById("switch_english"),
  document.getElementById("flag_fr"),
  document.getElementById("flag_en"),
  document.getElementsByClassName("fr"),
  document.getElementsByClassName("en"),
  document.getElementById("mobile_language_settings")
);

class Link {
  constructor(a) {
    this.a = a;
  }
}

export const Hyperlink = new Link (
  document.getElementsByTagName("a")
)