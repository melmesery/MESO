import React from "react";
import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import RecentWork from "./RecentWork";
import Skills from "./Skills";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Skills />
      <RecentWork />
      <Footer />
    </div>
  );
};

export default Home;
