import { getlocalStrgData, savelocalStrgData } from "./getandSavelocalStrgData";

describe("localStorageData", () => {
  let mockFridge;
  const unmockedStorageSetItem = global.Storage.prototype.setItem;
  const unmockedStorageGetItem = global.Storage.prototype.getItem;
  const storageKey = "items";

  beforeAll(() => {
    mockFridge = {};
    global.Storage.prototype.setItem = jest.fn((key, value) => {
      mockFridge[key] = value;
    });
    global.Storage.prototype.getItem = jest.fn(
      (key) => mockFridge[key] ?? "[]"
    );
  });

  beforeEach(() => {
    mockFridge = {};
  });

  afterAll(() => {
    global.Storage.prototype.setItem = unmockedStorageSetItem;
    global.Storage.prototype.getItem = unmockedStorageGetItem;
  });
  it("function should return [] if local storage is empty", async () => {
    const res = await getlocalStrgData();

    expect(res).toStrictEqual([]);
    expect(global.Storage.prototype.getItem).toHaveBeenCalledWith(storageKey);
  });
  it("should save items in localStorage", async () => {
    const itemsArray = ["Выборг"];

    savelocalStrgData(itemsArray);

    const expItemsArray = '["Выборг"]';

    const expFridge = {};
    expFridge[storageKey] = expItemsArray;

    expect(mockFridge).toStrictEqual(expFridge);
    expect(global.Storage.prototype.setItem).toHaveBeenCalledWith(
      storageKey,
      expItemsArray
    );
  });
  it("should save only 10 items to localStorage", async () => {
    const itemsArray = [
      "Выборг",
      "Москва",
      "Тверь",
      "Саратов",
      "Омск",
      "Санкт-Петербург",
      "Томск",
      "Киев",
      "Милан",
      "Париж",
      "Лондон",
    ];

    savelocalStrgData(itemsArray);

    const expItemsArray =
      '["Москва","Тверь","Саратов","Омск","Санкт-Петербург","Томск","Киев","Милан","Париж","Лондон"]';

    const expFridge = {};
    expFridge[storageKey] = expItemsArray;

    expect(mockFridge).toStrictEqual(expFridge);
  });
});
