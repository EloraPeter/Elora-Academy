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




// const navbar = document.getElementById("navbar");
// let inactivityTimeout;

// // Function to hide the navbar
// const hideNavbar = () => {
//     navbar.classList.add("hidden");
// };

// // Event listener for scroll events
// window.addEventListener("scroll", () => {
//     // Show the navbar when scrolling
//     navbar.classList.remove("hidden");

//     // Clear the previous timeout
//     clearTimeout(inactivityTimeout);

//     // Set a new timeout to hide the navbar after 2 seconds
//     inactivityTimeout = setTimeout(hideNavbar, 2000);
// });

// // Initial timeout to hide the navbar after 2 seconds of inactivity
// inactivityTimeout = setTimeout(hideNavbar, 2000);
