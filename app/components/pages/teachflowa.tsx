"use client";

import Image from "next/image";
import React, { useState } from "react";
import { MdOndemandVideo } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import Button from "../atoms/Button";
import { useRouter } from "next/navigation";

const Teachflowa = () => {
  const router = useRouter();
  const [borderColor, setBorderColor] = useState("gray");
  const [borderColora, setBorderColora] = useState('gray');
  const [btnColor, SetBtnColor] = useState("gray")

  const handleBoxa = () => {
    setBorderColor("black");
  };

  const handleBoxb = () => {
    setBorderColora("black");
  };

  const handleClick = () => {
    router.push("/teachflowb");
  };

  return (
    <div className="relative h-[100vh]">
      <div className="flex justify-between items-center h-[80px] shadow">
        <div className="flex items-center">
          <div className="  px-8">
            <Image
              src="/logo-udemy.svg"
              width={80}
              height={45}
              alt="logo"
              className=""
            />
          </div>

          <hr className="border border-r-gray-400 h-[80px]" />
          <div className="px-8">
            <h3>Step 1 of 4</h3>
          </div>
        </div>

        <div className="px-8 text-purple-600 font-bold">
          <span className="text-violet">Exit</span>
        </div>
      </div>

      <div className="flex flex-col  items-center justify-center gap-8 my-[50px]">
        <div className=" ">
          <h1 className="text-[35px] font-bold max-[789px]:text-center max-[789px]:flex">
            First, let&lsquo;s determine what type of course you&lsquo;re
            creating.
          </h1>
        </div>
        <div className="flex gap-8 max-[550px]:flex-wrap max-[550px]:flex-row max-[550px]:items-center max-[550px]:ml-8">
          <div
            style={{
              borderColor,
              borderWidth: "3px",
              borderStyle: "solid",
              cursor: "pointer",
            }}
            onClick={handleBoxa}
            className="w-[250px] h-[290px] border border-gray flex flex-col items-center justify-center gap-2 p-4 cursor-pointer hover:bg-gray "
          >
            <MdOndemandVideo size={30} />
            <h2 className="font-bold">Course</h2>
            <h3 className="text-[15px] text-center">
              Create exceptional learning experiences with video sessions,
              quizzes, coding exercises and more
            </h3>
          </div>

          <div
            style={{
              borderColora,
              borderWidth: "3px",
              borderStyle: "solid",
              cursor: "pointer",
            }}
            onClick={handleBoxb}
            className="w-[250px] h-[290px] border border-gray flex flex-col items-center justify-center gap-2 p-4 cursor-pointer hover:bg-gray"
          >
            <FaRegListAlt size={27} />
            <h2 className="font-bold">Practical exercises</h2>
            <h3 className="text-[15px] text-center">
              Help participants to prepare for certification exams by providing
              practice questions.
            </h3>
          </div>
        </div>
      </div>

      <div className="border w-full absolute bottom-0 shadow shadow-gray">
        <Button
        style={{
          backgroundColor: btnColor,
          borderWidth: '3px',
          borderStyle: 'solid',
        }}
          type="submit"
          className=" bg-gray px-6 py-[12px] my-2"
          label="Continue"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Teachflowa;
