import { getCityInputWeather } from "./getCityInputWeather";
import { createWeatherAndMapCard } from "./createWeatherAndMapCard";
import { getlocalStrgData, savelocalStrgData } from "./getandSavelocalStrgData";
import { showLocalStrgData } from "./showLocalStrgData";
import { listItemsClickListener } from "./listItemsClickListener";

export function inputSubmitListener() {
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const ul = document.querySelector("ul");
  const weatherCard = document.querySelector(".weather-wrapper");
  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const cityName = input.value;
    const itemsArray = await getlocalStrgData();
    const weatherData = await getCityInputWeather(cityName);
    createWeatherAndMapCard(weatherCard, weatherData);
    itemsArray.push(cityName);
    savelocalStrgData(itemsArray);
    showLocalStrgData(itemsArray, ul);
    input.value = "";
    listItemsClickListener();
  });
}
