document.addEventListener("DOMContentLoaded", function() {
    // Animate the letters of the text "Welcome to Short Road"
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        // Set a custom delay for each letter based on its index
        letter.style.setProperty('--i', index);
    });

    // Set the current year in the footer dynamically
    const yearElement = document.getElementById('year');
    yearElement.textContent = new Date().getFullYear();
});
