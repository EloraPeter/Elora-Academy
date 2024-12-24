const navbar = document.getElementById("navbar");
let timeout;

window.addEventListener("scroll", () => {
    // Clear any existing timeout
    clearTimeout(timeout);

    // Show the navbar
    navbar.classList.remove("hidden");

    // Hide the navbar after 3 seconds of inactivity
    timeout = setTimeout(() => {
        navbar.classList.add("hidden");
    }, 2000);
});
