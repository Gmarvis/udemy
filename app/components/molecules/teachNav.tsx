import React from "react";
import Button from "../atoms/button";

const TeachNav = () => {
  return (
    <div>
      <button className="peer py-2 hover:bg-white-700 text-black">
        Teach on Udemy
      </button>
      <div
        className="hidden peer-hover:flex hover:flex
         w-[200px]
         flex-col bg-white drop-shadow-lg"
      >
        <h3 className="px-5 py-3 hover:bg-gray-200">
          Turn what you know into an opportunity and reach millions around the
          world.
        </h3>
        <Button />
      </div>
    </div>
  );
};

export default TeachNav;
