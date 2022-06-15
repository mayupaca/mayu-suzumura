import React from "react";
import PageBase from "./PageBase";

const About = () => {
  const about = [
    {
      name: "about",
    },
  ];
  return (
    <div className="about">
      <PageBase name={about.name}></PageBase>

      <h2 class="mt-20">/* ----- About Me ----- */</h2>
      <h1 class="mb-20">I, My, Me, and Mine</h1>
    </div>
  );
};

export default About;
