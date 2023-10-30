"use client";
import React from "react";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {};

const CourseNotFinishedCreating = (props: Props) => {
  const [showEditCourse, setShowEditCourse] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className=" flex border border-thin border-[#d1d7dc] h-32 w-full mb-14">
        <Image
          src="https://s.udemycdn.com/course/200_H/placeholder.jpg"
          alt="create course image"
          width={150}
          height={60}
          className=" w-32 h-32"
        />
        <div
          className=" hover:cursor-pointer w-full hover:opacity-40  flex items-center justify-start"
          ref={(node) => {
            if (node) {
              node.addEventListener("mouseover", () => {
                console.log("onmouseover ");
                setShowEditCourse(true);
              });

              node.addEventListener("mouseout", () => {
                console.log("mouseleave");
                setShowEditCourse(false);
              });

              node.addEventListener("click", () => {
                console.log("mouseleave");
                router.push("/manage");
              });
            }
          }}
        >
          <div className=" flex flex-col justify-between  px-5 pt-4 items-start h-full pb-3 w-1/4">
            <p>
              <span className=" font-bold text-[16px] font-tahoma text-ctitle">
                c++
              </span>
            </p>

            <p>
              <span className="font-bold text-ctitle text-[12px]">DRAFT</span>{" "}
              <span className=" text-[10px]">Public</span>
            </p>
          </div>
          <div className=" w-full ">
            <div className=" flex w-full pr-10 items-center">
              <p className="text=[13px] w-48 text-[13px] mr-1 font-bold text-black">
                Finish your course
              </p>
              <div className="bg-gray2/80 w-full h-3">
                <div className="bg-gray2/25 w-full h-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showEditCourse && (
        <button
          className="text-violt translate-x-[160%] -translate-y-[560%] md:-translate-y-[730%] md:translate-x-[250%] text-[14px]"
          onClick={() => router.push("/manage")}
        >
          <h5>Edit / manage course</h5>
        </button>
      )}
    </>
  );
};

export default CourseNotFinishedCreating;
