"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

function CustomButton({
  title,
  handleClick,
  containerStyles,
}: CustomButtonProps) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex items-center justify-center px-6 py-3 font-semibold transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${containerStyles}`}
    >
      <span className="text-center">{title}</span>
    </button>
  );
}

export default CustomButton;
