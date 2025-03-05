document.addEventListener("DOMContentLoaded", function () {
    generateSlides();
    generateGallery();
});

const imageFiles = [
    "240822-2_raw0020-positive.jpg",
    //"0_005238.jpg",
    //"0_005247.jpg",
    //"0_005376-Pano.jpg",
    "240821-1_raw0007-positive.jpg",
    "240821-1_raw0010-positive.jpg",
    "240821-1_raw0011-positive.jpg",
    "240821-1_raw0012-positive.jpg",
    "240821-1_raw0014-positive.jpg",
    "240821-1_raw0020-positive.jpg",
    "240821-1_raw0026-positive.jpg",
    "240821-1_raw0028-positive.jpg",
    "240821-1_raw0031-positive.jpg",
    "240821-1_raw0034-positive.jpg",
    "240821-1_raw0035-positive.jpg",
    "240823-1_raw0004-positive.jpg",
    "240821-1_raw0037-positive.jpg",
    //"0_005266.jpg",
    //"0_005281.jpg",
    //"0_005319.jpg",
    //"0_005359.jpg",
    //"0_005362.jpg",
    //"0_005365.jpg",
    //"0_005383.jpg",
    //"0_005404.jpg",
    "240822-1_raw0001-positive-Edit.jpg",
    //"240822-1_raw0003-positive.jpg",
    //"240822-1_raw0006-positive.jpg",
    "240822-1_raw0009-positive.jpg",
    "240822-1_raw0010-positive.jpg",
    //"240822-1_raw0011-positive.jpg",
    "240822-1_raw0014-positive.jpg",
    "240822-1_raw0015-positive.jpg",
    //"240822-1_raw0016-positive.jpg",
    //"240822-1_raw0019-positive.jpg",
    //"240822-1_raw0023-positive.jpg",
    //"240822-1_raw0026-positive.jpg",
    "240822-2_raw0002-positive.jpg",
    "240822-2_raw0004-positive.jpg",
    "240822-2_raw0006-positive.jpg",
    "240822-2_raw0023-positive.jpg",
    //"240822-2_raw0025-positive.jpg",
    "240822-2_raw0026-positive.jpg",
    "240822-2_raw0029-positive.jpg",
    "240822-2_raw0030-positive.jpg",
    "240822-2_raw0031-positive.jpg",
    "240822-3_raw0002-positive.jpg",
    "240822-3_raw0003-positive.jpg",
    "240822-3_raw0006-positive.jpg",
    "240822-3_raw0007-positive.jpg",
    "240822-3_raw0008-positive.jpg",
    "240822-3_raw0009-positive.jpg",
    "240822-3_raw0012-positive.jpg",
    //"240822-3_raw0016-positive.jpg",
    "240822-3_raw0019-positive.jpg",
    "240822-3_raw0031-positive.jpg",
    "240823-1_raw0007-positive.jpg",
    "240823-1_raw0008-positive.jpg",
    "240823-1_raw0010-positive.jpg",
    "240823-1_raw0011-positive.jpg",
    "240823-1_raw0015-positive.jpg",
    //"240823-1_raw0017-positive.jpg",
    "240823-1_raw0024-positive.jpg",
    "240823-1_raw0025-positive.jpg",
    "240823-1_raw0028-positive.jpg",
    "240823-1_raw0029-positive.jpg",
    "240823-1_raw0034-positive.jpg",
    "240905-2_raw0009-positive-high-quality-2.jpg",
    "240905-2_raw0011-positive-high-quality-2.jpg",
    "240905-2_raw0015-positive-high-quality-2.jpg",
    "240905-2_raw0012-positive.jpg",
    "240905-2_raw0014-positive-high-quality-2.jpg",
    "240905-2_raw0016-positive-high-quality-2.jpg",
    "240905-2_raw0017-positive-high-quality-2.jpg",
    "240905-2_raw0018-positive.jpg",
    "240905-2_raw0019-positive.jpg",
    "240905-2_raw0026-positive-high-quality-2.jpg",
    "240905-2_raw0027-positive-high-quality-2.jpg",
    //"240905-2_raw0029-positive.jpg",
    //"240905-2_raw0030-positive-high-quality-2.jpg",
    "240905-2_raw0033-positive.jpg",
    "240905-2_raw0034-positive-high-quality-2.jpg"
];

const basePath = "assets/images/co_2024/";

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