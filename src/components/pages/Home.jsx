import React from "react";
import "../../style/neon.css";
import profilePic from "../../images/mayu_raccoon.JPG";

const Home = () => {
  return (
    <div name="home" class="w-full h-screen">
      <div class="max-w-7xl m-auto flex flex-col justify-center h-full">
        <div class="justify-between relative">
          <div class="absolute top-48 left-96">
            <div className="greeting" class="text-7xl">
              <h1 class="mb-3 flex justify-end">Hello World!</h1>
              <h1 class="mb-3 flex justify-end">
                <span class="neon-yellow">I&nbsp;</span>am&nbsp;
              </h1>
              <h1 class="mb-3 flex justify-end neon-yellow">
                Mayu Suzumura.
              </h1>
            </div>
            <div className="intro" class="text-5xl mt-5">
              <h2 class="mb-3 flex justify-end">I am from<span class="neon-red">&nbsp;Japan</span>.</h2>
              <h2 class="mb-3 flex justify-end"><span class="neon-red">Coding</span>&nbsp;is my life.</h2>
            </div>
          </div>
          <img
            src={profilePic}
            alt="me"
            class="w-[30rem] rounded-l-[50%] shadow-2xl shadow-green-500/50 opacity-70 "
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
