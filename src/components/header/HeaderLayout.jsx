import React, { useState } from "react";
import Header from "./Header";
import "../../style/neon.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import HamburgerHeader from "./HamburgerHeader";

const HeaderLayout = () => {
  const headerPages = ["home", "about", "skill", "work", "contact"];
  //usestate初期値 0 = index0
  const [selectedPage, setSelectedPage] = useState("home");
  const [hamburger, setHamburger] = useState(false);

  const handleBurger = () => {
    setHamburger(!hamburger);
  };

  return (
    <div className="text-white bg-[#292929] mb-5 z-50 relative">
      <div className="flex justify-end items-center mx-auto md:h-20 w-[50%]">
        <div>
          <ul className="hidden md:flex">
            {headerPages.map((headerPage) => (
              <Header
                headerPage={headerPage}
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
                key={headerPage}
              >
                {headerPage}
              </Header>
            ))}
            <div className="resume neon-green items-center text-[#FF5757]">
              <a href="#">
                resume
              </a>
            </div>
          </ul>
        </div>
      </div>
      {/* Hamburger */}
      <div className="sticky flex justify-end m-5 mr-5 z-50">
        <div className="block md:hidden" onClick={handleBurger}>
          {hamburger ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>
        <ul
          className={
            hamburger
              ? "fixed left-0 top-0 w-[50%] h-full bg-[#292929] opacity-90 ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          {headerPages.map((headerPage) => (
            <HamburgerHeader
              headerPage={headerPage}
              setSelectedPage={setSelectedPage}
              selectedPage={selectedPage}
              key={headerPage}
             
            >
              {headerPage}
            </HamburgerHeader>
          ))}
          <div className="resume neon-green items-center text-[#FF5757] p-5">
            <a href="#">
              resume
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default HeaderLayout;
