"use client";
import React from "react";
import { usePostData } from "@/hooks/usePostData";
import { Button } from "@/components/elements/button/default/defaultButton"; // ボタンコンポーネントのインポート
import { useRedirect } from "@/hooks/useRedirect"; // リダイレクトフックのインポート

interface CustomButtonProps {
  label: string;
  isHost: boolean;
  name: string;
}

export const PostButton: React.FC<CustomButtonProps> = ({
  label,
  isHost,
  name,
}) => {
    const { postData, loading } = usePostData();
    const redirect = useRedirect(); // リダイレクトフックの使用
  const joinRoom = async (isHost: boolean) => {
    if (name.length == 0) {
      alert("名前を入力してください。");
      return;
    }
    await postData("/api/postData", { message: "Hello!" });
    await redirect("/wordwolf/room");
  };

  return (
    <Button
      label={loading ? "Loading..." : label}
      onClick={() => joinRoom(isHost)}
    />
  );
};
