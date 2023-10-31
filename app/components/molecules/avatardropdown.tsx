"use client";
import { LOCAL_STORAGE } from "@/services/storage";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";

type Props = {};

const Avatardropdown = (props: Props) => {
  return (
    <div className="relative">
      <Avatar
        className="peer hover:cursor-pointer"
        name=""
        color="#000"
        round={true}
        size="35"
      />

      <div className="absolute group-hover:visible focus:outline-none mt-1 ml-[-250px] w-[300px] bg-white drop-shadow-lg hidden peer-hover:flex z-10 flex-col hover:flex">
        <div className="flex py-4 gap-4 hover:cursor-pointer w-[50px] px-6">
          <Avatar
            className="peer hover:cursor-pointer w-[50px]"
            name=""
            color="#000"
            round={true}
            size="70"
          />
          <div className="px-2 text-sm my-auto">
            <p className="hover:text-violet-600 font-bold">name</p>
            <p className="hover:text-violet-600">email</p>
          </div>
        </div>
        <hr />
        <div className="text-sm p-4 leading-10">
          <a href="#" className="hover:text-violet-600">
            Student
          </a>
        </div>
        <hr />
        <div className="text-sm p-4 leading-10">
          <a href="#" className="hover:text-violet-600">
            Notifications
          </a>
        </div>
        <hr />
        <div className="text-sm p-4 leading-10 flex flex-col">
          <a href="#" className="hover:text-violet-600">
            Account setting
          </a>
          <a href="#" className="hover:text-violet-600">
            Payout and tax settings
          </a>
        </div>
        <hr />
        <div className="text-sm p-4 leading-10 flex flex-col">
          <a href="#" className="hover:text-violet-600">
            Public Profile
          </a>
          <a href="#" className="hover:text-violet-600">
            Edit Profil
          </a>
        </div>
        <hr />
        <div className="text-sm p-4 leading-10 flex flex-col">
          <a href="#" className="hover:text-violet-600">
            Help
          </a>
          <a href="#" className="hover:text-violet-600">
            Log out
          </a>
        </div>
        <hr />
        <div className="text-sm p-4 leading flex flex-col">
          <a href="#" className="hover:text-violet-600">
            Udemy Business
          </a>
          <a href="#" className="text-gray-400">
            Bring learning to your company
          </a>
        </div>
      </div>
    </div>
  );
};

export default Avatardropdown;
