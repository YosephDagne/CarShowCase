"use client";

import React, { useState } from "react";
import SearchManufacture from "./SearchManufacture";

const SearchBar = () => {
  const [manufacture, setManufacture] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!manufacture.trim()) return alert("Please enter a manufacturer");
    console.log("Searching for:", manufacture);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-start max-sm:flex-col w-full relative gap-4 max-w-3xl bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 p-2 border border-gray-100"
    >
      <div className="w-full flex-1">
        <SearchManufacture
          manufacture={manufacture}
          setManufacture={setManufacture}
        />
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 focus:ring-offset-2 transition-all duration-200 active:scale-95 shadow-sm hover:shadow-blue-200/50 whitespace-nowrap cursor-pointer"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
