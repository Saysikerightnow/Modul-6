function openFase(evt, fasenummer) {
  // Declare all variables

  var i, menucontents, menulinks;

  // Get all elements with class="tablinks" and remove the class "active"

  menulinks = document.getElementsByClassName("menulinks");
  for (i = 0; i < menulinks.length; i++) {
    menulinks[i].className = menulinks[i].className.replace(" active", "" );
  }

  // tablinks = document.getElementsByClassName("tablinks2");
  // for (i = 0; i < tablinks.length; i++) {
  //   tablinks[i].className = tablinks[i].className.replace(" active", "");
  // }

  // tablinks = document.getElementsByClassName("tablinks3");
  // for (i = 0; i < tablinks.length; i++) {
  //   tablinks[i].className = tablinks[i].className.replace(" active", "");
  // }

  // tablinks = document.getElementsByClassName("tablinks4");
  // for (i = 0; i < tablinks.length; i++) {
  //   tablinks[i].className = tablinks[i].className.replace(" active", "");
  // }

  // Show the current tab, and add an "active" class to the button that opened the tab

  document.getElementById(fasenummer).style.display = "block";
  evt.currentTarget.className += " active";
}

function myFunction() {
  var add = document.getElementById("hide");
  add.classList.add("test");

  // ved onclick triggers funktionen som henter id'et "hide" som er på classen tab,
  // derefter tilføjer den en class med visibility: hidden; attribute.
}

function fjernclass() {
  var remove = document.getElementById("hide");
  remove.classList.remove("test");

  var fjernfase1 = document.getElementById("fase1");
  var fjernfase2 = document.getElementById("fase2");
  var fjernfase3 = document.getElementById("fase3");
  var fjernfase4 = document.getElementById("fase4");

  fjernfase1.style.display = "none";
  // fjernfase2.style.display = "none";
  // fjernfase3.style.display = "none";
  // fjernfase4.style.display = "none";
}
