"use client";

import React, { useState } from "react";
import CarDetails from "./CarDetails";

type CarCardProps = {
  car: {
    make: string;
    model: string;
    year: number;
    fuel_type: string;
    transmission: string;
    drive: string;
    cylinders: number;
    displacement: number;
    class: string;
  };
};

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  // State to handle whether the modal is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const handleOpenModal = () => setIsOpen(true);

  // Function to close the modal
  const handleCloseModal = () => setIsOpen(false);

  return (
    <div className="car-card border p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">
        {car.make} {car.model}
      </h2>
      <p>Year: {car.year}</p>
      <p>Fuel Type: {car.fuel_type}</p>
      <p>Transmission: {car.transmission}</p>
      <p>Drive: {car.drive}</p>
      <p>Cylinders: {car.cylinders}</p>
      <p>Displacement: {car.displacement}L</p>
      <p>Class: {car.class}</p>

      {/* Button to open the modal */}
      <button
        onClick={handleOpenModal}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        View Details
      </button>

      {/* CarDetails component with isOpen state */}
      <CarDetails isOpen={isOpen} closeModal={handleCloseModal} car={car} />
    </div>
  );
};

export default CarCard;


import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import CustomButton from "./CustomButton";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <article
      className="flex flex-col p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      aria-labelledby={`car-title-${make}-${model}`}
    >
      {/* Title */}
      <header className="w-full flex justify-between items-start mb-4">
        <h2
          id={`car-title-${make}-${model}`}
          className="text-xl font-bold text-gray-900 capitalize truncate"
        >
          {make} {model}
        </h2>
      </header>

      {/* Price */}
      <div className="mb-4">
        <p className="text-3xl font-extrabold text-gray-800">
          <span className="text-sm font-semibold align-top">$</span>
          {carRent}
          <span className="text-sm font-medium text-gray-500"> /day</span>
        </p>
      </div>

      {/* Car Image */}
      <figure className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
        <Image
          src="/hero.png"
          alt={`${make} ${model}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </figure>

      {/* Car Specs */}
      <div className="relative mt-2 grid grid-cols-3 text-gray-700">
        {/* Transmission */}
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/steering-wheel.svg"
            alt="Transmission"
            width={24}
            height={24}
          />
          <p className="text-sm">
            {transmission === "a" ? "Automatic" : "Manual"}
          </p>
        </div>

        {/* Drive */}
        <div className="flex flex-col items-center gap-2">
          <Image src="/tire.svg" alt="Drive" width={24} height={24} />
          <p className="text-sm uppercase">{drive}</p>
        </div>

        {/* MPG */}
        <div className="flex flex-col items-center gap-2">
          <Image src="/gas.svg" alt="Fuel Efficiency" width={24} height={24} />
          <p className="text-sm">{city_mpg} MPG</p>
        </div>

        {/* View More button on hover */}
        {isOpen && (
          <div className="absolute bottom-0 left-0 w-full z-10 px-2 pb-2">
            <CustomButton
              title="View More"
              containerStyles="w-full py-3 rounded-full bg-blue-600 text-white text-sm"
              handleClick={() => setIsOpen(true)}
              rightIcon="/right-arrow.svg"
              textStyles="text-[14px] leading-[17px] font-semibold text-white "
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default CarCard;

