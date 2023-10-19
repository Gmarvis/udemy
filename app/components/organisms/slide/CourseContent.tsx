"use client"
import React, { ReactElement, memo, useRef, useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Rating } from "react-simple-star-rating";
import { ReducerAction, ReducerActionType } from "@/app/context/CartProvider";
import { CourseType, CartItemType, SimpleCourseType } from "@/types";
import PopupModal from "../cart/PopupModal";
import useCourse from "@/app/Hooks/useCourses";
import CourseCard from "./CourseCard";
import useCart from "@/app/Hooks/useCart";
import { useRouter, useSearchParams } from "next/navigation";

const CouseContent = ({ ...course }:SimpleCourseType) => {
  const { courses } = useCourse();
  const { dispatch, REDUCER_ACTION, cart } = useCart();
  const router = useRouter();
  const [openModal, setOpenModal] = useState<boolean>(true);
 
  async function gotoCart() {
    // "use server";
    console.log("goto cart");
  }

  const searchParam = useSearchParams();
  const pageUrl = searchParam.get('s');

  const partListOfCourses: SimpleCourseType[] = courses.slice(0, 5);

  const price = courses
    .slice(0, 5)
    .reduce((acc, course) => acc + Number(course.price), 0);

  const onAddToCart = () => {
    dispatch({
      type: REDUCER_ACTION.ADD,
      payload: { ...course },
      payload2: { courseList: [] },
    });
    if(window.document.documentElement.scrollWidth - 1 < 600) {
      router.push('/?s=x');
      setOpenModal(false);
    }else {
      router.push('/?s=y');
    } 
  };

  


console.log(window.document.documentElement.scrollWidth - 1);
  async function addAllToCart() {
    // "use server";
    console.log("add all courses");
    dispatch({
      type: REDUCER_ACTION.ADDALL,
      payload2: { courseList: [...partListOfCourses] },
    });
  }

  const content = (
<div className="flex flex-col gap-10 bg-white py-5 px-6 w-90 h-auto ring text-lg" id="divContent z-0" >
        <h4>Title of content</h4>
        <span>Bestseller</span>
        <p>descritption of the course</p>
        <ul>
          <li className="checkmark-list-style">what you will learn 1</li>
          <li className="checkmark-list-style">what you will learn 2</li>
          <li className="checkmark-list-style">what you will learn 3</li>
        </ul>
        <div className="w-full py-4 text-2xl text-white">
          <button
            className="bg-purple hover:bg-violet  w-52 py-4 mr-5"
            onClick={()=> {onAddToCart()}}
          >
            <h5>Add to Cart</h5>
          </button>
          
          <span className="border border-ctitle px-3 py-4 rounded-full w-12 h-20  hover:bg-gray">
            <Rating
              fillIcon={<MdFavorite size={40} />}
              emptyIcon={<MdFavoriteBorder size={40} />}
              iconsCount={1}
              SVGclassName="svgIcon inline-block hover:bg-gray "
              fillColor="#000"
              emptyColor="black"
              disableFillHover={true}
              allowHover={false}
              showTooltip={false}
            />
          </span>
        </div>
      </div>
  )

  return (
    <div>
      <PopupModal
        addAll={addAllToCart}
        gotoCart={gotoCart}
        totalPrice={price}
        partListOfCourses={partListOfCourses}
        courseSelected={course}
      />

      {pageUrl === 'x' ? null : content}
  
    </div>
    
  );
};

export default CouseContent;
