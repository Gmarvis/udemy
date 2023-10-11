import React from "react";
import Button from "../atoms/Button";

const UdemBusDropdown = () => {
  return (
    <div className="relative">
      <button className="peer py-2 hover:bg-white-700 text-black text-sm ">
        Udemy Business
      </button>

      <div
        className="absolute top-[100%] left-[50%] translate-x-[-50%] hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg"
      >
        <h3 className="px-5 py-3 hover:bg-gray-200">
          Get your team access to over 22,000 top Udemy courses, anytime,
          anywhere.
        </h3>
        <Button className="bg-black text-white font-bold" label="Try Udemy Business"/>
      </div>
    </div>
  );
};

export default UdemBusDropdown;
