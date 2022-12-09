import React from 'react'
import Sections from '../components/Sections';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Socialbar from '../components/Socialbar';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Socialbar />
      <Sections />
      <Footer />
    </>
  )
};

export default Homepage;