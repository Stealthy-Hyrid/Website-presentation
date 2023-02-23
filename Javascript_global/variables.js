
/// Buttons
class Buttons {
  constructor(main, about, portfolio, contact, link, langage) {
    this.main = main;
    this.about = about;
    this.portfolio = portfolio;
    this.contact = contact;
    this.link = link;
    this.langage = langage
  }
}

export const Desktop_buttons = new Buttons(
  document.getElementById("main-btn"),
  document.getElementById("about-btn"),
  document.getElementById("portfolio-btn"),
  document.getElementById("contact-btn"),
  document.getElementById("link-btn"),
  document.getElementById("langage-btn")
  
);

export const Mobile_buttons = new Buttons(
  document.getElementById("main_mobile"),
  document.getElementById("about_mobile"),
  document.getElementById("portfolio_mobile"), 
  document.getElementById("contact_mobile"),
  document.getElementById("link_mobile")
);

/// Images
class Images_list  {
    constructor(cat,git_large,git_small, linkedin_large, linkedin_small, default_bubble, switched_bubble){
        this.cat = cat;
        this.git_large = git_large;
        this.git_small = git_small;
        this.linkedin_large = linkedin_large;
        this.linkedin_small = linkedin_small;
        this.default_bubble = default_bubble;
        this.switched_bubble = switched_bubble;
    }
}

export const Images = new Images_list(
    document.getElementById("cat_logo"),
    document.getElementById("git_logo"),
    document.getElementById("git_logo_small"),
    document.getElementById("linkedin_logo"),
    document.getElementById("linkedin_small_logo"),
    document.getElementById("default_bubble"),
    document.getElementById("switched_bubble")
)

/// General 
class General {
  constructor(text, box, body, selected) {
    this.text = text;
    this.box = box;
    this.body = body;
    this.selected = selected;
  }
}

export const General_settings = new General(
  document.getElementsByClassName("text_settings"),
  document.getElementsByClassName("box_settings"),
  document.body,
  document.getElementsByClassName("selected_button")
)


class Language {
  constructor(french, english) {
    this.french = french;
    this.english = english;
  }
}

export const Language_settings = new Language(
  document.getElementById("french"),
  document.getElementById("english")
  )