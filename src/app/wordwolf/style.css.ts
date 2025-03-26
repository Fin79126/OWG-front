// styles.css.ts
import { style } from "@vanilla-extract/css";

export const container = style({
  textAlign: "center",
  marginTop: "50px",
});

export const buttonContainer = style({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

export const heading = style({
  fontSize: "24px",
  marginBottom: "30px",
});
