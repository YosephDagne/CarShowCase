"use client";

import { useState, Fragment } from 'react';
import Image from 'next/image';
import{Combobox, Transition} from '@headlessui/react'

import { SearchManufactureProps } from '@/types'
import React from 'react'


const SearchManufacture = ({manufacture, setManufacture}:SearchManufactureProps) => {
    const [query, setQuery]= useState('')
  return (
    <div className='search-manufacture'>
        <Combobox>
            <div className='relative w-full'>
          <Combobox.Button className="absolute top-[14px]">
            <Image
                src="/car-logo.svg"
                width={20}
                height={20}
                className="ml-4"
                alt="Car Logo"

            />

          </Combobox.Button>
          <Combobox.Input
                className="search-manufacture__input"
                placeholder='Volkswagen'
                displayValue={(manufacture:string)=>
                manufacture}
                onChange={(e)=> setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            Leave= "transition ease-in duration-100"
            LeaveFrom >

          </Transition>

            </div>

        </Combobox>
    </div>
  )
}

export default SearchManufacture