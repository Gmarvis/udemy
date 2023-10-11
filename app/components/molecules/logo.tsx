import Image from "next/image";
import React from "react";

const Logo = () => {
  const images = [
    "volkswagen.svg",
    "samsung.svg",
    "cisco.svg",
    "att.svg",
    "procter_gamble.svg",
    "hewlett_packard_enterprise.svg",
    "citi.svg",
    "ericsson.svg",
];

  return (
    <div className="bg-gray-100 h-[250px] flex flex-col items-center justify-center mt-[50px] md:flex-nowrap">
      <h3 className="text-[20px] text-gray-500 font-medium">
        Trusted by over 14,400 companies and millions of learners around the
        world
      </h3>
      <div className="w-[80%] gap-8 flex justify-around items-center p-2">
      {images.map((image) => (
        <div className="">
          <Image key={image} src={image} width={80} height={50} alt="logos" />
        </div>
      ))}
      </div>
    </div>
  );
};

export default Logo;
