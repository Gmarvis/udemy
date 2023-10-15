"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CourseCard from "./CourseCard";
import { courseData, responsive } from "@/public/data/dummydata";
import CourseComponent from "./CourseWhitDescription";
import useCourse from "@/app/Hooks/useCourses";
import useCart from "@/app/Hooks/useCart";

export default function SliderComponent() {

  const {dispatch, REDUCER_ACTION, cart} = useCart();
  const {courses} = useCourse();

// const courses = courseData.map((item) => (
//   <CourseComponent {...item} key={item?.id} />
// ));

let pageContent = React

  return (
    <>
      <h1>Learners are viewing</h1>
      <Carousel responsive={responsive}  swipeable ={false} >
        {courses}
      </Carousel>
    </>
  );
}
