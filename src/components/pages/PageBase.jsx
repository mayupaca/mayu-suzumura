import React from "react";
import { Element } from "react-scroll";

const PageBase = (props) => {
  const { name } = props;
  return (
    <div class="mt-30">
      <Element name={name}></Element>
    </div>
  );
};

export default PageBase;
