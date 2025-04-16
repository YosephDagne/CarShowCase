"use client";

import React from "react";

import { useState } from "react";
import { SearchManufacture } from "./";

const SearchBar = () => {
  const [manufacture, setManufacture] = useState("");
  const handleSearch = () => {};
  return (
    <form
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
      onSubmit={handleSearch}
    >
      <div className="w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm">
        <SearchManufacture
          manufacture={manufacture}
          setManufacture={setManufacture}
        />
      </div>
    </form>
  );
};

export default SearchBar;
