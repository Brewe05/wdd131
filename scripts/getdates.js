console.log("getdates.js is loaded");

// Get the current year
const currentYear = new Date().getFullYear();
const copyrightElement = document.getElementById('copyright');
if (copyrightElement) {
    copyrightElement.textContent = `© ${currentYear} Brent Welsford`;
} else {
    console.error('Element with ID "copyright" not found.');
}

// Get the last modified date
const lastModified = new Date(document.lastModified);
const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    // Format the date to day/month/year and include time
    const day = String(lastModified.getDate()).padStart(2, '0');
    const month = String(lastModified.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = lastModified.getFullYear();
    const hours = String(lastModified.getHours()).padStart(2, '0');
    const minutes = String(lastModified.getMinutes()).padStart(2, '0');
    const seconds = String(lastModified.getSeconds()).padStart(2, '0');
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    lastModifiedElement.textContent = `Last Modified: ${formattedDate}`;
} else {
    console.error('Element with ID "lastModified" not found.');
}
