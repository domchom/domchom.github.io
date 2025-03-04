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
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
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