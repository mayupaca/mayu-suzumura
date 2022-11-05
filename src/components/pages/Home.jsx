import React from "react";
import "../../style/neon.css";
// import profilePic from "../../images/projectImages/profilepic.JPG";

const Home = () => {
  return (
    <div className="home w-full lg:h-screen">
      <div className="w-[95%] lg:w-[60%] pb-32 m-auto flex flex-col justify-center">
        <div className="mt-32 lg:relative">
          <div className="flex justify-center mt-5 absolute top-20 object-cover">
            <img
              src="../../../public/images/profilepic.JPG"
              alt="me"
              className="w-[10rem] lg:w-[45vh] h-[13rem] lg:h-[60vh] rounded-full shadow-2xl shadow-green-500/50 opacity-70 "
            ></img>
          </div>
          <div className="relative top-10 left-0 lg:absolute  lg:top-[25vh] lg:left-[40vh]">
            <div className="greeting text-4xl lg:text-7xl">
              <h1 className="mb-3 flex justify-end">Hello World!</h1>
              <h1 className="mb-3 flex justify-end">
                <span className="neon-yellow">I&nbsp;</span>am&nbsp;
              </h1>
              <h1 className="mb-3 flex justify-end">
                <span className="neon-yellow">Mayu&nbsp;Suzumura</span>.
              </h1>
            </div>
            <div
              className="intro text-3xl lg:text-5xl flex justify-end mt-5 "
            >
              <h2 className="mb-3 inline lg:justify-end">
                I am a<span className="neon-red">&nbsp;web developer</span>.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
