"use client";
import React from "react";
import Rate from "../molecules/Rating";
import { TbWorld } from "react-icons/tb";
import { BsPatchQuestionFill } from "react-icons/bs";
import { BsCardText } from "react-icons/bs";
import { MdNavigateNext } from "react-icons/md";
import { IoCheckmarkOutline } from "react-icons/io5";
import MainNav from "../organisms/MainNav";
import Image from "next/image";

const Coursedetailcompa = () => {
  return (
    <div>
      <MainNav />
      <div className="bg-black w-full h-[350px] mx-auto flex flex-col items-center justify-center">
        <div className="content-center">
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <p className="text-purple">category</p>
              <MdNavigateNext className="text-white" />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-purple">subCategory</p>
              <MdNavigateNext className="text-white" />
            </div>
            <p className="text-purple">Course name</p>
          </div>

          <h1 className="text-[35px] font-bold text-white">Course Title</h1>
          <p className="text-white">description</p>
          <div className="flex items-center gap-2">
            <button className="text-black bg-bestseller py-1 px-1">
              Best Seller
            </button>
            4.5
            <Rate />
            <p className="text-purple Underline">(20,714 rating)</p>
            <p className="text-white">88, 595 students</p>
          </div>
          <div className="">
            <p className="text-white">
              Created by <span className="text-purple">Course creator</span>
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
                <span className="text-purple">16 more</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="border border-gray h-[20%] w-[50%] px-3 py-4 mt-8">
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
                what&lsquo;s most important to you.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border border-gray h-[20%] w-[50%] px-3 py-4 my-8">
        <h2 className="text-[20px] font-bold">
          Top companies offer this course to their employees
        </h2>
        <p>
          This course was selected for our collection of top-rated courses
          trusted by businesses worldwide. <span>Learn more</span>
        </p>
        <ul className="flex flex-row justify-around">
          <Image
            src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg"
            alt="udemy"
            width={100}
            height={100}
          />
          <Image
            src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
            alt="logo"
            width={50}
            height={45}
          />
          <Image
            src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
            alt="logo"
            width={50}
            height={70}
          />
          <Image
            src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg"
            alt="logo"
            width={100}
            height={100}
          />
          <Image
            src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </ul>
      </div>
      <div>
        <div>
          <p className="text-[25px] text-bold">Requirements</p>
          <ul>
            <li>
              You should have a decent grasp of Photoshop and Art Fundamentals.
              We offer FREE courses on both!{" "}
            </li>
            <li>
              You should have adobe PhotoShop and a pressure sensitive pen
              Tablet
            </li>
          </ul>
        </div>

        <div>
          <h2>Description</h2>
          <p>
            We all start at some point or other, during our working day, to
            watch notifications on Facebook, to chat with friends, to admire the
            colors of the houses in the window, while we are working on an
            important project or while writing an important email. Have you ever
            wondered what would be your results if you would focus and
            concentrate your thoughts? Why do you think people who do possess
            the ability to work hard, with determination, but not reigning in
            their thoughts can never achieve the success they are, however,
            dreaming at? Have you ever tried to distinguish what is leading to
            success in your profession, or in your field? Once you decide and
            manage to take your mind off multiple things and devote your
            complete focus and attention to the singular task at hand, you can
            achieve the results you want. Focus and concentrate your thoughts,
            and will see your results. When your goal is to cultivate and
            develop the ability to align your mind and dedicate total focus and
            concentration on the task at hand, you can realize anything you
            want. Is focusing your strength or is this rather your weakness?
            This question applies to everyone, irrespective of your age and
            profession. Above question is raised, as to excel in any aria of
            your life, you need to have very well developed the two traits of
            focus and concentration. Once you have them, add determination and
            ability to work hard for the goal you are aspiring for.
          </p>
        </div>
        <div>
          <h2>Who this course is for </h2>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Coursedetailcompa;
