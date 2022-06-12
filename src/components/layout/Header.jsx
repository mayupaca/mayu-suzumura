import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <div class="sticky top-0 flex justify-end h-20 bg-[#292929] text-[#A6A6A6]">
      <div class="mr-1">
        <ScrollLink to="home" smooth={true} duration={500}>
          home
        </ScrollLink>
      </div>
      <div class="mr-1">
        <ScrollLink to="about" smooth={true} duration={500}>
          about
        </ScrollLink>
      </div>
      <div class="mr-1">
        <ScrollLink to="work" smooth={true} duration={500}>
          work
        </ScrollLink>
      </div>
      <div class="mr-1">
        <ScrollLink to="skill" smooth={true} duration={500}>
          skill
        </ScrollLink>
      </div>
      <div class="mr-8">
        <ScrollLink to="contact" smooth={true} duration={500}>
          contact
        </ScrollLink>
      </div>
    </div>
  );
};

export default Header;
