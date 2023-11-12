import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const News = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Sidebar />
        <section className="pagesContainer">
          <p>NO NEWS AVAILABLE</p>
        </section>
      </div>
    </>
  );
};

export default News;
