import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Gigs = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Sidebar />
        <section className="pagesContainer">
          <p>NO GIGS AVAILABLE</p>
        </section>
      </div>
    </>
  );
};

export default Gigs;
