import { CarProps } from "@/types";


export async function fetchCars(make = "toyota", model = "camry") {
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla${make}&model=${model}`;

  try {
    const res = await fetch(url, {
      headers: {
        "x-rapidapi-key": "2928cc71d9mshd5b0f6b9ba6b2abp16b51cjsndfdddf781ad2",
        "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
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
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const carAge = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rent per day
  const totalRentPerDay = basePricePerDay + mileageRate + carAge;

  return totalRentPerDay.toFixed(0); // Return as a string
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;

 }