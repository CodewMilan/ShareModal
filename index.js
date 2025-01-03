// Get the elements
const overlay = document.getElementById("overlay");
const shareButton = document.getElementById("shareButton");
const closeButton = document.getElementById("closeButton");

// Function to show the overlay
function showOverlay() {
    overlay.classList.remove("hidden");
    overlay.classList.add("flex");
}

// Function to hide the overlay
function hideOverlay() {
    overlay.classList.add("hidden");
    overlay.classList.remove("flex");
}

// Event listeners
shareButton.addEventListener("click", showOverlay);
closeButton.addEventListener("click", hideOverlay);