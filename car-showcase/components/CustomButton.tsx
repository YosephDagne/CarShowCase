"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  handleClick,
  containerStyles,
  btnType = "button",
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType}
      onClick={handleClick}
      disabled={false}
      className={`flex items-center justify-center px-4 py-2 font-semibold transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${containerStyles}`}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="ml-2">
          <Image src={rightIcon} alt="arrow icon" width={20} height={20} />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
