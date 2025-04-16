"use client";
import { useState } from "react";
import Image from "next/image";

import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import { calculateCarRent } from "@/utils";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px]  font-extrabold">
        <span className="self-start">{carRent}</span>
      </p>
    </div>
  );
};

export default CarCard;
