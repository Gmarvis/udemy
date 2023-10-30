"use client";
import React from "react";
import Rate from "../molecules/Rating";
import { TbWorld } from "react-icons/tb";
import { BsPatchQuestionFill, BsCardText } from "react-icons/bs";
import { MdNavigateNext } from "react-icons/md";
import MainNav from "../organisms/MainNav";

const Coursedetailcompa = () => {
  return (
    <div>
      <MainNav />
      <div className="bg-black w-full h-[350px] mx-auto">
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
        <div className="flex items-center gap-4">
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
            Created by <span className="text-white">Course creator</span>
          </p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="flex flex-col gap-4">
            <BsPatchQuestionFill className="text-white" />
            <p className="text-white">Last update 8/2023</p>
          </div>
          <div className="flex flex-col gap-4">
            <TbWorld className="text-white" />
            <p className="text-white">English</p>
          </div>
          <div className="flex flex-col gap-4">
            <BsCardText />
            <p className="text-white">
              {" "}
              English, Bulgarian [Auto],{" "}
              <span className="text-violet">16 more</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursedetailcompa;
