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
        className="w-full md:mr-5 h-64 lg:h-48 object-cover  bg-contain bg-right-top bg-no-repeat lg:w-96"
        src={imageurl}
        alt="product image"
        draggable={false}
        width={400}
        height={300}
      />
      <div>
        {" "}
        <h2 className="text-ctitle text-2xl font-bold font-sans w-80">
          {title}
        </h2>
        <p className="text-md font-extralight font-sans">{author}</p>
        <div  className="flex">
          <span className="text-2xl font-bold mr-2">4.5</span> <Rate />{" "}
        </div>
      </div>

      <p className="price text-2xl">
        <span>₦</span>
        {price}
      </p>

      <p>{description}</p>
      {classification && <p className= "bg-bestseller px-3 py-1 text-md font-bold font-sans w-24 mt-2 h-8">{classification}</p>}
      {/* </Link> */}
    </div>
  );
};

export default CourseCard;
