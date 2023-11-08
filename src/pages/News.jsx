import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const News = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <section className="container">
        <p>NO NEWS AVAILABLE</p>
      </section>
    </>
  );
};

export default News;
