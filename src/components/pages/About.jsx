import React from "react";
// import bgImage from "../../images/code_pic.jpg";

const About = () => {
  const PUBLIC_URL = process.env.PUBLIC_URL;

  return (
    <div className="about w-screen h-screen relative">
      <div className="flex items-center">
        <img
          src={`${PUBLIC_URL}images/code_pic.jpg`}
          alt="codePic"
          className="w-full h-[50rem] object-cover opacity-40 absolute"
        ></img>

        <div className="w-[90%] lg:w-[65%] mx-auto flex flex-col justify-center pt-10">
          <h1 className="mb-6 text-3xl lg:text-4xl flex justify-center z-10">
            <p className="neon-green">Nice to Meet You&nbsp;:)</p>
          </h1>
          <p className="flex justify-center text-center z-10 text-lg lg:text-2xl mb-6">
            Hello!
            <br />
            I am Mayu. Welcome to my portfolio. <br />I am an entry-level full-stack
            web developer based in Toronto, Canada but originally from Japan.
            <br />
            I used to teach Japanese to my students from all over the world and became a programmer.
            I am a curious person with a serious passion for building web
            appreciation that would help the communities.
            <br />
            Other than coding, I spend most of my free time with my sweet cat
            (He is sooo adorable!!). I have also been trying to study more
            technologies. Currently, web3.0 and blockchain that I am into.
          </p>
          <div className="flex justify-center z-10 lg:mb-10">
            <img src={`${PUBLIC_URL}images/yuki2.jpg`} className="rounded-full w-[25vh] " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
