import { fetchedCourses } from "@/lib/getCourses";
import { courseData } from "@/public/data/dummydata";
import { CourseType } from "@/types";
import { ReactElement, useState, createContext } from "react";

const initCourseState: CourseType[] = courseData;

//* we will use data from  server
// const initCourseState: CourseType [] = [];

export type CourseContextType = {
  courses: CourseType[];
};

const initContextState: CourseContextType = {
  courses: [],
};

export const CourseContext =
  createContext<CourseContextType>(initContextState);

type Childrentype = {
  children: ReactElement | ReactElement[];
};

export const CouseProvider = ({ children }: Childrentype): ReactElement => {
  const [courses, setCourses] = useState<CourseType[]>(initCourseState);

  // useEffect(() => {
  //   const courseData = await fetchedCourses()
  //   const crses = await courseData;
  //   if(crses)
  //     setCourses(crses)
  // },[]);

  return (
    <CourseContext.Provider value={{ courses }}>
      {" "}
      {children}{" "}
    </CourseContext.Provider>
  );
};
