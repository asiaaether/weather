import { getCityInputWeather } from "./getCityInputWeather";

describe("getCityInputWeather", () => {
  const unmockedFetch = global.fetch;
  const cityName = "Moscow";

  beforeAll(() => {
    global.fetch = jest.fn();
  });

  afterAll(() => {
    global.fetch = unmockedFetch;
  });

  it("function calls fetch and returns the weather data", async () => {
    const description = "clear sky";
    const icon = "01d";
    const temp = 282.55;
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

    const res = await getCityInputWeather(cityName);

    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API_KEY_WEATHER}`
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
      await getCityInputWeather(cityName);
    } catch (e) {
      expect(e).toMatch("Invalid City");
    }
  });
});
