"use client";
import Image from "next/image";
import React, { PropsWithChildren, useState } from "react";
import Categories from "../atoms/categories";
import { BsBell, BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import UdemBusDropdown from "../molecules/udemBusDropdown";
import AvatarProfile from "../molecules/avatar";
import Category from "../molecules/category/development";
import GoToCart from "../molecules/cart-list";
import "tippy.js/dist/tippy.css";
import Link from "next/link";
import MobileNavbar from "./mobile-navbar";
import MenuItems from "./menu-items";
import { useRouter } from "next/navigation";
import { Button, Popover, Whisper } from "rsuite";

type Props = {
  className?: string;
};

const dev: string[] = ["Web development", "Mobile Development", "Programming Language", "Game Development", "Database design & Development", "Software testing"]
const Business: string[] = ["Entrepreneurship", "Communication", "Management", "Sale", "Business Strategy"]
const finance: string[] = ["Accounting & Bookkeeping", "Cryptocurrency & Blockchain", "Finance", "Finance Modeling & Analysis", "Investing & Trading"]
const it: string[] = ["IT Certification", "Network Security", "Hardware", "Operating Systems & Server", "Other IT & Software"]
const personal: string[] = ["Personal Transformation", "Personal Productivity", "Leasdership", "Career Development", "Parenting & relationships"]
const design: string[] = ["Web Design", "Graphic Design & Illustration", "Design Tools", "User Experience Design", "Game Design", "3D Animation"]
const marketing: string[] = ["Marketing", "Digital Marketing", "Search Engine Optimization", "Social Media Marketing", "Branding", "Marketing Fundamentals", "Marketing Analytics & Automation"]
const health: string[] = ["Fitness", "General Health", "Sports", "Nutrition & Diet"]
const music: string[] = ["Instruments", "Music Production", "Music Fundamentals", "Vocal", "Music Techniques", "Music Software"]



const LogiNav = ({ className }: Props) => {
  const [active, setActive] = useState(false);
  const [closed, setClosed] = useState(false);
  const router = useRouter();

  function handleClick(): void {
    router.push("/instructor/course");
  }

  return (
    <div className={className}>
      <MobileNavbar
        onClickMenuButton={() => {
          setActive((prev) => !prev);
          setTimeout(() => {
            setActive((prev) => !prev);
          }, 10000);
        }}
      />
      <MenuItems
        onCloseMenu={() => setClosed((prev) => !prev)}
        className={`${active
          ? "z-20 top-0 md:hidden absolute w-full transition-transform 1s ease-in-out"
          : "hidden"
          }`}
      />
      {/* Desktop view */}
      <div className="py-2 hidden md:contents px-6">
        <div className="md:flex justify-between hidden items-center my-auto">
          <div className=" text-4xl pb-4 flex mt-3 justify-center gap-4 w-[200px] items-center h-full">
            <Link href="/">
              <Image
                src="/logo-udemy.svg"
                width={91}
                height={34}
                alt="logo"
                loading="lazy"
                className="w-20 my-auto hover:cursor-pointer"
              />
            </Link>

            <Categories />
          </div>
          <div className="flex border-black border px-4 rounded-full w-full sm:w-[300px] md:w-[50%]">
            <BsSearch
              className=" left-0 top-0 ml-3 mt-3 text-gray-400 font-meduim"
              size={17}
            />
            <input
              className=" px-4 w-full
            placeholder:text-gray rounded font-normal  py-2 outline-none"
              type="text"
              placeholder="To search"
            />
          </div>
          <UdemBusDropdown />
          <p
            className=" hover:cursor-pointer text-black hover:text-violt text-sm hover:no-underline"
            onClick={() => handleClick()}
          >
            Instructor
          </p>
          <Link href="/home/my-courses">
            <p className="hover:cursor-pointer hover:text-violet text-black hover:no-underline text-sm">
              My Learning
            </p>
          </Link>

          <AiOutlineHeart className="h-5 w-5 hover:text-violet hover:cursor-pointer" />
          <GoToCart />
          <BsBell className="h-5 w-5 hover:cursor-pointer hover:text-violet" />
          <AvatarProfile />
        </div>
      </div>
      <hr />
      <div className="pb-4 my-auto shadow-md hidden md:flex">
        <div className="md:flex align-baseline hidden md:mx-auto md:w-[61%] text-sm md:justify-around">
          <Whisper
            // followCursor
            placement="bottom"
            enterable
            speaker={
              <Popover>
                <div className="flex justify-between gap-5 w-full">
                  {dev.map((item, index) => (
                    <p key={index} className="hover:cursor-pointer hover:text-violt my-auto">{item}</p>
                  ))}
                </div>
              </Popover>
            }>
            <p className="hover:cursor- my-auto">Development</p>
          </Whisper>
          <Whisper
            // followCursor
            placement="bottom"
            enterable
            speaker={
              <Popover className="bg-black">
                <div className="flex justify-between gap-5 w-full">
                  {Business.map((item, index) => (
                    <p key={index} className="hover:cursor-pointer hover:text-violt my-auto">{item}</p>
                  ))}
                </div>
              </Popover>
            }>
            <p className="hover:cursor-pointer">Business</p>
          </Whisper>
          <Whisper
            // followCursor
            placement="bottom"
            enterable
            speaker={
              <Popover className="bg-black">
                <div className="flex justify-between gap-5 w-full">
                  {finance.map((item, index) => (
                    <p key={index} className="hover:cursor-pointer hover:text-violt my-auto">{item}</p>
                  ))}
                </div>
              </Popover>
            }>
            <p className="hover:cursor-pointer">Finance & Accounting</p>
          </Whisper>
          <Whisper
            // followCursor
            placement="bottom"
            enterable
            speaker={
              <Popover className="bg-black">
                <div className="flex justify-between gap-5 w-full">
                  {it.map((item, index) => (
                    <p key={index} className="hover:cursor-pointer hover:text-violt my-auto">{item}</p>
                  ))}
                </div>
              </Popover>
            }>
            <p className="hover:cursor-pointer">IT & Software</p>
          </Whisper>
          <Whisper
            // followCursor
            placement="bottom"
            enterable
            speaker={
              <Popover className="bg-black">
                <div className="flex justify-between gap-5 w-full">
                  {personal.map((item, index) => (
                    <p key={index} className="hover:cursor-pointer hover:text-violt my-auto">{item}</p>
                  ))}
                </div>
              </Popover>
            }>
            <p className="hover:cursor-pointer">Personel Development</p>
          </Whisper>
          <Whisper
            // followCursor
            placement="bottom"
            enterable
            speaker={
              <Popover className="bg-black">
                <div className="flex justify-between gap-5 w-full">
                  {design.map((item, index) => (
                    <p key={index} className="hover:cursor-pointer hover:text-violt my-auto">{item}</p>
                  ))}
                </div>
              </Popover>
            }>
            <p className="hover:cursor-pointer">Design</p>
          </Whisper>
          <Whisper
            // followCursor
            placement="bottom"
            enterable
            speaker={
              <Popover className="bg-black">
                <div className="flex justify-between gap-5 w-full">
                  {marketing.map((item, index) => (
                    <p key={index} className="hover:cursor-pointer hover:text-violt my-auto">{item}</p>
                  ))}
                </div>
              </Popover>
            }>
            <p className="hover:cursor-pointer">Marketing</p>
          </Whisper>
          <Whisper
            // followCursor
            placement="bottom"
            enterable
            speaker={
              <Popover className="bg-black">
                <div className="flex justify-between gap-5 w-full">
                  {health.map((item, index) => (
                    <p key={index} className="hover:cursor-pointer hover:text-violt my-auto">{item}</p>
                  ))}
                </div>
              </Popover>
            }>
            <p className="hover:cursor-pointer">Health & Fitness`</p>
          </Whisper>
          <Whisper
            // followCursor
            placement="bottom"
            enterable
            speaker={
              <Popover className="bg-black">
                <div className="flex justify-between gap-5 w-full">
                  {music.map((item, index) => (
                    <p key={index} className="hover:cursor-pointer hover:text-violt my-auto">{item}</p>
                  ))}
                </div>
              </Popover>
            }>
            <p className="hover:cursor-pointer">Music</p>
          </Whisper>
          
          {/* <Category
            label={"Music"}
            l1={"Instruments"}
            l2={"Music Production"}
            l3={"Music Fundamentals"}
            l4={"Vocal"}
            l5={"Music Techniques"}
            l6={"Music Software"}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default LogiNav;
