import { style } from "@vanilla-extract/css";

export const host = style({
  display: "block",
  padding: "16px",
  backgroundColor: "#f9f9f9",
});

export const heading = style({
  color: "#333",
  fontSize: "24px",
  marginBottom: "16px",
});

export const paragraph = style({
  color: "#666",
  fontSize: "16px",
  lineHeight: 1.5,
});

export const button = style({
  display: "inline-block",
  padding: "8px 16px",
  backgroundColor: "#007bff",
  color: "#fff",
  textAlign: "center",
  borderRadius: "4px",
  textDecoration: "none",
  ":hover": {
    backgroundColor: "#0056b3",
  },
});
