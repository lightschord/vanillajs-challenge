const WEATHER_API_KEY = '766cca95316328eefe7e4d343543b5de';

function handleGeoSucc(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&&units=metric&appid=${WEATHER_API_KEY}`
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather h3 span:first-child");
      const weather = document.querySelector("#weather h3 span:last-child");
      city.innerText = `city: ${data.name}`;
      weather.innerText = `weather: ${data.weather[0].main}`;
    });
}
function handleGeoFail() {
  
}
navigator.geolocation.getCurrentPosition(handleGeoSucc, handleGeoFail);
