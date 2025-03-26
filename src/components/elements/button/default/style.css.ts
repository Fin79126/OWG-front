// Button.css.ts
import { style } from "@vanilla-extract/css";

export const button = style({
  padding: "10px 20px",
  margin: "10px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  selectors: {
    "&:hover": {
      backgroundColor: "#45a049",
    },
  },
});
