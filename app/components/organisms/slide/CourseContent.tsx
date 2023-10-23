"use client";
import React, { useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Rating } from "react-simple-star-rating";
import { SimpleCourseType } from "@/types";
import PopupModal from "../cart/PopupModal";
import useCourse from "@/app/Hooks/useCourses";
import useCart from "@/app/Hooks/useCart";
import { useRouter, useSearchParams } from "next/navigation";

const CouseContent = ({ ...course }: SimpleCourseType) => {
  const { courses } = useCourse();
  const { dispatch, REDUCER_ACTION, cart } = useCart();
  const router = useRouter();
  const [openModal, setOpenModal] = useState<boolean>(true);

  async function gotoCart() {
    // "use server";
    console.log("goto cart");
    router.push("/cart");
  }

  const searchParam = useSearchParams();
  const pageUrl = searchParam.get("s");

  const partListOfCourses: SimpleCourseType[] = courses.slice(0, 5);

  const price = courses
    .slice(0, 5)
    .reduce((acc, course) => acc + Number(course.price), 0);

  const onAddToCart = () => {
    console.log(course);
    dispatch({
      type: REDUCER_ACTION.ADD,
      payload: { ...course },
      payload2: { courseList: [] },
    });
    if (window.document.documentElement.scrollWidth - 1 < 600) {
      router.push("/?s=x");
      setOpenModal(false);
    } else {
      router.push("/?s=y");
    }
  };

  // console.log(window.document.documentElement.scrollWidth - 1);
  async function addAllToCart() {
    // "use server";
    console.log("add all courses");
    dispatch({
      type: REDUCER_ACTION.ADDALL,
      payload2: { courseList: [...partListOfCourses] },
    });
    router.push("/cart");
  }

  const content = (
    <div
      className="flex flex-col gap-2 bg-white py-3 px-2 w-72 h-auto ring text-lg"
      id="divContent z-0"
    >
      <h5 className="text-black">{course.title}</h5>
      <span className="text-xs">
        {course.classification || " not yet classified"}
      </span>
      <p className="text-sm">{course.description}</p>
      <ul className="text-xs">
        <li className="checkmark-list-style">what you will learn 1</li>
        <li className="checkmark-list-style">what you will learn 2</li>
        <li className="checkmark-list-style">what you will learn 3</li>
      </ul>
      <div className="w-full  text-2xl text-white">
        <button
          className="bg-prple hover:bg-violt  w-48 py-3 mr-3"
          onClick={() => {
            onAddToCart();
          }}
        >
          <h5>Add to Cart</h5>
        </button>

        <span className="border border-ctitle px-[10px] py-3 rounded-full w-10 h-16  hover:bg-gray">
          <Rating
            fillIcon={<MdFavorite size={35} />}
            emptyIcon={<MdFavoriteBorder size={35} />}
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
  );

  return (
    <div>
      <PopupModal
        addAll={addAllToCart}
        gotoCart={gotoCart}
        totalPrice={price}
        partListOfCourses={partListOfCourses}
        courseSelected={course}
      />

      {pageUrl === "x" ? null : content}
    </div>
  );
};

export default CouseContent;
