"use client";
import ListItems from "@/app/components/molecules/list-item-courses";
import Footer from "@/app/components/organisms/footer-logout";
import MyLearningNavbar from "@/app/components/organisms/my-learning-nav";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import TakenCourses from "@/app/components/molecules/my-courses";
import MyList from "@/app/components/molecules/my-list";
import LearningTool from "@/app/components/molecules/learning-tool";
import Loading from "@/app/cart/loading";
import Wishlist from "@/app/components/molecules/whish-list";
import Archived from "@/app/components/molecules/archived";

type Props = {};

const MyLearning = (props: Props) => {
  const [selectedComponent, setSelectedComponent] = useState(<TakenCourses />);
  const router = useRouter();

  const handleClick1 = (component: any) => {
    // router.push("/home/learning");
    setSelectedComponent(component);
  };

  const handleClick2 = (component: any) => {
    router.push("/home/list");
    setSelectedComponent(component);
  };

  const handleClick3 = (component: any) => {
    // router.push("/home/learning-tool");
    setSelectedComponent(component);
  };

  const handleWishList = (component: any) => {
    // router.push("/home/wishlist");
    setSelectedComponent(component);
  };

  const handleArchives = (component: any) => {
    // router.push("/home/archives");
    setSelectedComponent(component);
  };

  return (
    <div>
      <MyLearningNavbar />
      {/* <ListItems /> */}
      <div className="text-white opacity-90 bg-black w-full">
        <div className="w-full md:w-1/2 md:mx-auto">
          <h1 className="py-4 px-3 md:py-6 font-semibold text-2xl md:text-4xl leading-normal">
            My Learning
          </h1>
          <div className="flex pl-3 gap-3 text-sm mx-auto md:text-base font-semibold py-0">
            <h3
              onClick={() => handleClick1(<TakenCourses />)}
              className="hover:cursor-pointer border-b-4"
            >
              All courses
            </h3>
            <h3
              onClick={() => handleClick2(<MyList />)}
              className="hover:cursor-pointer "
            >
              My Lists
            </h3>
            <h3
              onClick={() => handleWishList(<Wishlist />)}
              className="hover:cursor-pointer "
            >
              Whishlist
            </h3>
            <h3
              onClick={() => handleArchives(<Archived />)}
              className="hover:cursor-pointer "
            >
              Archived
            </h3>
            <h3
              onClick={() => handleClick3(<LearningTool />)}
              className="hover:cursor-pointer "
            >
              Learning tools
            </h3>
          </div>
        </div>
      </div>
      <div className="py-12 w-full flex  justify-center items-center min-h-[500px]">
        {selectedComponent}
      </div>
      <Footer />
    </div>
  );
};

export default MyLearning;
