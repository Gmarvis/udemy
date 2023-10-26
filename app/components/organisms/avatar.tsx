"use client";

import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <div className="">
      <div>
        <h2 className="font-bold text-[14px] mt-5">Image preview</h2>
        <p className="text-[14px] text-slate-600 py-3">
          Minimum 200 * 200 pixels, Maximum 6000 * 6000 pixels
        </p>
        <div className="border border-black w-1/2 h-[235px] max-[740px]:w-[100%]">
          <div className="flex text-center justify-center bg-gray-50 m-4">
            <Image
              src="/anonymous_3.png"
              alt="Avatar"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="my-4">
          <input
            type="file"
            accept=".gif, .jpg, .jpeg, .png"
            placeholder="No file selected"
            className="border border-black p-4 block w-1/2 text-sm cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 max-[740px]:w-[100%]"
          />
        </div>
        <button className="text-[16px] font-bold bg-black text-white mt-4 px-3 py-4 my-10 max-[740px]:px-8">
          Save
        </button>
      </div>    
    </div>
  );
};

export default Avatar;
