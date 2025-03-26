import { style, keyframes } from "@vanilla-extract/css";

const buttonColor = "#000000"; // ボタンの色を変更

const bounceIcon = keyframes({
  "0%": { transform: "translateX(-50%) translateY(0)" }, // 初期位置
  "50%": { transform: "translateX(-50%) translateY(-10px)" }, // 上に動く
  "100%": { transform: "translateX(-50%) translateY(-6px)" }, // 少し下に戻る
});

export const button = style({
  position: "relative",
  width: "200px",
  height: "120px",
  borderRadius: "12px",
  fontSize: "18px",
  fontWeight: "bold",
  fontFamily: "inherit",
  cursor: "pointer",
  border: `2px solid ${buttonColor}`,
  overflow: "hidden",
  background: "#fff9ed",
  color: "#fff",
  textAlign: "center",
  transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
  boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.3)",

  ":active": {
    transform: "scale(0.9)", // 押された感を強調
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)", // さらに影を減らして押し込まれた感じ
  },
});

export const bottomHalf = style({
  position: "absolute",
  width: "100%",
  height: "40%",
  bottom: "0",
  left: "0",
  borderTop: `2px solid ${buttonColor}`,
  background: "#303030",
  zIndex: 2, // ボタンの下半分をイメージより上にする
});

export const topHalf = style({
  position: "absolute",
  width: "100%",
  height: "50%",
  top: "0",
  left: "0",
  zIndex: 0, // ボタンの上半分をイメージより下にする
});

export const iconContainer = style({
  position: "absolute",
  top: "10px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "160px",
  height: "120px",
  transition: "transform 0.3s ease-in-out",
  zIndex: 1, // イメージをボタンの上半分の下に配置

  selectors: {
    [`${button}:hover &`]: {
      animation: `${bounceIcon} 0.4s ease-in-out forwards`, // イラストが少し飛び出る
    },
    // ホバーを外したときにリセット
    [`${button}:not(:hover) &`]: {
      animation: "none",
      transform: "translateX(-50%) translateY(0)", // 初期位置に戻る
    },
  },
});

export const textspan = style({
  position: "absolute",
  bottom: "13px",
  justifySelf: "anchor-center",
  zIndex: 3, // テキストは最前面
});
