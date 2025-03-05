let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

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

function showGallery() {
    // Hide slides and show gallery grid
    let slides = document.getElementsByClassName("mySlides");
    let gallery = document.getElementsByClassName("gallery-grid")[0];

    // Hide the slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the gallery
    gallery.style.display = "flex";
}

// Show the slides and go to the clicked image
function showSlidesFromGallery(imageIndex) {
    let slides = document.getElementsByClassName("mySlides");
    let gallery = document.getElementsByClassName("gallery-grid")[0];

    // Hide the gallery and show the slides again
    gallery.style.display = "none";

    // Show the corresponding slide
    slideIndex = imageIndex;
    showSlides(slideIndex);

    // Show the slides container
    let container = document.querySelector(".container");
    container.style.display = "block";
}
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