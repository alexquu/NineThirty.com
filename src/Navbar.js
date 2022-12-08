import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material';
import { styled } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu';
import { useGlobalContext } from './Context';

const StyledAppBar = styled(AppBar)(({theme}) => ({
  backgroundColor: 'white', 
  boxShadow: 'none', 
  color: 'black', 
  textAlign: 'center', 
  padding: '1.5em',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Mainfont',
  flexGrow: 1,
  fontSize: '1.2em',
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

  const {isSidebarOpen, setIsSidebarOpen, setScrolling} = useGlobalContext();

  console.log(isSidebarOpen);

  return (
    <>
    <nav>
      <Box sx={{maxWidth: '1200px', margin: '0 auto'}}>
      <StyledAppBar position="static">
        <Toolbar sx={{}}>
          <StyledTypography variant="h6" component="div">HOME</StyledTypography>
          <StyledTypography variant="h6" component="div" >NEWS</StyledTypography>
          <StyledTypography variant="h6" component="div" >GIGS</StyledTypography>
          <img className='logo' src='logo.jpg' alt='logo'/>
          <StyledTypography variant="h6" component="div" >BIO</StyledTypography>
          <StyledTypography variant="h6" component="div" >MEDIA</StyledTypography>
          <StyledTypography variant="h6" component="div">MUSIC</StyledTypography>
          <StyledBtn>EN</StyledBtn>
          <StyledBtn>IT</StyledBtn>        
          <StyledIcon fontSize='large' onClick={() => {setScrolling(!isSidebarOpen); setIsSidebarOpen(!isSidebarOpen)}}/>
        </Toolbar>
      </StyledAppBar>
      </Box>
    </nav>
    </> 
  );
}

export default Navbar;