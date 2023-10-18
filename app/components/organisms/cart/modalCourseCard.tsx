import React from 'react'
import { SimpleCourseType } from "@/types";
import Image from 'next/image';
import Rate from "../../molecules/Rating";

const ModalCourseCard = ({...course}:SimpleCourseType) => {
  return (
    <div className="flex flex-row gap-4 m-6">
      <Image
        className="w-full md:mr-5 h-64 lg:h-48 object-cover  bg-contain bg-right-top bg-no-repeat lg:w-96"
        src={course.imageurl}
        alt="product image"
        draggable={false}
        width={400}
        height={300}
      />
      <div>
        {" "}
        <h2 className="text-ctitle text-2xl font-bold font-sans w-80">
          {course.title}
        </h2>
        <p className="text-lg font-extralight font-segoe text-udemy">{course.author}</p>
        <div  className="flex">
          <span className="text-2xl font-bold mr-2 text-ctitle ">4.5</span> <Rate className = "text-ctitle"/>{" "}
        </div>
        {course.classification && <p className= "bg-bestseller px-3 py-1 text-md font-bold font-sans w-24 mt-2 h-8">{course.classification}</p>}
      </div>

      <p className="price text-2xl text-black">
        <span>₦</span>
        {course.price}
       
      </p>
    </div>
  )
}

export default ModalCourseCard
