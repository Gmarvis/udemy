"use client";
import React, { useState } from "react";
import AvatarProfile from "../molecules/avatar";
import { RxCrossCircled } from "react-icons/rx";
import { TfiWorld } from "react-icons/tfi";
import Avatar from "react-avatar";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import English from "../atoms/english-btn";
import { Dropdown } from "rsuite";

type Props = {
  className?: string;
  onCloseMenu(): void;
};

const MenuItems2 = ({ className, onCloseMenu }: Props) => {
  const [closed, setClosed] = useState(false);

  return (
    <div className={className}>
      <div className={`${closed ? "translate-x-full" : "flex  gap-4 bg-opacity-80 bg-black h-fit"}`}>
        <div className=" w-[300px] bg-white drop-shadow-lg z-10 flex-col bg hover:flex overflow-auto">
          <div className="flex flex-col gap-2 px-5 pt-3">
            <Link href="/login">
              Login
            </Link>
            <Link href="/register">
              Sign up
            </Link>
          </div>
          <hr />
          <div className="px-5 leading-10 ">
            <p className="font-semibold ">Most Popular</p>
            <div className="flex justify-between">
              <p>Web Development</p>
              <FiChevronRight className="my-auto"/>
            </div>
            <div className="flex justify-between">
              <p> Mobile Development</p>
              <FiChevronRight className="my-auto"/>
            </div>
            <div className="flex justify-between">
              <p>Game Development</p>
              <FiChevronRight className="my-auto"/>
            </div>
            <div className="flex justify-between">
              <p>Entrepreneurship</p>
              <FiChevronRight className="my-auto"/>
            </div>
            <div className="flex justify-between">
              <p> Business Analytics & intelligence</p>
              <FiChevronRight className="my-auto"/>
            </div>
            <div className="flex justify-between">
              <p> Finance</p>
              <FiChevronRight className="my-auto"/>
            </div>
            <div className="flex justify-between">
              <p>IT Certifications</p>
              <FiChevronRight className="my-auto"/>
            </div>
            <div className="flex justify-between">
              <p>Personal Transformation</p>
              <FiChevronRight className="my-auto"/>
            </div>
            <div className="flex justify-between">
              <p>Graphic Design & illustration</p>
              <FiChevronRight className="my-auto"/>
            </div>
            <div className="flex justify-between">
              <p>Digital Marketing</p>
              <FiChevronRight className="my-auto"/>
            </div>
            <div className="flex justify-between">
              <p>All Categories</p>
              <FiChevronRight className="py-auto"/>
            </div>
          </div>
          <hr />
          <p className="font-semibold gap-2 px-5 ">More from Udemy</p>
          <div className="px-5 leading-10">
            <p>Udemy Business</p>
            <p>Get the app</p>
            <p>Invite friends</p>
            <p>Help</p>
          </div>
          <English/>
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

export default MenuItems2;

