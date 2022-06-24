import React from "react";
import "../../style/neon.css";
import bgImage from "../../images/code_pic.jpg";

const Home = () => {
  return (
    <div name="home" class="w-full h-screen">
      <div class="max-w-7xl flex flex-col justify-center h-full">
        <div class="flex flex-row justify-between relative">
          <img src={bgImage} alt="homePic" class="opacity-50 w-full"></img>
          <div class="absolute top-48 right-0 md:right-[-12rem]">
            <div className="greeting" class="text-7xl">
              <h1 class="mb-3 flex justify-end">Hello World!</h1>
              <h1 class="mb-3 flex justify-end">
                <span class="neon-green text-[#BBED2F]">I&nbsp;</span> am&nbsp;
              </h1>
              <h1 class="mb-3 flex justify-end neon-green text-[#BBED2F]">
                Mayu Suzumura.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
