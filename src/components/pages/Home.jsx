import React from "react";
import "../../style/neon.css";
import TypeAnimation from "../animation/typing/TypeAnimation";
import "../../style/animationBg.css";

const Home = () => {
  const PUBLIC_URL = process.env.PUBLIC_URL;
  return (
    <div className="home container mx-auto w-screen h-screen flex flex-col justify-center items-center">
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="md:relative md:right-[15%] md:bottom-[10%]">
        <div className="flex justify-center mb-3">
          <img
            className="w-[30vh] lg:w-[40vh] rounded-full shadow-2xl shadow-green-500/50"
            src={`${PUBLIC_URL}images/profilepic.JPG`}
            alt="me"
          ></img>
        </div>
        <div className="intro md:absolute md:bottom-0 md:left-[65%]">
          <div className="text-4xl md:text-5xl lg:text-6xl text-right">
            <div className="mb-3">
              <TypeAnimation />
            </div>

            <p className="mb-3">I am</p>
            <p className="mb-3 ">
              <span className="neon-yellow">Mayu&nbsp;Suzumura</span>.
            </p>
          </div>
          <div>
            <p className="text-3xl text-right md:text-4xl mt-5">
              I am a<span className="neon-red">&nbsp;web developer</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
