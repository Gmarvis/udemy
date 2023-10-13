import Image from "next/image";
import React from "react";
import Categories from "./atoms/categories";
import { BsSearch } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { TbWorld } from "react-icons/tb";
import UdemBusDropdown from "./molecules/udemBusDropdown";
import TeachNav from "./molecules/teachNav";
import Login from "./atoms/loginBtn";
import Register from "./atoms/registerBtn";

const MainNav = () => {
  return (
    <div className="py-4 shadow px-8">
      <div className="flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0">
          <Image src="/logo-udemy.svg" width={80} height={45} alt="logo" />
        </div>
        <Categories />

        <div className="w-full sm:w-[300px] md:w-[50%] relative">
          <input
            className="border-black border p-2 px-4 rounded-full w-full
            placeholder:text-gray-400 font-normal placeholder:px-10 py-2 outline-none"
            type="text"
            placeholder="To search"
          />
          <BsSearch
            className="absolute left-0 top-0 ml-3 mt-3 text-gray-400 font-meduim"
            size={17}
          />
        </div>
        <UdemBusDropdown />
        <TeachNav />
        <SlBasket className="h-5 w-5" />
        <div className="flex items-center gap-[5px] 2xl:gap-[10px]">
          <Login />
          <Register />
          <div className="border border-black w-[40px] h-[40px]  flex items-center pl-0">
            <TbWorld className="flex items-center h-5 w-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
