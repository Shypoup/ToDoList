import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './styles.css'
export default function DefaultNavbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='inherit' className='defaultNavbar'>
        <Toolbar>
      
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='header'>
            To-do list
          </Typography>
          <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          className='icon'
        >
              <AccountCircle />
        </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
