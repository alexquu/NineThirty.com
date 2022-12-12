import React from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Gigs = () => {
  return (
    <>
      <Navbar/>
      <Sidebar />
      <section className='container'>
        <p>NO GIGS AVAILABLE</p>
      </section>
    </>
  )
}

export default Gigs