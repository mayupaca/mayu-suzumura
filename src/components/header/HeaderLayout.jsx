import React from "react";
import Header from "./Header";

const HeaderLayout = () => {
  const headerPages = ["home", "about", "work", "skill", "contact"];
  return (
    <div class="sticky top-0 flex justify-end h-20 text-md pt-10 text-center bg-[#292929]">
      {headerPages.map((headerPage) => (
        <Header>{headerPage}</Header>
      ))}
    </div>
  );
};

export default HeaderLayout;
