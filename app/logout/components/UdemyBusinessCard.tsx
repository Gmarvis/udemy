import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const UdemyBusinessCard = (props: Props) => {
  return (
    <div className="w-full smd:w-[316px] flex flex-col items-center smd:items-start smd:justify-start smd:ml-6 gap-3 smd:-translate-y-64 lg:-translate-y-72    mt-6 lg:mb-24 lg:ml-16">
      <div className="udemybusiness flex flex-row  w-fit gap-2">
        <Image
          src={"https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"}
          alt=""
          width={270}
          height={270}
          className=" lg:objet-cover lg:w-72 "
        />
      </div>
      <p className=" text-[#1c1d1f] text-sm font-segoe lg:text-lg lg:w-[400px]">
        Your company can give you access to our top 22,000+ business and tech
        courses.
      </p>
      <button className="udemybusinesslink text-white font-bold w-fit bg-ctitle pb-3 pt-4 px-4 no-underline">
        Learn More
      </button>
    </div>
  );
};

export default UdemyBusinessCard;
