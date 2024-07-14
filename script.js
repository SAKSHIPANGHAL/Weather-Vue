
document.getElementById('search-button').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    getWeather(city);
});

async function getWeather(city) {
    const apiKey = '0745e0a80a66ff63b23172e8c3ab3ab0'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        const weatherData = {
            city: data.name,
            temperature: `${data.main.temp}°C`,
            description: data.weather[0].description,
            humidity: `${data.main.humidity}%`,
            wind: `${data.wind.speed} km/h`
        };
        displayWeather(weatherData);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = `
        <h3>Weather in ${data.city}</h3>
        <p>Temperature: ${data.temperature}</p>
        <p>Description: ${data.description}</p>
        <p>Humidity: ${data.humidity}</p>
        <p>Wind: ${data.wind}</p>
    `;
}
