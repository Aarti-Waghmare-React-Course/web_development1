// // import React, { useState, useMemo } from "react";
// // import { createTheme, ThemeProvider, CssBaseline, IconButton, Box, Typography } from "@mui/material";
// // import Brightness4Icon from "@mui/icons-material/Brightness4";
// // import Brightness7Icon from "@mui/icons-material/Brightness7";
// // import Calculator from "./components/Calculator";

// // const App = () => {
// //   const [mode, setMode] = useState("light");

// //   const toggleColorMode = () => {
// //     setMode((prev) => (prev === "light" ? "dark" : "light"));
// //   };

// //   const theme = useMemo(
// //     () =>
// //       createTheme({
// //         palette: {
// //           mode,
// //         },
// //       }),
// //     [mode]
// //   );

// //   return (
// //     <ThemeProvider theme={theme}>
// //       <CssBaseline />
// //       <Box
// //   sx={{
// //     textAlign: "center",
// //     p: 2,
// //     minHeight: "100vh",
// //     backgroundColor: "background.default",
// //     color: "text.primary",
// //   }}
// // >
// //   <Box
// //     sx={{
// //       display: "flex",
// //       justifyContent: "space-between",
// //       alignItems: "center",
// //       maxWidth: 400,
// //       mx: "auto",
// //       mb: 2,
// //     }}
// //   >
// //     <Typography variant="h4">Calculator</Typography>
// //     <IconButton onClick={toggleColorMode} color="inherit">
// //       {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
// //     </IconButton>
// //   </Box>

// //   <Calculator />
// // </Box>


// //     </ThemeProvider>
// //   );
// // };

// // export default App;

// import React from "react";
// import { ThemeColorProvider } from "./components/ThemeContext"
// import Calculator from "./components/Calculator";
// import { CssBaseline, Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
// import { useThemeColor } from "./components/ThemeContext";

// const AppContent = () => {
//   const { colorMode, setColorMode } = useThemeColor();

//   return (
//     <Box sx={{ p: 2 }}>
//       <FormControl size="small" sx={{ mb: 2 }}>
//         <InputLabel>Theme</InputLabel>
//         <Select
//           value={colorMode}
//           label="Theme"
//           onChange={(e) => setColorMode(e.target.value)}
//         >
//           <MenuItem value="blue">Blue</MenuItem>
//           <MenuItem value="red">Red</MenuItem>
//           <MenuItem value="green">Green</MenuItem>
//         </Select>
//       </FormControl>

//       <Calculator />
//     </Box>
//   );
// };

// function App() {
//   return (
//     <ThemeColorProvider>
//       <CssBaseline />
//       <AppContent />
//     </ThemeColorProvider>
//   );
// }

// export default App;


import React from "react";
import {
  Box,
  IconButton,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Brightness4 from "@mui/icons-material/Brightness4";
import Brightness7 from "@mui/icons-material/Brightness7";
import Calculator from "./components/Calculator";

const App = () => {
  const [selectedTheme, setSelectedTheme] = React.useState("Blue");
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Box sx={{ p: 2 }}>
      {/* Top Control Panel */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end", // aligns to top-right
          gap: 2,
          mb: 2,
        }}
      >
        {/* Theme Dropdown */}
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

        {/* Dark Mode Toggle */}
        <IconButton onClick={toggleDarkMode} color="inherit">
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Box>

      {/* Calculator */}
      <Calculator selectedTheme={selectedTheme} darkMode={darkMode} />
    </Box>
  );
};

export default App;
