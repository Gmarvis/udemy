"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Avatar from "react-avatar";
import { TfiWorld } from "react-icons/tfi";

type Props = {};

const AvatarProfile = (props: Props) => {
  const router = useRouter();
  // let user: object
  
  const user = JSON.parse(localStorage.getItem("currentUser") || "{}");

  // useEffect(() => {
  //   user = JSON.parse(localStorage.getItem("currentUser") || "{}");
  // }, [])

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
          <p className="hover:text-violet-600">My learning</p>
          <p className="hover:text-violet-600">My cart</p>
          <p className="hover:text-violet-600">Whishlist</p>
          <p className="hover:text-violet-600">Instructor dashboard</p>
        </div>
        <hr />
        <div className="text-sm p-4 leading-10 flex flex-col">
          <a href="#" className="hover:text-violet-600 text-black">
            Notifications
          </a>
          <a href="#" className="hover:text-violet-600 text-black">
            Messages
          </a>
        </div>
        <hr />
        <div className="text-sm p-4 leading-10 flex flex-col">
          <a href="#" className="hover:text-violet-600 text-black">
            Account settings
          </a>
          <a href="#" className="hover:text-violet-600 text-black">
            Payment methods
          </a>
          <a href="#" className="hover:text-violet-600 text-black">
            Suscriptions
          </a>
          <a href="#" className="hover:text-violet-600 text-black">
            Udemy credit
          </a>
          <a href="#" className="hover:text-violet-600 text-black">
            Purchase history
          </a>
        </div>
        <hr />
        <div className="flex text-sm p-4 justify-between leading-10">
          <a href="#" className="hover:text-violet-600 text-black">
            Language
          </a>
          <div className="flex gap-4">
            <p>English</p>
            <TfiWorld className="my-auto " />
          </div>
        </div>
        <hr />
        <div className="text-sm p-4 leading-10 flex flex-col">
          <a href="#" className="hover:text-violet-600 text-black">
            Public profile
          </a>
          <a href="#" className="hover:text-violet-600 text-black">
            Edit profile
          </a>
        </div>
        <hr />
        <div className="text-sm p-4 leading-10 flex flex-col">
          <a href="#" className="hover:text-violet-600 text-black">
            Help
          </a>
          <p className="hover:text-violet hover:cursor-pointer text-black" onClick={handleLockout}>
            Log out
          </p>
        </div>
        <hr />
        <div className="text-sm p-4 leading-7 flex flex-col">
          <a href="#" className="hover:text-violet-600 text-lg text-black font-semibold">
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
