// SideNavigationBar.js

import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider } from '@mui/material';
import { Home, Shop, MonetizationOn, Message, Analytics } from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';

function SideNavigationBar() {
  const [open, setOpen] = useState(false);

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  return (
      <>
        <Drawer
          anchor="left"
          open={open}
          onClose={handleToggleDrawer}
        >
          <List>
            <ListItem button key="Home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button key="Shop" component={Link} to="../products">
              <ListItemIcon>
                <Shop />
              </ListItemIcon>
              <ListItemText primary="Shop" />
            </ListItem>
            <ListItem button key="Sell" component={Link} to="../sell" >
              <ListItemIcon>
                <MonetizationOn />
              </ListItemIcon>
              <ListItemText primary="Sell" />
            </ListItem>
            <ListItem button key="Dashboard" component={Link} to="../dashboard">
              <ListItemIcon>
                <Analytics />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button key="Messages">
              <ListItemIcon>
                <Message />
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItem>
          </List>
        </Drawer>
        {/* Position the icon outside the drawer */}
        <IconButton
          style={{
          position: 'absolute', left: open ? '250px' : '0', transition: 'left 0.3s'
          }}
          onClick={handleToggleDrawer}
        >
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </>
    );
  }

  export default SideNavigationBar;