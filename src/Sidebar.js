import React from 'react';
import { useGlobalContext } from './Context';
import { styled } from '@mui/material/styles';
import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const Sidebar = () => {

  const{isSidebarOpen, setIsSidebarOpen} = useGlobalContext();

  const StyledBtn = styled(Button)(({theme}) => ({
    borderRadius: '0px 0px 0px 0px',
    backgroundColor: 'rgb(35,67,56)',
    color: 'white',
    '&:hover': {color: 'black', backgroundColor: 'white'},
    padding: 3,
    minWidth: '40px',
    
  }));

  return (
    <nav className={`${isSidebarOpen ? 'sidebar' : 'hideSidebar'}`}>
        <CloseIcon sx={{position: 'absolute', right: '30%', top: '2%', cursor: 'pointer'}} onClick={() => {setIsSidebarOpen(!isSidebarOpen); console.log(isSidebarOpen);}}/>
        <ul>
            <li>HOME</li>
            <li>NEWS</li>
            <li>GIGS</li>
            <li>BIO</li>
            <li>MEDIA</li>
            <li>MUSIC</li>
        </ul>
        <div className='row'>
            <StyledBtn>EN</StyledBtn>
            <StyledBtn>IT</StyledBtn>
        </div>
        
    </nav>
  )
}

export default Sidebar;