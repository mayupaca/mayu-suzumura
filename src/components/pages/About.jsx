import React from "react";
import bgImage from "../../images/code_pic.jpg";

const About = () => {
  return (
    <div name="about" class="w-full h-96 relative">
      <div>
        <img
          src={bgImage}
          alt="codePic"
          class="w-full h-[50rem] object-cover opacity-40 absolute"
        ></img>

        <div class="w-[90%] md:w-[40%] mx-auto flex flex-col justify-center pt-20">
          <h1 class="my-8 text-3xl md:text-4xl flex justify-center z-10">
            <p class="neon-green">Nice to Meet You&nbsp;:)</p>
          </h1>
          <p class="flex justify-center pb-20 z-10">
            Pelt around the house and up and down stairs chasing phantoms purr
            for prance along on top of the garden fence, annoy the neighbor's
            dog and make it bark ooooh feather moving feather! flex claws on the
            human's belly and purr like a lawnmower. Walk on keyboard. Pelt
            around the house and up and down stairs chasing phantoms purr for
            prance along on top of the garden fence, annoy the neighbor's dog
            and make it bark ooooh feather moving feather! flex claws on the
            human's belly and purr like a lawnmower. Walk on keyboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
