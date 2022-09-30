import { getlocalStrgData } from "./getandSavelocalStrgData";
import { getIpData } from "./getIpData";
import { getUserCityWeather } from "./getUserCityWeather";
import { createWeatherAndMapCard } from "./createWeatherAndMapCard";
import { showLocalStrgData } from "./showLocalStrgData";
import { inputSubmitListener } from "./inputSubmitListener";
import { listItemsClickListener } from "./listItemsClickListener";

export async function realizeWeatherForecast(el) {
  el.innerHTML = `
  <div class="container">
    <div class="weather-wrapper"></div>
  </div>
  `;
  const container = document.querySelector(".container");
  const itemsArray = await getlocalStrgData();
  const ipData = await getIpData();
  const weatherData = await getUserCityWeather(ipData);
  container.innerHTML += `
  <div class="form-wrapper">
    <div class="form">
      <form>
        <input type="text" placeholder="Введите город" required autofocus>
        <button>Узнать погоду</button>
      </form>
    </div>
    <div class="list"><ul></ul></div>
  </div>
  `;
  const weatherCard = document.querySelector(".weather-wrapper");
  const ul = document.querySelector("ul");
  createWeatherAndMapCard(weatherCard, weatherData);
  showLocalStrgData(itemsArray, ul);
  inputSubmitListener();
  listItemsClickListener();
}
