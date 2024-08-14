/**
 * Toggles the visibility of the mobile menu and the hamburger icon animation.
 */
function toggleMenu() {
    // Select the menu and icon elements
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    // Check if both elements exist on the page
    if (menu && icon) {
        // Toggle the 'open' class for both the menu and the icon
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    } else {
        // Log an error if the elements are not found
        console.error("Menu or icon element not found.");
    }
}

// Optional: Add an event listener for the menu toggle, making it more flexible
document.querySelector('.hamburger-icon').addEventListener('click', toggleMenu);
