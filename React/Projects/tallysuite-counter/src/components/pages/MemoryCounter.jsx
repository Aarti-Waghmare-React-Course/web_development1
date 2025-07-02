import React, { useState } from 'react';
import { Typography, Button, Stack, Paper } from '@mui/material';

const MemoryCounter = () => {
  const [count, setCount] = useState(0);
  const [memory, setMemory] = useState(null);

  return (
     <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%' }}>
      <Typography variant="h4" align="center">Memory Counter</Typography>
      <Typography variant="h2" align="center" color="primary">{count}</Typography>

      <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
        <Button onClick={() => setCount(count - 1)}>Decrement</Button>
      </Stack>

      <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
        <Button onClick={() => setMemory(count)}>Save</Button>
        <Button onClick={() => setCount(memory || 0)}>Recall</Button>
        <Button onClick={() => setMemory(null)}>Clear</Button>
      </Stack>
    </Paper>
  );
};

export default MemoryCounter;
