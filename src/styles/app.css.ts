import { style, globalStyle } from "@vanilla-extract/css";

export const mainStyle = style({
  display: "flex",
  backgroundColor: "#fff",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "0 1rem",
  margin: "0 1rem",
  fontSize: "1.2rem",
  //   fontFamily: "'Inter' , sans-serif",
});

globalStyle("body", {
  lineHeight: "1.6",
  margin: 0,
  padding: 0,
  background: "linear-gradient(to bottom,rgb(241, 202, 43), #ffffff)",
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
