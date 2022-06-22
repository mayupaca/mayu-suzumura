import React from "react";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      <div
        class="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white"
      >
        <div className="greeting" class="text-7xl">
          <h1 class="mb-3 flex justify-end">Hello World!</h1>
          <h1 class="mb-3 flex justify-end">
            <span class="text-[#BBED2F]">I&nbsp;</span> am&nbsp;
          </h1>
          <h1 class="mb-3 text-[#BBED2F] flex justify-end">Mayu Suzumura.</h1>
        </div>
        <div className="introduce" class="text-3xl">
          <h2 class="mb-2.5 flex justify-end">
            I am a <span class="text-[#FF5757]">&nbsp;Japanese&nbsp;</span> living in
            Canada.
          </h2>
          <h2 class="mb-2.5 flex justify-end">
            I am a <span class="text-[#FF5757]">&nbsp;web&nbsp;</span> developer.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
