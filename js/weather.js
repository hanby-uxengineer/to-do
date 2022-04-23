const API_KEY = "6b1e50edf8604db35a3a50635d441dd9";
const weather = Clouds;

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then(data => {
        const city = document.querySelector("#weather span:first-child");
        weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }));
}

function onGeoError() {
    alert("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

export { weather };