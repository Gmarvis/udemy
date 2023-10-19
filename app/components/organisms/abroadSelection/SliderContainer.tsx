import React from "react";
import Link from "next/link";
import SliderComponent from "../slide/Slider";

type Props = {
  categoryTitle: string;
  categoryContent: string;
  categoryName: string;
  children: JSX.Element;
};

const SliderContainer = (props: Props) => {
  return (
    <div className=" flex flex-col gap-4 ring ring-gray2 pt-8 pl-5 mb-16 mt-0">
      <h3 className="mb-3 ml-8 font-bold text-2xl">{props.categoryTitle}</h3>
      <p className="mb-4 ml-8">{props.categoryContent}</p>

      <Link
        href={"#"}
        className=" ring ring-black p-3 w-[300px] ml-8 text-black decoration-none"
      >
        {" "}
        <span>Explore {props.categoryName}</span>{" "}
      </Link>
      <div className="my-5 ">{props.children}</div>
    </div>
  );
};

export default SliderContainer;
