document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const leftMenu = document.querySelector(".left-menu");

    hamburger.addEventListener("click", function() {
        leftMenu.classList.toggle("open");
    });
});
