import React from "react";
import Header from "./Header";

const HeaderLayout = () => {
  const headerPages = ["home", "about", "work", "skill", "contact"];

  return (
    <div class="sticky top-0 flex justify-end h-20 text-md pt-10 mr-10 text-center bg-[#292929]">
      {headerPages.map((headerPage) => (
        <Header headerPage={headerPage}>{headerPage}</Header>
      ))}

      <div
        className="resume"
        class="w-24 h-8  text-[#FF5757] border border-[#FF5757] rounded-md"
      >
        <a
          href="https://drive.google.com/file/d/114evEJ_JhptvgWkq5vlRsa76ry_yElOW/view?usp=sharing"
          class="block"
        >
          resume
        </a>
      </div>
    </div>
  );
};

export default HeaderLayout;
