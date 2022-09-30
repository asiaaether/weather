export async function getUserCityWeather(ipData) {
  const key = "64f45536de3a12fd1c733f87022e629e";
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${ipData.latitude}&lon=${ipData.longitude}&appid=${key}`
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error("Invalid City");
  } catch (e) {
    console.log(e);
  }
  return null;
}
