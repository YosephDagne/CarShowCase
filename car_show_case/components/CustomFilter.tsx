"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";

const CustomFilter = ({ title, options, setFilter }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="w-full max-w-[200px]">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          setFilter(e.value);
        }}
      >
        <div className="relative w-full mt-5">
          <Listbox.Button className="flex justify-between items-center w-full px-4 py-2 bg-white border rounded-md shadow-sm cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <span className="truncate text-gray-700">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-2"
              alt="chevron up down"
            />
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition-opacity ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 w-full max-h-60 overflow-auto bg-white border rounded-md shadow-lg ring-1 ring-gray-300 focus:outline-none">
              {options.map((option) => (
                <Listbox.Option
                  key={`${option.title}-${option.value}`}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 px-4 text-sm text-gray-800 hover:bg-blue-500 hover:text-white ${
                      active ? "bg-blue-500 text-white" : ""
                    }`
                  }
                >
                  {({ selected: isSelected }) => (
                    <span
                      className={`block truncate ${
                        isSelected ? "font-semibold" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
