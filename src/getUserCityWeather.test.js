import { getUserCityWeather } from "./getUserCityWeather";

describe("getUserCityWeather", () => {
  const unmockedFetch = global.fetch;
  let ipData;

  beforeAll(() => {
    global.fetch = jest.fn();
    ipData = { latitude: 59.8983, longitude: 30.2618 };
  });

  afterAll(() => {
    global.fetch = unmockedFetch;
  });

  it("function calls fetch and returns the weather data", async () => {
    const cityName = "Saint Petersburg";
    const description = "light rain";
    const icon = "10n";
    const temp = 278.47;
    const API_KEY_WEATHER = "64f45536de3a12fd1c733f87022e629e";
    const data = {
      weather: [
        {
          description,
          icon,
        },
      ],
      main: {
        temp,
      },
      name: cityName,
    };

    global.fetch.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(data),
      })
    );

    const res = await getUserCityWeather(ipData);

    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.openweathermap.org/data/2.5/weather?lat=${ipData.latitude}&lon=${ipData.longitude}&appid=${API_KEY_WEATHER}`
    );
    expect(res).toStrictEqual(data);
  });
  it("the fetch fails with an error", async () => {
    global.fetch.mockImplementation(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve(),
      })
    );

    try {
      await getUserCityWeather(ipData);
    } catch (e) {
      expect(e).toMatch("Invalid City");
    }
  });
});
