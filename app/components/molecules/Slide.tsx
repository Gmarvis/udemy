import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
  title: string;
  mainTitle: string;
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle }) => {
  return (
    <div className="outline-none border-none relative">
      <div className="border border-slate-50 lg:bg-white w-1/3 absolute left-[30px] md:left-[70px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none ">
        <div className=" flex flex-col gap-2 px-4 py-8">
          <h2 className="lg:text-[35px] leading-[1.2] font-bold">{title}</h2>
          <h3 className="text-blackish text-[16px] lg:text-[20px] md:text-[20px] leading-[1.2]">
            {mainTitle}
          </h3>
        </div>
      </div>

      <Image
        className="w-[100%] h-[300px] md:h-auto object-cover object-right md:object-left-bottom"
        src={img}
        alt="heroImage"
        width={2000}
        height={2000}
      />
    </div>
  );
};

export default Slide;
