"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchManufacture from "./SearchManufacture";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
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

    model ? searchParams.set("model", model) : searchParams.delete("model");
    manufacturer
      ? searchParams.set("manufacturer", manufacturer)
      : searchParams.delete("manufacturer");

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname);
  };

  return (
    <form
      className="flex items-center gap-2 max-sm:flex-col w-full relative max-w-3xl bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 p-2 border border-gray-200"
      onSubmit={handleSearch}
    >
      {/* Manufacturer Search */}
      <div className="flex-1 max-sm:w-full flex items-center relative group">
        <SearchManufacture
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <Image
          src="/car-logo.svg" // Consider using a car brand icon
          width={24}
          height={24}
          className="absolute left-4 top-1/2 -translate-y-1/2 opacity-60 group-focus-within:opacity-100 transition-opacity"
          alt="Manufacturer"
          aria-hidden="true"
        />
      </div>

      {/* Model Search */}
      <div className="flex-1 max-sm:w-full flex items-center relative group">
        <Image
          src="/model-icon.png"
          width={24}
          height={24}
          className="absolute left-4 top-1/2 -translate-y-1/2 opacity-60 group-focus-within:opacity-100 transition-opacity"
          alt="Model"
          aria-hidden="true"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Enter model (e.g. Tiguan)"
          className="w-full h-12 pl-12 pr-6 bg-gray-50 rounded-full outline-none text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
        />
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:ring-offset-2 transition-all duration-200 active:scale-95 whitespace-nowrap max-sm:w-full"
      >
        <Image
          src="/magnifying-glass.svg"
          width={20}
          height={20}
          className="filter-white"
          alt="Search"
          aria-hidden="true"
        />
        <span className="font-medium">Search</span>
      </button>
    </form>
  );
};

export default SearchBar;
