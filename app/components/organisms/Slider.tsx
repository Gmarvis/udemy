"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CourseCard from "./CourseCard";
import { courseData, responsive } from "@/public/data/dummydata";
import CourseComponent from "./CourseWhitDescription";


export default function SliderComponent() {

console.log(courseData);

  // const courses = courseData.map((item) => (
  //   <CourseComponent key={item?.id}>
  //     <button>
  //       <CourseCard
  //         name={item?.name}
  //         imageurl={item?.imageurl}
  //         price={item?.price}
  //         author={item?.author}
  //         description={item?.description}
  //         classification={item?.classification}
  //       />
  //     </button>
  //   </CourseComponent>
  // ));

const courses = courseData.map((item) => (
  <CourseComponent {...item} key={item?.id} />
));

  return (
    <>
      <h1>Learners are viewing</h1>
      <Carousel responsive={responsive}  swipeable ={false} >
        {courses}
      </Carousel>
    </>
  );
}
