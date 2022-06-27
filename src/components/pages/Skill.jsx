import React from "react";
import "../../style/neon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
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

const Skill = () => {
  // const skillsArray = [];
  return (
    <div
      name="skill"
      className="max-w-7xl pb-[15rem] mx-auto flex flex-col my-32 w-[80%] md:w-[60%] bg-slate-200 rounded-3xl"
    >
      <div class="mt-16 flex flex-col md:flex-row justify-center relative z-10">

        <div className="soft-skill flex flex-col mx-20">
          <h1 class="text-2xl neon-green text-center">Soft Skills</h1>
          <div class="my-5 text-[#6331ED] text-3xl text-center">
            <FontAwesomeIcon icon={faHandshake} />
          </div>
          <div className="skill" class="flex flex-col text-center">
            <div class="text-lg m-2 ">
              <p class="underline decoration-[#FF5757] text-[#36393e]">Compassion</p>
            </div>
            <div class="text-lg m-2">
              <p class="underline decoration-[#FF5757] text-[#36393e]">Time management</p>
            </div>
            <div class="text-lg m-2">
              <p class="underline decoration-[#FF5757] text-[#36393e]">Communication</p>
            </div>

            <div class="text-lg m-2">
              <p class="underline decoration-[#FF5757] text-[#36393e]">Teamwork</p>
            </div>
            <div class="text-lg m-2">
              <p class="underline decoration-[#FF5757] text-[#36393e]">Flexibility</p>
            </div>
            <div class="text-lg m-2">
              <p class="underline decoration-[#FF5757] text-[#36393e]">Responsibility</p>
            </div>
          </div>
        </div>

        <div className="hard-skill flex flex-col mx-20">
          <h1 class="text-2xl neon-green text-center z-10">Hard Skills</h1>
          <div class="my-5 text-[#6331ED] text-3xl text-center">
            <FontAwesomeIcon icon={faDisplay} />
          </div>
          <div className="skill" class="flex flex-wrap justify-center">
            {/* {skillsArray.map((skill) => (
              <div>{skill}</div>
            ))} */}



            <JavaScript class="w-[60px] h-[60px] m-2 p-3 bg-[#36393e] rounded-2xl shadow-xl shadow-gray-900" />
            <ReactLogo class="w-[60px] h-[60px] m-2  p-3 bg-[#36393e] rounded-2xl shadow-xl shadow-gray-900" />
            <Html class="w-[60px] h-[60px] m-2  p-3 bg-[#36393e] rounded-2xl shadow-xl shadow-gray-900" />
            <Css class="w-[60px] h-[60px] m-2  p-3 bg-[#36393e] rounded-2xl shadow-xl shadow-gray-900" />
            <Sass class="w-[60px] h-[60px] m-2  p-3 bg-[#36393e] rounded-2xl shadow-xl shadow-gray-900" />
            <Bootstrap class="w-[60px] h-[60px] m-2  p-3 bg-[#36393e] rounded-2xl shadow-xl shadow-gray-900" />
            <Tailwind class="w-[60px] h-[60px] m-2  p-3 bg-[#36393e] rounded-2xl shadow-xl shadow-gray-900" />
            <MaterialUi class="w-[60px] h-[60px] m-2  p-3 bg-[#36393e] rounded-2xl shadow-xl shadow-gray-900" />
            <Node class="w-[60px] h-[60px] m-2 p-3 bg-[#36393e] rounded-2xl shadow-xl shadow-gray-900" />
            <Express class="w-[60px] h-[60px] m-2 p-3 bg-[#36393e] rounded-2xl shadow-xl shadow-gray-900" />
            <Firebase class="w-[60px] h-[60px] m-2 p-3 bg-[#36393e] rounded-2xl shadow-xl shadow-gray-900" />
            <PostgreSql class="w-[60px] h-[60px] m-2 p-3 bg-[#36393e] rounded-2xl shadow-xl shadow-gray-900" />
            <MySql class="w-[60px] h-[60px] m-2 p-3 bg-[#36393e] rounded-2xl shadow-xl shadow-gray-900" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
