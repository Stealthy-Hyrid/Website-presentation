
/// Buttons
class Buttons {
  constructor(main, about, portfolio, contact, link, selected) {
    this.main = main;
    this.about = about;
    this.portfolio = portfolio;
    this.contact = contact;
    this.link = link;
    this.selected = selected;
  }
}

export const Desktop_buttons = new Buttons(
  document.getElementById("main-btn"),
  document.getElementById("about-btn"),
  document.getElementById("portfolio-btn"),
  document.getElementById("contact-btn"),
  document.getElementById("link-btn"),
  document.getElementsByClassName("selected_button")
);

export const Mobile_buttons = new Buttons(
  document.getElementById("main_mobile"),
  document.getElementById("about_mobile"),
  document.getElementById("portfolio_mobile"),
  document.getElementById("link_mobile"),
  document.getElementById("contact_mobile")
);

/// Images
class Images_list  {
    constructor(cat,git_large,git_small){
        this.cat = cat;
        this.git_large = git_large;
        this.git_small = git_small;
    }
}

export const Images = new Images_list(
    document.getElementById("logo"),
    document.getElementById("git_logo"),
    document.getElementById("git_logo_small")
)

/// General 
class General {
  constructor(text, box, body) {
    this.text = text;
    this.box = box;
    this.body = body;
  }
}

export const General_settings = new General(
  document.getElementsByClassName("text_settings"),
  document.getElementsByClassName("box_settings"),
  document.body
)

