import { showLocalStrgData } from "./showLocalStrgData";

describe("showLocalStrgData", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
    document.body.append(el);
  });

  afterEach(() => {
    document.querySelector("html").innerHTML = null;
  });
  it("function adds LocalStorage data to the list", async () => {
    const itemsArray = ["Выборг", "Москва", "Тверь"];

    showLocalStrgData(itemsArray, el);

    expect(el.innerHTML).toStrictEqual(
      "<li>Выборг</li><li>Москва</li><li>Тверь</li>"
    );
  });
});
