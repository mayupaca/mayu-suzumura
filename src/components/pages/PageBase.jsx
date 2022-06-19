import React from "react";
import { Element } from "react-scroll";

const PageBase = (props) => {
  const { name } = props;
  return (
    <div>
      <Element name={name}></Element>
    </div>
  );
};

export default PageBase;
