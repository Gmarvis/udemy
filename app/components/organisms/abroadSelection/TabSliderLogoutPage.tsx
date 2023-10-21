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

const conten =
  "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You";

type Props = {};

const TabSliderLogout = (props: Props) => {
  const { courses } = useCourse();
  const [listOfCourse, setListofCourse] = useState(() =>
    getRandomArrySorted(courses)?.map((course) => (
      <CourseComponent {...course} key={course?.id} />
    ))
  );

  const [showCategoryComponent, setShowCategoryContent] = useState<JSX.Element>(
    () => (
      <Carousel swipeable={false} ssr={false} responsive={responsive}>
        {listOfCourse}
      </Carousel>
    )
  );

  const fetchCourses = (category: {
    name: string;
    content: string;
    title: string;
  }) => {
    setShowCategoryContent(
      <Carousel swipeable={false} ssr={false} responsive={responsive}>
        {listOfCourse}
      </Carousel>
    );

    setListofCourse(
      getRandomArrySorted(courses)?.map((course) => (
        <CourseComponent {...course} key={course?.id} />
      ))
    );
  };

  const checkCategory = subCategory.map((category, i) => {
    return (
      <div key={i} className="mb-1 text-xs text-udemy hover:font-bold ">
        <button onClick={() => fetchCourses(category)} className="font-bold ">
          {category.name}{" "}
        </button>
      </div>
    );
  });
  return (
    <>
      <div className="flex gap-10 ml-2">{checkCategory}</div>{" "}
      {showCategoryComponent}
    </>
  );
};

export default TabSliderLogout;
