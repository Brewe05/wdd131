// Function to display last modified date and load images
document.addEventListener('DOMContentLoaded', function () {
    // Display last modified date
    const lastModified = document.lastModified;
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
    }

    // Smooth scrolling for navigation links (commented out for testing)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const targetId = this.getAttribute('href');
            window.location.href = targetId; // Navigate to the new page
        });
    });

    // Image arrays
    const missionImages = [
        'project/images/mission1.jpg',
        'project/images/mission2soweto.webp',
        'project/images/mission3soweto.webp',
        'project/images/mission4etwatwa.webp',
        'project/images/mission5etwatwa.webp',
        'project/images/mission6temple.webp',
    ];

    const afterImages = [
        'project/images/after1.jpg',
        'project/images/after2.jpg',
        'project/images/after3.jpg',
        'project/images/after4.jpg',
        'project/images/after5.jpg',
    ];

    const beforeImages = [
        'project/images/before1.jpg',
        'project/images/before2.jpg',
        'project/images/before3.jpg',
        'project/images/before4.jpg',
        'project/images/before5.jpg',
    ];

    // Function to load images into a gallery
    function loadImages(containerId, imageArray) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container with ID ${containerId} not found.`);
            return;
        }

        imageArray.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = 'Image related to mission'; // Customize alt text as needed
            img.loading = 'lazy'; // Enable lazy loading
            img.classList.add('gallery-image'); // Add a class for styling
            container.appendChild(img);
        });
    }

    // Load images based on the current page
    if (document.getElementById('mission_container')) {
        loadImages('mission_container', missionImages);
    } else if (document.getElementById('after_container')) {
        loadImages('after_container', afterImages);
    } else if (document.getElementById('before_container')) {
        loadImages('before_container', beforeImages);
    }
});




