export function showLocalStrgData(itemsArray, el) {
  el.innerHTML = `${itemsArray.map((item) => `<li>${item}</li>`).join("")}`;
}
