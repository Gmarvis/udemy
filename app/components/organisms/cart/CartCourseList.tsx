"use client";
import React from "react";
import { CartItemType, SimpleCourseType } from "@/types";
import Image from "next/image";
import Rate from "../../molecules/Rating";
import { Rating } from "react-simple-star-rating";
import useCart from "@/app/Hooks/useCart";

const CartCourseList = ({ ...course }: CartItemType) => {
  const { cart, totalPrice, dispatch, REDUCER_ACTION } = useCart();

  const removeFromCart = (): void => {
    dispatch({
      type: REDUCER_ACTION.REMOVE,
      payload: { ...course },
      payload2: { courseList: [] },
    });
  };

  const saveForLater = (): void => {
    dispatch({
      type: REDUCER_ACTION.SAVEFORLATER,
      payload: { ...course },
      payload2: { courseList: [] },
    });
  };

  return (
    <div className="flex flex-row md:w-[93%] gap-10 ml-0 justify-between  border-t-1 pt-3 text-udemy font-segoe">
      <div className=" flex gap-4">
        <Image
          className=" h-[100px]  bg-contain bg-right-top bg-no-repeat"
          src={course.imageurl || "/images/avatar"}
          alt="product image"
          draggable={false}
          width={255}
          height={10}
        />
        <div className="flex flex-col md:flex-row md:gap-10 md:text-sm">
          <div>
            {" "}
            <h3 className="text-[#2d2f31]  text-xs md:text-md font-bold font-segoe">
              {course.title}
            </h3>
            <p className="text-[10px] font-extralight font-segoe text-udemy">
              By {course.author}
            </p>
            <p>
              <span className="text-[11px] font-bold mr-2 text-ctitle ">
                4.5
              </span>{" "}
              <Rating
                // onClick={handleRating}
                // initialValue={ratingVal}
                size={11}
                fillColorArray={[
                  "#f17a45",
                  "#f19745",
                  "#f1a545",
                  "#f1b345",
                  "#f1d045",
                ]}
                emptyColor="gray"
                disableFillHover={true}
              />{" "}
            </p>
            <div className="flex text-xs items-center">
              <p>
                {course.classification && (
                  <span className="bg-bestseller px-1 font-bold font-segoe mt-2 h-8 text-[10px] ">
                    {course.classification}{" "}
                  </span>
                )}
                <span className="text-black text-[10px] px-1 break-keep bg-bermuda font-segoe mx-2">
                  Updated Recently{" "}
                </span>
              </p>
            </div>
            <ul className="flex flex-row list-disc text-[10px] first-of-type:list-item-none gap-1">
              <li className="list-none">
                {" "}
                <span>23 total hours </span>
              </li>
              <li>
                <span>230 lecturs </span>
              </li>
              <li>
                <span> All levels </span>
              </li>
            </ul>
          </div>
          <div className=" flex gap-5  md:flex-col flex-row w-28">
            <button
              className=" text-violt text-[11px] "
              onClick={removeFromCart}
            >
              Remove{" "}
            </button>

            <button
              className=" text-violt text-[11px] break-keep"
              onClick={saveForLater}
            >
              Save for later{" "}
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className="price text-lg md:text-sm text-violt font-extrabold">
          ₦{course.price}
        </p>
        <p>
          {" "}
          <span className=" line-through text-[12px] text-udemy font-bold">
            ₦34,000
          </span>
        </p>
      </div>
    </div>
  );
};

export default CartCourseList;
