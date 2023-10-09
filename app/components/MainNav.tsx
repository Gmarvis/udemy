import Image from "next/image";
import React from "react";
import Categories from "./atoms/categories";
import { BsSearch } from "react-icons/bs"
import { SlBasket } from "react-icons/sl"
import UdemBusDropdown from "./molecules/udemBusDropdown";
import TeachNav from "./molecules/teachNav";

const MainNav = () => {
  return (
    <div>
      <div className="flex">
        <Image src="/logo-udemy.svg" width={90} height={50} alt="logo" />
        <Categories />

        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            className="border-black border p-2 px-4 rounded-full  w-full
            placeholder:text-gray-400 font-normal placeholder:px-10 py-2 outline-none" 
            type="text"
            placeholder="To search"
          />
          <BsSearch
            className="absolute left-0 top-0 ml-3 mt-3 text-gray-400 font-meduim"
            size={17}
          />
        </div>
         <UdemBusDropdown/>
         <TeachNav/>
         <SlBasket/>
      </div>
    </div>
  );
};

export default MainNav;
