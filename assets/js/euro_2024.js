document.addEventListener("DOMContentLoaded", function () {
    generateSlides();
    generateGallery();
});

const imageFiles = [
    //"0_001193.jpg",
    "0_002405.jpg",
    "0_001294.jpg",
    "0_001310.jpg",
    "0_001315.jpg",
    "0_001385-Pano.jpg",
    "0_001387.jpg",
    "0_001460.jpg",
    "0_001494.jpg",
    "0_001498.jpg",
    "0_001531.jpg",
    "0_001543.jpg",
    "0_001560.jpg",
    "0_001562.jpg",
    "0_001580.jpg",
    "0_001582.jpg",
    "0_001660-Enhanced-NR.jpg",
    "0_001663.jpg",
    "0_001666.jpg",
    "0_001667.jpg",
    "0_001672.jpg",
    "0_001681.jpg",
    "0_001698.jpg",
    "0_001724-Edit.jpg",
    "0_001739.jpg",
    "0_001768.jpg",
    "0_001814.jpg",
    "0_001875.jpg",
    "0_001887.jpg",
    "0_001921.jpg",
    "0_001927.jpg",
    "0_001982.jpg",
    "0_001993-Pano.jpg",
    "0_002008.jpg",
    "0_002054.jpg",
    "0_002085.jpg",
    "0_002094.jpg",
    "0_002110.jpg",
    "0_002165.jpg",
    //"0_002167.jpg",
    "0_002184.jpg",
    "0_002243.jpg",
    "0_002253.jpg",
    "0_002265.jpg",
    "0_002267.jpg",
    "0_002273.jpg",
    "0_002304.jpg",
    "0_002310.jpg",
    "0_002332.jpg",
    "0_002346.jpg",
    "0_002348.jpg",
    "0_002355.jpg",
    "0_002361.jpg",
    "0_002369.jpg",
    "0_002376.jpg",
    "0_002393.jpg",
    //"0_002401.jpg",
    "0_002402-Pano.jpg",
    "0_002422.jpg",
    "0_002427.jpg",
    "0_002430.jpg",
    "0_002438.jpg",
    "0_002463.jpg",
    "0_002464.jpg",
    "0_002466.jpg",
    "0_002468.jpg",
    "0_002540.jpg",
    "0_002543.jpg",
    "0_002563.jpg",
    "0_002568.jpg",
    "0_002577.jpg",
    "0_002579.jpg",
    "0_002583-Pano.jpg",
    "0_002624.jpg",
    "0_002632.jpg",
    "0_002719.jpg",
    "0_002721.jpg",
    "0_002726.jpg",
    "0_002730.jpg",
    "0_002741.jpg",
    "0_002750.jpg",
    "0_002762.jpg",
    "0_002767.jpg",
    "0_002778.jpg",
    "0_002824-Edit-high-quality-2.jpg",
    "0_002840-high-quality-2.jpg",
    "0_002878.jpg",
    //"0_002903.jpg",
    "0_002905.jpg",
    "0_002939.jpg",
    "0_002952.jpg",
    "0_003137.jpg",
    "0_003172.jpg",
    "0_003175.jpg",
    "0_003176.jpg",
    "0_003196.jpg",
    "0_003201.jpg",
    "0_003233.jpg",
    "0_003246.jpg",
    "0_003255.jpg",
    "0_003281.jpg",
    "0_003315.jpg",
    "0_003316.jpg",
    "0_003322.jpg",
    "0_003374.jpg",
    "0_003396.jpg",
    "0_003404.jpg",
    "0_003431.jpg",
    "0_003451.jpg",
    "0_003454.jpg",
    "0_003457.jpg",
    "0_003472.jpg",
    "0_003506.jpg",
    "0_003535.jpg",
    "0_003580.jpg",
    "0_003591.jpg",
    "0_003593.jpg",
    "0_003594.jpg",
    "0_003603.jpg",
    "0_003632.jpg",
    "0_003653.jpg",
    "0_003661.jpg",
    "0_003695.jpg",
    "0_003715.jpg",
    "0_003736.jpg",
    "0_003740.jpg",
    "0_003749.jpg",
    "0_003785.jpg",
    "0_003789.jpg",
    "0_003794.jpg",
    "0_003832.jpg",
    "0_003847.jpg",
    "0_003866.jpg",
    "0_003883.jpg",
    "0_003905.jpg",
    "0_003910.jpg",
    "0_003911.jpg",
    "0_003923.jpg",
    "0_003952.jpg",
    "0_003989.jpg"
];

const basePath = "assets/images/euro_2024/";

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