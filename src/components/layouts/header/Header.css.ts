import { style } from "@vanilla-extract/css";

export const headerStyle = style({
  backgroundColor: "#333",
  color: "#fff",
  padding: "0.1rem 0",
  textAlign: "center",
  position: "fixed",
  top: 0,
  width: "100%",
});

export const titleStyle = style({
  display: "inline-block",
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#ffcc00",
  textShadow: "2px 2px 4px #000000",
  cursor: "pointer",
});
