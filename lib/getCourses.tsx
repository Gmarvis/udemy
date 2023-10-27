import { CourseType, SimpleCourseType, CartItemType } from "@/types";
import { server } from "./config";
import { LOCAL_STORAGE } from "@/services/storage";

export const fetchedCourses = async (): Promise<CourseType[]> => {
  const token = LOCAL_STORAGE.get("token");
  console.log(" token:", token);

  const resp = await server.get("/courses", {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });
  if (resp.status === 200) {
    return resp.data;
  }
  return [];
};

export function getRandomArrySorted(
  array: SimpleCourseType[]
): SimpleCourseType[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
