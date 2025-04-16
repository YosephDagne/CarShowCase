import React, { useState } from 'react';
import CarDetails from './CarDetails';

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
    // Add any other properties you need
  };
};
const [isOpen, setIsOpen]=useState(false);  
const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="car-card border p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">{car.make} {car.model}</h2>
      <p>Year: {car.year}</p>
      <p>Fuel Type: {car.fuel_type}</p>
      <p>Transmission: {car.transmission}</p>
      <p>Drive: {car.drive}</p>
      <p>Cylinders: {car.cylinders}</p>
      <p>Displacement: {car.displacement}L</p>
      <p>Class: {car.class}</p>



      <CarDetails isOpen={isOpen} closeModal={()=>
        setIsOpen(false)} car={car}/>
      
    </div>
  );
};

export default CarCard;
