import React, { useState } from "react";
import Header from "./Header";
import "../../style/neon.css";

const HeaderLayout = () => {
  const headerPages = ["home", "about", "skill", "work", "contact"];
  //usestate初期値 0 = index0
  const [selectedPage, setSelectedPage] = useState("home");
  return (
    <div className="header fixed z-[9999]">
      <div class="fixed w-full h-[80px] flex flex-row  justify-end items-center px-4 bg-[#292929] text-[#a6a6a6]">
        {headerPages.map((headerPage) => (
          <Header
            headerPage={headerPage}
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
          >
            {headerPage}
          </Header>
        ))}
        <div
          className="resume"
          class="neon-green h-8 items-center text-[#FF5757]"
        >
          <a href="#">resume</a>
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;
