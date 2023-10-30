"use client";
import React, { useState } from "react";
import Privset from "../organisms/privset";
import Avatar from "../organisms/avatar";
import Inputdetails from "./inputdetails";

const Profilheader = () => {
  const [selectedComponent, setSelectedComponent] = useState(<Inputdetails />);

  const handleButtonClick = (component: any) => {
    setSelectedComponent(component);
  };

  return (
    <div className="ml-[10%] max-[740px]:ml-[3%]">
      <h1 className="text-[35px] font-bold pb-12">Profile & settings</h1>

      <div className="flex">
        <p
          className="pr-4 text-[17px] font-bold text-slate-600 focus:underline cursor-pointer"
          onClick={() => handleButtonClick(<Inputdetails />)}
        >
          Udemy profile
        </p>
        <p
          className="pl-4 text-[17px] font-bold text-slate-600 focus:underline cursor-pointer"
          onClick={() => handleButtonClick(<Avatar />)}
        >
          Profile picture
        </p>
        <p
          className="pl-8 text-[17px] font-bold text-slate-600 focus:underline cursor-pointer"
          onClick={() => handleButtonClick(<Privset />)}
        >
          Privacy settings
        </p>
      </div>
      <hr className="my-4 mr-6 text-gray" />
      {selectedComponent}
    </div>
  );
};

export default Profilheader;
