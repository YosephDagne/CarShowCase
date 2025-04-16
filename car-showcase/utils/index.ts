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

export function calculateCarRent(city_mpg: number, year: number) {
  const basePricePerDay = 50; // Base price per day in USD
  const mileageFactor = 0.1; // Factor for city_mpg
  const ageFactor = 0.05; // Factor for car age

  
  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const carAge = (new Date().getFullYear() - year) * ageFactor;


  // Calculate total rent per day
  const totalRentPerDay = basePricePerDay + mileageRate + carAge;

  return totalRentPerDay.toFixed(0); // Return as a string

}
