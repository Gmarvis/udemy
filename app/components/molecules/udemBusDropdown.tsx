import React from "react";
import Button from "../atoms/Button";

const UdemBusDropdown = () => {
  return (
    <div className="relative">
      <button className="peer hover:text-violet-600 py-2 hover:bg-white-700 text-black text-sm ">
        Udemy Business
      </button>

      <div
        className="absolute top-[100%] left-[50%] translate-x-[-50%] hidden peer-hover:flex hover:flex
         w-[300px] z-10 py-4 mt-5
         flex-col bg-white drop-shadow-lg"
      >
        <h3 className="px-5 py-3 text-[18px] flex items-center font-bold leading-[1.2]">
          Get your team access to over 22,000 top Udemy courses, anytime,
          anywhere.
        </h3>
        <Button
          className="bg-black text-white font-bold flex justify-center mx-auto px-14 py-4"
          label="Try Udemy Business"
          style=""
        />
      </div>
    </div>
  );
};

export default UdemBusDropdown;
