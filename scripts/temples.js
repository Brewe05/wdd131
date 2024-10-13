document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript is running!");
    document.getElementById('hamburger').addEventListener('click', function() {
        console.log("Hamburger clicked!");
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.toggle('show');
    });
});

