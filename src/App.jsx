import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AboutUs from "./compound/AboutUs";
import Home from "./compound/Home";
import AboutUs from "./compound/AboutUs";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
