import React from "react";
import "../../style/neon.css";
// import profilePic from "images/profilepic.JPG";

const Home = () => {
  const PUBLIC_URL = process.env.PUBLIC_URL;
  return (
    <div className="home container mx-auto items-center w-screen h-screen block md:flex md:justify-center">
      <div className="profilePicture">
        <div className="">
          <img
            className="w-[30vh] lg:w-[45vh] rounded-full shadow-2xl shadow-green-500/50 opacity-70"
            src={`${PUBLIC_URL}images/profilepic.JPG`}
            alt="me"
          ></img>
        </div>
      </div>
      <div className="intro text-right">
        <div className="text-4xl lg:text-7xl">
          <p className="mb-3">Hello World!</p>
          <p className="mb-3">
            <span className="neon-yellow ">I&nbsp;</span>am&nbsp;
          </p>
          <p className="mb-3 ">
            <span className="neon-yellow">Mayu&nbsp;Suzumura</span>.
          </p>
        </div>
        <div>
          <p className="text-3xl lg:text-5xl mt-5 mb-3">
            I am a<span className="neon-red">&nbsp;web developer</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
