import { style, globalStyle } from "@vanilla-extract/css";

export const bodyStyle = style({
  margin: 0,
  padding: 0,
  fontFamily: "'Comic Sans MS', cursive, sans-serif", // Playful font
  backgroundColor: "#ffcc00", // Bright yellow background
  color: "#333",
});

globalStyle("body", {
  fontFamily: "'Comic Sans MS', cursive, sans-serif", // Playful font
  lineHeight: "1.6",
  backgroundColor: "#ffcc00", // Bright yellow background
  color: "#333",
});

globalStyle("body::-webkit-scrollbar", {
  width: "0.75rem", // 12px
  height: "0.75rem", // 12px
});

globalStyle("body::-webkit-scrollbar-track", {
  background: "#ffcc00", // Bright yellow background
});

globalStyle("body::-webkit-scrollbar-thumb", {
  background: "#ff6600", // Bright orange background
  borderRadius: "0.375rem", // 6px
  border: "0.1875rem solid #ffcc00", // 3px solid
});

globalStyle("body::-webkit-scrollbar-thumb:hover", {
  background: "#ff3300", // Darker orange background
});
