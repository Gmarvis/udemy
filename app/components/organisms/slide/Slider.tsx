"use client";
import { ReactElement } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CourseCard from "./CourseCard";
import { courseData, responsive } from "@/public/data/dummydata";
import CourseComponent from "./CourseComponent";
import useCourse from "@/app/Hooks/useCourses";
import useCart from "@/app/Hooks/useCart";
import Pulsation from "../../atoms/Pulsation";

export default function SliderComponent() {
  const { cart } = useCart();
  const { courses } = useCourse();



  let pageContent: ReactElement | ReactElement[] = (
    <div>
      <Pulsation />
    </div>
  );

  if (courses?.length) {
    pageContent = courses?.map((course) => {
      const inCart: boolean = cart?.some((item) => item.id === course.id);
      return <CourseComponent {...course} key={course?.id} />;
    });
  }

  return (
    <>
      <h1 className="ml-2">Learners are viewing</h1>
      <Carousel responsive={responsive} swipeable={false}>
        {pageContent}
      </Carousel>
    </>
  );
}
