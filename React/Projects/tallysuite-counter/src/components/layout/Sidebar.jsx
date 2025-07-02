// src/components/layout/Sidebar.jsx
import React from 'react';
import { List, ListItemButton, ListItemText, Drawer, Toolbar } from '@mui/material';

const drawerWidth = 240;
const Sidebar = ({ content }) => {
  return (
    // <Drawer variant="permanent" anchor="left">
    // const drawerWidth = 240;

<Drawer variant="permanent" anchor="left" sx={{ width: drawerWidth, flexShrink: 0,
  [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
}}>

      <Toolbar />
      <List>
        {content.map((item, index) => (
          <ListItemButton key={index}>
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
