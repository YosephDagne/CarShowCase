export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "2928cc71d9mshd5b0f6b9ba6b2abp16b51cjsndfdddf781ad2",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const response = await fetch(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
      {
        // method: "GET",
        headers: headers,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data); // for debugging
    return data;
  } catch (error) {
    console.error("Failed to fetch cars:", error);
    return null;
  }
}
