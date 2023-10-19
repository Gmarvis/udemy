import Image from "next/image";
import React from "react";
import Categories from "../atoms/categories";
import { BsBell, BsSearch } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import UdemBusDropdown from "../molecules/udemBusDropdown";
import Avatar from "react-avatar";
import TeachNav from "../molecules/teachNav";
import AvatarProfile from "../molecules/avatar";

const LogiNav = () => {
  return (
    <div>
      <div className="py-2 px-6">
        <div className="md:flex justify-between hidden items-center">
          <div className=" text-4xl pb-4  bg-red-600 flex mt-3 justify-center gap-4 w-[200px] items-center h-full">
            <Image
              src="/logo-udemy.svg"
              width={91}
              height={34}
              alt="logo"
              loading="lazy"
              className="w-20 my-auto"
            />
            <Categories />
          </div>

          <div className="  md:w-[60%] ">
            <input
              className="border-black border p-2 px-4 rounded-full w-full
            placeholder:text-gray-400 relative font-normal placeholder:px-10 py-3 outline-none"
              type="text"
              placeholder="Search for anything"
            />
            <BsSearch
              className="absolute left-0 top-0 ml-3 mt-3 text-gray-400 font-meduim"
              size={17}
            />
          </div>
          <UdemBusDropdown />
          <p className="py-2 hover:cursor-pointer hover:text-violet-600 text-sm">
            Instructor
          </p>
          <p className="py-2 hover:cursor-pointer hover:text-violet-600 text-sm">
            My Learning
          </p>

          <AiOutlineHeart className="h-5 w-5 hover:cursor-pointer" />
          <SlBasket className="h-5 w-5 hover:cursor-pointer" />
          <BsBell className="h-5 w-5 hover:cursor-pointer" />
          <AvatarProfile />
          {/* <Avatar
              className="avatar"
              name="Gael Tikeng"
              color="#0e0d0d"
              round={true}
            /> */}
        </div>
      </div>
      <hr />
      <div className="py-4 shadow-md">
        <ul className="md:flex hidden md:mx-auto md:w-[61%] text-sm md:justify-around">
          <li className="hover:cursor-pointer hover:text-violet-600">
            Devlopment
          </li>
          <li className="hover:cursor-pointer hover:text-violet-600">
            Business
          </li>
          <li className="hover:cursor-pointer hover:text-violet-600">
            Finance and Accounting
          </li>
          <li className="hover:cursor-pointer hover:text-violet-600">
            IT & Software
          </li>
          <li className="hover:cursor-pointer hover:text-violet-600">
            Office Productivity
          </li>
          <li className="hover:cursor-pointer hover:text-violet-600">
            Personal Development
          </li>
          <li className="hover:cursor-pointer hover:text-violet-600">Design</li>
          <li className="hover:cursor-pointer hover:text-violet-600">
            Marketing
          </li>
          <li className="hover:cursor-pointer hover:text-violet-600">
            Health & fitness
          </li>
          <li className="hover:cursor-pointer hover:text-violet-600">Music</li>
        </ul>
      </div>
    </div>
  );
};

export default LogiNav;
