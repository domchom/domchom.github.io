document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const leftMenu = document.querySelector(".left-menu");

    hamburger.addEventListener("click", function() {
        leftMenu.classList.toggle("open");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            const menu = document.querySelector('.left-menu');
            menu.innerHTML = data;

            // Get the current page URL (e.g., "index.html", "aboutme.html")
            const currentPage = window.location.pathname.split('/').pop();

            // Find the link corresponding to the current page and apply styles
            const links = menu.querySelectorAll('a');
            links.forEach(link => {
                const linkPage = link.getAttribute('href').split('/').pop(); // Get filename from href
                if (linkPage === currentPage) {
                    link.style.fontWeight = 'bold';
                    link.style.color = 'green';
                }
            });
        });
});