"use client";
import { useSearchParams } from "next/navigation";
import { useRef, useEffect, ReactNode, useCallback, useState } from "react";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";
import { CartItemType, SimpleCourseType } from "@/types";
import CourseCard from "../slide/CourseCard";
import { useRouter } from "next/navigation";
import Link from "next/link";

import ModalCourseCard from "./modalCourseCard";

type Props = {
  gotoCart: () => void;
  addAll: () => void;
  courseSelected: SimpleCourseType;
  totalPrice: number;
  partListOfCourses: SimpleCourseType[];
};

const PopupModal = (props: Props) => {
  const searchParam = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const showDialog = searchParam.get("showDialog");
  const router = useRouter();
  const [dialogRefModal, setDialogRefModal] = useState(false);

  useEffect(() => {
    if (showDialog === "y") {
      // const mypopover = document.getElementById("modalpopover")!
      // mypopover.showPopover();
      dialogRef.current?.showModal();
      setDialogRefModal(true);
    } else {
      dialogRef.current?.close();
    }
   
  }, [showDialog]);

  const closeDialog = () => {
    dialogRef.current?.close();
    router.push("/");
  };

  // console.log("dialogRefModal: " + dialogRefModal); 
  //   const handleOutSideClick = (event) => {
  //     if (!dialogRef.current?.contains(event.target) && dialogRefModal) {
       
  //       console.log("Outside Clicked. ");
  //       closeDialog();
  //       // setDialogRefModal(false);
  //     }
  //     setDialogRefModal(false);
  //   };

  //   dialogRefModal ? window.addEventListener("click", handleOutSideClick) : null;

  const clickOk = () => {
    props.addAll();
    closeDialog();
  };

  const gotocart = () => {
    props.gotoCart();
    closeDialog();
    router.push('/cart');
  };

  const className = "flex flex-row gap-4";
  let newList = props.partListOfCourses.filter((course) => course.id !== props.courseSelected.id);
  newList = [props.courseSelected, ...newList]
  const FreqBought = newList?.map((course) => (
   <Link href={"#"} key={course.id} className=" hover:no-underline decoration-black">
    <ModalCourseCard {...course} key ={course.id} />
 </Link> 
  ));


  const dialog: JSX.Element | null =
    showDialog === "y" ? (
      <dialog
        ref={dialogRef}
        id="modalpopover"
        className=" absolute top-96 left-96 right-96 bottom-96 p-5  -translate-x-50 -translate-y-50 rounded-sm"
      >
        <div className="flex flex-col py-4 px-5">
          <div className="flex justify-between w-full">
            <h4>Added to cart </h4>
            <button onClick={closeDialog} className="text-2xl bg-opacity-0 border-0">X</button>
          </div>
          <div className="flex flex-row items-center item-center justify-between my-6">
            <div className="flex gap-2 item-center justify-center" >
              <BsCheckCircle
                className="bg-tahiti text-white text-xl mr-2 rounded-full border-0 mt-3"
                size={50}
              />
              <div className="flex">
              <Image
                src={props.courseSelected?.imageurl}
                alt={props.courseSelected?.title}
                className="w-20 h-23 mr-4"
                width={122}
                height={122}
              />{" "}
              <div>
                <p className="font-bold text-xl"> {props.courseSelected?.title}</p>
                <p className=" text-lg text-udemy">{props.courseSelected?.author}</p>
              </div>
              
              </div>
              
            </div>
            <div>
              <button
                className="w-fit-content py-5 px-5 bg-black text-white "
                onClick={gotocart}
              > <h5>Go to cart</h5>
                
              </button>
            </div>
          </div>

          <div  className="listofFrequentlyBought border py-6 px-8">
            <h3 className=" mb-5">Frequently bought Together</h3>
            <div> {FreqBought} </div>

            <div className="flex flex-row items-center item-center justify-between p-8 ">
              <p className=" text-2xl">
                Total:{" "}
                {/* <span className=" font-bold">
                  {Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "NGN",
                }).format(props.price)} */}
                <span className=" font-bold"> {props.totalPrice.toFixed(2)} ₦
                </span>
              </p>
              <button
                className="w-fit-content py-5 px-4 bg-violet text-white "
                onClick={clickOk}
              >
                <h5>Add all to cart</h5>
              </button>
            </div>
          </div>
        </div>
      </dialog>
    ) : null;

  return dialog;
    
}; {/* <div className=" fixed top-0 left-0 min-w-full min-h-screen bg-black/40" ></div> */}
    

export default PopupModal;
