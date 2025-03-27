"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const ThemeContext = createContext({
  color: "rgb(241, 202, 43)",
  setColor: (color: string) => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [color, setColor] = useState("rgb(241, 202, 43)");

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useColor() {
  return useContext(ThemeContext);
}
