"use client";
import React from "react";
import Button from "../atoms/Button";
import { SlBasket } from "react-icons/sl";

type Props = {};

const GoToCart = (props: Props) => {
  function handleClick(): void {
    console.log("Hello Go to cart");
  }

  return (
    <div className="relative ">
      <p className="peer hover:cursor-pointer">
        <SlBasket className="h-5 w-5 hover:cursor-pointer hover:text-violet-600" />
      </p>

      <div className="group-hover:visible focus:outline-none absolute mt-1 ml-[-250px] w-[300px] bg-white drop-shadow-lg hidden peer-hover:flex z-10 flex-col hover:flex">
        <div className="z-[-1] overflow-auto w-fit px-4">Cart</div>
        <div className="z-10">
          <h1 className="font-semibold text-lg md:px-3">Total Price: $1200</h1>
          <Button
            className="mb-4  text-sm font-semibold hover:cursor-pointer w-full text-white hover:opacity-70 bg-black py-3 md:px-3"
            label="Go to Cart"
            onClick={() => handleClick()}
          />
        </div>
      </div>
    </div>
  );
};

export default GoToCart;
