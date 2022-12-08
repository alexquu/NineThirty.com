import React from 'react';
import { useGlobalContext } from './Context';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube, Close, MailOutline } from '@mui/icons-material';

const Sidebar = () => {

  const{isSidebarOpen, setIsSidebarOpen, setScrolling} = useGlobalContext();

  const StyledBtn = styled(Button)(({theme}) => ({
    borderRadius: '0px 0px 0px 0px',
    backgroundColor: 'rgb(35,67,56)',
    color: 'white',
    '&:hover': {color: 'black', backgroundColor: 'white'},
    padding: 3,
    minWidth: '40px',
  }));

  const StyledIcon = styled(Close)(({theme}) => ({
    position: 'absolute', 
    right: '30%', 
    top: '2%', 
    cursor: 'pointer'
  }));

  

  return (
    <nav className={`${isSidebarOpen ? 'sidebar' : 'hideSidebar'}`} onClick={() => {setScrolling(!isSidebarOpen); setIsSidebarOpen(!isSidebarOpen)}}>
        <StyledIcon onClick={() => {setScrolling(!isSidebarOpen); setIsSidebarOpen(!isSidebarOpen)}}/>
        <ul className='sidebarLinks'>
            <li className='sidebarLink'>HOME</li>
            <li className='sidebarLink'>NEWS</li>
            <li className='sidebarLink'>GIGS</li>
            <li className='sidebarLink'>BIO</li>
            <li className='sidebarLink'>MEDIA</li>
            <li className='sidebarLink'>MUSIC</li>
        </ul>
        <div className='sidebarComponentPos'>
            <StyledBtn>EN</StyledBtn>
            <StyledBtn>IT</StyledBtn>
        </div>
        <div className='sidebarComponentPos'>
          <Facebook />
          <Twitter />
          <Instagram />
          <YouTube />
          <MailOutline />
        </div>
    </nav>
  )
}

export default Sidebar;