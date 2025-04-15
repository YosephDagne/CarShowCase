import { CarCard, Hero } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />

      {!isDataEmpty ? (
        <section>
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
            {allCars.map((car) => (
              <CarCard key={car.id}  car={car} />
            ))}
          </div>
        </section>
      ) : (
        <div className="mt-16 flex justify-center items-center flex-col gap-2">
          <h2 className="text-black text-xl font-bold">Oops , no results</h2>
          <p>{allCars?.message}</p>
        </div>
      )}
    </main>
  );
}
