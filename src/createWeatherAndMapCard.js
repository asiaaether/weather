export function createWeatherAndMapCard(el, weatherData) {
  el.innerHTML = `
      <div class="weather-box">
      <p class="city">${weatherData.name}</p>
      <p class="temp">${Math.round(weatherData.main.temp - 273)}&deg</p>
      <p class="descr">${weatherData.weather[0].description}</p>
      <div class="icon"><img src="https://openweathermap.org/img/wn/${
        weatherData.weather[0].icon
      }@2x.png"></div>
      </div>`;
  const API_MAP = "AIzaSyCVGDC-uRpiX2HiexHVIBHz5k_obk7c1XQ";
  const map = document.createElement("div");
  map.classList.add("map");
  el.querySelector(".weather-box").append(map);
  map.innerHTML = `<img src="https://maps.googleapis.com/maps/api/staticmap?center=${weatherData.name}&zoom=9&size=300x300&&markers=size:mid%7Ccolor:0xFFFF00%7C${weatherData.name}&key=${API_MAP}">`;
}
