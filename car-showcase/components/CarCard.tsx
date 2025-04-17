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
 
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);

  
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

   
      <button
        onClick={handleOpenModal}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        View Details
      </button>

      <CarDetails isOpen={isOpen} closeModal={handleCloseModal} car={car} />
    </div>
  );
};

export default CarCard;