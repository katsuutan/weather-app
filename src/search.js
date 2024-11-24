import { getWeather } from ".";

export default function searchButton() {
    const searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const location = document.getElementById('location').value;

        getWeather(location);
    });
}