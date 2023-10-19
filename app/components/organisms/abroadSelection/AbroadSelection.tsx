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

const subCategory = [
  {
    name: "Excel",
    content:
      "Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. Real-world experts will show you the basics like how to organize data into sheets, rows and columns, and advanced techniques like creating complex dynamic formulas. Both small businesses and large companies use Excel to turn their raw data into actionable insights.",
    title: "Analyze and visualize data with Excel",
  },
  {
    name: "Web Development",
    content:
      "The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.",
    title: "Build websites and applications with Web Development",
  },
  {
    name: "JavaScript",
    content:
      "JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. With JavaScript online classes, you can learn to build ...",
    title: "Grow your software development skills with JavaScript3",
  },
  {
    name: "Data Science",
    content:
      "Data science application is an in-demand skill in many industries worldwide — including finance, transportation, education, manufacturing, human resources, and banking. Explore data science courses with Python, statistics, machine learning, and more to grow your knowledge. Get data science training if you’re into research, statistics, ...",
    title: "Lead data-driven decisions with Data Science",
  },
  {
    name: "Amazon AWS",
    content:
      "Amazon Web Services (AWS) is a cloud computing platform with more than 200 featured services. Whether or not you aim for certification, an AWS course offers the theory and practical skills you need to land a job in cloud development, sales, engineering, networking, and more. The better you become at cloud computing, the more ...",
    title: "Become an expert in cloud computing with AWS Certification",
  },
  {
    name: "Drawing",
    content:
      "Want to start drawing for fun or take your craft to the next level? Explore our online drawing classes and learn pencil drawing, figure drawing, cartoon drawing, character drawing for cartoons and anime, illustration, sketching, shading and more. Take an overview course on the fundamentals of drawing or zero in on an area ",
    title: "Expand your creative skillset with Drawing",
  },
];

const conten =
  "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You";

const AbroadSelection = () => {
  const { courses } = useCourse();
  const [listOfCourse, setListofCourse] = useState(() =>
    getRandomArrySorted(courses)?.map((course) => (
      <CourseCard {...course} key={course?.id} />
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
      <div key={i} className="mb-1 text-md text-udemy hover:font-bold ">
        <button
          onClick={() => fetchCourses(category)}
          className="hover:font-bold "
        >
          {category.name}{" "}
        </button>
      </div>
    );
  });

  return (
    <div className="text-xl font-bold flex flex-col gap-4 px-8">
      <h2 className=" font-bold"> A broad selection of courses</h2>
      <h5>
        Choose from over 210,000 online video courses with new additions
        published every month
      </h5>
      <div className="flex gap-10">{checkCategory}</div>
      {showCategoryComponent}
    </div>
  );
};

export default AbroadSelection;
