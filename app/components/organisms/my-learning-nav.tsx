"use client";
import Image from "next/image";
import React, { PropsWithChildren, useState } from "react";
import Categories from "../atoms/categories";
import { BsBell, BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import UdemBusDropdown from "../molecules/udemBusDropdown";
import AvatarProfile from "../molecules/avatar";
import GoToCart from "../molecules/cart-list";
import "tippy.js/dist/tippy.css";
import Link from "next/link";
import MobileNavbar from "./mobile-navbar";
import MenuItems from "./menu-items";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

type Props = {
  className?: string;
};

const MyLearningNavbar = ({ className }: Props) => {
  const [active, setActive] = useState(false);
  const [closed, setClosed] = useState(false);
  const router = useRouter()

  function handleClick(): void {
    console.log("I am Instructor");
    router.push("/instructor/course")
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
      <div className="py-4 bg-red-400 hidden md:contents px-6">
        <div className="md:flex justify-between hidden items-center">
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
              placeholder="Search for anything"
            />
          </div>
          <UdemBusDropdown />
          <Link href="/instructor/course">
            <p className=" hover:cursor-pointer text-black hover:text-violt text-sm">
              Instructor
            </p>
          </Link>
          <Link href="/home/my-courses">
            <p className="hover:cursor-pointer hover:text-violt text-black hover:no-underline text-sm">
              My Learning
            </p>
          </Link>

          <AiOutlineHeart className="h-5 w-5 hover:text-violt hover:cursor-pointer" />
          <GoToCart />
          <BsBell className="h-5 w-5 hover:cursor-pointer hover:text-violt" />
          <AvatarProfile />
        </div>
      </div>

    </div>
  );
};

export default MyLearningNavbar
