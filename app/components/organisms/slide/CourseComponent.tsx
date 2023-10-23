"use client";
import "rsuite/dist/rsuite.min.css";
import { Button, Popover, Whisper, Tooltip } from "rsuite";

import { courseData, responsive } from "@/public/data/dummydata";
import CourseCard from "./CourseCard";
import CouseContent from "./CourseContent";
import useCart from "@/app/Hooks/useCart";
import { SimpleCourseType } from "@/types";

const CourseComponent = ({ ...course }: SimpleCourseType) => {
  const screenSize = window.document.documentElement.scrollWidth;
  const placement = screenSize <= 600 ? "topStart" : "autoHorizontal";

  // const className = "w-52 card flex flex-col md:w-60   gap-1 md:ml-2 ";

  return (
    <>
      <div className="p-0 m-0 w-full">
        <Whisper
          trigger="hover"
          speaker={
            <Popover arrow={true}>
              <CouseContent {...course} />
            </Popover>
          }
          placement={placement}
          enterable
          controlId="control-id-hover-enterable"
        >
          <div>
            <CourseCard
              title={course?.title}
              imageurl={course?.imageurl}
              price={course?.price}
              author={course?.author}
              description={course?.description}
              classification={course?.classification}
              // className={className}
            />
          </div>
        </Whisper>
      </div>
    </>
  );
};

export default CourseComponent;
