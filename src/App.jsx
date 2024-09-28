import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AboutUs from "./compound/AboutUs";
import Home from "./compound/Home";
import AboutUs from "./compound/AboutUs";
import Contact from "./compound/Contact";
import Dashboard from "./compound/Dashboard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
