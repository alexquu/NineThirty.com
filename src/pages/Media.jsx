import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Media = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Sidebar />
        <section className="pagesContainer">
          <p>NO MEDIA AVAILABLE</p>
        </section>
      </div>
    </>
  );
};

export default Media;
