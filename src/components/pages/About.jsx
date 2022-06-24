import React from "react";
import bgImage from "../../images/code_pic.jpg";

const About = () => {
  return (
    <div name="about" class="w-full relative ">
      <div>
        <img
          src={bgImage}
          alt="image"
          class="w-full h-[40rem] object-cover opacity-40 absolute"
        ></img>

        <div class="max-w-5xl mx-auto flex flex-col justify-center pt-20">
          <h1 class="my-8 text-4xl flex justify-center z-10">
            <p class="neon-yellow">Nice to Meet You&nbsp;:)</p>
          </h1>
          <p class="flex justify-center z-10 pb-20">
            Pelt around the house and up and down stairs chasing phantoms purr
            for prance along on top of the garden fence, annoy the neighbor's
            dog and make it bark ooooh feather moving feather! flex claws on the
            human's belly and purr like a lawnmower. Walk on keyboard. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
