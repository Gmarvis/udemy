"use client";
import React from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { useState } from "react";
type Props = {};

const DescriptionOfCreateCourse1 = (props: Props) => {
  const [hideDiv, setHideDiv] = useState(true);
  return (
    <>
      {hideDiv && (
        <div className=" p-3 border border-thin border-[#d1d7dc]  mt-5 smd:w-full">
          <div className=" flex gap-3 w-full">
            <div>
              <IoIosInformationCircle size={30} className="text-black " />
            </div>

            {/* <div className="text-black w-full"> */}
            <p className="text-black w-full">
              We’re updating the free course experience for students and
              instructors.
            </p>
            {/* </div> */}
          </div>
          <ul className=" list-disc mx-16 text-[13px] leading-6">
            <li>
              New free courses{" "}
              <b className="text-black">(published after March 17, 2020)</b>{" "}
              must have less than 2 hours of video content.
            </li>
            <li>
              Existing free courses{" "}
              <b className="text-black">(published before March 17, 2020)</b>{" "}
              that contain more than 2 hours of video content will remain
              published.
            </li>
            <li>
              All free courses will only consist of video content and resources.
              Certificate of completion, Q&A, and direct messaging will{" "}
              <b className="text-black">only</b> be available for paid
              enrollments.
            </li>
          </ul>
          <p className=" mx-10 mt-4 text-[13px]">
            To learn more about the new free course experience and policy read
            our
            <a href="#" className=" text-violt/70 ml-2 underline">
              FAQ on the teaching center.
            </a>
          </p>
          <div className=" md:text-md text-white py-2 px-4 w-fit bg-[#222323] mt-4 mx-10">
            <button onClick={() => setHideDiv(false)}>
              <b>Dismiss</b>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DescriptionOfCreateCourse1;
