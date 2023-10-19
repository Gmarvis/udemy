import React, { useState } from "react";
import Image from "next/image";
import Rate from "../../molecules/Rating";
import Link from "next/link";
import { Popover } from "react-tiny-popover";

type Props = {
  imageurl: string;
  title?: string;
  author?: string;
  price?: number;
  description?: string;
  classification?: string;
  content?: string;
  className?: string;
};

const CourseCard = ({
  title,
  classification,
  imageurl,
  author,
  price,
  description,
  className,
}: Props): React.JSX.Element => {
  const classN =
    "bg-bestseller px-3 py-1 text-md font-bold font-sans w-28 mt-2 h-fit-content";

  // const itemInCart = inCart ? "→ Item in Cart: ✔️" : null;

  return (
    <div className={className}>
      {/* <Link href={"#"}> */}
      <Image
        className="w-full h-44 md:mr-5 lg:w-64 lg:h-40 object-cover  bg-contain bg-right-top bg-no-repeat lg:w-96"
        src={imageurl}
        alt="product image"
        draggable={false}
        width={200}
        height={90}
      />
      <div>
        {" "}
        <h2 className="text-ctitle text-xl font-bold font-sans w-80">
          {title}
        </h2>
        <p className="text-sm font-extralight font-sans">{author}</p>
        <div className="flex">
          <span className="text-lg font-bold mr-2">4.5</span> <Rate />{" "}
        </div>
      </div>

      <p className="price text-lg">
        <span>₦</span>
        {price}
      </p>

      <p className="text-sm">{description}</p>
      {classification && (
        <p className="bg-bestseller px-4 py-1 text-md font-bold font-sans w-28 mt-2 h-8">
          {classification}
        </p>
      )}
      {/* </Link> */}
    </div>
  );
};

export default CourseCard;
