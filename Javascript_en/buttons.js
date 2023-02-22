import { Images } from "../Javascript_global/variables";
import { Desktop_buttons } from "../Javascript_global/variables";
import { Mobile_buttons } from "../Javascript_global/variables";
import { Language_settings } from "../Javascript_global/variables";

/// Language

Language_settings.french.addEventListener("click", french);
function french() {
  location.replace('index_fr.html')
}

Language_settings.english.addEventListener("click", english);
function english() {
  location.replace('index_en.html')
}



/// Color switch
const button_group = [
    Desktop_buttons.main,
    Desktop_buttons.about,
    Desktop_buttons.portfolio,
    Desktop_buttons.contact,
    Mobile_buttons.main,
    Mobile_buttons.about,
    Mobile_buttons.portfolio,
    Mobile_buttons.contact,
    Mobile_buttons.link
  ];
  
  button_group.forEach((text) => {
    text.addEventListener("click", select_button);
  });
  
  
  function select_button() {
  
     if (!this.classList.contains("selected_button")) {
      button_text_reset();
      this.textContent = "> " + this.textContent + " <";
      this.classList.add("selected_button");
      this.disabled=true
  
      if (Images.cat.style.filter == "invert(100%)") {
        for (let i = 0; i < button_group.length; i++) {
          button_group[i].style.color = "black";
        }
        this.style.color = "red";
      } else {
        for (let i = 0; i < button_group.length; i++) {
          button_group[i].style.color = "white";
        }
        this.style.color = "yellow";
      }
    }
  
  }
  
  function button_text_reset() {
    button_group.forEach((DeleteClass) => {
      DeleteClass.classList.remove("selected_button");
      DeleteClass.disabled=false
    });
    button_group[0].textContent = "Main";
    button_group[4].textContent = "Main";
    button_group[1].textContent = "About";
    button_group[5].textContent = "About";
    button_group[2].textContent = "Portfolio";
    button_group[6].textContent = "Portfolio";
    button_group[3].textContent = "Contact";
    button_group[7].textContent = "Contact";
    button_group[8].textContent = "Links";
  }
  