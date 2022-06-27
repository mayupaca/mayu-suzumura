import React from "react";
import "../../style/neon.css";
import profilePic from "../../images/mayu_raccoon.JPG";

const Home = () => {
  return (
    <div name="home" class="w-full md:h-screen">
      <div class="w-[95%] md:w-[60%] pb-20 m-auto flex flex-col justify-center">
        <div class="justify-between mt-28">
          <div class="relative top-0 left-0 md:absolute  md:top-48 md:left-96 z-10">
            <div className="greeting" class="text-4xl md:text-7xl">
              <h1 class="mb-3 flex justify-end">Hello World!</h1>
              <h1 class="mb-3 flex justify-end">
                <span class="neon-yellow">I&nbsp;</span>am&nbsp;
              </h1>
              <h1 class="mb-3 flex justify-end">
                <span class="neon-yellow">Mayu&nbsp;Suzumura</span>.
              </h1>
            </div>
            <div
              className="intro"
              class="text-3xl md:text-5xl flex justify-end mt-5 "
            >
              <h2 class="mb-3 inline md:justify-end">
                I am from<span class="neon-red">&nbsp;Japan</span>.
              </h2>
            </div>
          </div>
          <div class="flex justify-start h-[250px] mt-5 absolute top-20 left-0">
            <img
              src={profilePic}
              alt="me"
              class="w-[10rem] md:w-[30rem] h-[13rem] md:h-[40rem] rounded-full md:rounded-l-[50%] shadow-2xl shadow-green-500/50 opacity-70 "
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
