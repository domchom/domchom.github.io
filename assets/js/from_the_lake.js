document.addEventListener("DOMContentLoaded", function () {
    generateSlides();
    generateGallery();
});

const imageFiles = [
    "12_IMG_9043-Pano-positive.jpg",
    "12_IMG_9084-Pano-positive.jpg",
    "12_IMG_9207-Pano-positive.jpg",
    "12_IMG_9296-positive.jpg",
    "12_IMG_9393-Pano-positive-high-quality-2.jpg",
    "12_IMG_9399-Pano-positive-high-quality-2.jpg",
    "12_IMG_9405-Pano-positive-high-quality-2.jpg",
    "12_IMG_9411-Pano-positive-high-quality-2.jpg",
    "12_IMG_9417-Pano-positive-high-quality-2.jpg",
    "12_IMG_9423-Pano-positive-high-quality-2.jpg",
    "12_IMG_9429-Pano-positive-high-quality-2.jpg",
    "12_IMG_9435-Pano-positive-high-quality-2.jpg",
    "12_IMG_9454-Pano-positive.jpg",
    "12_IMG_9499-Pano-positive.jpg"
];

const basePath = "assets/images/from_the_lake/";

function generateSlides() {
    const slideshowContainer = document.getElementById("slideshow-container");

    if (!slideshowContainer) {
        console.error("Slideshow container not found!");
        return;
    }

    imageFiles.forEach((file) => {
        const slideDiv = document.createElement("div");
        slideDiv.className = "mySlides";

        const img = document.createElement("img");
        img.src = basePath + file;
        img.style.width = "100%";

        slideDiv.appendChild(img);
        slideshowContainer.appendChild(slideDiv);
    });
}

function generateGallery() {
    const galleryContainer = document.getElementById("gallery-container");

    if (!galleryContainer) {
        console.error("Gallery container not found!");
        return;
    }

    imageFiles.forEach((file, index) => {
        const img = document.createElement("img");
        img.src = basePath + file;
        img.className = "grid-item";
        img.onclick = () => showSlidesFromGallery(index + 1);

        galleryContainer.appendChild(img);
    });
}