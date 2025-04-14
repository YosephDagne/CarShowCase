"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

function CustomButton({
  title,

  handleClick,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type="button"
      className="flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      onClick={handleClick}
    >
      <span className="text-center">{title}</span>
    </button>
  );
}

export default CustomButton;
