import React, { useState } from 'react';
import { CssBaseline, Box, ThemeProvider, createTheme, Toolbar } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import BasicCounter from './components/pages/BasicCounter';
import MemoryCounter from './components/pages/MemoryCounter';
import HistoryCounter from './components/pages/HistoryCounter';
import MainLayout from './components/layout/MainLayout';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <MainLayout />
      </Router>
    </ThemeProvider>
  );
};

export default App;