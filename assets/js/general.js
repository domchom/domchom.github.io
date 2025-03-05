document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const leftMenu = document.querySelector(".left-menu");

    if (hamburger && leftMenu) {
        hamburger.addEventListener("click", () => {
            leftMenu.classList.toggle("open");
        });
    }

    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            const menu = document.querySelector('.left-menu');
            if (!menu) return;

            menu.innerHTML = data;

            // Get the current page filename
            const currentPage = window.location.pathname.split('/').pop();

            // Highlight the active link
            menu.querySelectorAll('a').forEach(link => {
                if (link.getAttribute('href').split('/').pop() === currentPage) {
                    link.classList.add('active-link');
                }
            });
        })
        .catch(error => console.error('Error loading navigation:', error));
});