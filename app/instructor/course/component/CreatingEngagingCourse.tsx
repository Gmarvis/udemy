import Image from "next/image";
import React from "react";
import Link from "next/link";

type Props = {};

const CreatingEngagingCourse = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 items-center lg:gap-24 w-full border border-thin border-[#d1d7dc] shadow-new mb-10 p-5 md:p-16 lg:justify-center item-center">
      <Image
        width={200}
        height={200}
        src="https://s.udemycdn.com/instructor/dashboard/engaging-course.jpg"
        alt="creating course image"
        className=" w-80"
      />
      <div className="flex flex-col gap-5 lg:w-150">
        <h4 className=" text-[#3a3c3f]">Create an Engaging Course</h4>
        <p>
          Whether you &lsquo;ve been teaching for years or are teaching for the
          first time, you can make an engaging course. We&lsquo;ve compiled
          resources and best practices to help you get to the next level, no
          matter where you&lsquo;re starting.
        </p>
        <Link
          href={"#"}
          className=" text-violt hover:text-violt/50 ml-2 underline"
        >
          {" "}
          Get started
        </Link>
      </div>
    </div>
  );
};

export default CreatingEngagingCourse;
