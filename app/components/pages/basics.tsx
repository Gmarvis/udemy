"use client";
import React, { useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BiBold } from "react-icons/bi";
import {
  MdOutlineFormatItalic,
  MdOutlineFormatListNumbered,
  MdFormatListNumbered,
} from "react-icons/md";

const Basics = () => {
  const [counta, setCounta] = useState(0);
  const [countb, setCountb] = useState(0);
  const maxLengtha = 60;
  const maxLengthb = 120;

  const handleChangea = (event: any) => {
    const value = event.target.value;

    if (value.length <= maxLengtha) {
      setCounta(value.length);
    }
  };

  const handleChangeb = (event: any) => {
    const value = event.target.value;

    if (value.length <= maxLengthb) {
      setCountb(value.length);
    }
  };

  return (
    <div className="px-10 flex flex-col justify-center w-[100%] h-full pb-20 shadow-2xl">
      <div className="py-8">
        <h1 className="text-[26px] font-bold">Course Landing page</h1>
      </div>
      <hr className="w-full  text-gray" />
      <p className="pt-5 pb-6">
        Your course landing page is crucial to your success on Udemy. If
        it&apos;s done right, it can also help you gain visibility in search
        engines like Google. As you complete this section, think about creating
        a compelling Course Landing Page that demonstrates why someone would
        want to enroll in your course. Learn more about{" "}
        <a href="#" className="text-violet underline">
          creating your course landing page{" "}
        </a>
        and{" "}
        <a href="#" className="text-violet underline">
          course title standards.
        </a>
      </p>

      <div className="">
        <div className="flex flex-col gap-2 pt-6 pb-3">
          <h3 className="font-bold ">Course title</h3>
          <div className="flex border border-black">
            <input
              type="text"
              placeholder="Insert your course title."
              className="focus:outline-none focus:border-none border-collapse w-full px-4 py-4"
              maxLength={maxLengtha}
              onChange={handleChangea}
            />
            <p className="text-gray pt-4 pr-4">{maxLengtha - counta}</p>
          </div>
          <p className="text-[12px] text-gray-400 ">
            Your title should be a mix of attention-grabbing, informative, and
            optimized for search
          </p>
        </div>

        <div className="flex flex-col gap-2 py-3">
          <h3 className="font-bold">Course subtitle</h3>
          <div className="flex border border-black">
            <input
              type="text"
              placeholder="Insert your course subtitle."
              className="focus:outline-none focus:border-none border-collapse w-full px-4 py-4"
              maxLength={maxLengtha}
              onChange={handleChangeb}
            />
            <p className="text-gray pt-4 pr-4">{maxLengthb - countb}</p>
          </div>
          <p className="text-[12px] text-gray-400">
            Use 1 or 2 related keywords, and mention 3-4 of the most important
            areas that you&apos;ve covered during your course.
          </p>
        </div>

        <div className="flex flex-col gap-2 py-3">
          <h3 className="font-bold">Course description</h3>
          <div className="flex flex-col">
            <div className="border border-black flex gap-4 px-4 py-3">
              <button>
                <BiBold />
              </button>
              <button>
                <MdOutlineFormatItalic />
              </button>
              <button>
                <MdOutlineFormatListNumbered />
              </button>
              <button>
                <MdFormatListNumbered />
              </button>
            </div>
            <input
              type="text"
              placeholder="Insert your course description."
              className="border border-black border-t-transparent w-full pt-4 pb-10  px-4"
            />
          </div>
          <p className="text-[12px] text-gray-400">
            Description should have minimum 200 words.
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <select name="" id="" className="border border-black w-1/3 py-4 px-4">
          <option value="1">English (US)</option>
          <option value="2">English (UK)</option>
          <option value="3">Afrikaans</option>
          <option value="4">Francais (Canada)</option>
          <option value="5">Francais (France)</option>
          <option value="6">Nederlands</option>
          <option value="7">Nederlands (Belgie)</option>
          <option value="8">Espagnol</option>
          <option value="9">Slovacina</option>
          <option value="10">Romana</option>
        </select>

        <select name="" id="" className="border border-black w-1/3 py-4 px-4">
          <option value="1">-- Select Level --</option>
          <option value="2">Beginner Level</option>
          <option value="3">Intermediate Level</option>
          <option value="4">Expert Level</option>
          <option value="5">All Level</option>
        </select>

        <select name="" id="" className="border border-black w-1/3 py-4 px-4">
          <option value="1">-- Select Level --</option>
          <option value="2">Development</option>
          <option value="3">Business</option>
          <option value="4">Finance & Accounting</option>
          <option value="5">IT & Software</option>
          <option value="6">Office Productivity</option>
          <option value="7">Personal Development</option>
          <option value="8">Ddesign</option>
          <option value="9">Marketing</option>
          <option value="10">LifeStyle</option>
          <option value="11">Photo & Video</option>
          <option value="12">Health & Fitness</option>
          <option value="13">Music</option>
          <option value="14">Teaching and Academics</option>
        </select>

        <select name="" id="" className="border border-black w-1/3 py-4 px-4">
          <option value=""></option>
        </select>
      </div>
      <div className="pt-8">
        <p className="flex items-center font-bold pb-2">
          What is primarily taught in your course? <AiFillQuestionCircle />{" "}
        </p>
        <input
          type="text"
          placeholder="e.g. Landscape Photography"
          className="border border-black px-4 py-4 w-1/2"
        />
      </div>
      <div className="flex w-full gap-4 items-start">
        <div className="w-1/2 py-6">
          <p className="font-bold pb-2">Course image</p>
          <div className="h-[300px] border border-black"></div>
        </div>

        <div className="w-1/2">
          <p className="pt-12">
            Upload your course image here. It must meet our{" "}
            <a href="#" className="text-violet underline">
              course image quality standards
            </a>{" "}
            to be accepted. Important guidelines: 750x422 pixels; .jpg, .jpeg,.
            gif, or .png. no text on the image.
          </p>
          <input
            className="block w-full text-lg text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 black:text-gray-400 focus:outline-none black:bg-gray-700 black:border-gray-600 placeholder:gray-400 mt-2 py-2"
            id="large_size"
            type="file"
          />
        </div>
      </div>

      <div className="flex w-full gap-4 items-start">
        <div className="w-1/2 py-6">
          <p className="font-bold pb-2">Promotional Video</p>
          <div className="h-[300px] border border-black"></div>
        </div>

        <div className="w-1/2">
          <p className="pt-12">
            Your promo video is a quick and compelling way for students to
            preview what they&apos;ll learn in your course. Students considering
            your course are more likely to enroll if your promo video is
            well-made.
            <a href="#" className="text-violet underline">
              Learn how to make your promo video awesome!
            </a>
          </p>
          <input
            className="block w-full text-lg text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 black:text-gray-400 focus:outline-none black:bg-gray-700 black:border-gray-600 placeholder:gray-400 mt-2 py-2"
            id="large_size"
            type="file"
          />
        </div>
      </div>
    </div>
  );
};

export default Basics;
