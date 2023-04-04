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

const sections = document.querySelectorAll(".section");
const scrollIndicators = document.querySelectorAll(".scl-indicator");

function scrollIndicatorHandler(){
    sections.forEach((section, index) => {
        let sectionDistanceFromTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;
        let lastElementQuantifier = index - (sections.length -1);
        switch(lastElementQuantifier){
            case 0:
                if(window.pageYOffset >= (sectionDistanceFromTop - (window.outerHeight - sectionHeight)) && window.pageYOffset < (sectionDistanceFromTop + sectionHeight - (window.outerHeight - sectionHeight))){
                    scrollIndicators[index].classList.add("active");
                }
                else{
                    scrollIndicators[index].classList.remove("active");
                }
                break;
            default:
                if(window.pageYOffset >= (sectionDistanceFromTop - (window.outerHeight - sectionHeight)) && window.pageYOffset < (sections[index + 1].offsetTop - (window.outerHeight - sections[index + 1].offsetHeight))){
                    scrollIndicators[index].classList.add("active");
                }
                else{
                    scrollIndicators[index].classList.remove("active");
                }  
        }
    })
}
document.addEventListener('scroll', scrollIndicatorHandler);

// creating modal 
const modal = document.getElementById("modal-wrapper");

function modalopen(){
    modal.classList.toggle("active__modal");
}