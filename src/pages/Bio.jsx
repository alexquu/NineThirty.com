import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Bio = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Sidebar />
        <section className="pagesContainer">
          <p>NO BIO AVAILABLE</p>
        </section>
      </div>
    </>
  );
};

export default Bio;
