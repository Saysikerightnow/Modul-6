//Hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

//dropdown i menuen

document.getElementById("menu").addEventListener("click", openMenu);

function openMenu() {

  document.getElementById("dropdown").classList.toggle("active")
}
