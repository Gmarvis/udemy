import { ReactElement } from "react";
import { Course, UserFromBE } from "./lib";

type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  createdAt: string;
  updatedAt: string;
};

export type userData = Omit<UserFromBE, "createdAt" | "updatedAt">;

export type courseData = Omit<Course, "createdAt"> & {
  createdAt: string;
};

type CourseType = {
  id: string;
  title: string;
  price: number;
  description: string;
  author: string;
  totalHours: number;
  lectures: number;
  level: string;
  participants: number;
  imageurl: string;
  video?: string;
  classification?: string;
};

type SimpleCourseType = Pick<CourseType, "id"
  | "imageurl"
  | "title"
  | "author"
  | "price"
  | "description"
  | "classification"
>;

type CartItemType = Partial<CourseType>;

type SafeItemType = {
  courseList: CartItemType[];
};

type PartiaCartItemType = Pick<ItemType, "courseList">;
