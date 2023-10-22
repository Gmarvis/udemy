"use client";
import SliderComponent from "../slide/Slider";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";
import { subCategory } from "@/public/data/dummydata";
import { MdKeyboardArrowDown } from "react-icons/md";

type Props = {
  name?: string;
  content?: string;
  title?: string;
};

const ResponsiveTab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCat, setActiveCat] = React.useState<Props>({});
  const [rotate, setRotate] = React.useState<string>("");

  let arrowClass: string = "";
  const toggleDropdown = (category: Props) => {
    setIsOpen(!isOpen);
    setActiveCat(category);
    setRotate("rotate-180");
  };

  const listOfCourse = subCategory.map((category, i) => (
    <div
      className=" font-bold font-segoe text-lg text-ctitle  border-t-1 border-gray2 pt-4 pb-3 cursor-pointer"
      key={i}
      onClick={() => {
        toggleDropdown(category);
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <span>{category.name}</span>
        <span className={isOpen && activeCat === category ? rotate : ""}>
          {" "}
          <MdKeyboardArrowDown />
        </span>
      </div>

      {isOpen && activeCat === category && (
        <div>
          <SliderComponent title="" />
        </div>
      )}
    </div>
  ));

  return (
    <div className=" w-[98%] ">
      {listOfCourse} <hr className="-mt-[.25px]" />
    </div>
  );
};

export default ResponsiveTab;
