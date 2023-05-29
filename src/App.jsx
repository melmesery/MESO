import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import { useLocation } from "react-router-dom";
import { Fragment, useEffect } from "react";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const glowingDivs = Array(4).fill().map((_, index) => (
    <div key={index} className="glowing">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  ));

  return (
    <Fragment> 
      <div className="animation">
        {glowingDivs}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="#about" element={<About />} />
        <Route path="#skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Fragment>
  );
};

export default App;
