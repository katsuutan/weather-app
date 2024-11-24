import "./styles.css";
import searchButton from "./search";

export { getWeather };

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

}

// Grabs Weather Data using API.
async function getWeather(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=7TVV8XALU8HFN2D4GRPBMWCB5`, {mode: 'cors'});
        const weatherData = await response.json();
        console.log(weatherData); // Testing only, remove later

        const convertedData = convertData(weatherData);
        console.log(convertedData) // Testing only, remove later

        // Calls a function to Display convertedData to page utilizing DOM manipulation
        // displayData(convertedData);

    } catch (error) {
        console.error(error);
    }
}

searchButton();
