import { style } from "@vanilla-extract/css";

export const sidebar = style({
  position: "fixed",
  top: "0",
  left: "0",
  height: "100%",
  width: "8rem", // 250px
  transform: "translateX(-100%)",
  transition: "transform 0.3s ease-in-out",
  zIndex: 1001,
  backgroundColor: "#ffcc00", // Bright yellow background
  color: "#333",
  padding: "1.25rem", // 20px
  boxShadow: "0.125rem 0 0.3125rem rgba(0, 0, 0, 0.5)", // 2px 0 5px
  overflowY: "auto",
  // fontFamily: "'Comic Sans MS', cursive, sans-serif", // Playful font
  // ...existing styles...
});

export const sidebarVisible = style({
  transform: "translateX(0)",
  // ...existing styles...
});

export const headerButton = style({
  position: "fixed",
  top: "0.625rem", // 10px
  left: "0.625rem", // 10px
  zIndex: 1002,
  backgroundColor: "#333", // Bright orange background
  color: "#fff",
  border: "none",
  padding: "0.625rem 0.9375rem", // 10px 15px
  cursor: "pointer",
  fontSize: "1.125rem", // 18px
  // fontFamily: "'Comic Sans MS', cursive, sans-serif", // Playful font
  borderRadius: "0.3125rem", // 5px
  // ...styles for the header button if needed
  ":hover": {
    backgroundColor: "#444", // Lighter shade of the button color
  },
});

export const overlay = style({
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 999,
  display: "none",
  // ...existing styles...
});

export const overlayVisible = style({
  display: "block",
  // ...existing styles...
});

export const sidebarContent = style({
  marginTop: "3rem", // 20px
});

export const sidebarContentP = style({
  selectors: {
    [`${sidebarContent} &`]: {
      fontSize: "1rem", // 16px
      marginBottom: "0.625rem", // 10px
    },
  },
});

export const sidebarContentUl = style({
  selectors: {
    [`${sidebarContent} &`]: {
      listStyleType: "none",
      padding: "0",
    },
  },
});

export const sidebarContentLi = style({
  selectors: {
    [`${sidebarContentUl} &`]: {
      padding: "0.625rem 0", // 10px 0
      borderBottom: "0.0625rem solid #444", // 1px solid
    },
  },
});
