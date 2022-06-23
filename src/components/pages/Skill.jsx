import React from "react";
import "../../style/neon.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
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
  return (
    <div name="skill" className="w-full h-screen text-center">
      <div class="max-w-7xl mx-auto items-center h-full text-white">
        {/* <>はエンティティコードを使う */}
        <h2 class="text-2xl text-[#a6a6a6]">
          &lt;!- - - - - Skills - - - - -&gt;
        </h2>
        <div class="mt-20">
          <div className="soft-skill">
            <h1 class="mb-10 text-3xl">
              &#123;&nbsp;<span class="neon-green text-[#BBED2F]">Soft</span> Skills&nbsp;&#125;
            </h1>
            <div className="skill" class="flex flex-row justify-evenly">
              <div>
                <div class="flex flex-row text-2xl mb-3">
                  <span class="text-[#6331ED]">
                    <FontAwesomeIcon icon={faHandshake} />
                  </span>
                  <p>&nbsp;&nbsp;&nbsp;Compassion</p>
                </div>
                <div class="flex flex-row text-2xl mb-3">
                  <span class="text-[#6331ED]">
                    <FontAwesomeIcon icon={faHandshake} />
                  </span>
                  <p>&nbsp;&nbsp;&nbsp;Time management</p>
                </div>
                <div class="flex flex-row text-2xl mb-3">
                  <span class="text-[#6331ED]">
                    <FontAwesomeIcon icon={faHandshake} />
                  </span>
                  <p>&nbsp;&nbsp;&nbsp;Communication</p>
                </div>
              </div>
              <div>
                <div class="flex flex-row text-2xl mb-3">
                  <span class="text-[#6331ED]">
                    <FontAwesomeIcon icon={faHandshake} />
                  </span>
                  <p>&nbsp;&nbsp;&nbsp;Teamwork</p>
                </div>
                <div class="flex flex-row text-2xl mb-3">
                  <span class="text-[#6331ED] ">
                    <FontAwesomeIcon icon={faHandshake} />
                  </span>
                  <p>&nbsp;&nbsp;&nbsp;Flexibility</p>
                </div>
                <div class="flex flex-row text-2xl mb-3">
                  <span class="text-[#6331ED]">
                    <FontAwesomeIcon icon={faHandshake} />
                  </span>
                  <p>&nbsp;&nbsp;&nbsp;Responsibility</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hard-skill">
            <h1 class="my-14 text-3xl">
            &#123;&nbsp;<span class="neon-green text-[#BBED2F]">Hard</span> Skills&nbsp;&#125;
            </h1>
            <div className="teck-stacks">
              <div
                className="stack"
                class="mb-5 grid grid-cols-4 justify-items-center"
              >
                <JavaScript class="w-28 h-28 mx-8 mb-16 p-5 bg-[#292929] rounded-2xl shadow-xl shadow-gray-900"/>
                <ReactLogo class="w-28 h-28 mx-8 mb-16 p-5 bg-[#292929] rounded-2xl shadow-xl shadow-gray-900"/>
                <Html class="w-28 h-28 mx-8 mb-16 p-5 bg-[#292929] rounded-2xl shadow-xl shadow-gray-900"/>
                <Css class="w-28 h-28 mx-8 mb-16 p-5 bg-[#292929] rounded-2xl shadow-xl shadow-gray-900"/>
                <Sass class="w-28 h-28 mx-8 mb-16 p-5 bg-[#292929] rounded-2xl shadow-xl shadow-gray-900"/>
                <Bootstrap class="w-28 h-28 mx-8 mb-16 p-5 bg-[#292929] rounded-2xl shadow-xl shadow-gray-900"/>
                <Tailwind class="w-28 h-28 mx-8 mb-16 p-5 bg-[#292929] rounded-2xl shadow-xl shadow-gray-900"/>
                <MaterialUi class="w-28 h-28 mx-8 mb-16 p-5 bg-[#292929] rounded-2xl shadow-xl shadow-gray-900"/>
                <Node class="w-28 h-28 mx-5 mb-16 p-5 bg-[#292929] rounded-2xl shadow-xl shadow-gray-900"/>
                <Express class="w-28 h-28 mx-8 mb-16 p-5 bg-[#292929] rounded-2xl shadow-xl shadow-gray-900"/>
                <Firebase class="w-28 h-28 mx-8 mb-16 p-5 bg-[#292929] rounded-2xl shadow-xl shadow-gray-900"/>
                <PostgreSql class="w-28 h-28 mx-8 mb-16 p-5 bg-[#292929] rounded-2xl shadow-xl shadow-gray-900"/>
                <MySql class="w-28 h-28 mx-8 mb-16 p-5 bg-[#292929] rounded-2xl shadow-xl shadow-gray-900"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
