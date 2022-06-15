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
      {/* <>はエンティティコードを使う */}
      <h2 class="mt-20">&lt;!----- Skills of Mine -----&gt;</h2>
      <div>
        <h1>Soft Skills</h1>
        <h1>Hard Skills</h1>
      </div>
      
    </div>
  );
};

export default Skill;
