import React from 'react';
import { useGlobalContext } from '../Context';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube, Close } from '@mui/icons-material';
import { Link } from 'react-router-dom';

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
      <ul className='sidebarUl'>
        <Link to={'/'} ><li className='sidebarLi'>HOME</li></Link>
        <Link to={'/News'}><li className='sidebarLi'>NEWS</li></Link>
        <Link to={'/Gigs'} ><li className='sidebarLi'>GIGS</li></Link>
        <Link to={'/Bio'}><li className='sidebarLi'>BIO</li></Link>
        <Link to={'/Media'}><li className='sidebarLi'>MEDIA</li></Link>
        <Link to={'/Contact'}><li className='sidebarLi'>CONTACT</li></Link>      
      </ul>
      <div className='sidebarComponentPos'>
        <StyledBtn>EN</StyledBtn>
        <StyledBtn>IT</StyledBtn> 
      </div>
      <div className='sidebarComponentPos'>
        <a href='https://www.facebook.com/9.thirtymusic' target='_blank' rel="noreferrer noopener"><Facebook /></a>
        <a href='https://twitter.com/' target='_blank' rel='noreferrer noopener'><Twitter /></a>
        <a href='https://www.instagram.com/' target='_blank' rel='noreferrer noopener'><Instagram /></a>
        <a href='https://www.youtube.com/' target='_blank' rel='noreferrer noopener'><YouTube /></a>
      </div>
    </nav>
  )
}

export default Sidebar;