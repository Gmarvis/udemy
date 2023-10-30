"use client";
import React, { useState } from "react";
import { IoIosInformationCircle } from "react-icons/io";
type Props = {};

const DescriptionOfCreateCourse = (props: Props) => {
  const [hideDiv, setHideDiv] = useState(true);

  const hideTab = () => {};

  return (
    <>
      {hideDiv && (
        <div className=" p-3 border border-thin border-[#d1d7dc]  mt-5 smd:w-full ">
          <div className=" flex gap-3 w-full">
            <div>
              <IoIosInformationCircle size={30} className="text-black " />
            </div>

            <p>
              <b>Get the better mobile experience with the Udemy app</b>
            </p>
          </div>
          <p className=" mx-10 mt-4 text-[12px]">
            View key course metrics, reply to your students, and get instant
            notifications.
          </p>
          <div className=" w-full">
            <button
              className=" md:text-md text-white py-2 px-4 w-fit bg-[#222323] mt-4 mx-10"
              onClick={hideTab}
            >
              <h5>Get the app</h5>
            </button>
            <button className="ml-2" onClick={() => setHideDiv(false)}>
              <b>Dismiss</b>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DescriptionOfCreateCourse;
