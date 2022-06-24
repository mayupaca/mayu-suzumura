import React from "react";
import "../../style/neon.css";
import profilePic from "../../images/mayu_raccoon.JPG";

const Home = () => {
  return (
    <div name="home" class="w-full h-screen">
      <div class="max-w-7xl flex flex-col justify-center h-full">
        <div class="flex flex-row justify-between relative">
          <img
            src={profilePic}
            alt="image"
            class="opacity-70 w-[30rem] ml-[30rem] rounded-l-[50%] shadow-2xl shadow-green-500/50"
          ></img>
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
