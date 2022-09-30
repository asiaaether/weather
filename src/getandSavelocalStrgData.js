export function getlocalStrgData() {
  const itemsArray = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
  return itemsArray;
}

export function savelocalStrgData(itemsArray) {
  if (itemsArray.length > 10) {
    itemsArray.splice(0, 1);
  }
  localStorage.setItem("items", JSON.stringify(itemsArray));
}
