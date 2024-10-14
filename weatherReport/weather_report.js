function showWeatherDetails(event) {
    event.preventDefault();

    // Get the city input value inside the event handler
    const city = document.getElementById('city').value;
    const apikey = 'fb3524f37c52105d4723643e9ecc7881'; // Correct variable name
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`; // Use `apikey` here

    // Fetch the weather data
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                     <p>Temperature: ${data.main.temp} &#8451;</p>
                                     <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error("Error fetching the weather data:", error);
            const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

// Add event listener to the form submission
document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);