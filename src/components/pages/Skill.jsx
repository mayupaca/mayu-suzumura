import React from "react";
import PageBase from "./PageBase";

const Skill = () => {
  const skill = [
    {
      name: "skill",
    },
  ];
  return (
    <div className="skill">
      <PageBase name={skill.name}></PageBase>
      <div className="container-skill text-center mx-96">
        {/* <>はエンティティコードを使う */}
        <h2 class="text-2xl text-[#a6a6a6]">
          &lt;!- - - - - Skills - - - - -&gt;
        </h2>
        <div
          className="skills"
          class="flex flex-row justify-between my-8 mx-32 text-3xl"
        >
          <div className="soft-skill">
            <h1>
              <span class="text-[#BBED2F]">Soft</span> Skills
            </h1>
          </div>
          <div className="hard-skill">
            <h1>
              <span class="text-[#BBED2F]">Hard</span> Skills
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
