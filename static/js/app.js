const Navlinks = document.getElementById("nav-links");
const Navburger = document.getElementById("nav-burger");
const navleave = document.getElementById("nav-leave");

function Navbaractive(){
    Navlinks.classList.toggle("nav-links__active");
    Navburger.classList.toggle("nav-burger__active");
}

let lastscrolly = window.scrollY;

window.addEventListener("scroll", () => {
    if(lastscrolly < window.scrollY) {
        navleave.classList.add('nav--hidden');
    }
    else {
        navleave.classList.remove('nav--hidden');
    }

    lastscrolly = window.scrollY;
} );

Navburger.addEventListener("click", Navbaractive);


// creating modal 
const modal = document.getElementById("modal-wrapper");

function modalopen(){
    modal.classList.toggle("active__modal");
}