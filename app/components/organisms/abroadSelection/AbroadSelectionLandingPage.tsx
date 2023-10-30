"use client";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import TabSlider from "./TabSliderLandingPage";
import TabSliderLogout from "./TabSliderLogoutPage";
import ResponsiveTab from "./ResponsiveTab";

type Props = {
  title?: string;
  textContent?: string;
};

const AbroadSelection = ({ title, textContent }: Props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-4 px-5 lg:mt-0 mx-auto md:w-[70%]">
      <h2 className=" font-bold text-black text-xl"> {title}</h2>
      <p className="text-sm">{textContent}</p>

      <div className="mb-5 ml-0 hidden sm:block">
        <TabSlider />
      </div>
      <div className="mb-5 ml-0 sm:hidden">
        <ResponsiveTab />
      </div>
    </div>
  );
};

export default AbroadSelection;
