import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import RecentWork from "./RecentWork";
import Services from "./Services";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <RecentWork />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
