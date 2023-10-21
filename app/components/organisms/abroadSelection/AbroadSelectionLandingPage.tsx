"use client";
import React, { useState } from "react";
import SliderContainer from "./SliderContainer";
import Button from "../../atoms/Button";
import useCourse from "@/app/Hooks/useCourses";
import useCart from "@/app/Hooks/useCart";
import { getRandomArrySorted } from "@/lib/getCourses";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CourseComponent from "../slide/CourseComponent";
import CourseCard from "../slide/CourseCard";
import { responsive } from "@/public/data/dummydata";
import { subCategory } from "@/public/data/dummydata";
import TabSlider from "./TabSliderLandingPage";

const conten =
  "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You";

type Props = {
  title: string;
  textContent: string;
  childrem: React.JSX.Element[];
};

const AbroadSelection = ({ title, textContent }: Props) => {
  return (
    <div className="text-xl font-bold flex flex-col gap-4 px-5">
      <h2 className=" font-bold text-black text-xl"> {title}</h2>
      <p className="text-sm">{textContent}</p>
      <TabSlider />
    </div>
  );
};

export default AbroadSelection;
