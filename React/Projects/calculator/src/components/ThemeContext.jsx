import React, { createContext, useState, useMemo, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ThemeColorContext = createContext();

const themeColors = {
  blue: {
    primary: { main: "#1976d2" },
    secondary: { main: "#9c27b0" },
  },
  red: {
    primary: { main: "#d32f2f" },
    secondary: { main: "#c2185b" },
  },
  green: {
    primary: { main: "#388e3c" },
    secondary: { main: "#00796b" },
  },
};

export const ThemeColorProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState("blue");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "light",
          ...themeColors[colorMode],
        },
      }),
    [colorMode]
  );

  return (
    <ThemeColorContext.Provider value={{ colorMode, setColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeColorContext.Provider>
  );
};

export const useThemeColor = () => useContext(ThemeColorContext);
