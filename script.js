document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector(".fade-zoom-in");
    setTimeout(() => {
        image.classList.add("visible");
    }, 100); // Slight delay to ensure the DOM is fully loaded

    // Redirect to the top page after the animation
    setTimeout(() => {
        window.location.href = 'top.html';
    }, 3000); // Adjust the delay to match the duration of the animation
});
