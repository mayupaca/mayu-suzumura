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
    <div
      name="work"
      class="w-[95%] lg:w-[55%] mx-auto flex flex-col justify-center my-10 lg:my-32"
    >
      <h1 class="neon-green my-5 text-3xl ">Projects</h1>

      <div className="projects flex flex-row flex-wrap lg:justify-evenly">
        {projects.map((project) => (
          <a href={project.url}>
            <div class="relative">
              <img
                src={project.image}
                alt={project.alt}
                class="w-80 h-44 mb-7 rounded-md"
              ></img>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Work;
