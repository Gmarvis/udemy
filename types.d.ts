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

// type CourseType = {
//   id: string;
//   title: string;
//   price: number;
//   description: string;
//   author: string;
//   totalHours: number;
//   lectures: number;
//   level: string;
//   participants: number;
//   imageurl: string;
//   video?: string;
//   classification?: string;
// };

export type CourseType = {
  id: "string";

  author: "string";
  authorInfor: [];

  createdAt: "string";

  description: "string";

  dislikes: number;

  image: "string";

  isSaveForLater: boolean;

  language: "string";

  level: "BeginnerbooleanLevel";

  likes: number;

  materials: [];

  price: number;

  subTitle: "string";

  title: "string";

  updatedAt: "string";

  classification: string;
};

type SimpleCourseType = Pick<
  CourseType,
  | "id"
  | "image"
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
