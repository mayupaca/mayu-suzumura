import React from "react";
import "../../style/neon.css";
// import mayuFolio from "../../images/projectImages/mayufolio.jpg"

const Work = () => {
  const PUBLIC_URL = process.env.PUBLIC_URL;

  const projects = [
    {
      name: "MayuFolio",
      url: "https://mayu-suzumura.vercel.app/",
      git_repo: "https://github.com/mayupaca/mayu-suzumura",
      image: PUBLIC_URL + "images/projectImages/mayufolio.png",
      alt: "MayuFolio",
      description: "This is my portfolio website. I used React, Tailwind CSS and Vercel. Put my information and projects.",
    },
    {
      name: "Stay World",
      url: "https://magenta-semolina-369081.netlify.app/",
      git_repo: "https://github.com/mayupaca/stay_world",
      image: PUBLIC_URL + "images/projectImages/stayworld1.png",
      alt: "stay_world",
      description: "This is a website where you can find a place to stay. This is used HTML,CSS and Vanilla JavaScript.",
    },
    {
      name: "YuluCamp",
      url: "https://pure-dusk-21602.herokuapp.com/",
      git_repo: "https://github.com/mayupaca/YuluCamp",
      image: PUBLIC_URL + "images/projectImages/yuluCampHome.png",
      alt: "yuluCamp",
      description: "This is a website where you can find a Campsite. You can also add a new campsite.",
    },
    {
      name: "Twistagram",
      url: "",
      git_repo: "https://github.com/mayupaca/twistagram-frontend",
      image: PUBLIC_URL + "images/projectImages/twistagram_home.png",
      alt: "twistagram",
      description: "This is Twitter and Instagram clone. You can post a new tweet and like it.",

    },
    {
      name: "Interview Scheduler",
      url: "",
      git_repo: "https://github.com/mayupaca/scheduler",
      image:
        "https://github.com/mayupaca/scheduler/blob/master/docs/Schedule_top.png?raw=true",
      alt: "scheduler",
      description: "This is a website where you can book an interview. You can also edit and delete it.",
    },
    // {
    //   name: "tweeter",
    //   url: "",
    //   git_repo: "https://github.com/mayupaca/tweeter",
    //   image:
    //     "https://github.com/mayupaca/Tweeter-Project/blob/master/docs/tweeter1.png?raw=true",
    //   alt: "tweeter",
    //   description: "",
    // },
    // {
    //   name: "TinyApp",
    //   url: "",
    //   git_repo: "https://github.com/mayupaca/tinyapp",
    //   image:
    //     "https://github.com/mayupaca/tinyapp/blob/master/docs/create_account.png?raw=true",
    //   alt: "tinyapp",
    // },
  ];

  return (
    <div className="work md:py-20 w-screen md:h-full mb-24 md:mb-52 flex flex-col justify-start items-center">
      <h1 className="neon-green mb-10 text-3xl ">My Projects</h1>
      <div className="w-[90%] md:w-[80%]">
        <div className="md:grid gap-4 grid-cols-3 grid-rows-2 place-items-center">
          {projects.map((project, index) => (
            <div
              className="max-w-xs rounded mb-8 md:m-5 overflow-hidden shadow-xl shadow-gray-500 md:hover:bg-gray-900 md:transition md:duration-500 md:hover:scale-125"
              key={index}
            >
              <img
                className="w-full h-56 object-cover"
                src={project.image}
                alt={project.alt}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.name}</div>
                <p className="text-white-700 text-sm ">
                  {project.description}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 mb-5 flex">
                <div>
                  <a
                    href={project.git_repo}
                    className="inline-block rounded bg-[#BBED2F] px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    GitHub Repo
                  </a>
                </div>
                <div>
                  {projects[index].url !== "" ? (
                    <a
                      href={project.url}
                      className="inline-block rounded bg-[#BBED2F] px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      Website
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    // <div className="work mt-20 md:mt-0 md:h-screen flex flex-col justify-center items-center">
    //   <h1 className="neon-green mb-20 text-3xl ">My Projects</h1>

    //   <div className="projects flex flex-row flex-wrap lg:justify-evenly">
    //     {projects.map((project, index) => (
    //       <div key={index}>
    //         <a href={project.url}>
    //           <div className="relative">
    //             <img
    //               src={project.image}
    //               alt={project.alt}
    //               className="w-80 mb-7 rounded-md"
    //             ></img>
    //           </div>
    //         </a>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Work;
