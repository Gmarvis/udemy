import React from "react";
import Link from "next/link";
import SliderComponent from "../slide/Slider";

type Props = {
  categoryTitle?: string;
  categoryContent?: string;
  categoryName?: string;
  children: JSX.Element;
};

const SliderContainer = (props: Props) => {
  return (
    <div className=" flex flex-col gap-4 ring ring-gray2 pt-8 pl-5 mb-16 mt-0">
      {props.categoryTitle && (
        <h3 className="mb-3 ml-2 font-bold text-sm text-black">
          {props.categoryTitle}
        </h3>
      )}
      {props.categoryContent && (
        <p className="mb-4 ml-2 text-xs">{props.categoryContent}</p>
      )}

      {props.categoryName && (
        <Link
          href={"#"}
          className=" text-xs  ring-black p-2 w-[260px] ml-2 text-black decoration-none ring-1"
        >
          {" "}
          <span>Explore {props.categoryName}</span>{" "}
        </Link>
      )}
      <div className="my-5 ">{props.children}</div>
    </div>
  );
};

export default SliderContainer;
