"use client";

import React, { Fragment, useState } from "react";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="w-fit">
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        <div className="relative w-fit z-20">
          <Listbox.Button className="relative w-full min-w-[100px] max-w-[150px] text-sm flex justify-between items-center cursor-pointer rounded-md bg-white py-1.5 px-2 text-left shadow-sm sm:text-xs border">
            <span className="block truncate">{selectedOption.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="Toggle options"
            />
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-xs z-30">
              {options.map((option, index) => (
                <Listbox.Option
                  key={`${option.title}-${index}`}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-blue-200 text-blue-700" : "text-black"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
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
