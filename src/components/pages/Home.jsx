import React from "react";
import "../../style/neon.css";
import profilePic from "../../images/mayu_raccoon.JPG";

const Home = () => {
  return (
    <div name="home" class="w-full h-full md:h-screen">
      <div class="w-[60%] m-auto flex flex-col justify-center">
        <div class="justify-between relative mt-72">
          <div class="md:absolute top-48 left-96 z-10">
            <div className="greeting" class="text-center text-3xl md:text-7xl">
              <h1 class="mb-3 md:flex justify-end">Hello World!</h1>
              <h1 class="mb-3 md:flex justify-end">
                <span class="neon-yellow">I&nbsp;</span>am&nbsp;
              </h1>
              <h1 class="mb-3 inline md:flex justify-center">
                <span class="neon-yellow">Mayu&nbsp;Suzumura</span>.
              </h1>
            </div>
            <div
              className="intro"
              class="text-center text-2xl md:text-5xl md:flex justify-end mt-5 "
            >
              <h2 class="mb-3 inline md:justify-end">
                I am from<span class="neon-red">&nbsp;Japan</span>.
              </h2>
            </div>
          </div>
          <div class="flex justify-center md:justify-start h-[250px] mt-5">
            <img
              src={profilePic}
              alt="me"
              class="w-[10rem] md:w-[30rem] h-[13rem] md:h-[40rem] md:rounded-l-[50%] shadow-2xl shadow-green-500/50 opacity-70 "
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
