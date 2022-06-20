import React from "react";
import PageBase from "./PageBase";

const About = () => {
  const about = [
    {
      name: "about",
    },
  ];
  return (
    <div className="about">
      <PageBase name={about.name}></PageBase>

      <div className="container-about text-center mx-96 h-[80vh]">
        <h2 class="text-2xl text-[#a6a6a6]">
          &#47;&#42; - - - - - About <span class="text-[#BBED2F]">Me</span> - -
          - - - &#42;&#47;{" "}
        </h2>
        <h1 class="my-8 text-3xl">
          I, My, Me, <span class="text-[#BBED2F]">and</span> Mine
        </h1>
        <p>
          Pelt around the house and up and down stairs chasing phantoms purr for
          prance along on top of the garden fence, annoy the neighbor's dog and
          make it bark ooooh feather moving feather! flex claws on the human's
          belly and purr like a lawnmower. Walk on keyboard. Licks paws sleep in
          the bathroom sink. I heard this rumor where the humans are our owners,
          pfft, what do they know?! stretch out on bed or steal mom's crouton
          while she is in the bathroom i love cats i am one wake up scratch
          humans leg for food then purr then i have a and relax i like to spend
          my days sleeping and eating fishes that my human fished for me we live
          on a luxurious yacht, sailing proudly under the sun, i like to walk on
          the deck, watching the horizon, dreaming of a good bowl of milk, or
          get suspicious of own shadow then go play with toilette paper. Ignore
          the human until she needs to get up, then climb on her lap and sprawl.
          Have a lot of grump in yourself because you can't forget to be grumpy
          and not be like king grumpy cat i is playing on your console hooman
          yet bleghbleghvomit my furball really tie the room together. Scratch
          so owner bleeds sit in window and stare oooh, a bird, yum or i is not
          fat, i is fluffy, chase the pig around the house.
        </p>
      </div>
    </div>
  );
};

export default About;
