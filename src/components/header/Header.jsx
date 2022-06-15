import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Header = (props) => {
  const { children, headerPage } = props;
  return (
   
      <div class="mr-8 cursor-pointer">
        <ScrollLink to={headerPage} smooth={true} duration={500}>
          {children}
        </ScrollLink>
      </div>
    
  );
};

export default Header;
