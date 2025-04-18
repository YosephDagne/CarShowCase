"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchManufacture from "./SearchManufacture";
import Image from "next/image";
import { useRouter } from "next/navigation"; 

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacture, setManufacture] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const updateSearchParams = (model: string, manufacture: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacture) {
      searchParams.set("manufacture", manufacture);
    } else {
      searchParams.delete("manufacture");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!manufacture.trim()) return alert("Please enter a manufacturer");

    updateSearchParams(model.toLowerCase(), manufacture.toLowerCase());
  };

  return (
    <form
      className="flex items-center gap-2 max-sm:flex-col w-full relative max-w-3xl bg-white rounded-[10px] p-2 border border-gray-200"
      onSubmit={handleSearch}
    >
      <div className="w-full flex-1 relative">
        <SearchManufacture
          manufacture={manufacture}
          setManufacture={setManufacture}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      <div className="searchbar__item relative w-full flex-1">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4 top-1/2 transform -translate-y-1/2"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input pl-12" 
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      <SearchButton otherClasses="max-sm:hidden" />

      <button
        type="submit"
        className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:ring-offset-2 transition-all duration-200 active:scale-95 whitespace-nowrap max-sm:w-full cursor-pointer"
      >
        <Image
          src="/magnifying-glass.svg"
          width={20}
          height={20}
          className="filter-white"
          alt="Search"
          aria-hidden="true"
        />
      </button>
    </form>
  );
};

export default SearchBar;
