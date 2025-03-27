// Button.css.ts
import { style } from "@vanilla-extract/css";

export const button = style({
  padding: "12px 24px",
  margin: "10px",
  fontSize: "16px",
  fontWeight: "bold",
  fontFamily: "'Noto Sans JP', sans-serif",
  color: "#000000",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  background: "linear-gradient(135deg, #f2aa00 0%, #f2aa00 100%)",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",

  selectors: {
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
    },
    "&:active": {
      transform: "translateY(1px)",
      boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
    },
  },
});
