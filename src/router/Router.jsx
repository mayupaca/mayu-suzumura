import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Work from "../components/pages/Work";
import Skill from "../components/pages/Skill";
import Contact from "../components/pages/Contact";

const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
};

export default Router;

/* 
Routing
<BrowserRouter>
  <div className="App">
    <Link to="/">home</Link>
    <Link to="/about">about</Link>
    <Link to="/work">work</Link>
    <Link to="/skill">skill</Link>
    <Link to="/contact">contact</Link>
  </div>
  <Router />
</BrowserRouter>
*/