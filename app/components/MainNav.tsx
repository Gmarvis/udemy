import Image from "next/image";
import React from "react";
import Categories from "./Categories";

const MainNav = () => {
  return (
    <div>
      <div className="flex">
        <Image 
         src="/logo-udemy.svg"
         width={50}
         height={40}
         alt="logo"
        />
        <Categories/>
        
      </div>
    </div>
  );
};

export default MainNav;
