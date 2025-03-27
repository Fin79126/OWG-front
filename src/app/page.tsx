"use client";
import React, { useEffect } from "react";
import { host } from "./style.css";
// import { mainStyle } from '@/styles/app.css'
import { Button } from "@/components/elements/button/gameSelect/gameSelectButton";
import { ButtonProps } from "@/types/types";
import { useColor } from "@/hooks/useColor"; // カラーホックのインポート

const wordwolfButtonProps: ButtonProps = {
  text: "ワードウルフ",
  iconSrc: "/images/wordwolfIcon.png",
  url: "/wordwolf",
};

const speedButtonProps: ButtonProps = {
  text: "スピード",
  iconSrc: "/images/speedIcon.png",
  url: "/speed",
};

export default function Home() {
  const { setColor } = useColor();

  useEffect(() => {
    setColor("rgb(241, 202, 43)");
  }, []);

  return (
    <>
      <div className={host}>ねこ、こねこ</div>
      <Button {...wordwolfButtonProps} />
      <Button {...speedButtonProps} />
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
    </>
  );
}
