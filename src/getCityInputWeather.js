const key = "64f45536de3a12fd1c733f87022e629e";

export async function getCityInputWeather(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${key}`
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error("Invalid Input");
  } catch (e) {
    console.log(e);
  }
  return null;
}
