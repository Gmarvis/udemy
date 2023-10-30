import React, { useState } from "react";
import Image from "next/image";

type Props = {
  image: string;
  title?: string;
  author?: string;
  price?: number;
  description?: string;
  classification?: string;
  content?: string;
  className?: string;
};

const PaidCourse = ({
  title,
  classification,
  image,
  author,
  price,
  description,
  className,
}: Props): React.JSX.Element => {
  return (
    <div className="w-64 flex w-full justify-start ">
      <Image
        src={image}
        className="w-20 h-24 md:mr-5  lg:h-28 object-cover  bg-contain bg-right-top bg-no-repeat "
        alt="product image"
        draggable={false}
        width={20}
        height={20}
      />
      <div className="w-64 flex flex-col w-full justify-start   items-start gap-4 ">
        <p className="text-ctitle text-sm font-bold font-sans w-36">{title}</p>
        <p className="text-sm font-extralight font-sans">{author}</p>
      </div>
    </div>
  );
};

export default PaidCourse;
