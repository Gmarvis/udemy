"use client";
import { useRouter } from "next/navigation";
import { string } from "prop-types";
import React from "react";
import Avatar from "react-avatar";
import { TfiWorld } from "react-icons/tfi";

type Props = {};

const AvatarProfile = (props: Props) => {
  const router = useRouter();
  let user: any
  
  if (typeof localStorage === "undefined") {
    return null
  }

  let currentUser: any = localStorage.getItem("currentUser")
  if (currentUser === null) return 

  user = JSON.parse(currentUser)

  const handleLockout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    router.push("/logout");
  };  

  return (
    <div className="relative pr-6">
      <Avatar
        className="peer hover:cursor-pointer"
        name={user.name}
        color="#000"
        round={true}
        size="30"
      />
      <div className="group-hover:visible focus:outline-none absolute mt-1 ml-[-250px] w-[300px] bg-white drop-shadow-lg hidden peer-hover:flex z-40 flex-col hover:flex">
        <div className=" flex py-4 gap-4 hover:cursor-pointer w-[50px] px-6">
          <Avatar
            className="peer hover:cursor-pointer w-[50px]"
            name={user.name}
            color="#000"
            round={true}
            size="70"
          />
          <div className=" px-2 text-sm my-auto">
            <p className="">{user.name}</p>
            <p className="">{user.email}</p>
          </div>
        </div>
        <hr />
        <div className="text-sm p-4 leading-10">
          <p className="hover:text-violt"><a className="text-black" href="/home/my-learning">My learning</a></p>
          <p className="hover:text-violt"><a className="text-black" href="/home/my-learning">My cart</a></p>
          <p className="hover:text-violt"><a className="text-black" href="/home/my-learning">Whishlist</a></p>
          <p className="hover:text-violt text-black">Instructor dashboard</p>
        </div>
        <hr />
        <div className="text-sm p-4 leading-10 flex flex-col">
          <a href="#" className="hover:text-violt text-black">
            Notifications
          </a>
          <a href="#" className="hover:text-violt text-black">
            Messages
          </a>
        </div>
        <hr />
        <div className="text-sm p-4 leading-10 flex flex-col">
          <a href="#" className="hover:text-violt text-black">
            Account settings
          </a>
          <a href="#" className="hover:text-violt text-black">
            Payment methods
          </a>
          <a href="#" className="hover:text-violt text-black">
            Suscriptions
          </a>
          <a href="#" className="hover:text-violt text-black">
            Udemy credit
          </a>
          <a href="#" className="hover:text-violt text-black">
            Purchase history
          </a>
        </div>
        <hr />
        <div className="flex text-sm p-4 justify-between leading-10">
          <a href="#" className="hover:text-violt text-black">
            Language
          </a>
          <div className="flex gap-4">
            <p>English</p>
            <TfiWorld className="my-auto " />
          </div>
        </div>
        <hr />
        <div className="text-sm p-4 leading-10 flex flex-col">
          <a href="#" className="hover:text-violt text-black">
            Public profile
          </a>
          <a href="#" className="hover:text-violt text-black">
            Edit profile
          </a>
        </div>
        <hr />
        <div className="text-sm p-4 leading-10 flex flex-col">
          <a href="#" className="hover:text-violt text-black">
            Help
          </a>
          <p className="hover:text-violet hover:cursor-pointer text-black" onClick={handleLockout}>
            Log out
          </p>
        </div>
        <hr />
        <div className="text-sm p-4 leading-7 flex flex-col">
          <a href="#" className="hover:text-violt text-lg text-black font-semibold">
            Udemy business
          </a>
          <a href="#" className="text-gray">
            Bring learning to your company
          </a>
        </div>
      </div>
    </div>
  );
};

export default AvatarProfile;
