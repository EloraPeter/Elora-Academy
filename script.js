const navbar = document.getElementById("navbar");
let inactivityTimeout;
let lastScrollPosition = 0;
let isScrolling = false;

// Function to hide the navbar
const hideNavbar = () => {
    // Only hide the navbar if it is not in its original position
    if (!isInOriginalPosition()) {
        navbar.classList.add("hidden");
    }
};

// Function to show the navbar
const showNavbar = () => {
    navbar.classList.remove("hidden");
};

// Check if the navbar is in its original position
const isInOriginalPosition = () => {
    return window.scrollY === 0;
};

// Event listener for scroll events
window.addEventListener("scroll", () => {
    // Show the navbar on scroll
    showNavbar();

    // Detect if scrolling is happening
    if (!isScrolling) {
        isScrolling = true;
    }

    // Clear the inactivity timeout
    clearTimeout(inactivityTimeout);

    // Set a new timeout to hide the navbar after 2 seconds of inactivity
    inactivityTimeout = setTimeout(() => {
        if (!isScrolling) {
            hideNavbar();
        }
    }, 700);

    // Update scroll position to determine scroll direction
    lastScrollPosition = window.scrollY;

    // Reset scrolling state after a delay
    setTimeout(() => {
        isScrolling = false;
    }, 100);
});

// Event listener for mouse movement or key presses
document.addEventListener("mousemove", () => {
    showNavbar();
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(hideNavbar, 2000);
});

document.addEventListener("keydown", () => {
    showNavbar();
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(hideNavbar, 2000);
});

// Initial inactivity timeout
inactivityTimeout = setTimeout(hideNavbar, 2000);
