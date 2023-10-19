"use client";

import React from "react";

const Privset = () => {
  return (
    <div className="mt-6 gap-4">
      <div className="flex gap-3 items-center mb-4">
        <input type="checkbox" className="w-5 h-5 text-black bg-gray-100 border-gray-300 dark:focus:ring-black  "/>
        <p  className="text-[14px]">Make your profil visible to logged in users</p>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <input type="checkbox"  className="w-5 h-5 text-black bg-gray-100 border-gray-300"/>
        <p className="text-[14px]">View the courses you are taking on your profile page</p>
      </div>
      <button className="text-[16px] font-bold bg-black text-white mt-4 px-3 py-4 mb-[80px]">
          To safeguard
        </button>
    </div>
  );  
};

export default Privset;
