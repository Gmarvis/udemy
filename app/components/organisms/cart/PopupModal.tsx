"use client";
import { useSearchParams } from "next/navigation";
import { useRef, useEffect, ReactNode } from "react";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";
import { CartItemType, SimpleCourseType } from "@/types";
import CourseCard from "../slide/CourseCard";
import { useRouter } from "next/navigation";

type Props = {
  gotoCart: () => void;
  addAll: () => void;
  // courseSelected: SimpleCourseType;
  price: number;
  partListOfCourses: SimpleCourseType[];
};

const PopupModal = (props: Props) => {
  const searchParam = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const showDialog = searchParam.get("showDialog");
  const router = useRouter();

  useEffect(() => {
    if (showDialog === "y") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const closeDialog = () => {
    dialogRef.current?.close();
    router.push("/");
  };

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

  const FreqBought = props.partListOfCourses?.map((course) => (
    <CourseCard
      title={course.title}
      imageurl={course.imageurl}
      price={course.price}
      author={course.author}
      description={course.description}
      classification={course?.classification}
      className={className}
      key={course.id}
    />
  ));

  const courseData: string | null = localStorage.getItem("itemCourse");
  if (courseData === "null") return;

  const course = JSON.parse(courseData as string);

  console.log("course: ", course);

  const dialog: JSX.Element | null =
    showDialog === "y" ? (
      <dialog
        ref={dialogRef}
        className="absolute top-96 left-72 right-72 bottom-96 -translate-x-50 -translate-y-50 rounded-sm backdrop:bg-gray-800/70"
      >
        <div className="flex flex-col border">
          <div className="flex justify-between w-full px-10 p">
            <h2>Added to cart </h2>
            <button onClick={closeDialog}>X</button>
          </div>
          <div className="flex flex-row items-center justify-between p-10 ">
            <div className="flex flex-row gap-4">
              <BsCheckCircle
                className="bg-tahiti text-white text-xl mr-2 rounded-full border-0"
                size={50}
              />
              {/* <Image
                src={course?.imageurl}
                alt={course?.title}
                className="w-28 h-28 "
              />{" "} */}
            </div>
            <div>
              <button
                className="w-fit-content py-5 px-4 bg-black text-white "
                onClick={gotocart}
              >
                Go to cart
              </button>
            </div>
          </div>

          <div>
            <h3>Frequently bought Together</h3>
            <div> {FreqBought} </div>

            <div>
              <p>
                Total:{" "}
                {Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(props.price)}
              </p>
              <button
                className="w-fit-content py-5 px-4 bg-violet text-white "
                onClick={clickOk}
              >
                Add all to cart
              </button>
            </div>
          </div>
        </div>
      </dialog>
    ) : null;

  return dialog;
};

export default PopupModal;
