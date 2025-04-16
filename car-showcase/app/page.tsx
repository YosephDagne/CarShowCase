import { Hero, CarCard, SearchBar, CustomFilter } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  // Fetch car data
  const allCars = await fetchCars();

  // Check if data is empty or invalid
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width ml-10" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container mt-6">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>

        {/* Display cars if data is not empty */}
        {!isDataEmpty ? (
          <section className="pt-14">
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8">
              {allCars.map((car, index) => (
                <CarCard key={`${car.make}-${car.model}-${index}`} car={car} />
              ))}
            </div>
          </section>
        ) : (
          // Show "No results" message if data is empty
          <div className="mt-16 flex justify-center items-center flex-col gap-2">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p className="text-sm text-gray-600">
              {allCars?.message || "No cars were found based on your search."}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
