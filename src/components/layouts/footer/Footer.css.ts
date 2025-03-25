import { style } from "@vanilla-extract/css";

export const footerStyle = style({
  backgroundColor: "#333",
  color: "#fff",
  padding: "0.5rem 0",
  textAlign: "center",
  width: "100%",
  height: "2.5rem",
  // Ensure footer is at the bottom of the page or content
  position: "relative",
  marginTop: "auto",
});

export const footerFixedStyle = style([
  footerStyle,
  {
    position: "fixed",
    bottom: 0,
  },
]);

export const textStyle = style({
  fontSize: "1rem",
});
