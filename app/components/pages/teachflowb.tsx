"use client";
import React, { useState } from "react";
import Button from "../atoms/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Teachflowb = () => {
  const [count, setCount] = useState(0);
  const maxLength = 60;

  const handleChanges = (event: any) => {
    const value = event.target.value;

    if (value.length <= maxLength) {
      setCount(value.length);
    }
  };

  const router = useRouter();

  const handleClicka = () => {
    router.push("/teachflowa");
  };

  const handleClickb = () => {
    router.push("/teachflowc");
  };

  return (
    <div className="relative h-[100vh]">
      <div className="flex justify-between items-center h-[80px] shadow">
        <div className="flex items-center">
          <div className="  px-8">
            <Image
              src="/logo-udemy.svg"
              width={80}
              height={45}
              alt="logo"
              className=""
            />
          </div>

          <div className="border border-r-gray-400 h-[80px]"></div>
          <div className="px-8">
            <h3>Step 2 of 4</h3>
          </div>
        </div>

        <div className="px-8 text-purple-600 font-bold">
          <span className="text-purple">Exit</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-7 py-10">
        <h1 className="text-[30px] font-extrabold">
          How about a working title ?
        </h1>
        <p>
          It&lsquo;s ok if you can&apos;t think of a good title now. you can
          change it later.
        </p>
        <input
          type="text"
          placeholder="eg. Learn Photoshop CS6 from Scratch "
          className="border border-black px-4 py-4 w-[30%]"
          // disabled={count >= maxLength}
          maxLength={maxLength}
          onChange={handleChanges}
        />
        <text className="font-bold underline italic">
          Characters remaining: {maxLength - count}
        </text>
      </div>

      <div className="flex text-center justify-between px-6 border w-full absolute bottom-0 shadow shadow-gray">
        <Button
          type="submit"
          className=" bg-gray px-6 py-[12px] my-2 hover:bg-black hover:text-white"
          label="Previous"
          onClick={handleClicka}
          style={""}
        />
        <Button
          type="submit"
          className=" bg-gray px-6 py-[12px] my-2 hover:bg-black hover:text-white"
          label="Continue"
          onClick={handleClickb}
          style={""}
        />
      </div>
    </div>
  );
};

export default Teachflowb;
