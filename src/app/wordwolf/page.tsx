"use client";
import React, {useState, useEffect} from 'react';
import { useColor } from '@/hooks/useColor'; // カラーホックのインポート
import { Button } from '@/components/elements/button/default/defaultButton'; // ボタンコンポーネントのインポート
import { InputField } from '@/components/elements/inputField/inputField'; // 入力フィールドコンポーネントのインポート
import { buttonContainer, heading } from './style.css'; // スタイルインポート
import { PostButton } from './postButton';

const enum State {
  IDLE,
  HOST,
  PARTICIPANT,
  SHOW,
} 


const Page: React.FC = () => {
  const { setColor } = useColor();
  useEffect(() => {
    setColor("rgb(67 0 0)");
  },[]);

  const [showState, setShowState] = useState<State>(State.IDLE); // コンポーネントの表示状態を管理するステート

  const handleClick = (setState:State) => {
    setShowState(setState); // ボタンがクリックされたらコンポーネントを表示
  };
  const [name, setName] = useState('');
  
  return (
    <>
      <h1 className={heading}>ワードウルフゲーム</h1>
      <div className={buttonContainer}>
        {showState == State.IDLE && <Button label="部屋を立てる" onClick={() => handleClick(State.HOST)} />}
        {showState == State.IDLE && <Button label="部屋に参加" onClick={() => handleClick(State.PARTICIPANT)} />}
        {showState == State.IDLE && <Button label="説明" onClick={() => alert('説明はない。')} />}
        {(showState == State.HOST || showState == State.PARTICIPANT) && <InputField 
        labelText="名前" 
        type="text" 
        value={name} 
        onChange={setName} 
        />}
        {showState == State.PARTICIPANT && <InputField 
        labelText="ルームId" 
        type="text" 
        value={name} 
        onChange={setName} 
        />}
        {showState == State.HOST && <PostButton label="ホストでプレイ" isHost={true} name={name} />}
        {showState == State.PARTICIPANT && <PostButton label="ゲームをプレイ" isHost={false} name={name} />}
        {showState != State.IDLE && <Button label="戻る" onClick={() => handleClick(State.IDLE)} />}
      </div>
    </>
  );
};

export default Page;
