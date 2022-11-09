import React from "react";
import Typewriter from "typewriter-effect";

const TypeAnimation = () => {
  return (
    <div>
      <Typewriter
        
        options={{
          cursor: "",
          strings: ["Hello World!"],
          autoStart: true,
          pauseFor: 5000,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypeAnimation;
