import React, { useState } from "react";
import Image from "next/image";
import Rate from "../molecules/Rating";
import Link from "next/link";
import { Popover } from "react-tiny-popover";

type Props = {
  imageurl: string;
  name: string;
  author: string;
  price: string;
  description: string;
  classification?: string;
  content?: string;
};

const CourseCard = ({
  name,
  classification,
  imageurl,
  author,
  price,
  description,
}: Props): React.JSX.Element => {
  const classN =
    "bg-bestseller px-3 py-1 text-md font-bold font-sans w-28 mt-2";

  return (
    <div className=" card w-full flex flex-col md:w-90   gap-4 md:ml-2 2xl:mx-0">
      {/* <Link href={"#"}> */}
      <Image
        className="w-full h-64 lg:h-48 object-cover  bg-contain bg-right-top bg-no-repeat lg:w-96"
        src={imageurl}
        alt="product image"
        draggable={false}
        width={400}
        height={300}
      />
      <h2 className="text-ctitle text-2xl font-bold font-sans w-80">{name}</h2>
      <p className="text-md font-extralight font-sans">{author}</p>
      <div className="flex flex-row">
        <span className="text-2xl font-bold mr-2">4.5</span> <Rate />{" "}
      </div>
      <p className="price text-2xl">
        <span>₦</span>
        {price}
      </p>

      <p>{description}</p>
      {classification && <p className={classN}>{classification}</p>}
      {/* </Link> */}
    </div>
  );
};

export default CourseCard;
