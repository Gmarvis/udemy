import { useContext } from "react";
import { CourseContext, CourseContextType } from "../context/courseProvider";

const useCourse = (): CourseContextType => {
  return useContext(CourseContext);
};

// we just need to simplify things
export default useCourse;
