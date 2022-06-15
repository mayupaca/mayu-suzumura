import React from "react";
import PageBase from "./PageBase";

const Work = () => {
  const work = [
    {
      name: "work",
    },
  ];
  return (
    <div className="work">
      <PageBase name={work.name}></PageBase>
      {/* <>はエンティティコードを使う */}
      <h2 class="mt-20">&lt;!----- My Work -----&gt;</h2>
      <h1 class="mb-20">Projects</h1>
    </div>
  );
};

export default Work;
