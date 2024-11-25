import "./styles.css";
import searchButton from "./search";

// eslint-disable-next-line no-use-before-define
export { clearDisplayData, getWeather };

// Processes the WeatherData and returns an object with only data used on the site.
function convertData(weatherData) {
    const myData = {
        currentTempF: weatherData.currentConditions.temp,
        currentTempC: Number(((weatherData.currentConditions.temp - 39) * 5 / 9).toFixed(1)),
        location: weatherData.resolvedAddress,
    }
    
    return myData;
}

// Takes in the converted Weather Data object and manipulates DOM to display information.
function displayData(convertedData){
    const weatherDiv = document.getElementById('weather-container');

    const location = document.createElement('div');
    location.textContent = convertedData.location;

    const tempF = document.createElement('div');
    tempF.textContent = `${convertedData.currentTempF}\u00B0F`;

    const tempC = document.createElement('div');
    tempC.textContent = `${convertedData.currentTempC}\u00B0C`;


    weatherDiv.appendChild(location);
    weatherDiv.appendChild(tempF);
    weatherDiv.appendChild(tempC);
}

function clearDisplayData(){
    const weatherDiv = document.getElementById('weather-container');
    while (weatherDiv.firstChild) {
        weatherDiv.removeChild(weatherDiv.firstChild);
    }
}

// Grabs Weather Data using API.
async function getWeather(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=7TVV8XALU8HFN2D4GRPBMWCB5`, {mode: 'cors'});
        const weatherData = await response.json();

        // Converts raw data and turns into relevant object for us.
        const convertedData = convertData(weatherData);

        // Calls a function to Display convertedData to page utilizing DOM manipulation
        displayData(convertedData);

    } catch (error) {
        console.error(error);
        const errorDiv = document.getElementById('weather-container');
        errorDiv.textContent = 'Error 404: ' + error;
    }
}

searchButton();
