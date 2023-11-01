"use client";
import React, { useState } from "react";
import AvatarProfile from "../molecules/avatar";
import { RxCrossCircled } from "react-icons/rx";
import { TfiWorld } from "react-icons/tfi";
import Avatar from "react-avatar";
import { useRouter } from "next/navigation";

type Props = {
  className?: string;
  onCloseMenu(): void;
};

const MenuItems = ({className, onCloseMenu }: Props) => {
  const [closed, setClosed] = useState(false);
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    router.push("/")
  }

  return (
    <div className={className}>
      <div className={`${closed ? "translate-x-full" : "flex  gap-4 bg-opacity-80 bg-black h-full"}`}>
        <div className="mt-1  w-[300px] bg-white drop-shadow-lg z-10 flex-col hover:flex">
          <div className=" flex gap-4 hover:cursor-pointer w-[50px] px-6">
            <Avatar
              className="peer hover:cursor-pointer w-[50px]"
              name="Tikeng Gael"
              color="#000"
              round={true}
              size="70"
            />
            <div className=" px-2 text-sm my-auto">
              <p className="">Tikeng Gael</p>
              <p className="">Gaelinho@yahoo.fr</p>
            </div>
          </div>
          <hr />
          <div
            // className={`${isClicked? 'bg-red-600' : "text-sm p-4 leading-10"}`}
            className="text-sm p-4 leading-10"
          >
            <p className="hover:text-violet-600">My learning</p>
            <p className="hover:text-violet-600">My cart</p>
            <p className="hover:text-violet-600">Whishlist</p>
            <p className="hover:text-violet-600">Instructor dashboard</p>
          </div>
          <hr />
          <div className="text-sm p-4 leading-10 flex flex-col">
            <a href="#" className="hover:text-violet text-black">
              Notifications
            </a>
            <a href="#" className="hover:text-violet text-black">
              Messages
            </a>
          </div>
          <hr />
          <div className="text-sm p-4 leading-10 flex flex-col">
            <a href="#" className="hover:text-violet text-black">
              Account settings
            </a>
            <a href="#" className="hover:text-violet text-black">
              Payment methods
            </a>
            <a href="#" className="hover:text-violet text-black">
              Suscriptions
            </a>
            <a href="#" className="hover:text-violet text-black">
              Udemy credit
            </a>
            <a href="#" className="hover:text-violet text-black">
              Purchase history
            </a>
          </div>
          <hr />
          <div className="flex text-sm p-4 justify-between leading-10">
            <a href="#" className="hover:text-violet text-black">
              Language
            </a>
            <div className="flex gap-4">
              <p>English</p>
              <TfiWorld className="my-auto " />
            </div>
          </div>
          <hr />
          <div className="text-sm p-4 leading-10 flex flex-col">
            <a href="#" className="hover:text-violet text-black">
              Public profile
            </a>
            <a href="#" className="hover:text-violet text-black">
              Edit profile
            </a>
          </div>
          <hr />
          <div className="text-sm p-4 leading-10 flex flex-col">
            <a href="#" className="hover:text-violet text-black">
              Help
            </a>
            <p
              className="hover:text-violet text-black"
              onClick={() => handleLogout()}
            >
              Log out
            </p>
          </div>
          <hr />
          <div className="text-sm p-4 leading-7 flex flex-col">
            <a href="#" className="hover:text-violet text-black text-lg font-semibold">
              Udemy business
            </a>
            <a href="#" className="text-gray">
              Bring learning to your company
            </a>
          </div>
        </div>
        <RxCrossCircled
          size={50}
          className="mt-5 text-white"
          onClick={() => setClosed((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default MenuItems;

