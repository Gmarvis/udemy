import React, { ReactElement, memo } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Rating } from "react-simple-star-rating";
import { ReducerAction, ReducerActionType } from "@/app/context/CartProvider";
import { CourseType, CartItemType, SimpleCourseType } from "@/types";
import PopupModal from "../cart/PopupModal";
import useCourse from "@/app/Hooks/useCourses";
import CourseCard from "./CourseCard";
import useCart from "@/app/Hooks/useCart";
import { useRouter } from "next/navigation";


const CouseContent = ({ ...course }) => {
  const { courses } = useCourse();
  const { dispatch, REDUCER_ACTION } = useCart();
  const router = useRouter();

  async function gotoCart() {
    // "use server";
    console.log("goto cart");
  }
  // card w-full flex flex-row md:w-90   gap-4 md:ml-2 2xl:mx-0
  const className = " card w-full flex flex-row gap-4 ";

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
    router.push("/?showDialog=y");
  };

  async function addAllToCart() {
    // "use server";
    console.log("add all courses");
    dispatch({
      type: REDUCER_ACTION.ADDALL,
      payload2: { courseList: [...partListOfCourses] },
    });
  }

  console.log('dispatch', dispatch);

  return (
    <>
      <PopupModal
        addAll={addAllToCart}
        gotoCart={gotoCart}
        price={price}
        partListOfCourses={partListOfCourses}
        courseSelected={course}
      />

      <div className="flex flex-col gap-10 bg-white py-5 px-6 w-110 h-auto ring text-3xl">
        <h2>Title of content</h2>
        <span>Bestseller</span>
        <p>descritption of the course</p>
        <ul>
          <li className="checkmark-list-style">what you will learn 1</li>
          <li className="checkmark-list-style">what you will learn 2</li>
          <li className="checkmark-list-style">what you will learn 3</li>
        </ul>
        <div className="w-full pl-3 py-5 text-2xl text-white">
          <button
            className="bg-purple hover:bg-violet  w-72 px-10 py-5 text-2xl mr-10"
            onClick={onAddToCart}
          >
            Add to Cart
          </button>

          <span className="border border-metal py-5 px-4 rounded-full w-12 h-20  hover:bg-gray">
            <Rating
              // fillIcon={<MdFavorite size={30} />}
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
    </>
  );
};

export default CouseContent;
