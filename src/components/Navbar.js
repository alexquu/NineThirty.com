import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material';
import { styled } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu';
import { useGlobalContext } from '../Context';
import { Link } from 'react-router-dom';

const StyledBox = styled(Box)(({theme}) => ({
  margin: 'auto', width: '68%', display: 'flex',
  [theme.breakpoints.down('lg')]: {width: '58%'},
  [theme.breakpoints.down('sm')]: {width: '68%'},
}));

const StyledAppBar = styled(AppBar)(({theme}) => ({
  backgroundColor: 'white', 
  boxShadow: 'none', 
  color: 'black', 
  textAlign: 'center',
  padding: '1.5em',
  [theme.breakpoints.down('lg')]: {padding: '1em'},
  [theme.breakpoints.down('sm')]: {padding: '0.5em'},
}));

const StyledLink = styled(Link)(({ theme }) => ({
  flexGrow: 1,
  color: 'black',
  textDecoration: 'none',
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
  width: '4vw',
  [theme.breakpoints.down('lg')]: {display: 'block'},
  [theme.breakpoints.down('sm')]: {fontSize: 'medium'},
}));

const Navbar = () => {

  const {isSidebarOpen, setIsSidebarOpen, setScrolling} = useGlobalContext();

  return (
    <>
    <nav>
      <StyledBox>
      <StyledAppBar position="static">
        <Toolbar>
          <StyledLink to={'/'}><Typography variant="h7" component="div" style={{fontFamily: 'Mainfont'}}>HOME</Typography></StyledLink>
          <StyledLink to={'/News'}><Typography variant="h7" component="div" style={{fontFamily: 'Mainfont'}}>NEWS</Typography></StyledLink>
          <StyledLink to={'/Gigs'}><Typography variant="h7" component="div" style={{fontFamily: 'Mainfont'}}>GIGS</Typography></StyledLink>
          <img className='logo' src='logo.jpg' alt='logo'/>
          <StyledLink to={'/Bio'}><Typography variant="h7" component="div" style={{fontFamily: 'Mainfont'}}>BIO</Typography></StyledLink>
          <StyledLink to={'/Media'}><Typography variant="h7" component="div" style={{fontFamily: 'Mainfont'}}>MEDIA</Typography></StyledLink>
          <StyledLink to={'/Contact'}><Typography variant="h7" component="div" style={{fontFamily: 'Mainfont'}}>CONTACT</Typography></StyledLink>
          <div style={{position: 'absolute', left: '100%', display: 'flex'}}>
            <StyledBtn>EN</StyledBtn>
            <StyledBtn>IT</StyledBtn> 
          </div>
          <StyledIcon onClick={() => {setScrolling(!isSidebarOpen); setIsSidebarOpen(!isSidebarOpen)}}/>
        </Toolbar>
      </StyledAppBar>
      </StyledBox>
    </nav>
    </> 
  );
}

export default Navbar;