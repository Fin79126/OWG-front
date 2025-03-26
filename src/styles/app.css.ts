import { style, globalStyle } from "@vanilla-extract/css";

export const coverStyle = style({
  flexGrow: 1,
  display: "flex",
  backgroundColor: "#fff",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  // minHeight: "90vh",
  padding: "0 1rem",
  margin: "0 1rem",
  fontSize: "1.2rem",
  //   fontFamily: "'Inter' , sans-serif",
});

export const displayStyle = style({
  display: "flex",
  flexDirection: "column",
  height: "100dvh",
});

export const mainStyle = style({
  margin: 0,
  padding: 0,
  overflowY: "auto",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  lineHeight: "1.6",
  background: "linear-gradient(to bottom,rgb(241, 202, 43), #ffffff)",
  color: "#333",
  selectors: {
    "&::-webkit-scrollbar": {
      width: "0.75rem", // 12px
      height: "0.75rem", // 12px
    },
    "&::-webkit-scrollbar-track": {
      background: "#ffcc00", // Bright yellow background
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#ff6600", // Bright orange background
      borderRadius: "0.375rem", // 6px
      border: "0.1875rem solid #ffcc00", // 3px solid
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#ff3300", // Darker orange background
    },
  },
});

globalStyle("body", {
  margin: 0,
  padding: 0,
  overflow: "hidden", // Prevent scrollbar on body
});

// globalStyle("main", {
//   lineHeight: "1.6",
//   minHeight: "90vh",
//   margin: 0,
//   padding: 0,
//   background: "linear-gradient(to bottom,rgb(241, 202, 43), #ffffff)",
//   color: "#333",
//   // composes: scrollbarStyle, // Apply scrollbar styles
// });
