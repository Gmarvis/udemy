"use client";
import React from "react";
import Avatar from "react-avatar";
import { TfiWorld } from "react-icons/tfi";

type Props = {};

const AvatarProfile = (props: Props) => {
  return (
    <div className="relative">
      <Avatar
        className="peer hover:cursor-pointer"
        name="Tikeng Gael"
        color="#000"
        round={true}
        size="30"
      />
      <div className="group-hover:visible focus:outline-none absolute mt-1 ml-[-250px] w-[300px] bg-white drop-shadow-lg hidden peer-hover:flex z-10 flex-col hover:flex">
        <div className=" flex py-4 gap-4 hover:cursor-pointer w-[50px] px-6">
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
        <div className="text-sm p-4 leading-10">
          <p className="hover:text-violet-600">My learning</p>
          <p className="hover:text-violet-600">My cart</p>
          <p className="hover:text-violet-600">Whishlist</p>
          <p className="hover:text-violet-600">Instructor dashboard</p>
        </div>
        <hr />
        <div className="text-sm p-4 leading-10 flex flex-col">
          <a href="#" className="hover:text-violet-600">Notifications</a>
          <a href="#" className="hover:text-violet-600">Messages</a>
        </div>
        <hr />
        <div className="text-sm p-4 leading-10 flex flex-col">
          <a href="#" className="hover:text-violet-600">Account settings</a>
          <a href="#" className="hover:text-violet-600">Payment methods</a>
          <a href="#" className="hover:text-violet-600">Suscriptions</a>
          <a href="#" className="hover:text-violet-600">Udemy credit</a>
          <a href="#" className="hover:text-violet-600">Purchase history</a>
        </div>
        <hr />
        <div className="flex text-sm p-4 justify-between leading-10">
          <a href="#" className="hover:text-violet-600">Language</a>
          <div className="flex gap-4">
            <p>English</p>
            <TfiWorld className="my-auto " />
          </div>
        </div>
        <hr/>
        <div className="text-sm p-4 leading-10 flex flex-col">
          <a href="#" className="hover:text-violet-600">Public profile</a>
          <a href="#" className="hover:text-violet-600">Edit profile</a>
        </div>
      </div>
    </div>
  );
};

export default AvatarProfile;
