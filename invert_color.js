let cat = document.getElementById("cat");
let body = document.body;
let card = document.getElementsByClassName("box_settings");
let menu = document.getElementsByClassName("accordion-item");
let btn = document.getElementsByTagName("button");

cat.addEventListener("click", switch_button);

function switch_button() {
  if (cat.style.filter == "invert(100%)") {
    dark_mode();
  } else {
    light_mode();
  }
}

function light_mode() {
  cat.style.filter = "invert(100%)";
  body.style.background =
    "linear-gradient(90deg, rgba(222,177,255,1) 38%, rgba(255,163,163,1) 94%)";

  for (var i = 0; i < card.length; i++) {
    card[i].style.backgroundColor = "rgba(255,163,163,0.2)";
    card[i].style.border = "1px solid white";
    card[i].style.boxShadow = "1px 1px 10px 0px black";
    card[i].style.color = "black";
  }

  for (var j = 0; j < btn.length; j++) {
    btn[j].style.color = "black";
  }
}

function dark_mode() {
  cat.style.filter = "invert(0%)";
  body.style.background =
    "linear-gradient(90deg, rgba(200, 0, 223, 1) 0%,rgba(67, 0, 117, 1) 49%,rgba(0, 0, 0, 1) 94%)";

  for (var i = 0; i < card.length; i++) {
    card[i].style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    card[i].style.border = "1px solid white";
    card[i].style.boxShadow = "1px 1px 10px 0px white";
    card[i].style.color = "white";
  }

  for (var j = 0; j < btn.length; j++) {
    btn[j].style.color = "white";
  }
}
