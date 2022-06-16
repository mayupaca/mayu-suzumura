import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Header = (props) => {
  const { headerPage } = props;
  const [onClickChangeColor, setOnClickChangeColor] = useState(false);
  const redText = () => {
    setOnClickChangeColor(!onClickChangeColor);
  };

  return (
    <div class="mr-8 cursor-pointer">
      <ScrollLink
        className={onClickChangeColor ? "text-[#FF5757]" : ""}
        onClick={redText}
        to={headerPage}
        smooth={true}
        duration={500}
      >
        {headerPage}
      </ScrollLink>
    </div>
  );
};

export default Header;
