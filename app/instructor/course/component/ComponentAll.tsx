"use client";
import Sidenav from "@/app/components/organisms/sidenav";
import React from "react";
import DescriptionOfCreateCourse from "./DescriptionofDescription";
import DescriptionOfCreateCourse1 from "./DescriptionOfCreateCourse1";
import SearchSelectNewCourse from "./SearchSelectNewCourse";
import { GoSearch } from "react-icons/go";
import CourseNotFinishedCreating from "./CourseNotFinishedCreating";
import CreatingEngagingCourse from "./CreatingEngagingCourse";
import Footer from "@/app/components/organisms/footer-logout";
import MainNav from "@/app/components/organisms/MainNav";
import { useRouter } from "next/navigation";

type Props = {};

const ComponentAll = (props: Props) => {
  const router = useRouter();
  return (
    <>
      <div className=" w-full ">
        {/* <MainNav />
        <Sidenav /> */}
        <div className="  pt-0  mt-14 mx-6 md:mx-28">
          <div className=" flex justify-between items-center">
            <h1 className=" text-[32px] font-bold text-ctitle"> Courses</h1>
            <div className=" w-fit bg-violt text-white py-3 px-2 imd:hidden">
              <button
                className="w-full "
                onClick={() => router.push("/teachflowa")}
              >
                <b>New course</b>
              </button>
            </div>
          </div>

          <>
            <DescriptionOfCreateCourse />
            <DescriptionOfCreateCourse1 />
            <SearchSelectNewCourse />
            <CourseNotFinishedCreating />
            <div className=" my-16 mx-12 md:mx-72 text-ctitle font-segoe p-0 text-[12.5px]">
              Based on your experience, we think these resources will be
              helpful.
            </div>
            <CreatingEngagingCourse />
          </>
        </div>
      </div>
      <div className="z-100">
        <Footer />
      </div>
    </>
  );
};

export default ComponentAll;
