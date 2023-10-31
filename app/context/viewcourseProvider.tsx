import { fetchedCourses } from "@/lib/getCourses";
import { courseData } from "@/public/data/dummydata";
import { CourseType, CartItemType, SimpleCourseType } from "@/types";
import {
  ReactElement,
  useState,
  createContext,
  useEffect,
  useContext,
} from "react";

//* we will use data from  server
// const initCourseState: CourseType [] = [];

export type CourseContextType = {
  courses: SimpleCourseType[];
};

const initWatchCourse: CourseType = {
  id: "",
  author: "",
  authorInfor: [],
  createdAt: "",
  description: "",
  dislikes: 0,
  image: "",
  language: "",
  level: "",
  likes: 0,
  materials: [],
  price: 0,
  subTitle: "",
  title: "",
  lectures: 0,
  participants: 0,
  updatedAt: "",
  totalHours: 0,
};

type CourseProviderType = {
  watchCourse: CourseType;
  setWatchCourse: React.Dispatch<CourseType>;
};

export const WatchCourseContext = createContext<CourseProviderType>({
  watchCourse: {
    id: "",
    author: "",
    authorInfor: [],
    createdAt: "",
    description: "",
    dislikes: 0,
    image: "",
    isSaveForLater: undefined,
    language: "",
    level: "",
    likes: 0,
    materials: [],
    price: 0,
    subTitle: "",
    title: "",
    lectures: 0,
    participants: 0,
    updatedAt: "",
    totalHours: 0,
    classification: undefined,
  },
  setWatchCourse: function (value: CourseType): void {
    throw new Error("Function not implemented.");
  },
});

type Childrentype = {
  children: ReactElement | ReactElement[];
};

const WatchCourseProvider = ({ children }: Childrentype): ReactElement => {
  const [watchCourse, setWatchCourse] = useState<CourseType>(initWatchCourse);

  return (
    <WatchCourseContext.Provider value={{ watchCourse, setWatchCourse }}>
      {" "}
      {children}{" "}
    </WatchCourseContext.Provider>
  );
};

export const useWatchCourse: () => CourseProviderType = () => {
  return useContext(WatchCourseContext);
};

// we just need to simplify things

export default WatchCourseProvider;
