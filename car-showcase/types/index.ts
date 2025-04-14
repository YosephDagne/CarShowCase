import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;

  handleClick?: MouseEventHandler<HTMLButtonElement>;
  containerStyles?: string;
}
