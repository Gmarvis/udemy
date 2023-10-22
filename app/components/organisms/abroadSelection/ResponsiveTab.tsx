"use client";
import SliderComponent from "../slide/Slider";
import "react-multi-carousel/lib/styles.css";
import React, { Fragment, useState } from "react";
import { subCategory } from "@/public/data/dummydata";

type Props = {
  name?: string;
  content?: string;
  title?: string;
};

const ResponsiveTab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCat, setActiveCat] = React.useState<Props>({});

  const toggleDropdown = (category: Props) => {
    setIsOpen(!isOpen);
    setActiveCat(category);
  };

  const listOfCourse = subCategory.map((category, i) => (
    <div
      className=" font-bold font-segoe text-lg text-ctitle  border-t-1 border-gray2 pt-4 pb-3"
      key={i}
    >
      <button onClick={() => toggleDropdown(category)} className="mb-3">
        {category.name}
      </button>
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
