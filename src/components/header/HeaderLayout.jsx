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
    <div className="text-white bg-[#292929]">
      <div className="mx-auto flex justify-end items-center h-24 w-[50%] ">
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
              <a href="https://drive.google.com/file/d/1boPHsuO6O3F5PeNc3FeG-C3OsK5EedYb/view?usp=sharing">
                resume
              </a>
            </div>
          </ul>
        </div>
      </div>
      {/* Hamburger */}
      <div className="flex justify-end">
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
              ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-500 bg-[#6c6f6c] ease-in-out duration-500"
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
            <a href="https://drive.google.com/file/d/1x2VjdKUOMgghpeNqTKWNguGvuI9n5sj3/view?usp=sharing">
              resume
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default HeaderLayout;
