import { MouseEventHandler } from "react";

export interface ButtonProps {
  text: string;
  textStyle?: string;
  btnStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: string;
  disabled?: boolean;
}
