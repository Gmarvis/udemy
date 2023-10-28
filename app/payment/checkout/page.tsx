"use client"

import Image from "next/image";
import React from "react";

type Props = {};

const CheckoutPage = (props: Props) => {


  function handleClick(): void {
    console.log("this is the function")
    
  }

  return (
    <div>
      <div className="flex justify-between shadow md:py-3">
        <Image
          src="/logo-udemy (1).svg"
          alt="udemy logo"
          className="py-2 md:pl-8 md:hidden"
          width={75}
          height={28}
        />
        <Image
          src="/logo-udemy (1).svg"
          alt="udemy logo"
          className="py-2 md:pl-8 hidden md:flex"
          width={120}
          height={120}
        />
        <p
          className="my-auto hover:cursor-pointer font-semibold pr-8 text-violet-600"
          onClick={() => handleClick ()}
        >
          Cancel
        </p>
      </div>
      <div className=""></div>
      <div className="md:bg-gray-500"></div>
    </div>
  );
};

export default CheckoutPage;
