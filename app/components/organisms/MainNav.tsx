"use client"
import Image from "next/image";
import React from "react";
import Categories from "../atoms/categories";
import { BsSearch } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { TbWorld } from "react-icons/tb";
import UdemBusDropdown from "../molecules/udemBusDropdown";
import TeachNav from "../molecules/teachNav";
import Login from "../atoms/loginBtn";
import Register from "../atoms/registerBtn";
import { IoReorderThreeOutline } from "react-icons/io5";
import MobileNavbar from "./mobile-navbar2";
import MenuItems2 from "./menu-items2";


type Props = {
  className?: string
}

const MainNav = ({ className }: Props) => {
  const [active, setActive] = React.useState(false)
  const [closed, setClosed] = React.useState(false)

  return (
    <div className={className}>
      <MobileNavbar
        onClickMenuButton2={() => {
          setActive((prev) => !prev)
          setTimeout(() => {
            setActive((prev) => !prev);
          }, 100000);
        }}
      />
      <MenuItems2
        onCloseMenu={() => setClosed((prev) => !prev)}
        className={active ? "z-20 top-0 md:hidden absolute w-full transition-transform 1s ease-in-out" : 'hidden'}
      />

      <div className="py-4 shadow px-8">
        <div className="flex justify-between items-center max-[799px]:hidden">
          <div className="font-bold text-4xl text-center pb-4 sm:pb-0">
            <Image src="/logo-udemy.svg" width={80} height={45} alt="logo" />
          </div>
          <Categories />

          <div className="flex border-black border px-4 rounded-full w-full sm:w-[300px] md:w-[50%]">
            <BsSearch
              className=" left-0 top-0 ml-3 mt-3 text-gray-400 font-meduim"
              size={17}
            />
            <input
              className=" px-4 w-full
            placeholder:text-gray-400 rounded font-normal  py-2 outline-none"
              type="text"
              placeholder="To search"
            />
          </div>
          <UdemBusDropdown />
          <TeachNav />
          <SlBasket className="h-5 w-5" />
          <div className="flex items-center gap-[2px] 2xl:gap-[10px]">
            <Login />
            <Register />
            <div className="border border-black w-[40px] h-[40px]  flex items-center pl-0">
              <TbWorld className="flex items-center h-5 w-10" />
            </div>
          </div>
        </div>

        {/* Media queries min-width:800px */}
        {/* <div className="lg:hidden flex justify-between items-center flex-row">
          <IoReorderThreeOutline className="h-[20px] " size={30} />
          <Image src="/logo-udemy.svg" width={80} height={45} alt="logo" />
          <div className=" flex flex-row gap-8">
            <BsSearch className="ml-3  text-gray-850 font-meduim" size={17} />
            <SlBasket className="h-5 w-5" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MainNav;
