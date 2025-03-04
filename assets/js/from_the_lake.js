document.addEventListener("DOMContentLoaded", function () {
    generateSlides();
    generateGallery();
});

const imageFiles = [
    "_MG_9043-Pano-positive.jpg",
    "_MG_9084-Pano-positive.jpg",
    "_MG_9207-Pano-positive.jpg",
    "_MG_9296-positive.jpg",
    "_MG_9393-Pano-positive-high-quality-2.jpg",
    "_MG_9399-Pano-positive-high-quality-2.jpg",
    "_MG_9405-Pano-positive-high-quality-2.jpg",
    "_MG_9411-Pano-positive-high-quality-2.jpg",
    "_MG_9417-Pano-positive-high-quality-2.jpg",
    "_MG_9423-Pano-positive-high-quality-2.jpg",
    "_MG_9429-Pano-positive-high-quality-2.jpg",
    "_MG_9435-Pano-positive-high-quality-2.jpg",
    "_MG_9454-Pano-positive.jpg",
    "_MG_9499-Pano-positive.jpg"
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