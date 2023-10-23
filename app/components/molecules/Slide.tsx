import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
  title: string;
  mainTitle: string;
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle }) => {
  return (
    <div className="relative outline-none border-none max-[700px]:flex max-[698px]:flex-col-reverse max-[700px]:h-[100%]">
      <div className=" absolute border border-slate-50 bg-white w-1/3   left-[30px] md:left-[70px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 p-4 sm:p-0 rounded-lg sm:rounded-none max-[700px]:relative">
        <div className=" flex flex-col gap-2 px-4 py-8 bg-slate-50">
          <h2 className="text-[14px] lg:text-[20px] leading-[1.2] font-bold">
            {title}
          </h2>
          <h3 className="text-blackish text-[10px] lg:text-[16px] md:text-[14px] leading-[1.2]">
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

      {/* <div className="max-[699px]:hidden">
      <Image
        className="w-[100%] h-[300px] md:h-auto object-cover object-right md:object-left-bottom"
        src={img}
        alt="heroImage"
        width={2000}
        height={2000}
      />
      </div> */}
    </div>
  );
};

export default Slide;
