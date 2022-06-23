import React from "react";
import "../../style/neon.css";

const Work = () => {
  const projects = [
    {
      name: "tweeter",
      url: "https://github.com/mayupaca/tweeter",
      image:
        "https://github.com/mayupaca/Tweeter-Project/blob/master/docs/tweeter1.png?raw=true",
      alt: "tweeter",
    },
    {
      name: "tinyapp",
      url: "https://github.com/mayupaca/tinyapp",
      image:
        "https://github.com/mayupaca/tinyapp/blob/master/docs/create_account.png?raw=true",
      alt: "tinyapp",
    },
    {
      name: "scheduler",
      url: "https://github.com/mayupaca/scheduler",
      image:
        "https://github.com/mayupaca/scheduler/blob/master/docs/Schedule_top.png?raw=true",
      alt: "scheduler",
    },
  ];

  return (
    <div name="work" class="h-screen">
      <div class="max-w-7xl mx-auto h-full text-white">
        {/* <>はエンティティコードを使う */}
        <h2 class="text-2xl text-[#a6a6a6]">
          &lt;!- - - - - <span class="text-[#BBED2F]">My</span> Work - - - -
          -&gt;
        </h2>
        <h1 class="neon-green mt-8 mb-8 text-3xl ">Projects</h1>

        <div className="projects">
          {projects.map((project) => (
            <a href={project.url}>
              <div class="relative">
                <img
                  src={project.image}
                  alt={project.alt}
                  class="w-72 h-40 absolute left-[80px]"
                ></img>
                <div class="my-5 bg-orange-300 w-56 h-72 absolute left-[250px] top-[80px]">
                  <h1>{project.name}</h1>
                  <p>
                    Pelt around the house and up and down stairs chasing
                    phantoms purr for prance along on top of the garden fence,
                    annoy the neighbor's dog and make it bark ooooh feather
                    moving feather!
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
