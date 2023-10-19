import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import Profilheader from "../molecules/profilheader";


const Teachprofil = () => {
  return (
    <div>
      <div className="flex justify-end items-center text-center gap-8 mr-10">
        <div className="relative">
          <button className="peer py-2 hover:bg-white-700 text-black text-sm">
            Participants
          </button>
          <div
            className="absolute top-[100%] right-[0]  hidden peer-hover:flex hover:flex
         w-[400px]  z-10 py-4 mt-5
         flex-col bg-white drop-shadow-lg"
          >
            <h3 className="px-5 py-3 text-[14px] w-[400px] leading-[1.2]">
              Switch to Participants view here: go back <br /> to the courses
              your&lsquo;re taking.
            </h3>
          </div>
        </div>
        <div className="relative">
          <AiOutlineBell className="peer"/>
          <div
            className="absolute top-[100%] right-[0]  hidden peer-hover:flex hover:flex
         w-[400px]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               0px]  z-10 py-4 mt-5
         flex-col bg-white drop-shadow-lg"
          >
            <div className="flex justify-between px-5">
              <p className="font-bold text-[18px]">Notificatiions</p>
              <p className="text-violet-600 font-bold text-[14px]">Settings</p>
            </div>
            <div className="mt-10 mb-6 flex items-center justify-around">
               <div>
                Former
               </div>
               <div>
                Participants
               </div>
            </div>
          </div>
        </div>
      </div>
      <Profilheader />
    </div>
  );
};

export default Teachprofil;
