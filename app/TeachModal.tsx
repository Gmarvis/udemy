"use client";
import React from "react";
import Avatar from "react-avatar";
import { MdNavigateNext } from "react-icons/md";

interface TeachModalProps {
  onClick?: () => void;
  visible: boolean;
  onClose: () => void
}

const TeachModal: React.FC<TeachModalProps> = ({ visible, onClose }) => {
  const handleOnclose = (event: any) => {
    if (event.target.id === "wrapper") onClose();
  };

  if (!visible) return null;

  return (
      <div onClick={handleOnclose} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm justify-self-start w-[300px] h-[100%]" id="wrapper">
        <div className="flex items-center justify-between  px-4 py-4 gap-4 bg-gray-200 hover:cursor-pointer">
          <Avatar
            className="peer hover:cursor-pointer w-[50px]"
            name="Tsopse Ricardo"
            color="#000"
            round={true}
            size="70"
          />
          <div className="px-2 text-sm my-auto">
            <p className="hover:text-violet-600 font-bold text-black">
              Hi' Tsopse Ricardo
            </p>
            <p className="text-gray-600 ">Welcome Back</p>
          </div>
          <MdNavigateNext className="text-black"/>
        </div>
        <div className="bg-white text-black">
          <div className="py-5 px-4">
            <p className="text-violet text-[17px] flex justify-between text-center items-center">
              Switch to Student view
            </p>
          </div>
          <hr className="w-full  text-gray-800" />
          <div className="px-4 py-4">
            <p className="text-[17px] flex justify-between text-center items-center py-2">
              Courses
            </p>
            <div className="flex gap-8 justify-between text-center items-center py-2">
              <p className="text-[17px]">Communication</p>
              <MdNavigateNext />
            </div>
            <div className="flex gap-8 justify-between text-center items-center py-2">
              <p className="text-[17px]">Perfomance</p>
              <MdNavigateNext />
            </div>
            <div className="flex gap-8 justify-between text-center items-center py-2">
              <p className="text-[17px]">Tools</p>
              <MdNavigateNext />
            </div>
            <div className="flex gap-8 justify-between text-center items-center pt-2 pb-4">
              <p className="text-[17px]">Resources</p>
              <MdNavigateNext />
            </div>
          </div>

          <hr className="w-full  text-gray-400" />

          <div className="px-4">
            <div className="pt-4 pb-2">
              <p className="text-[17px] flex justify-between text-center items-center">
                Notifications
              </p>
            </div>
            <div className=" flex gap-8 justify-between text-center items-center py-2">
              <p className="text-[17px]">Account settings</p>
              <MdNavigateNext />
            </div>
            <p className="text-[17px] flex gap-8 justify-between text-center items-center py-2">
              Payout & tax settings
            </p>
            <p className="text-[17px] flex gap-8 justify-between text-center items-center py-2">
              Get the app
            </p>
            <p className="text-[17px] flex justify-between text-center items-center py-2">
              Log out
            </p>
          </div>
        </div>
      <button onClick={() => onClose()}>X</button>
      </div>
  );
};

export default TeachModal;
