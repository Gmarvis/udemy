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
      <div className="absolute left-[30px] bg-white md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
        <h2 className="text-[35px] lg:text-[28px] font-medium">{title}</h2>
        <h3 className="text-blackish text-[12px] md:text-[30px] leading-[1.2]">
          {mainTitle}
        </h3>
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
