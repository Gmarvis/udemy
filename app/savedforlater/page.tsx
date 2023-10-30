"use client";
import React, { useEffect, useState } from "react";
import useCart from "../Hooks/useCart";
import ModalCourseCard from "../components/organisms/cart/modalCourseCard";
import DisplayTotalAmount from "../components/organisms/cart/DisplayTotalAmount";
import SliderComponent from "../components/organisms/slide/Slider";
import CartCourseList from "../components/organisms/cart/CartCourseList";
import { useWindowSize } from "../Hooks/useWindowSize";
import { CartItemType } from "@/types";
import { Toaster } from "react-hot-toast";
import SavedCourseList from "../components/organisms/cart/SavedCourseList";
import { getSavedCourses } from "@/lib/getCourses";
import Pulsation from "../components/atoms/Pulsation";
import MainNav from "../components/MainNav";
import Footer from "../components/organisms/footer-logout";

const SavedPage = () => {
  const size = useWindowSize();
  const [hasMounted, setHasMounted] = React.useState(false);
  const [courseSavedForLater, setCourseSavedForLater] = React.useState([]);

  useEffect(() => {
    getSavedCourses()
      .then((courses) => {
        if (courses) {
          console.log(courses);
          setCourseSavedForLater(courses);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  if (typeof sessionStorage === "undefined") return;
  console.log("localStorCart", courseSavedForLater);

  let cartCourses = courseSavedForLater?.map((course: any, i: number) => (
    <SavedCourseList {...course} key={i} />
  ));

  let content;
  if (size.width < 700) {
    content = (
      <>
        <div className="p-10 w-full">
          <h1 className="text-3xl font-bold">Shoppoing Cart</h1>

          <div className=" flex flex-col justify-between mb-10 w-full">
            <h5 className="mb-2  text-xs md:text-[16px]  mt-5 text-black font-segoe">
              {courseSavedForLater.length ? courseSavedForLater.length : 0}{" "}
              Course(s) saved for later
            </h5>
            <div className="flex flex-col gap-3">{cartCourses}</div>
          </div>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <MainNav />
        <div className="p-10 w-full">
          <h1 className="text-3xl font-bold">Shopping Cart Saved for later</h1>
          <h5 className="mb-2 text-xs mt-5 text-black font-segoe">
            {courseSavedForLater.length ? courseSavedForLater.length : 0}{" "}
            Course(s) saved for later
          </h5>
          <div className=" flex  mb-10">
            <div className="flex flex-col flex-1 gap-3">{cartCourses}</div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return <div>{courseSavedForLater ? content : <Pulsation />} </div>;
};

export default SavedPage;
