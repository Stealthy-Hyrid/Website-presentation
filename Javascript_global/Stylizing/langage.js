import { Language_settings, Mobile_buttons, Desktop_buttons, General_settings, Images } from "../variables";

export let CurrLang = "en"


/// Buttons translation

// Fr
Language_settings.french.addEventListener("click", french);
Language_settings.mobile_french.addEventListener("click", french);

function french() {
   // Switch trigger
    CurrLang="fr"
    
    // Switch button language
    fr_btn_text();
    
    // Switch Bubble language 
    Images.default_bubble.src="/Ressource/Image/speech_fr.gif"
    Images.default_bubble.style.width="220px";
    
    Language_settings.english.style.color = "white"
    Language_settings.french.style.color = "palevioletred"
}

function fr_btn_text () {
    
    // Desktop
    Desktop_buttons.main.textContent = "Index"
    Desktop_buttons.about.textContent = "Présentation"
    Desktop_buttons.portfolio.textContent = "Portfolio"
    Desktop_buttons.contact.textContent = "Contact"
    Desktop_buttons.langage.textContent = "Langue"
    Desktop_buttons.link.textContent = "Liens"
    
    // Mobile
    Mobile_buttons.main.textContent = "Index"
    Mobile_buttons.about.textContent = "Présentation"
    Mobile_buttons.link.textContent = "Liens"
  
    
    // Check selected btn
    select_check()
}

// En

Language_settings.english.addEventListener("click", english);
Language_settings.mobile_english.addEventListener("click", english)

function english() {
    
    // Switch trigger
    CurrLang="en"
    
    // Switch button language
    en_btn_text();

    // Switch Bubble language 
    Images.default_bubble.style.width="200px"
    Images.default_bubble.src="/Ressource/Image/speech.gif"
  
    Language_settings.english.style.color = "palevioletred"
    Language_settings.french.style.color = "white"
}

function en_btn_text () {
    
    // Desktop
    Desktop_buttons.main.textContent = "Main"
    Desktop_buttons.about.textContent = "About"
    Desktop_buttons.portfolio.textContent = "Portfolio"
    Desktop_buttons.contact.textContent = "Contact"
    Desktop_buttons.langage.textContent = "Language"
    Desktop_buttons.link.textContent = "Links"
   
    // Mobile
    Mobile_buttons.main.textContent = "Main"
    Mobile_buttons.about.textContent = "About"
    Mobile_buttons.link.textContent = "Links"


    // Check selected 
    select_check()
}

// Check selected

function select_check() {
    if (General_settings.selected[0]) {

        General_settings.selected[0].textContent = "> " + General_settings.selected[0].textContent + " <"
    }
    if (General_settings.sub_selected[0]) {

        General_settings.sub_selected[0].textContent = "> " + General_settings.sub_selected[0].textContent
    }
}


