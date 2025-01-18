import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Home from "./Screen/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import Tutor from "./Screen/Tutors/Tutor";
import Contact from "./Screen/Contact/Contact";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
    setToggle(!toggle);
  };

  return (
    <div className="app">
      <Header toggleTheme={toggleTheme} toggle={toggle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutors" element={<Tutor />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer toggle={toggle} />
    </div>
  );
};

export default App;
