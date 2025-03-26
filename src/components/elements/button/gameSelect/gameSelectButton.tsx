"use client";
import { FC } from "react";
import Image from "next/image";
import { button, iconContainer, textspan, topHalf, bottomHalf } from "./style.css";
import { ButtonProps } from "@/types/types";

export const Button: FC<ButtonProps> = ({ text, iconSrc }) => {
  return (
    <button className={button} onClick={() => alert("clicked")}>
      <div className={topHalf} />
      <div className={bottomHalf} />
      <div className={iconContainer}>
        {iconSrc && <Image src={iconSrc} alt="icon" width={100} height={100} />}
      </div>
      <span className={textspan}>{text}</span>
    </button>
  );
};
