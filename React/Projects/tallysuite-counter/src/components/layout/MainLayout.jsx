import React from 'react';
import { Box, Toolbar } from '@mui/material';
import { useLocation, Routes, Route } from 'react-router-dom';

import Sidebar from './Sidebar';
import Footer from './Footer';
import BasicCounter from '../pages/BasicCounter';
import MemoryCounter from '../pages/MemoryCounter';
import HistoryCounter from '../pages/HistoryCounter';

const MainLayout = () => {
  const location = useLocation();

  const getSidebarContent = () => {
    switch (location.pathname) {
      case '/memory':
        return ['Save', 'Recall', 'Clear'];
      case '/history':
        return ['Track Changes', 'Undo', 'Redo'];
      default:
        return ['Increment', 'Decrement', 'Reset'];
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
  <Sidebar content={getSidebarContent()} />

  <Box
    component="main"
    sx={{
      flexGrow: 1,
      ml: '240px',
      mt: '64px',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 'calc(100vh - 64px)', // 64px = Navbar height
    }}
  >
    {/* This will take all space and center content */}
    <Box
  sx={{
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 0, // Ensure full flex height is respected
  }}
>
  <Routes>
    <Route path="/" element={<BasicCounter />} />
    <Route path="/memory" element={<MemoryCounter />} />
    <Route path="/history" element={<HistoryCounter />} />
  </Routes>
</Box>


    {/* Footer always at the bottom */}
    <Footer />
  </Box>
</Box>


  );
};

export default MainLayout;
