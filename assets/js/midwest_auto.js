document.addEventListener("DOMContentLoaded", function () {
    generateSlides();
    generateGallery();
});

const imageFiles = [
    "12_IMG_7476-positive.jpg",
    "12_IMG_8780-Pano-positive.jpg",
    "12_IMG_9120-Pano-positive.jpg",
    "12_IMG_9130-Pano-positive.jpg",
    "12_IMG_9147-Pano-positive.jpg",
    "12_IMG_9148-Pano-positive.jpg",
    "12_IMG_9157-Pano-positive.jpg",
    "12_IMG_9166-Pano-positive.jpg",
    "12_IMG_9184-Pano-positive.jpg",
    "12_IMG_9185-Pano-positive.jpg",
    "12_IMG_9326-Pano-positive.jpg",
    "12_IMG_9338-Pano-positive.jpg",
    "240905-2_raw0001-positive.jpg",
    "240905-2_raw0032-positive.jpg",
    "240929-1_raw0052-positive.jpg",
    "240929-1_raw0060-positive.jpg",
    "240929-1_raw0061-positive.jpg",
    "240929-1_raw0062-positive.jpg",
    "241013-1_raw0012-positive.jpg"
];

const basePath = "assets/images/midwest_auto/";

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