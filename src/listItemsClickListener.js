import { getCityInputWeather } from "./getCityInputWeather";
import { createWeatherAndMapCard } from "./createWeatherAndMapCard";

export function listItemsClickListener() {
  const listItems = document.querySelectorAll("li");
  listItems.forEach((item) => {
    item.addEventListener("click", async () => {
      const weatherCard = document.querySelector(".weather-wrapper");
      const cityName = item.textContent;
      const weatherData = await getCityInputWeather(cityName);
      createWeatherAndMapCard(weatherCard, weatherData);
    });
  });
}
