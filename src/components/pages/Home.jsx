import React from "react";
import "../../style/neon.css";
import bgImage from "../../images/code_pic.jpg";

const Home = () => {
  return (
    <div name="home" class="w-full h-screen">
      <div class="max-w-7xl flex flex-col justify-center h-full text-white">
        <div class="flex flex-row justify-between relative">
          <img src={bgImage} class="opacity-50 w-full"></img>
          <div class="absolute top-[250px]">
            <div className="greeting" class="text-7xl">
              <h1 class="mb-3 flex justify-end">Hello World!</h1>
              <h1 class="mb-3 flex justify-end">
                <span class="neon-green text-[#BBED2F]">I&nbsp;</span> am&nbsp;
              </h1>
              <h1 class="mb-3 flex justify-end neon-green text-[#BBED2F]">
                Mayu Suzumura.
              </h1>
            </div>
            <div className="introduce" class="text-3xl">
              <h2 class="mb-2.5 flex justify-end">
                I am from <span class="neon-red text-[#FF5757]">&nbsp;Japan&nbsp;</span>{" "}
                living in Canada.
              </h2>
              <h2 class="mb-2.5 flex justify-end">
                I am a <span class="neon-red text-[#FF5757]">&nbsp;web&nbsp;</span>{" "}
                developer.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
