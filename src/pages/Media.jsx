import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Media = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <section className="container">
        <p>NO MEDIA AVAILABLE</p>
      </section>
    </>
  );
};

export default Media;
