const Navlinks = document.getElementById("nav-links");
const Navburger = document.getElementById("nav-burger");

function Navbaractive(){
    Navlinks.classList.toggle("nav-links__active");
    Navburger.classList.toggle("nav-burger__active");
}

Navburger.addEventListener("click", Navbaractive);