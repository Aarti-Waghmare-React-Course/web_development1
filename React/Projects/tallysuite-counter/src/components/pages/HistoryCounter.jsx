import React from 'react';
import { Typography, Paper } from '@mui/material';

const HistoryCounter = () => {
  return (
     <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%' }}>
      <Typography variant="h4" align="center">History Counter</Typography>
    </Paper>
  );
};

export default HistoryCounter;
