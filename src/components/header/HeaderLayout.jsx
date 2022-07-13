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
    <div className="fixed left-[-12] w-[100%] flex items-center justify-end h-20 lg:h-24 px-4 text-white bg-[#292929] z-50">
      <ul className="hidden lg:flex">
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
          class="neon-green items-center text-[#FF5757] mr-10"
        >
          <a href="https://drive.google.com/file/d/1x2VjdKUOMgghpeNqTKWNguGvuI9n5sj3/view?usp=sharing">resume</a>
        </div>
      </ul>
      <div onClick={handleBurger} className="block lg:hidden">
        {hamburger ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
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
          >
            {headerPage}
          </HamburgerHeader>
        ))}
        <div
          className="resume"
          class="neon-green items-center text-[#FF5757] p-5"
        >
          <a href="https://drive.google.com/file/d/1x2VjdKUOMgghpeNqTKWNguGvuI9n5sj3/view?usp=sharing">resume</a>
        </div>
      </ul>
    </div>
  );
};

export default HeaderLayout;
