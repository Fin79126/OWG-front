import { style, globalStyle } from "@vanilla-extract/css";

export const bodyStyle = style({
  margin: 0,
  padding: 0,
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#f0f0f0",
  color: "#333",
});

globalStyle("body::-webkit-scrollbar", {
  width: "12px",
  height: "12px",
});

globalStyle("body::-webkit-scrollbar-track", {
  background: "#f0f0f0",
});

globalStyle("body::-webkit-scrollbar-thumb", {
  background: "#888",
  borderRadius: "6px",
  border: "3px solid #f0f0f0",
});

globalStyle("body::-webkit-scrollbar-thumb:hover", {
  background: "#555",
});
