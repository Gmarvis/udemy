import Image from "next/image";
import React from "react";
import Categories from "../atoms/categories";
import { BsSearch } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { TbWorld } from "react-icons/tb";
import UdemBusDropdown from "../molecules/udemBusDropdown";
import TeachNav from "../molecules/teachNav";

const LogiNav = () => {
  return (
    <div>
      <div className="py-2 px-6">
        <div className="flex justify-between items-center">
          <div className="font-bold text-4xl text-center pb-4 sm:pb-0">
            <Image
              src="/logo-udemy.svg"
              width={91}
              height={34}
              alt="logo"
              loading="lazy"
            />
          </div>
          <Categories />

          <div className="w-full sm:w-[300px] md:w-[60%] relative">
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
          <div className="border border-black w-[40px] h-[40px]  flex items-center pl-0">
            <TbWorld className="flex items-center h-5 w-10" />
          </div>
        </div>
      </div>
      <hr/>
      <div className="py-4 shadow-md">
        <ul className="md:flex md:mx-auto md:w-[61%] text-sm md:justify-around">
          <li className="hover:cursor-pointer hover:text-violet-600">Devlopment</li>
          <li className="hover:cursor-pointer hover:text-violet-600">Business</li>
          <li className="hover:cursor-pointer hover:text-violet-600">Finance and Accounting</li>
          <li className="hover:cursor-pointer hover:text-violet-600">IT & Software</li>
          <li className="hover:cursor-pointer hover:text-violet-600">Office Productivity</li>
          <li className="hover:cursor-pointer hover:text-violet-600">Personal Development</li>
          <li className="hover:cursor-pointer hover:text-violet-600">Design</li>
          <li className="hover:cursor-pointer hover:text-violet-600">Marketing</li>
          <li className="hover:cursor-pointer hover:text-violet-600">Health & fitness</li>
          <li className="hover:cursor-pointer hover:text-violet-600">Music</li>
        </ul>
      </div>
    </div>
  );
};

export default LogiNav;
