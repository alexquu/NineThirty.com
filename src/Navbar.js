import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static" sx={{backgroundColor: 'white', boxShadow: 'none', color: 'black', flexDirection: 'row', justifyContent: 'space-around'}}>
        <Toolbar>
          <Typography variant="h6" component="div">
            Home
          </Typography>
          <Typography variant="h6" component="div">
            News
          </Typography>
          <Typography variant="h6" component="div">
            <img src='930logo2.jpg' alt='logo' className='logo'/>
          </Typography>
          <Typography variant="h6" component="div">
            Bio
          </Typography>
          <Typography variant="h6" component="div">
            Music
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;