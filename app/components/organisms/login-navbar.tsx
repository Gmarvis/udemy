"use client";
import Image from "next/image";
import React from "react";
import Categories from "../atoms/categories";
import { BsBell, BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import UdemBusDropdown from "../molecules/udemBusDropdown";
import AvatarProfile from "../molecules/avatar";
import Category from "../molecules/category/development";
import GoToCart from "../molecules/cart-list";
// import {useNavigate} from "react"
// import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import { TbColorFilter } from "react-icons/tb";
import Link from "next/link";
import Sidenav from "./sidenav";

const LogiNav = () => {
  // const navigate = useNavigate()
  function handleClick(): void {
    console.log("i am am Instructor");
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <Sidenav/>
      <div className="py-2 bg-red-400 hidden md:contents px-6">
        <div className="md:flex justify-between hidden items-center">
          <div className=" text-4xl pb-4 flex mt-3 justify-center gap-4 w-[200px] items-center h-full">
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

            {/* <BsSearch
              className="absolute left-0 top-0 ml-3 mt-3 text-gray-400 font-meduim"
              size={17}
            /> */}
          </div>
          <UdemBusDropdown />
          <p
            className="py-2 hover:cursor-pointer hover:text-violet-600 text-sm"
            onClick={() => handleClick()}
          >
            Instructor
          </p>
          <Link href="/home/my-courses/learning">
            <p className="py-2 hover:cursor-pointer hover:text-violet-600 text-sm">
              My Learning
            </p>
          </Link>

          <AiOutlineHeart className="h-5 w-5 hover:text-violet-600 hover:cursor-pointer" />
          <GoToCart />
          <BsBell className="h-5 w-5 hover:cursor-pointer hover:text-violet-600" />
          <AvatarProfile />
        </div>
      </div>
      <hr />
      <div className="py-4 shadow-md hidden md:flex">
        <div className="md:flex hidden md:mx-auto md:w-[61%] text-sm md:justify-around">
          {/* <Tippy
          arrow="false"
            content={
              <div className="flex w-[1000px]">
                <a href="#" className="">
                  Web Development
                </a>
                <a href="#" className="">
                  Mobile Development
                </a>
                <a href="#" className="">
                  Programming Language
                </a>
                <a href="#" className="">
                  Game Development
                </a>
                <a href="#" className="">
                  Database deisgn & Development
                </a>
                <a href="#" className="">
                  Software Testing
                </a>
              </div>
            }
          >
            <p>Development</p>
          </Tippy>  */}
          <Category
            label={"Development"}
            l1={"Web Development"}
            l2={"Mobile Development"}
            l3={"Progamming Language"}
            l4={"Game Development"}
            l5={"Database design & Development"}
            l6={"Software Testing"}
          />
          <Category
            label={"Business"}
            l1={"Entrepreneurship"}
            l2={"Communication"}
            l3={"Management"}
            l4={"Sale"}
            l5={"Business Strategy"}
          />
          <Category
            label={"Finance & Accounting"}
            l1={"Accounting & Bookkeeping"}
            l2={"Cryptocurrency & Blockchain"}
            l3={"Finance"}
            l4={"Finance Modeling & Analysis"}
            l5={"Investing & Trading"}
          />
          <Category
            label={"IT & Software"}
            l1={"IT Certification"}
            l2={"Network Security"}
            l3={"Hardware"}
            l4={"Operating Systems & Server"}
            l5={"Other IT & Software"}
          />
          <Category
            label={"Personnal Development"}
            l1={"Personal Transformation"}
            l2={"Personal Productivity"}
            l3={"Leasdership"}
            l4={"Career Development"}
            l5={"Parenting & relationships"}
          />
          <Category
            label={"Design"}
            l1={"Web Design"}
            l2={"Graphic Design & Illustration"}
            l3={"Design Tools"}
            l4={"User Experience Design"}
            l5={"Gaeme Design"}
            l6={"3D Animation"}
          />
          <Category
            label={"Marketing"}
            l1={"Digital Marketing"}
            l2={"Search Engine Optimization"}
            l3={"Social Media Marketing"}
            l4={"Branding"}
            l5={"Marketing Fundamentals"}
            l6={"Marketing Analytics & Automation"}
          />
          <Category
            label={"Health & Fitness"}
            l1={"Fitness"}
            l2={"General Health"}
            l3={"Sports"}
            l4={"Nutrition & Diet"}
            l5={"Yoga"}
            l6={"Mental Health"}
          />
          <Category
            label={"Music"}
            l1={"Instruments"}
            l2={"Music Production"}
            l3={"Music Fundamentals"}
            l4={"Vocal"}
            l5={"Music Techniques"}
            l6={"Music Software"}
          />
        </div>
      </div>
    </div>
  );
};

export default LogiNav;
