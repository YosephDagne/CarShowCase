'use client';

import { useState, Fragment } from 'react';
import Image from 'next/image';
import { Combobox, Transition } from '@headlessui/react';
import { manufacturers } from '@/constants';
import { SearchManufactureProps } from '@/types';

const SearchManufacture = ({ manufacture, setManufacture }: SearchManufactureProps) => {
  const [query, setQuery] = useState('');
  const [showInput, setShowInput] = useState(false);

  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((item) =>
          item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className="relative flex items-center gap-3">
      {/* Search Button */}
      <button
        type="button"
        onClick={() => setShowInput((prev) => !prev)}
        className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded hover:bg-gray-300"
      >
        <Image src="/car-logo.svg" width={20} height={20} alt="Car Logo" />
      </button>

      {/* Search Input shown only when toggled */}
      {showInput && (
        <Combobox value={manufacture} onChange={setManufacture}>
          <div className="relative w-56">
            <Combobox.Input
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
              displayValue={(manufacturer: string) => manufacturer}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery('')}
            >
              <Combobox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 overflow-auto rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none">
                {filteredManufacturers.length === 0 && query !== '' ? (
                  <Combobox.Option value={query} className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                    Create "{query}"
                  </Combobox.Option>
                ) : (
                  filteredManufacturers.map((item) => (
                    <Combobox.Option
                      key={item}
                      value={item}
                      className={({ active }) =>
                        `px-4 py-2 cursor-pointer ${
                          active ? 'bg-blue-600 text-white' : 'text-gray-900'
                        }`
                      }
                    >
                      {item}
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
