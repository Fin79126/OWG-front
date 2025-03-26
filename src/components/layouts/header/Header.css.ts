import { style } from "@vanilla-extract/css";

export const headerStyle = style({
  backgroundColor: "#333",
  color: "#fff",
  padding: "0.01rem 0",
  textAlign: "center",
  flexShrink: 0,
  zIndex: 1000,
  width: "100%",
});

export const titleStyle = style({
  display: "inline-block",
  margin: "0.5rem 0",
  fontSize: "1.8rem",
  fontWeight: "bold",
  color: "#ffcc00",
  textShadow: "2px 2px 4px #000000",
  cursor: "pointer",
});
