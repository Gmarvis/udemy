import { getPaidCourses } from "@/lib/getCourses";
import { CartItemType } from "@/types";
import React, { useEffect, useState } from "react";
import CourseCard from "../organisms/slide/CourseCard";
import Pulsation from "../atoms/Pulsation";

type Props = {};

const TakenCourses = async () => {
  const [takenCourses, setTakenCourses] = useState<CartItemType[]>([]);

  useEffect(() => {
    getPaidCourses()
      .then((data) => {
        if (data) {
          setTakenCourses(data);
          console.log(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(takenCourses);
  const pageContent = takenCourses?.map((course) => (
    // <div key={course.id}>
    <CourseCard
      title={course?.title}
      image={course.image || "/images/avatar.png"}
      price={course?.price}
      author={course?.author}
      description={course?.description}
      classification={course?.classification}
      key={course.id}
    />
    // </div>
  ));
  return (
    <div>
      {takenCourses.length ? (
        <div className="grid gap-16 w-full px-auto md:mx-auto sm:max-md:grid-cols-2 md:max-xl:grid-cols-3 xl:max-2xl:grid-cols-4 mx-auto place-content-start">
          {" "}
          {pageContent}
        </div>
      ) : (
        <Pulsation />
      )}
    </div>
  );
};

export default TakenCourses;
