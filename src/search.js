import { clearDisplayData, getWeather } from ".";

export default function searchButton() {
    const searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();

        clearDisplayData(); // Refreshes display upon search button press.

        const location = document.getElementById('location').value;

        getWeather(location);
    });
}