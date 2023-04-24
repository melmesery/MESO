import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="#about" element={<About />} />
      <Route path="#skills" element={<Skills />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="#services" element={<Services />} />
      <Route path="#contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
