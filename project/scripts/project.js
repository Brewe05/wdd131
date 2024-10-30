// Declare imageCollections globally
const imageCollections = {
    mission: [
        'images/mission1.jpg',
        'images/mission2soweto.webp',
        'images/mission3soweto.webp',
        'images/mission4etwatwa.webp',
        'images/mission5etwatwa.webp',
        'images/mission6temple.webp',
    ],
    after: [
        'images/after1.jpg',
        'images/after2.jpg',
        'images/after3.jpg',
        'images/after4.jpg',
        'images/after5.jpg',
    ],
    before: [
        'images/before1.jpg',
        'images/before2.jpg',
        'images/before3.jpg',
        'images/before4.jpg',
        'images/before5.jpg',
    ],
};

// Function to display last modified date and load images
document.addEventListener('DOMContentLoaded', function () {
    displayLastModified();
    setupNavigationLinks();
    loadImages(); // Now this can access imageCollections
    setupUserPreferences();
});

// Function to display last modified date
function displayLastModified() {
    const lastModified = document.lastModified;
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
    }
}

// Function to setup navigation links with smooth scrolling
function setupNavigationLinks() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const targetId = this.getAttribute('href');
            window.location.href = targetId; // Navigate to the new page
        });
    });
}

// Function to load images into a gallery
function loadImages() {
    const containerId = getCurrentContainerId();
    const imageArray = imageCollections[containerId];

    if (imageArray) {
        const container = document.getElementById(`${containerId}_container`);
        if (!container) {
            console.error(`Container with ID ${containerId}_container not found.`);
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
}

// Function to get current container ID based on the page
function getCurrentContainerId() {
    if (document.getElementById('mission_container')) {
        return 'mission';
    } else if (document.getElementById('after_container')) {
        return 'after';
    } else if (document.getElementById('before_container')) {
        return 'before';
    }
    return null;
}

// Function to setup user preferences
function setupUserPreferences() {
    const themeSelector = document.getElementById('theme-selector');
    if (themeSelector) {
        // Load saved theme from localStorage
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.className = savedTheme;
        themeSelector.value = savedTheme;

        // Listen for changes to the theme selector
        themeSelector.addEventListener('change', function () {
            const selectedTheme = this.value;
            document.body.className = selectedTheme;
            localStorage.setItem('theme', selectedTheme); // Save theme to localStorage
        });
    }
}






