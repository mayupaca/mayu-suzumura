import React from "react";
import PageBase from "./PageBase";

const Work = () => {
  const work = [
    {
      name: "work",
    },
  ];

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
    <div className="work h-[80vh]">
      <PageBase name={work.name}></PageBase>
      {/* <>はエンティティコードを使う */}
      <h2 class="text-2xl text-[#a6a6a6]">
        &lt;!- - - - - <span class="text-[#BBED2F]">My</span> Work - - - - -&gt;
      </h2>
      <h1 class="mt-8 mb-8 text-3xl ">Projects</h1>
      <div className="projects" class="flex flex-row flex-wrap">
        {projects.map((project) => (
          <a href={project.url} class="mr-32">
            <img src={project.image} alt={project.alt} class="w-96 h-52"></img>
            <p class="text-center my-5">{project.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Work;
