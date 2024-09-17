//* Carousel
const leftArrow = document.querySelector(".leftArrow");
console.log(leftArrow);
const rightArrow = document.querySelector(".rightArrow");
console.log(rightArrow);

let dots = document.querySelectorAll(".dot");
console.log(dots[1]);

let slideIndex = 1;
let previousIndex = 1;

showSlides(slideIndex); // Show the first slide on page load

// Function to display the slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    // Control slide index control
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides and reset animation
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide the slides
        slides[i].style.animation = ""; // Reset any animation
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }

    // Determine animation based on direction
    let animation;
    if (slideIndex > previousIndex) {
        animation = "slideInFromRight 1s forwards";
    } else if (slideIndex < previousIndex) {
        animation = "slideInFromLeft 1s forwards";
    }

    // Show the current slide with the correct animation
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.animation = animation;

    // Add 'active' class to the corresponding dot
    dots[slideIndex - 1].className += " active";
    // Update the previousIndex to the current one
    previousIndex = slideIndex;
}

// Function to go to the next or previous slide
function nextSlide(n) {
    showSlides((slideIndex += n));
}

// Function to go to a specific slide
function currentSlide(n) {
    showSlides((slideIndex = n));
}

// Add click events to arrows to change slides
leftArrow.addEventListener("click", () => {
    nextSlide(-1);
});
rightArrow.addEventListener("click", () => {
    nextSlide(1);
});

// Add click events to dots to navigate between slides
dots[0].addEventListener("click", () => {
    currentSlide(1);
});
dots[1].addEventListener("click", () => {
    currentSlide(2);
});
dots[2].addEventListener("click", () => {
    currentSlide(3);
});
