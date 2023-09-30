"use client";

import { ButtonProps } from "@/types";
import React from "react";

export const Button = ({
  text,
  textStyle,
  btnStyle,
  handleClick,
  icon,
  disabled,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type="button"
      className={`button__main ${btnStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>{text}</span>
    </button>
  );
};
