// utils/index.ts

export async function fetchCars(make = "toyota", model = "camry") {
  const url = `https://api.api-ninjas.com/v1/cars?make=${make}&model=${model}`;

  try {
    const res = await fetch(url, {
      headers: {
        "X-Api-Key": "6xWuWKdi18bBmgneuoIyJw==68kVxywZQVB94U6U",
      },
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("fetchCars error:", error);
    return [];
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
