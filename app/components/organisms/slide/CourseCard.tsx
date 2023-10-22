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
  // const itemInCart = inCart ? "→ Item in Cart: ✔️" : null;

  return (
    <div className="w-48 flex flex-col md:w-60   gap-1 md:ml-2 ">
      {/* <Link href={"#"}> */}
      <Image
        className="w-72 h-28 md:mr-5 lg:w-56 lg:h-28 object-cover  bg-contain bg-right-top bg-no-repeat "
        src={imageurl}
        alt="product image"
        draggable={false}
        width={200}
        height={90}
      />
      <div>
        {" "}
        <p className="text-ctitle text-sm font-bold font-sans w-36">{title}</p>
        <p className="text-sm font-extralight font-sans">{author}</p>
        <div className="flex items-center">
          <span className="text-sm font-bold mr-2 ">4.5</span>{" "}
          <Rate className="text-xs" />{" "}
        </div>
      </div>

      <p className="price text-sm text-ctitle">
        <span>₦</span>
        {price}
      </p>

      <p className="text-xs w-48 lg:w-auto">{description}</p>
      {classification && (
        <p className="bg-bestseller px-4 py-1 text-xs font-bold font-sans w-24 mt-2 h-8">
          {classification}
        </p>
      )}
      {/* </Link> */}
    </div>
  );
};

export default CourseCard;
