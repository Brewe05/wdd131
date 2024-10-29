document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript is running!");

    // Array of products
    const products = [
        { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "power laces", averagerating: 4.7 },
        { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];

    // Populate Product Name dropdown
    const productNameDropdown = document.querySelector('#product-name');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productNameDropdown.appendChild(option);
    });

    // Handle form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const productName = document.querySelector('#product-name').value;
        const rating = document.querySelector('input[name="rating"]:checked').value;
        const dateOfInstallation = document.querySelector('#date-of-installation').value;
        const features = Array.from(document.querySelectorAll('input[name="features"]:checked')).map(el => el.value);
        const writtenReview = document.querySelector('#written-review').value;
        const userName = document.querySelector('#user-name').value;

        console.log('Product Name:', productName);
        console.log('Rating:', rating);
        console.log('Date of Installation:', dateOfInstallation);
        console.log('Features:', features);
        console.log('Written Review:', writtenReview);
        console.log('User Name:', userName);

        // Here you can add code to send the data to a server or process it further
    });
});


