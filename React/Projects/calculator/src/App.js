import React, { useState, useEffect } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  Box,
  Typography,
} from "@mui/material";
import Calculator from "./components/Calculator";

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState("Blue");
  const [darkMode, setDarkMode] = useState(false);

  // Save preferences
  useEffect(() => {
    localStorage.setItem("theme", selectedTheme);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [selectedTheme, darkMode]);

  // Load preferences
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const storedDark = localStorage.getItem("darkMode");

    if (storedTheme) setSelectedTheme(storedTheme);
    if (storedDark) setDarkMode(JSON.parse(storedDark));
  }, []);

  const themeColors = {
    Blue: {
      primary: { main: "#1976d2" },
      secondary: { main: "#1565c0" },
    },
    Red: {
      primary: { main: "#d32f2f" },
      secondary: { main: "#b71c1c" },
    },
    Green: {
      primary: { main: "#388e3c" },
      secondary: { main: "#2e7d32" },
    },
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      ...themeColors[selectedTheme],
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          TallySuite Calculator
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mb: 3,
            flexWrap: "wrap",
          }}
        >
          <FormControl size="small">
            <InputLabel>Theme</InputLabel>
            <Select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
              label="Theme"
            >
              <MenuItem value="Blue">Blue</MenuItem>
              <MenuItem value="Red">Red</MenuItem>
              <MenuItem value="Green">Green</MenuItem>
            </Select>
          </FormControl>

          <Box display="flex" alignItems="center">
            <Typography variant="body1" sx={{ mr: 1 }}>
              Dark Mode
            </Typography>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </Box>
        </Box>

        {/* Calculator Component */}
        <Calculator selectedTheme={selectedTheme} darkMode={darkMode} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
