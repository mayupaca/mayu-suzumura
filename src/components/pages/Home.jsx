import React from "react";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <div className="home" class="mt-36 mb-36 h-[80vh]">
      <Element name="home"></Element>
      <div
        className="container-home"
        class="grid justify-items-end text-right text-white"
      >
        <div className="greeting" class="text-7xl">
          <h1 class="mb-3">Hello World!</h1>
          <h1 class="mb-3">
            <span class="text-[#BBED2F]">I</span> am&nbsp;
          </h1>
          <h1 class="mb-3 text-[#BBED2F]">Mayu Suzumura.</h1>
        </div>
        <div className="introduce" class="text-3xl">
          <h2 class="mb-2.5">
            I am a <span class="text-[#FF5757]">Japanese</span> living in
            Canada.
          </h2>
          <h2>
            I am a <span class="text-[#FF5757]">web</span> developer.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
