import React from 'react';
import Image from 'next/image';
import { BsCheckCircle } from "react-icons/bs";
import { SimpleCourseType } from "@/types";

type Props = {
    closeDialog: () => void;
    courseSelected: SimpleCourseType;
    gotocart: () => void;
    totalPrice: number;
    FreqBought: JSX.Element[]
    clickOk: () => void
}

const GotoCart = ({closeDialog, courseSelected, gotocart, totalPrice, FreqBought, clickOk}: Props): JSX.Element => {
  const screenWith = window.document.documentElement.scrollWidth - 1 < 600;

    const normalDiv = (
<div className="flex flex-row items-center item-center justify-between my-6">
        <div className="flex gap-2 item-center justify-center" >
            <BsCheckCircle
            className="bg-tahiti text-white text-xl mr-1 rounded-full border-0 mt-3 outline-none w-10 h-10"
            // size={50}
            />
            <div className="flex">
            <Image
            src={courseSelected?.imageurl}
            alt={courseSelected?.title}
            className="w-16 h-17 mr-4"
            width={122}
            height={122}
            />{" "}
            <div>
            <p className="font-bold text-sm"> {courseSelected?.title}</p>
            <p className=" text-md text-udemy">{courseSelected?.author}</p>
            </div>
            
            </div>
            
        </div>
        <div>
          <button
            className="w-fit-content p-2 md:p-4 bg-black text-white"
            onClick={gotocart}  
            > <h5>Go to cart</h5>
            
            </button>
            
        </div>
        </div>
    )

    const responsiveDiv = (
        <div className="flex flex-col items-center item-center justify-between my-6 mt-6">
        <div className="flex gap-2 item-center justify-center mb-4" >
            <BsCheckCircle
            className="bg-tahiti text-white text-xl mr-1 rounded-full border-0 mt-3 outline-none w-10 h-10"
            // size={50}
            />
            <div className="flex">
            <Image
            src={courseSelected?.imageurl}
            alt={courseSelected?.title}
            className="w-16 h-17 mr-4"
            width={122}
            height={122}
            />{" "}
            <div>
            <p className="font-bold text-sm"> {courseSelected?.title}</p>
            <p className=" text-md text-udemy">{courseSelected?.author}</p>
            </div>
            
            </div>
            
        </div>
        <div className=' w-full py-2 px-10 bg-ctitle text-white flex justify-center items-center'>
          <button
            className="w-fit-content"
            onClick={gotocart}  
            > <h5>Go to cart</h5>
            
            </button>
            
        </div>
        </div>
    )
  
    return (
    <div className="  flex flex-col py-2 px-3 mr-0 ">
        <div className="flex justify-between w-full">
        <p className="md:text-xl text-lg font-bold">Added to cart </p>
        <button onClick={closeDialog} className="text-2xl bg-opacity-0 border-0 outline-none">X</button>
        </div>
       { screenWith ? responsiveDiv : normalDiv}
        <div  className="listofFrequentlyBought border px-2 md:py-6 md:px-3 bg-white/100 ">
        <h5 className=" mb-5">Frequently bought Together</h5>
        <div> {FreqBought} </div>

        <div className="flex flex-row items-center item-center justify-between p-8 ">
            <p className=" md:text-2xl">
            Total:{" "}
            <span className=" font-bold text-xl"> {totalPrice.toFixed(2)} ₦
            </span>
            </p>
            <button
            className="w-fit-content md:p-4 py-3 px-3 bg-violet text-white "
            onClick={clickOk}
            >
            <p className=" md-text-2xl text-xl font-bold">Add all to cart</p>
            </button>
        </div>
        </div>
  </div>
  )
}

export default GotoCart
