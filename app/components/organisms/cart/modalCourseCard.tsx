import React from "react";
import { CartItemType, SimpleCourseType } from "@/types";
import Image from "next/image";
import Rate from "../../molecules/Rating";

const ModalCourseCard: React.FC<CartItemType> = ({
  ...course
}: CartItemType) => {
  return (
    <div className="flex flex-row gap-4 m-6 justify-between">
      <div className=" flex gap-4">
        <Image
          className=" h-[100px]  bg-contain bg-right-top bg-no-repeat"
          src={course.imageurl || "/images"}
          alt="product image"
          draggable={false}
          width={255}
          height={10}
        />
        <div>
          {" "}
          <h6 className="text-ctitle  text-sm md:text-md font-bold font-sans">
            {course.title}
          </h6>
          <p className="text-sm font-extralight font-segoe text-udemy">
            {course.author}
          </p>
          <div className="flex">
            <span className="text-lg md:text-sm font-bold mr-2 text-ctitle ">
              4.5
            </span>{" "}
            <Rate className="text-ctitle" />{" "}
          </div>
          {course.classification && (
            <p className="bg-bestseller px-3 py-1 text-sm font-bold font-sans w-24 mt-2 h-8">
              {course.classification}
            </p>
          )}
        </div>
      </div>

      <p className="price text-lg md:text-md text-black font-bold">
        <span>₦</span>
        {course.price}
      </p>
    </div>
  );
};

export default ModalCourseCard;
