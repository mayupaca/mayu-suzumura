import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Skill from "./Skill";
import Work from "./Work";

const PageLayout = () => {
  return (
    <div>
      <Home />
      <About />
      <Work />
      <Skill />
      <Contact />
    </div>
  );
};

export default PageLayout;
