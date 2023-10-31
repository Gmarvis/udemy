"use client";
import Image from "next/image";
import Button from "../atoms/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Teachflowd = () => {
  const router = useRouter();
  const [selectedRadioInput, setSelectedRadioInput] = useState("");

  const handleClickc = () => {
    router.push("/teachflowc");
  };
  const handleClickd = () => {
    router.push("/manage");
  };

  const handleChange = (e: any) => {
    setSelectedRadioInput(e.target.value);
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
            <h3>Step 4 of 4</h3>
          </div>
        </div>

        <div className="px-8 text-purple-600 font-bold">
          <span className="text-violet">Exit</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-7 py-10">
        <h1 className="text-[30px] font-extrabold">
          How much time can you spend creating your course per week
        </h1>
        <p>
          There&apos;s no wrong answer.We can help you achieve you goals even if
          you don&apos;t have much time.
        </p>
        <div className="border border-black px-3 py-4 flex gap-4 w-1/3 hover:bg-gray">
          <input
            className="rounded w-[15px] bg-black"
            type="radio"
            name="radio-input"
            value="option-1"
            onChange={handleChange}
            checked={selectedRadioInput === "option-1"}
          />
          <p className="font-bold">I&apos;m very busy right now (0-2hours)</p>
        </div>
        <div className="border border-black px-3 py-4 flex gap-4 w-1/3 hover:bg-gray">
          <input
            className="rounded w-[15px]"
            type="radio"
            name="radio-input"
            value="option-2"
            onChange={handleChange}
            checked={selectedRadioInput === "option-2"}
          />
          <p className="font-bold">
            I&apos;ll work on this on the side (2-4hours)
          </p>
        </div>
        <div className="border border-black px-3 py-4 flex gap-4 w-1/3 hover:bg-gray">
          <input
            className="rounded w-[15px]"
            type="radio"
            name="radio-input"
            value="option-3"
            onChange={handleChange}
            checked={selectedRadioInput === "option-3"}
          />
          <p className="font-bold">I have lots of flexibility (5+ hours)</p>
        </div>
        <div className="border border-black px-3 py-4 flex gap-4 w-1/3 hover:bg-gray">
          <input
            className="rounded-full w-[15px]"
            type="radio"
            name="radio-input"
            value="option-4"
            onChange={handleChange}
            checked={selectedRadioInput === "option-4"}
          />
          <p className="font-bold">I haven&apos;t yet decided if I have time</p>
        </div>
      </div>

      <div className="flex text-center justify-between px-6 border w-full absolute bottom-0 shadow shadow-gray">
        <Button
          type="submit"
          className="border border-black hover:text-white hover:bg-black font-bold bg-white px-6 py-[12px] my-2"
          label="Previous"
          onClick={handleClickc}
          style={""}
        />
        <Button
          type="submit"
          className="border border-black hover:text-white hover:bg-black font-bold bg-white hover: px-6 py-[12px] my-2"
          label="Create course"
          onClick={handleClickd}
          style={""}
        />
      </div>
    </div>
  );
};

export default Teachflowd;
