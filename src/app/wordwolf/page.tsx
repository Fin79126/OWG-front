"use client";
import React, {use, useEffect} from 'react';
import { useColor } from '@/hooks/useColor'; // カラーホックのインポート
import { Button } from '@/components/elements/button/default/defaultButton'; // ボタンコンポーネントのインポート
// import { mainStyle } from '@/styles/app.css';
import { container, buttonContainer, heading } from './style.css'; // スタイルインポート

const Page: React.FC = () => {
  const { setColor } = useColor();

  useEffect(() => {
    setColor("rgb(67 0 0)");
  },[]);

  return (
    <>
      <h1 className={heading}>ワードウルフゲーム</h1>
      <div className={buttonContainer}>
        <Button label="部屋を立てる" onClick={() => alert('部屋を立てるボタンがクリックされました')} />
        <Button label="部屋に参加" onClick={() => alert('部屋に参加ボタンがクリックされました')} />
        <Button label="説明" onClick={() => alert('説明ボタンがクリックされました')} />
      </div>
    </>
  );
};

export default Page;
