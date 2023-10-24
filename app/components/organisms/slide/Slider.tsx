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

export default function SliderComponent(props: { title: string }) {
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
    <div>
      <h3 className="ml-2 mb-3 text-[#2d2f31]  text-2xl font-bold">
        {props.title}
      </h3>
      <Carousel responsive={responsive} swipeable={false} className="w-full">
        {pageContent}
      </Carousel>
    </div>
  );
}
