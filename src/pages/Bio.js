import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Bio = () => {
  return (
    <>
    <Navbar/>
    <Sidebar />
    <section className='container'>
      <p>NO BIO AVAILABLE</p>
    </section>
  </>
  )
}

export default Bio