"use client";
import React from "react";
import { button } from "./style.css"; // スタイルをインポート
import { on } from "events";

interface ButtonProps {
  label: string;
  onClick: () => void; // onClickは関数型
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className={button}>
      {label}
    </button>
  );
};
