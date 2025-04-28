"use client";

import { useEffect, useState } from "react";
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";


export default function Home() {
  const [allCars, setAllCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false);

  // search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // filter states
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  // pagination states
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);

    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });

      // Check for results and set cars, default to empty if no result
      setAllCars(result || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model]);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length === 0;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 pl-20 max-width" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {isDataEmpty ? (
          <div className="mt-16 flex justify-center items-center flex-col gap-2">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>No cars match your criteria.</p>
          </div>
        ) : (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {allCars.map((car) => (
                <CarCard  car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={limit / 10}
              isNext={allCars.length >= limit}
              setLimit={setLimit}
            />
          </section>
        )}
      </div>
    </main>
  );
}
