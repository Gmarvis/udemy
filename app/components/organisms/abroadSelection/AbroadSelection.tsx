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

const AbroadSelection = () => {
  const { courses } = useCourse();
  const [listOfCourse, setListofCourse] = useState(() =>
    getRandomArrySorted(courses)?.map((course) => (
      <CourseComponent {...course} key={course?.id} />
    ))
  );

  const [showCategoryComponent, setShowCategoryContent] = useState<JSX.Element>(
    () => (
      <SliderContainer
        categoryContent={conten}
        categoryTitle={"Expand your career opportunities with Python"}
        categoryName={"Python"}
      >
        <Carousel swipeable={false} ssr={false} responsive={responsive}>
          {listOfCourse}
        </Carousel>
      </SliderContainer>
    )
  );

  const fetchCourses = (category: {
    name: string;
    content: string;
    title: string;
  }) => {
    setShowCategoryContent(
      <SliderContainer
        categoryContent={category.content}
        categoryTitle={category.title}
        categoryName={category.name}
      >
        <Carousel swipeable={false} ssr={false} responsive={responsive}>
          {listOfCourse}
        </Carousel>
      </SliderContainer>
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
    <div className="text-xl font-bold flex flex-col gap-4 px-5">
      <h2 className=" font-bold text-black text-xl">
        {" "}
        A broad selection of courses
      </h2>
      <p className="text-sm">
        Choose from over 210,000 online video courses with new additions
        published every month
      </p>
      <div className="flex gap-10">{checkCategory}</div>
      {showCategoryComponent}
    </div>
  );
};

export default AbroadSelection;
