export async function getIpData() {
  try {
    const response = await fetch("https://ipapi.co/json/");

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error("Error");
  } catch (e) {
    console.log(e);
  }
  return null;
}
