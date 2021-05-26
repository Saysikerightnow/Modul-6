function openFase(evt, fasenummer) {
  // Declare all variables

  var i, menucontents, menulinks;

  // Get all elements with class="menulinks" and remove the class "active"

  menulinks = document.getElementsByClassName("menulinks1");
  for (i = 0; i < menulinks.length; i++) {
    menulinks[i].className = menulinks[i].className.replace(" active", "");
  }

  menulinks = document.getElementsByClassName("menulinks2");
  for (i = 0; i < menulinks.length; i++) {
    menulinks[i].className = menulinks[i].className.replace(" active", "");
  }

  menulinks = document.getElementsByClassName("menulinks3");
  for (i = 0; i < menulinks.length; i++) {
    menulinks[i].className = menulinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab

  document.getElementById(fasenummer).style.display = "block";
  if (fasenummer == "fase1") {
    document.getElementById("hide1").style.display = "none";
  } else if (fasenummer == "fase2") {
    document.getElementById("hide2").style.display = "none";
  } else if (fasenummer == "fase3") {
    document.getElementById("hide3").style.display = "none";
  }
  evt.currentTarget.className += " active";
}

function fjernclass() {
  var remove = document.getElementById("hide");
  remove.classList.remove("test");

  var fjernfase1 = document.getElementById("fase1");
  var fjernfase2 = document.getElementById("fase2");
  var fjernfase3 = document.getElementById("fase3");

  fjernfase1.style.display = "none";
  fjernfase2.style.display = "none";
  fjernfase3.style.display = "none";
}
