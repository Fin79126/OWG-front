"use client";
import { FC } from "react";
import Image from "next/image";
import { button, iconContainer, textspan, topHalf, bottomHalf } from "./style.css";
import { ButtonProps } from "@/types/types";
import { useRedirect } from "@/hooks/useRedirect";


export const Button: FC<ButtonProps> = ({ text, iconSrc, url}) => {
  const redirect = useRedirect();
  return (
    <button className={button} onClick={() =>{redirect(url)}}>
      <div className={topHalf} />
      <div className={bottomHalf} />
      <div className={iconContainer}>
        {iconSrc && <Image src={iconSrc} alt="icon" width={100} height={100} />}
      </div>
      <span className={textspan}>{text}</span>
    </button>
  );
};
