import React, { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
// import AboutUs from "./compound/AboutUs";
import Home from "./compound/Home";
import AboutUs from "./compound/AboutUs";
import Contact from "./compound/Contact";
import Dashboard from "./compound/Dashboard";
import Documentation from "./compound/Documentation";

import { useAuth } from "@clerk/clerk-react";
import { LogInIcon } from "lucide-react";
import Login from "./compound/Login";
import SamplePaper1 from "./compound/question/JEEMAIN/SamplePaper1";
import SamplePaper2 from "./compound/question/JEEMAIN/SamplePaper2";
const App = () => {
  const { isSignedIn } = useAuth();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/documentation" element={<Documentation />} />
          {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
          {isSignedIn ? (
            <Route exact path="/dashboard" element={<Dashboard />} />
          ) : (
            <Route to="/login" element={<Login />} />
          )}

          <Route
            path="/dashboard/jeemain_sample_paper_1_physics"
            element={<SamplePaper1 />}
          />
          <Route
            path="/dashboard/jeemain_sample_paper_2_physics"
            element={<SamplePaper2 />}
          />

<Route
            path="/dashboard/jeemain_sample_paper_2_physics"
            element={<SamplePaper2 />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
