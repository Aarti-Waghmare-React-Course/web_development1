// // src/components/layout/Navbar.jsx
// import React from 'react';
// import { AppBar, Toolbar, Typography, Switch, Box, Button, Stack } from '@mui/material';
// import { NavLink } from 'react-router-dom';

// const navItems = [
//   { label: 'Basic', path: '/' },
//   { label: 'Memory', path: '/memory' },
//   { label: 'History', path: '/history' },
// ];

// const Navbar = ({ darkMode, toggleDarkMode }) => {
//   return (
//     <AppBar position="fixed">
//       <Toolbar sx={{ justifyContent: 'space-between' }}>
//         <Typography variant="h6" sx={{ mr: 4 }}>
//           TallySuite CounterPro
//         </Typography>

//         <Stack direction="row" spacing={2}>
//           {navItems.map((item) => (
//             <Button
//               key={item.path}
//               component={NavLink}
//               to={item.path}
//               sx={{
//                 color: 'white',
//                 '&.active': {
//                   fontWeight: 'bold',
//                   textDecoration: 'underline',
//                 },
//               }}
//             >
//               {item.label}
//             </Button>
//           ))}
//         </Stack>

//         <Box>
//           <Typography component="span">🌙</Typography>
//           <Switch checked={darkMode} onChange={toggleDarkMode} />
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

// src/components/layout/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Switch, Box, Stack, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Basic', path: '/' },
  { label: 'Memory', path: '/memory' },
  { label: 'History', path: '/history' },
];

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" noWrap>
          TallySuite CounterPro
        </Typography>

        <Stack direction="row" spacing={2}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={NavLink}
              to={item.path}
              sx={{
                color: 'white',
                '&.active': {
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>

        <Box>
          <Typography component="span">🌙</Typography>
          <Switch checked={darkMode} onChange={toggleDarkMode} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
