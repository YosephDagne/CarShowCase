"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { Combobox, Transition } from "@headlessui/react";
import { manufacturers } from "@/constants";
import { SearchManufactureProps } from "@/types";

const SearchManufacture = ({
  manufacture,
  setManufacture,
}: SearchManufactureProps) => {
  const [query, setQuery] = useState("");
  const [showInput, setShowInput] = useState(false);

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="relative flex items-center gap-4">
      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setShowInput((prev) => !prev)}
        className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label={
          showInput ? "Close manufacturer search" : "Open manufacturer search"
        }
      >
        <Image
          src="/search.png"
          width={24}
          height={24}
          alt="Car manufacturer logo"
          className="object-contain cursor-pointer"
        />
      </button>

      {/* Combobox */}
      {showInput && (
        <Combobox value={manufacture} onChange={setManufacture}>
          <div className="relative w-64">
            <Combobox.Input
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              displayValue={(manufacturer: string) => manufacturer}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              placeholder="Search manufacturer..."
              aria-label="Search manufacturers"
            />

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg max-h-60 overflow-auto ring-1 ring-black ring-opacity-5 focus:outline-none text-sm scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {filteredManufacturers.length === 0 && query !== "" ? (
                  <Combobox.Option
                    value={query}
                    className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                  >
                    No results, use "{query}"
                  </Combobox.Option>
                ) : (
                  filteredManufacturers.map((item) => (
                    <Combobox.Option
                      key={item}
                      value={item}
                      className={({ active, selected }) =>
                        `px-4 py-2 cursor-pointer transition-colors ${
                          active
                            ? "bg-blue-500 text-white"
                            : selected
                            ? "bg-gray-100 font-medium"
                            : "text-gray-800"
                        }`
                      }
                    >
                      {({ selected }) => (
                        <span
                          className={`flex items-center ${
                            selected ? "font-semibold" : ""
                          }`}
                        >
                          {item}
                          {selected && (
                            <span className="ml-2 text-blue-500">✓</span>
                          )}
                        </span>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      )}
    </div>
  );
};

export default SearchManufacture;
