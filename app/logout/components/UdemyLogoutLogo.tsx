import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
}

const UdemyLogoutLogo: React.FC<propsType> = ({ img }) => {
  return (
    <div className="relative outline-none border-none ">
      <Image
        className="w-full h-[300px] md:h-[400px]"
        src={img}
        alt="heroImage"
        width={500}
        height={500}
      />
    </div>
  );
};
//max-[700px]:flex max-[698px]:flex-col-reverse max-[700px]:h-[100%]
export default UdemyLogoutLogo;
