let slideIndex = 1;
showSlides(slideIndex);

let userToggledGallery = false; // Track if user manually opened the gallery

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Show the slide at the given index
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");

    if (slides.length === 0) {
        console.warn("No slides found!");
        return;
    }

    // Ensure slideIndex is within valid range
    if (n > slides.length) {
        slideIndex = 1;
    } 
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Check if the slide exists before modifying it
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
    } else {
        console.error("Slide index out of range:", slideIndex);
    }
}

// Show the gallery grid
function showGallery() {
    let slides = document.getElementsByClassName("mySlides");
    let gallery = document.getElementsByClassName("gallery-grid")[0];

    // Hide the slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the gallery
    gallery.style.display = "flex";
    userToggledGallery = true; // User manually switched to gallery mode
}

// Show the slides and go to the clicked image
function showSlidesFromGallery(imageIndex) {
    let slides = document.getElementsByClassName("mySlides");
    let gallery = document.getElementsByClassName("gallery-grid")[0];

    if (window.innerWidth > 767) {
        // Hide the gallery and show the slides again
        gallery.style.display = "none";

        // Show the corresponding slide
        slideIndex = imageIndex;
        showSlides(slideIndex);

        // Show the slides container
        let container = document.querySelector(".container");
        container.style.display = "block";

        userToggledGallery = false; // User switched back to slideshow
    }
}

// Check the window size and show/hide the slideshow or gallery
function checkWindowSize() {
    const slideshow = document.getElementById("slideshow-container");
    const gallery = document.querySelector(".gallery-grid");

    if (!userToggledGallery) { 
        // Auto-switch only if user hasn't manually selected gallery mode
        if (window.innerWidth < 768) {
            if (slideshow) slideshow.style.display = "none";
            if (gallery) gallery.style.display = "block";
        } else {
            if (slideshow) slideshow.style.display = "block";
            if (gallery) gallery.style.display = "none";
        }
    }
}

// Run on page load
window.onload = checkWindowSize;

// Run on window resize
window.onresize = checkWindowSize;

// Keyboard navigation
document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keydown", function (event) {
        console.log("Key pressed:", event.key); // Debugging: check if key presses are detected
        if (event.key === "ArrowLeft") {
            plusSlides(-1); // Move to the previous slide
        } else if (event.key === "ArrowRight") {
            plusSlides(1); // Move to the next slide
        } else if (event.key === "Escape") {
            showGallery(); // Show the gallery grid
        } else if (event.key === "ArrowDown") {
            showGallery(); // Show the gallery grid
        }
    });
});