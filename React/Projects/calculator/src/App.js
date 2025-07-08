import React, { useState, useMemo } from "react";
import { createTheme, ThemeProvider, CssBaseline, IconButton, Box, Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Calculator from "./components/Calculator";

const App = () => {
  const [mode, setMode] = useState("light");

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
  sx={{
    textAlign: "center",
    p: 2,
    minHeight: "100vh",
    backgroundColor: "background.default",
    color: "text.primary",
  }}
>
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: 400,
      mx: "auto",
      mb: 2,
    }}
  >
    <Typography variant="h4">Calculator</Typography>
    <IconButton onClick={toggleColorMode} color="inherit">
      {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  </Box>

  <Calculator />
</Box>


    </ThemeProvider>
  );
};

export default App;
