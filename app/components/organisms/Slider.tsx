import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CourseCard from "./CourseCard";
import { courseData, responsive } from "@/public/data/dummydata";

export default function SliderComponent() {
  const product = courseData.map((item) => (
    <CourseCard
      name={item?.name}
      imageurl={item?.imageurl}
      price={item?.price}
      author={item?.author}
      description={item?.description}
      key={item?.id}
      classification={item?.classification}
    />
  ));

  return (
    <div className="App">
      <h1>Learners are viewing</h1>
      <Carousel responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
