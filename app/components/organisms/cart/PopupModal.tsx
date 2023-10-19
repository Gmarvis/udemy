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
import GotoCart from "../slide/GotoCart";

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
  const bgdialogRef = useRef<null | HTMLDialogElement>(null);

  const showDialog = searchParam.get("s");
  const router = useRouter();
  const [dialogRefModal, setDialogRefModal] = useState(false);
  const screenSize: number = window.document.documentElement.scrollWidth - 1;

  useEffect(() => {
    if (showDialog === "y") {
      // const mypopover = document.getElementById("modalpopover")!
      // mypopover.showPopover();
      dialogRef.current?.showModal();
      // bgdialogRef.current?.showModal();
      setDialogRefModal(true);
    } else {
      // bgdialogRef.current?.close();
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
        className=" w-128 md:w-170 flex items-start justify-center  relative  md:top-96  md:left-96   md:right-96  md:bottom-96 p-2 md:py-5 -translate-x-50 -translate-y-50 rounded-sm backdrop:bg-ctitle/60"
      >
        <GotoCart closeDialog={closeDialog} courseSelected={props.courseSelected} gotocart={gotocart} totalPrice={props.totalPrice} FreqBought={FreqBought} clickOk={clickOk}/>
      </dialog>
    ): showDialog === "x" ? (
      <>
      {/* <div className=" relative right-100 top-0 left-0 w-[200%] h-screen bg-white"></div> */}
      <dialog
        ref={dialogRef}
        className=" w-128 md:w-170 flex items-start justify-center  relative  p-2 md:py-5 -translate-x-50 -translate-y-50 rounded-sm backdrop:bg-white"
      >
        <GotoCart closeDialog={closeDialog} courseSelected={props.courseSelected} gotocart={gotocart} totalPrice={props.totalPrice} FreqBought={FreqBought} clickOk={clickOk}/>
      </dialog>
      </>
      
    ): null;

  return dialog;
    
}; {/* <div className=" fixed top-0 left-0 min-w-full min-h-screen bg-black/40" ></div> */}
    

export default PopupModal;
