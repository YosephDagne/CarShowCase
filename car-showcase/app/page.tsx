"use client";
import { useState, useEffect } from "react";

import { Hero, CarCard, SearchBar, CustomFilter } from "@/components";
import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";
import ShowMore from "@/components/ShowMore";
import Image from "next/image";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search/filter states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(2022);
  const [fuel, setFuel] = useState("");
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        model: model || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
      });
      setAllCars(result);
    } catch (error) {
      console.log("Error fetching cars:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [manufacturer, model, year, fuel, limit]);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width ml-10" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className="flex justify-start flex-wrap items-center gap-2 mt-6">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setYear={setYear}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section className="pt-14">
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8">
              {allCars.map((car, index) => (
                <CarCard key={`${car.make}${car.model}${index}`} car={car} />
              ))}
            </div>
            {loading && (
              <div className="w-full flex-center mt-16">
                <Image
                  src="/loader.svg"
                  alt="loader"
                  className="object-contain"
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit/ 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="mt-16 flex justify-center items-center flex-col gap-2">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p className="text-sm text-gray-600">
              No cars were found based on your search.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
