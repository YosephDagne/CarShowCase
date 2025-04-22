import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, fuel, limit, model } = filters;
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`;

  try {
    const res = await fetch(url, {
      method: "GET",
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

  if (angle) {
    url.searchParams.append("angle", angle);
  }

  return url.toString();
};

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${
    window.location.pathname
  }?${newSearchParams.toString()}`;

  return newPathname;
};
function getCarImage(imageSearchTerm: string) {
  throw new Error("Function not implemented.");
}
