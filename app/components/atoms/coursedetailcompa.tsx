"use client";
import React from "react";
import Rate from "../molecules/Rating";
import { TbWorld } from "react-icons/tb";
import { BsPatchQuestionFill } from "react-icons/bs";
import { BsCardText } from "react-icons/bs";
import { MdNavigateNext } from "react-icons/md";
import { IoCheckmarkOutline } from "react-icons/io5";
import MainNav from "../organisms/MainNav";

const Coursedetailcompa = () => {
  return (
    <div>
      <MainNav />
      <div className="bg-black w-full h-[350px] mx-auto flex flex-col items-center justify-center">
        <div className="content-center">
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <p className="text-violet">category</p>
              <MdNavigateNext className="text-white" />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-violet">subCategory</p>
              <MdNavigateNext className="text-white" />
            </div>
            <p className="text-violet">Course name</p>
          </div>

          <h1 className="text-[35px] font-bold text-white">Course Title</h1>
          <p className="text-white">description</p>
          <div className="flex items-center gap-2">
            <button className="text-black bg-bestseller py-2 px-2">
              Best Seller
            </button>
            4.5
            <Rate />
            <p className="text-violet Underline">(20,714 rating)</p>
            <p className="text-white">88, 595 students</p>
          </div>
          <div className="">
            <p className="text-white">
              Created by <span className="text-violet">Course creator</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center flex-row gap-2">
              <BsPatchQuestionFill className="text-white" />
              <p className="text-white">Last update 8/2023</p>
            </div>
            <div className="flex items-center flex-row gap-2">
              <TbWorld className="text-white" />
              <p className="text-white">English</p>
            </div>
            <div className="flex items-center flex-row gap-2">
              <BsCardText />
              <p className="text-white">
                English, Bulgarian [Auto],{" "}
                <span className="text-violet">16 more</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="border border-black h-[20%] w-[50%] px-3 py-4">
          <h1 className="font-bold text-[30px] pb-3 pl-2">
            What you will learn
          </h1>
          <div className="flex gap-4    ">
            <ul className="flex flex-col gap-3">
              <li className="flex  gap-2">
                {" "}
                <IoCheckmarkOutline className="w-[30px]" /> How to move specific
                ideas/projects ahead quicker and easier.
              </li>
              <li className="flex  gap-2">
                {" "}
                <IoCheckmarkOutline className="w-[30px]" /> Take focused action
                and achieve breakthrough results.
              </li>
              <li className="flex  gap-2">
                {" "}
                <IoCheckmarkOutline className="w-[30px]" /> Define your
                priorities and take action aligned with these.
              </li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li className="flex  gap-2">
                {" "}
                <IoCheckmarkOutline className="w-[30px]" /> How to use focus to
                lead your life as an achiever.
              </li>
              <li className="flex  gap-2">
                {" "}
                <IoCheckmarkOutline className="w-[30px]" /> Get focused on
                what's most important to you.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border border-gray h-[20%] w-[50%] px-3 py-4">
        <h2 className="text-[20px] font-bold">
          Top companies offer this course to their employees
        </h2>
        <p>
          This course was selected for our collection of top-rated courses
          trusted by businesses worldwide. <span>Learn more</span>
        </p>
        <ul className="flex flex-row justify-around">
          <img
            src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg"
            alt="udemy"
          />
          <img
            src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
            alt="logo"
          />
          <img
            src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
            alt="logo"
          />
          <img
            src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg"
            alt="logo"
          />
          <img
            src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
            alt="logo"
          />
        </ul>
      </div>
    </div>
  );
};

export default Coursedetailcompa;
