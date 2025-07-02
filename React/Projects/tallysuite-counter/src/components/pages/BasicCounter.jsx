import React, { useState } from 'react';
import { Typography, Button, Stack, Paper, Box } from '@mui/material';

const BasicCounter = () => {
  const [count, setCount] = useState(0);

  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     height: '100%',       // Let it fill the full vertical space provided by MainLayout
    //   }}
    // >
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%' }}>
  <Typography variant="h4" align="center" gutterBottom>
    Basic Counter
  </Typography>
  <Typography variant="h2" align="center" color="primary">
    {count}
  </Typography>

  <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
    <Button variant="contained" onClick={() => setCount(count + 1)}>Increment</Button>
    <Button variant="contained" color="error" onClick={() => setCount(count - 1)}>Decrement</Button>
  </Stack>

  <Stack direction="row" justifyContent="center" mt={2}>
    <Button variant="outlined" onClick={() => setCount(0)}>Reset</Button>
  </Stack>
</Paper>

    // </Box>
  );
};

export default BasicCounter;
