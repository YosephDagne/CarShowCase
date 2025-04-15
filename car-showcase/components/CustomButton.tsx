"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  handleClick,
  containerStyles,
  btnType = "button",
}: // disabled = false,

CustomButtonProps) => {
  return (
    <button
      type={btnType}
      onClick={handleClick}
      disabled={false}
      className={`flex items-center justify-center px-4 py-2 font-semibold transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${containerStyles}`}
    >
      <span className="text-center">{title}</span>
    </button>
  );
};

export default CustomButton;
