"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchManufacturer from "@/components/SearchManufacture";

// SearchButton component for reusability
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button
    type="submit"
    className={`absolute right-4 z-10 ${otherClasses} flex justify-center items-center`}
  >
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={30}
      height={30}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer.trim() === "" && model.trim() === "") {
      return alert("Please provide some input");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname);
  };

  return (
    <form
      className="flex items-center justify-between w-full max-sm:flex-col max-sm:gap-4 max-w-3xl relative"
      onSubmit={handleSearch}
    >
      {/* Manufacturer Search */}
      <div className="flex-1 max-sm:w-full relative">
        <SearchManufacturer
          selected={manufacturer}
          setSelected={setManuFacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      {/* Model Search */}
      <div className="flex-1 max-sm:w-full relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <Image
            src="/model-icon.png"
            width={20}
            height={20}
            alt="car model"
            className="object-contain"
          />
        </div>
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan..."
          className="w-full h-[48px] pl-12 pr-4 bg-light-white rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm bg-white"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      {/* Show Search Button on larger screens */}
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
