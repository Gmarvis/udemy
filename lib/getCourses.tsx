import { CourseType, SimpleCourseType } from "@/types";

export const fetchedCourses = async (): Promise<CourseType[]> => {
  const data = await fetch("http://localhost:3500/couses")
    .then((response) => response.json())
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

// fetchedProducts().then(products =>{
//   console.log(products);

// })

export function getRandomArrySorted(
  array: SimpleCourseType[]
): SimpleCourseType[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
