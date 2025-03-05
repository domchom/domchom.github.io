document.addEventListener("DOMContentLoaded", function () {
    generateSlides();
    generateGallery();
});

const imageFiles = [
    "0_006742.jpg",
    "0_006751.jpg",
    "0_006772.jpg",
    "0_006794.jpg",
    "0_006809.jpg",
    "0_006811.jpg",
    "0_006814.jpg",
    "0_006838.jpg",
    "0_006843.jpg",
    "0_006849.jpg",
    "0_006857.jpg",
    "0_006866.jpg",
    "0_006877.jpg",
    "0_006892.jpg",
    "0_006900.jpg",
    "0_006919.jpg",
    "0_006921.jpg",
    "0_006938.jpg",
    "0_006945.jpg",
    "0_006968.jpg",
    "0_006978.jpg",
    "0_006989.jpg",
    "0_006994.jpg",
    "0_007005.jpg",
    "0_007026.jpg",
    "0_007038.jpg",
    "0_007039.jpg",
    "0_007047.jpg",
    "0_007050.jpg",
    "0_007057.jpg",
    "0_007058.jpg",
    "0_007060.jpg",
    "0_007062.jpg",
    "0_007067.jpg",
    "0_007077.jpg",
    "0_007080.jpg",
    "0_007086.jpg",
    "0_007092.jpg",
    "0_007099.jpg",
    "0_007104.jpg",
    "0_007121.jpg",
    "0_007130.jpg",
    "0_007179.jpg",
    "0_007209.jpg",
    "0_007212-high-quality-2.jpg",
    "0_007217.jpg",
    "0_007225.jpg",
    "0_007226.jpg",
    "0_007227.jpg",
    "0_007232.jpg",
    "0_007234.jpg",
    "0_007236.jpg",
    "0_007242.jpg",
    "0_007256.jpg",
    "0_007270.jpg",
    "0_007277.jpg",
    "0_007290.jpg",
    "0_007301.jpg",
    "0_007302.jpg",
    "0_007303.jpg",
    "0_007312.jpg",
    "0_007316.jpg",
    "0_007322.jpg",
    "0_007326.jpg",
    "0_007331.jpg",
    "0_007335.jpg",
    "0_007358.jpg",
    "0_007364.jpg",
    "0_007369.jpg",
    "12_IMG_8360-positive.jpg",
    "12_IMG_8363-positive.jpg",
    "12_IMG_8364-positive.jpg",
    "12_IMG_8365-positive.jpg",
    "12_IMG_8373-positive.jpg",
    "12_IMG_8374-positive.jpg",
    "12_IMG_8376-positive.jpg",
    "12_IMG_8378-positive.jpg",
    "12_IMG_8379-positive.jpg",
    "12_IMG_8381-positive.jpg",
    "12_IMG_8382-positive.jpg",
    "12_IMG_8385-positive.jpg",
    "12_IMG_8398-positive.jpg",
    "12_IMG_8403-positive.jpg",
    "12_IMG_8406-positive.jpg",
    "12_IMG_8417-positive.jpg",
    "12_IMG_8418-positive.jpg",
    "12_IMG_8419-positive.jpg",
    "12_IMG_8439-positive.jpg",
    "12_IMG_8442-positive.jpg",
    "12_IMG_8455-positive.jpg",
    "12_IMG_8456-positive.jpg",
    "12_IMG_8459-positive.jpg",
    "12_IMG_8460-positive.jpg",
    "241225_cA1-portra400_241225_raw001-positive-3-Edit-2.jpg",
    "241225_cA1-portra400_241225_raw003-positive-Edit.jpg",
    "241225_cA1-portra400_241225_raw012-positive.jpg",
    "241225_cA1-portra400_241225_raw016-positive-Edit.jpg",
    "241225_cA1-portra400_241225_raw027-positive-Edit.jpg",
    "241225_cA1-portra400_241225_raw035-positive-Edit.jpg"
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