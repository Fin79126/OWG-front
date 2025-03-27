// styles.css.ts
import { style } from "@vanilla-extract/css";

export const inputField = style({
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  width: "100%",
  boxSizing: "border-box",
  fontSize: "16px",
  outline: "none",
  transition: "border-color 0.3s",
});

export const inputFieldFocus = style({
  borderColor: "#0070f3",
});

export const label = style({
  display: "block",
  marginBottom: "8px",
  fontSize: "14px",
  fontWeight: "bold",
});

export const container = style({
  marginBottom: "20px",
});
