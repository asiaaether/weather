import { getIpData } from "./getIpData";

describe("getIpData", () => {
  const unmockedFetch = global.fetch;

  beforeAll(() => {
    global.fetch = jest.fn();
  });

  afterAll(() => {
    global.fetch = unmockedFetch;
  });

  it("getIpData calls fetch and returns the user location", async () => {
    const lon = 55.79047;
    const lat = 49.11644;
    const ipObj = { lon, lat };

    global.fetch.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(ipObj),
      })
    );

    const res = await getIpData();

    expect(global.fetch).toHaveBeenCalledWith("https://ipapi.co/json/");
    expect(res).toStrictEqual(ipObj);
  });
  it("the fetch fails with an error", async () => {
    global.fetch.mockImplementation(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve(),
      })
    );

    try {
      await getIpData();
    } catch (e) {
      expect(e).toMatch("Error");
    }
  });
});
