import React from "react";
import "../../style/neon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";
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
import { ReactComponent as Firebase } from "../../assets/firebase.svg";
import { ReactComponent as PostgreSql } from "../../assets/postgresql.svg";
import { ReactComponent as MySql } from "../../assets/mysql.svg";
import { ReactComponent as Typescript } from "../../assets/typescript-icon.svg";
import { ReactComponent as Figma } from "../../assets/figma.svg";
import { ReactComponent as Github } from "../../assets/github-icon.svg";
import { ReactComponent as Git } from "../../assets/git-icon.svg";

const Skill = () => {
  // const skillsArray = [];
  return (
    <div
      name="skill"
      className="pt-[12rem] lg:pt-[5rem] lg:pb-10 mx-auto flex flex-col mt-28 w-[90%] lg:w-[50%]"
    >
      <div class="py-5 lg:py-10 pb-5 flex flex-col justify-center lg:flex-row bg-slate-200 rounded-3xl relative z-10">
        <div class="">
          <h1 class="lg:mb-10 text-3xl flex justify-center neon-red text-slate-500">
            Skills
          </h1>
          <div class="flex flex-col justify-center lg:flex-row">
            <div>
              <div className="language flex flex-col mx-5 lg:mx-24 mt-10 lg:mt-0">
                <h1 class="text-2xl text-slate-500 text-center z-10">
                  Languages
                </h1>
                <div class="my-5 text-[#6331ED] text-3xl text-center">
                  <FontAwesomeIcon icon={faDisplay} />
                </div>
                <div className="skill" class="flex flex-wrap justify-center">
                  <JavaScript class="w-[60px] lg:w-[70px] h-[60px] lg:h-[70px] m-2 p-3 bg-slate-200 rounded-2xl shadow-xl shadow-slate-500" />
                  <Typescript class="w-[60px] lg:w-[70px] h-[60px] lg:h-[70px] m-2  p-3 bg-slate-200 rounded-2xl shadow-xl shadow-slate-500" />
                  <Html class="w-[60px] lg:w-[70px] h-[60px] lg:h-[70px] m-2  p-3 bg-slate-200 rounded-2xl shadow-xl shadow-slate-500" />
                  <Css class="w-[60px] lg:w-[70px] h-[60px] lg:h-[70px] m-2  p-3 bg-slate-200 rounded-2xl shadow-xl shadow-slate-500" />
                </div>
              </div>
              <div className="tools flex flex-col mx-5 lg:mx-24 mt-10 lg:mt-10">
                <h1 class="text-2xl text-slate-500 text-center z-10">Tools</h1>
                <div class="my-5 text-[#6331ED] text-3xl text-center">
                  <FontAwesomeIcon icon={faDisplay} />
                </div>
                <div className="skill" class="flex flex-wrap justify-center">
                  <Figma class="w-[60px] lg:w-[70px] h-[60px] lg:h-[70px] m-2 p-3 bg-slate-200 rounded-2xl shadow-xl shadow-slate-500" />
                  <Git class="w-[60px] lg:w-[70px] h-[60px] lg:h-[70px] m-2 p-3 bg-slate-200 rounded-2xl shadow-xl shadow-slate-500" />
                  <Github class="w-[60px] lg:w-[70px] h-[60px] lg:h-[70px] m-2 p-3 bg-slate-200 rounded-2xl shadow-xl shadow-slate-500" />
                </div>
              </div>
            </div>
            <div>
              <div className="frontend flex flex-col mx-5 lg:mx-24 mt-10 lg:mt-0">
                <h1 class="text-2xl text-slate-500 text-center z-10">
                  Frontend
                </h1>
                <div class="my-5 text-[#6331ED] text-3xl text-center">
                  <FontAwesomeIcon icon={faDisplay} />
                </div>
                <div className="skill" class="flex flex-wrap justify-center">
                  <ReactLogo class="w-[60px] lg:w-[70px] h-[60px] lg:h-[70px] m-2  p-3 bg-slate-200 rounded-2xl shadow-xl shadow-slate-500" />
                  <Sass class="w-[60px] lg:w-[70px] h-[60px] lg:h-[70px] m-2  p-3 bg-slate-200 rounded-2xl shadow-xl shadow-slate-500" />
                  <Bootstrap class="w-[60px] lg:w-[70px] h-[60px] lg:h-[70px] m-2  p-3 bg-slate-200 rounded-2xl shadow-xl shadow-slate-500" />
                  <Tailwind class="w-[60px] lg:w-[70px] h-[60px] lg:h-[70px] m-2  p-3 bg-slate-200 rounded-2xl shadow-xl shadow-slate-500" />
                  <MaterialUi class="w-[60px] lg:w-[70px] h-[60px] lg:h-[70px] m-2  p-3 bg-slate-200 rounded-2xl shadow-xl shadow-slate-500" />
                </div>
              </div>
              <div className="backend flex flex-col mx-5 lg:mx-24 mt-10 lg:mt-10">
                <h1 class="text-2xl text-slate-500 text-center z-10">
                  Backend & DB
                </h1>
                <div class="my-5 text-[#6331ED] text-3xl text-center">
                  <FontAwesomeIcon icon={faDisplay} />
                </div>
                <div className="skill" class="flex flex-wrap justify-center">
                  <Node class="w-[60px] lg:w-[70px] h-[60px] lg:h-[70px] m-2 p-3 bg-slate-200 rounded-2xl shadow-xl shadow-slate-500" />
                  <Express class="w-[60px] lg:w-[70px] h-[60px] lg:h-[70px] m-2 p-3 bg-slate-200 rounded-2xl shadow-xl shadow-slate-500" />
                  <Firebase class="w-[60px] lg:w-[70px] h-[60px] lg:h-[70px] m-2 p-3 bg-slate-200 rounded-2xl shadow-xl shadow-slate-500" />
                  <PostgreSql class="w-[60px] lg:w-[70px] h-[60px] lg:h-[70px] m-2 p-3 bg-slate-200 rounded-2xl shadow-xl shadow-slate-500" />
                  <MySql class="w-[60px] lg:w-[70px] h-[60px] lg:h-[70px] m-2 p-3 bg-slate-200 rounded-2xl shadow-xl shadow-slate-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
