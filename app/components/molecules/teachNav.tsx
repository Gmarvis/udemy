import React from "react";
import Button from "../atoms/Button";

const TeachNav = () => {
  return (
    <div className="relative">
      <button className="peer py-2 hover:bg-white-700 text-black text-sm">
        Teach on Udemy
      </button>
      <div
        className="absolute top-[100%] left-[50%] translate-x-[-50%] hidden peer-hover:flex hover:flex
         w-[300px]  z-10 py-4 mt-5
         flex-col bg-white drop-shadow-lg"
      >
        <h3 className="px-5 py-3 text-[18px] font-bold leading-[1.2]">
          Turn what you know into an opportunity and reach millions around the
          world.
        </h3>
        <Button
          className="text-white font-bold bg-black flex justify-center mx-auto px-20 py-4"
          label="Learn more"
          style=""
          type="submit"
        />
      </div>
    </div>
  );
};

export default TeachNav;
