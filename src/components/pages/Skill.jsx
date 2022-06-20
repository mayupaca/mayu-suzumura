import React from "react";
import PageBase from "./PageBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Skill = () => {
  const skill = [
    {
      name: "skill",
    },
  ];
  return (
    <div className="skill">
      <PageBase name={skill.name}></PageBase>
      <div className="container-skill text-center mx-96 h-[80vh]">
        {/* <>はエンティティコードを使う */}
        <h2 class="text-2xl text-[#a6a6a6]">
          &lt;!- - - - - Skills - - - - -&gt;
        </h2>
        <div
          className="skills"
          class="flex flex-row justify-between my-8 mx-32 text-3xl"
        >
          <div className="soft-skill">
            <h1 class="mb-5">
              <span class="text-[#BBED2F]">Soft</span> Skill
            </h1>
            <div className="skill">
              <div class="flex flex-row text-2xl mb-3">
                <FontAwesomeIcon icon={faHandshake} />
                <p>&nbsp;&nbsp;&nbsp;Time management</p>
              </div>
              <div class="flex flex-row text-2xl mb-3">
                <FontAwesomeIcon icon={faHandshake} />
                <p>&nbsp;&nbsp;&nbsp;Communication</p>
              </div>
              <div class="flex flex-row text-2xl mb-3">
                <FontAwesomeIcon icon={faHandshake} />
                <p>&nbsp;&nbsp;&nbsp;Teamwork</p>
              </div>
              <div class="flex flex-row text-2xl mb-3">
                <FontAwesomeIcon icon={faHandshake} />
                <p>&nbsp;&nbsp;&nbsp;Flexibility</p>
              </div>
              <div class="flex flex-row text-2xl mb-3">
                <FontAwesomeIcon icon={faHandshake} />
                <p>&nbsp;&nbsp;&nbsp;Responsibility</p>
              </div>
            </div>
          </div>

          <div className="hard-skill">
            <h1 class="mb-5">
              <span class="text-[#BBED2F]">Hard</span> Skill
            </h1>
            <div className="teck-stacks" class="w-[27rem]">
              <div className="stack">
                <div class="flex flex-row text-2xl">
                  <FontAwesomeIcon icon={faLaptopCode} />
                  <p>&nbsp;&nbsp;&nbsp;Frontend</p>
                </div>
                  <p class="text-xl text-left mb-5">JavaScript / React / HTML / CSS / Sass / Bootstrap / Tailwind / Material UI / Chakla UI</p>
              </div>
              <div className="stack">
                <div class="flex flex-row text-2xl">
                  <FontAwesomeIcon icon={faLaptopCode} />
                  <p>&nbsp;&nbsp;&nbsp;Backend</p>
                </div>
                  <p class="text-xl text-left mb-5">Node.js / Express / Firebase </p>
              </div>
              <div className="stack">
                <div class="flex flex-row text-2xl">
                  <FontAwesomeIcon icon={faLaptopCode} />
                  <p>&nbsp;&nbsp;&nbsp;Database</p>
                </div>
                  <p class="text-xl text-left mb-5">PostgreSQL / MySQL </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
