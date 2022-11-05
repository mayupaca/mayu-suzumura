import React from "react";
// import bgImage from "../../images/code_pic.jpg";

const About = () => {
  return (
    <div className="about w-full h-96 relative">
      <div>
        <img
          src="../../../public/images/code_pic.jpg"
          alt="codePic"
          className="w-full h-[50rem] object-cover opacity-40 absolute"
        ></img>

        <div className="w-[90%] lg:w-[30%] mx-auto flex flex-col justify-center pt-20">
          <h1 className="my-8 text-3xl lg:text-4xl flex justify-center z-10">
            <p className="neon-green">Nice to Meet You&nbsp;:)</p>
          </h1>
          <p className="flex justify-center text-center z-10 text-lg lg:text-xl ">
            Hello!
            <br />
            I am Mayu. Welcome to my portfolio. I am an entry-level full-stack
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
        </div>
      </div>
    </div>
  );
};

export default About;
