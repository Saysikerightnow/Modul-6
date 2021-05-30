//Hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

//dropdown i menuen
//dropdown produkter

document.getElementById("menu, menu1").addEventListener("click", openMenu1);

function openMenu1() {

  document.getElementById("dropdown1").classList.toggle("active")
}

//dropdown God viden
document.getElementById("menu").addEventListener("click", openMenu);

function openMenu() {

  document.getElementById("dropdown").classList.toggle("active")
}
