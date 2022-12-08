import React from 'react'
import Home from './Home';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Socialbar from './Socialbar';
import Footer from './Footer';

const Mainpage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Socialbar />
      <Home />
      <Footer />
    </>
  )
};

export default Mainpage;