function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

document.addEventListener('DOMContentLoaded', function() {
    const temperature = 10; // °C
    const windSpeed = 5; // km/h

    let windChill;
    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
    } else {
        windChill = "N/A";
    }

    document.getElementById('wind-chill').textContent = windChill;
});
