import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;

  handleClick?: MouseEventHandler<HTMLButtonElement>;
  containerStyles?: string;
  btnType?: "button" | "submit" | "reset";
}
export interface SearchManufactureProps{
    manufacture: string;
    setManufacture:(manufacture: string)=>void;
}
