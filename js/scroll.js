export function initScrollProgress() {
    "use strict";

    const progressBar = document.getElementById("scroll-progress");

    function updateProgress() {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;

        if (scrollTop === 0) {
            progressBar.style.opacity = "0"; // Verstecke den Balken oben
        } else {
            progressBar.style.opacity = "1"; // Zeige den Balken nach dem Scrollen
        }

        progressBar.style.width = `${scrollPercentage}%`;
    }

    window.addEventListener("scroll", updateProgress);
}