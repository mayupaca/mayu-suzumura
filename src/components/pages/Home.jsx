import React from "react";
import "../../style/neon.css";

const Home = () => {
  return (
    <div name="home" class="w-full h-screen">
      <div class="max-w-7xl mx-auto px-8 flex flex-col justify-center h-full text-white">
        <div class="flex flex-row justify-between">
          <div class="welcome text-8xl flex flex-col justify-center">
            <h1 class="flex justify-center">Welcome</h1>
            <h1 class="flex justify-center my-4">to</h1>
            <h1 class="flex justify-center">MayuFolio</h1>
          </div>
          <div>
            <div className="greeting" class="text-7xl">
              <h1 class="mb-3 flex justify-end">Hello World!</h1>
              <h1 class="mb-3 flex justify-end">
                <span class="neon-green">I&nbsp;</span> am&nbsp;
              </h1>
              <h1 class="neon-green mb-3 flex justify-end text-[#BBED2F]">
                Mayu Suzumura.
              </h1>
            </div>
            <div className="introduce" class="text-3xl">
              <h2 class="mb-2.5 flex justify-end">
                I am from <span class="neon-red text-[#FF5757]">&nbsp;Japan&nbsp;</span> living
                in Canada.
              </h2>
              <h2 class="mb-2.5 flex justify-end">
                I am a <span class="neon-red text-[#FF5757]">&nbsp;web&nbsp;</span> developer.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
