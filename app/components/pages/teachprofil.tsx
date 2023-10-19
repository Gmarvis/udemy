import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import Profilheader from "../molecules/profilheader";


const Teachprofil = () => {
  return (
    <div>
      <div className="flex justify-end items-center text-center mr-10">
        <div className="relative">
          <button className="peer py-2 hover:bg-white-700 text-black text-sm">
            Participants
          </button>
          <div
            className="absolute top-[100%] left-[0] translate-x-[-50%] hidden peer-hover:flex hover:flex
         w-[300px]  z-10 py-4 mt-5
         flex-col bg-white drop-shadow-lg"
          >
            <h3 className="px-5 py-3 text-[18px] leading-[1.2]">
              Switch to Participants view here: go back <br /> to the courses
              your&lsquo;re taking.
            </h3>
          </div>
        </div>
        <div className="relative">
          <AiOutlineBell className="peer py-2 hover:bg-white-700 text-black text-sm" />
          <div
            className="absolute top-[100%] left-[0] translate-x-[-50%] hidden peer-hover:flex hover:flex
         w-[300px]  z-10 py-4 mt-5
         flex-col bg-white drop-shadow-lg"
          >
            <div className="flex justify-between px-5">
              <p className="font-bold text-[20px]">Notificatiions</p>
              <p className="bg-violet-600 font-bold text-[14px]">Settings</p>
            </div>
          </div>
        </div>
      </div>
      <Profilheader />
    </div>
  );
};

export default Teachprofil;
