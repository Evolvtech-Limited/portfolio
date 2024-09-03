function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");

    // Smooth transition for menu open/close
    menu.style.transition = "max-height 0.3s ease-in-out";

    // Ensure menu behaves correctly on resize or rotate
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1200 && menu.classList.contains("open")) {
            menu.classList.remove("open");
            icon.classList.remove("open");
        }
    });

    window.addEventListener('orientationchange', () => {
        if (window.innerWidth > 1200 && menu.classList.contains("open")) {
            menu.classList.remove("open");
            icon.classList.remove("open");
        }
    });
}