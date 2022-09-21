import "../css/styles.css";

const key = "64f45536de3a12fd1c733f87022e629e";

(async function () {
  const formEl = document.querySelector("form");
  const weatherInfoEl = document.querySelector("#weatherInfo");

  function showWeather(el, weatherInfo) {
    el.innerHTML = JSON.stringify(weatherInfo, null, 2);
  }

  /**
   * @param {string} cityName
   */
  async function getWeather(cityName) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${key}`
    );

    if (response.ok) {
      return response.json();
    }
    return Promise.reject("error");
  }

  formEl.addEventListener("submit", async (ev) => {
    ev.preventDefault();

    const formElement = ev.target;
    const inputEl = formElement.querySelector("input");
    const cityName = inputEl.value;
    inputEl.value = "";

    const weather = await getWeather(cityName);
    showWeather(weatherInfoEl, weather);
  });
})();
