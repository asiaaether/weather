const key = "64f45536de3a12fd1c733f87022e629e";

export async function getCityInputWeather(cityName) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${key}`
  );

  if (response.ok) {
    return response.json();
  }
  return Promise.reject("error");
}
