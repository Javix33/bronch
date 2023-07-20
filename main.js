const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slider img");
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + 3) % 3;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % 3;
    showSlide(currentIndex);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// Show the first slide initially
showSlide(currentIndex);