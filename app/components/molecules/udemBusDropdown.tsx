import React from "react";
import Button from "../atoms/button";

const UdemBusDropdown = () => {
  return (
    <div>
      <button className="peer py-2 hover:bg-white-700 text-black">
        Udemy Business
      </button>

      <div
        className="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg"
      >
        <h3 className="px-5 py-3 hover:bg-gray-200">
          Get your team access to over 22,000 top Udemy courses, anytime,
          anywhere.
        </h3>
        <Button/>
      </div>
    </div>
  );
};

export default UdemBusDropdown;
