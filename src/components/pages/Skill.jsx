import React from "react";
import "../../style/neon.css";
import { useInView } from "react-intersection-observer";
import "animate.css";

import { ReactComponent as JavaScript } from "../../assets/javascript.svg";
import { ReactComponent as ReactLogo } from "../../assets/react.svg";
import { ReactComponent as Html } from "../../assets/html-5.svg";
import { ReactComponent as Css } from "../../assets/css-3.svg";
import { ReactComponent as Sass } from "../../assets/sass.svg";
import { ReactComponent as Bootstrap } from "../../assets/bootstrap.svg";
import { ReactComponent as Tailwind } from "../../assets/tailwindcss-icon.svg";
import { ReactComponent as MaterialUi } from "../../assets/material-ui.svg";
import { ReactComponent as Node } from "../../assets/nodejs.svg";
import { ReactComponent as Express } from "../../assets/express.svg";
import { ReactComponent as PostgreSql } from "../../assets/postgresql.svg";
import { ReactComponent as Figma } from "../../assets/figma.svg";
import { ReactComponent as Github } from "../../assets/github-icon.svg";
import { ReactComponent as Git } from "../../assets/git-icon.svg";
import { ReactComponent as Mongodb } from "../../assets/mongodb-icon.svg";

const Skill = () => {
  const { ref, inView } = useInView({
    rootMargin: "-100px",
    triggerOnce: true,
  });
  return (
    <div className="skill mt-20 md:mt-0 md:h-screen flex flex-col justify-center items-center">
      <div className=" w-[90%] md:w-[60%]">
        <h1 className="animated bounce text-3xl text-wite flex justify-center mb-10 neon-yellow">
          Mayu's Tech Stack
        </h1>
      </div>
      <div ref={ref}>
        {inView && (
          <div className="animated fadeInDown w-[90%] md:w-[55%] mx-auto flex flex-wrap justify-center">
            <JavaScript className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] m-3 p-1 md:m-5 md:p-3 bg-slate-200 rounded-md shadow-xl shadow-slate-500" />
            <Html className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] m-3 p-1 md:m-5 md:p-3 bg-slate-200 rounded-md shadow-xl shadow-slate-500" />
            <Css className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] m-3 p-1 md:m-5 md:p-3 bg-slate-200 rounded-md shadow-xl shadow-slate-500" />
            <ReactLogo className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] m-3 p-1 md:m-5 md:p-3 bg-slate-200 rounded-md shadow-xl shadow-slate-500" />
            <Sass className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] m-3 p-1 md:m-5 md:p-3 bg-slate-200 rounded-md shadow-xl shadow-slate-500" />
            <Bootstrap className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] m-3 p-1 md:m-5 md:p-3 bg-slate-200 rounded-md shadow-xl shadow-slate-500" />
            <Tailwind className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] m-3 p-1 md:m-5 md:p-3 bg-slate-200 rounded-md shadow-xl shadow-slate-500" />
            <MaterialUi className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] m-3 p-1 md:m-5 md:p-3 bg-slate-200 rounded-md shadow-xl shadow-slate-500" />
            <Node className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] m-3 p-1 md:m-5 md:p-3 bg-slate-200 rounded-md shadow-xl shadow-slate-500" />
            <Express className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] m-3 p-1 md:m-5 md:p-3 bg-slate-200 rounded-md shadow-xl shadow-slate-500" />
            <PostgreSql className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] m-3 p-1 md:m-5 md:p-3 bg-slate-200 rounded-md shadow-xl shadow-slate-500" />
            <Mongodb className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] m-3 p-1 md:m-5 md:p-3 bg-slate-200 rounded-md shadow-xl shadow-slate-500" />
            <Figma className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] m-3 p-1 md:m-5 md:p-3 bg-slate-200 rounded-md shadow-xl shadow-slate-500" />
            <Git className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] m-3 p-1 md:m-5 md:p-3 bg-slate-200 rounded-md shadow-xl shadow-slate-500" />
            <Github className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] m-3 p-1 md:m-5 md:p-3 bg-slate-200 rounded-md shadow-xl shadow-slate-500" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Skill;
