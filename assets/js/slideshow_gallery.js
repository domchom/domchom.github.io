let userToggledGallery = false; // Track if user manually opened the gallery
let slideIndex = 1;
const slides = document.getElementsByClassName("mySlides");
const gallery = document.querySelector(".gallery-grid");
const slideshow = document.getElementById("slideshow-container");

// Function to show slides only if window size allows
function initializeSlideshow() {
    if (window.innerWidth >= 614 && slides.length > 0) {
        showSlides(slideIndex);
    }
}

// Next/Previous slide controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Show the slide at the given index
function showSlides(n) {
    if (slides.length === 0) return console.warn("No slides found!");

    slideIndex = ((n - 1 + slides.length) % slides.length) + 1;
    
    Array.from(slides).forEach(slide => slide.style.display = "none");
    slides[slideIndex - 1].style.display = "block";
}

// Show the gallery grid
function showGallery() {
    if (!gallery) return;
    
    Array.from(slides).forEach(slide => slide.style.display = "none");
    gallery.style.display = "flex";
    userToggledGallery = true;
}

// Show slides from gallery click
function showSlidesFromGallery(imageIndex) {
    if (!gallery || window.innerWidth <= 614) return;

    gallery.style.display = "none";
    slideIndex = imageIndex;
    showSlides(slideIndex);

    const container = document.querySelector(".container");
    if (container) container.style.display = "block";

    userToggledGallery = false;
}

// Check window size and toggle display
function checkWindowSize() {
    if (userToggledGallery) return;

    if (window.innerWidth < 614) {
        if (slideshow) slideshow.style.display = "none";
        if (gallery) gallery.style.display = "block";
    } else {
        if (slideshow) slideshow.style.display = "block";
        if (gallery) gallery.style.display = "none";
        initializeSlideshow(); // Only initialize when appropriate
    }
}

// Run on page load
window.addEventListener("load", checkWindowSize);

// Run on window resize
window.addEventListener("resize", checkWindowSize);

// Keyboard navigation
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowLeft":
            plusSlides(-1);
            break;
        case "ArrowRight":
            plusSlides(1);
            break;
        case "Escape":
        case "ArrowDown":
            showGallery();
            break;
    }
});
