// LeftNav.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
// Add more icons as needed

function LeftNav({ open, onClose }) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
        {/* Add more menu items */}
      </List>
    </Drawer>
  );
}

export default LeftNav;
