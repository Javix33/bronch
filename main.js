//loader//
window.addEventListener("load", function() {
    var loaderContainer = document.querySelector(".loader-container");
    loaderContainer.style.display = "none";
});

var loaderBar = document.querySelectorAll(".loader-bar");
var loaderPercentage = document.querySelector(".loader-percentage");
var i = 0;

function loaderAnimation() {
    if (i == 100) {
        clearInterval(interval);
    } else {
        i++;
        loaderBar.forEach(function(bar) {
            bar.style.transform = "scaleY(" + (0.4 + i / 250) + ")";
        });
        loaderPercentage.innerHTML = i + "%";
    }
}

var interval = setInterval(loaderAnimation, 20);
//menu hamburguesa//
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector("#menu");

hamburgerMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        menu.style.maxHeight = menu.scrollHeight + "px";
    } else {
        menu.style.maxHeight = null;
    }
});

//slider//
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
    slides[currentSlide].classList.remove('active-slide');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active-slide');
}