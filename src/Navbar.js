import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material';
import { styled } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu';
import { useGlobalContext } from './Context';

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Mainfont',
  flexGrow: 1,
  [theme.breakpoints.down('lg')]: {display: 'none'},
}));
 
const StyledBtn = styled(Button)(({theme}) => ({
  borderRadius: '0px 0px 0px 0px',
  backgroundColor: 'rgb(35,67,56)',
  color: 'white',
  paddingLeft: '1',
  '&:hover': {color: 'black', backgroundColor: 'white'},
  [theme.breakpoints.down('lg')]: {display: 'none'},
  minWidth: '40px',
}));

const StyledIcon = styled(MenuIcon)(({theme}) => ({
  display: 'none',
  position: 'absolute',
  left: '90%',
  cursor: 'pointer',
  [theme.breakpoints.down('lg')]: {display: 'block'},
  [theme.breakpoints.down('sm')]: {fontSize: 'medium'},
}));

const Navbar = () => {

  const {isSidebarOpen, setIsSidebarOpen} = useGlobalContext();

  return (
    <>
    <nav>
      <Box sx={{maxWidth: '1200px', margin: '0 auto'}}>
      <AppBar position="static" sx={{backgroundColor: 'white', boxShadow: 'none', color: 'black', textAlign: 'center', padding: '1.8em', justifyContent: 'space-between'}}>
        <Toolbar>
          <StyledTypography variant="h6" component="div">HOME</StyledTypography>
          <StyledTypography variant="h6" component="div" >NEWS</StyledTypography>
          <StyledTypography variant="h6" component="div" >GIGS</StyledTypography>
          <img className='logo' src='logo.jpg' alt='logo'/>
          <StyledTypography variant="h6" component="div" >BIO</StyledTypography>
          <StyledTypography variant="h6" component="div" >MEDIA</StyledTypography>
          <StyledTypography variant="h6" component="div">MUSIC</StyledTypography>
          <StyledBtn>EN</StyledBtn>
          <StyledBtn>IT</StyledBtn>
          <StyledIcon fontSize='large' onClick={() => {setIsSidebarOpen(!isSidebarOpen); console.log(isSidebarOpen);}}/>
        </Toolbar>
      </AppBar>
      </Box>
    </nav>
    </> 
  );
}

export default Navbar;