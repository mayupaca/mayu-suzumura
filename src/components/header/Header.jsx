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
      
      /* <div class="mr-8 cursor-pointer">
        <ScrollLink to="about" smooth={true} duration={500}>
          about
        </ScrollLink>
      </div>
      <div class="mr-8 cursor-pointer">
        <ScrollLink to="work" smooth={true} duration={500}>
          work
        </ScrollLink>
      </div>
      <div class="mr-8 cursor-pointer">
        <ScrollLink to="skill" smooth={true} duration={500}>
          skill
        </ScrollLink>
      </div>
      <div class="mr-10 cursor-pointer">
        <ScrollLink to="contact" smooth={true} duration={500}>
          contact
        </ScrollLink>
      </div>
      <div className="resume" class="w-24 h-8 mr-10 text-[#FF5757] border border-[#FF5757] rounded-md" >
        <a href="https://drive.google.com/file/d/114evEJ_JhptvgWkq5vlRsa76ry_yElOW/view?usp=sharing" class='block'>
          resume
        </a>
      </div> */
    
  );
};

export default Header;
