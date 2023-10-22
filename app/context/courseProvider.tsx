import { fetchedCourses } from "@/lib/getCourses";
import { courseData } from "@/public/data/dummydata";
import { CourseType, CartItemType, SimpleCourseType } from "@/types";
import { ReactElement, useState, createContext } from "react";

const initCourseState: SimpleCourseType[] = courseData;

//* we will use data from  server
// const initCourseState: CourseType [] = [];

export type CourseContextType = {
  courses: SimpleCourseType[];
};

const initContextState: CourseContextType = {
  courses: [],
};

export const CourseContext = createContext<CourseContextType>(initContextState);

type Childrentype = {
  children: ReactElement | ReactElement[];
};

const CourseProvider = ({ children }: Childrentype): ReactElement => {
  const [courses, setCourses] = useState<SimpleCourseType[]>(initCourseState);

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

export default CourseProvider;
