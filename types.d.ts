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
  id?: string;
  title: string;

  description: string;
  price: string | number;
  imageurl: string;
  video?: string;
  author: string;
  classification?: string;
  totalHours?: number;
  lectures?: number;
  level?: string;
};

type CartItemType = {
  id?: string;
  title: string;
  price?: number | string;
  author: string;
  totalHours?: number;
  lectures?: number;
  level?: string;
  participants?: number;
  courseList: Array<CartItemType>;
};
