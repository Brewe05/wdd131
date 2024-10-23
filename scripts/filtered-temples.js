document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript is running!");

    document.getElementById('hamburger').addEventListener('click', function() {
        console.log("Hamburger clicked!");
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.toggle('show');
    });

    const temples = [
        { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
        { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
        { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
        { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
        { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974, November, 19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
        { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
        { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983, December, 2", area: 116642, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" },
        { templeName: "Durban South Africa", location: "Durban, KZN South Africa", dedicated: "2020, February, 16", area: 19860, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-35780.jpg" },
        { templeName: "Kowloon City Hong Kong", location: "Kowloon City, Hong Kong", dedicated: "2022, June, 19", area: 51921, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg" },
        { templeName: "Manila Philippines", location: "Manila, Philippines", dedicated: "1984, September, 25-27", area: 26683, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg" }
    ];

    const templesContainer = document.getElementById('temples-container');

    function displayTemples(filteredTemples) {
        templesContainer.innerHTML = ''; // Clear the container before displaying
        filteredTemples.forEach(temple => {
            // Create temple card container
            const templeCard = document.createElement('div');
            templeCard.className = 'temple-card';
            // Create and append temple name
            const templeName = document.createElement('h3');
            templeName.textContent = temple.templeName;
            templeCard.appendChild(templeName);
            // Create and append location
            const location = document.createElement('p');
            location.textContent = `Location: ${temple.location}`;
            templeCard.appendChild(location);
            // Create and append dedication date
            const dedicated = document.createElement('p');
            dedicated.textContent = `Dedicated: ${temple.dedicated}`;
            templeCard.appendChild(dedicated);
            // Create and append area
            const area = document.createElement('p');
            area.textContent = `Area: ${temple.area} sq ft`;
            templeCard.appendChild(area);
            // Create and append image
            const image = document.createElement('img');
            image.src = temple.imageUrl;
            image.alt = `${temple.templeName} Temple`;
            image.loading = 'lazy';
            templeCard.appendChild(image);
            // Append temple card to container
            templesContainer.appendChild(templeCard);
        });
    }

    // Initial display
    displayTemples(temples);

    // Filter functions
    document.getElementById('filter-old').addEventListener('click', function() {
        console.log("Old temples filter clicked!");  // Debugging line
        const filtered = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 2000);
        displayTemples(filtered);
    });

    document.getElementById('filter-new').addEventListener('click', function() {
        const filtered = temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 2000);
        displayTemples(filtered);
    });

    document.getElementById('filter-large').addEventListener('click', function() {
        const filtered = temples.filter(temple => temple.area > 50000);
        displayTemples(filtered);
    });

    document.getElementById('filter-small').addEventListener('click', function() {
        const filtered = temples.filter(temple => temple.area <= 50000);
        displayTemples(filtered);
    });

    document.getElementById('filter-home').addEventListener('click', function() {
        const filtered = temples.filter(temple => temple.location.includes("United States"));
        displayTemples(filtered);
    });
});
