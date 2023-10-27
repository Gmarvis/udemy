"use client"
import React from "react";
import { useRouter } from "next/navigation";

type Props = {};

const ListItems = (props: Props) => {

  const router = useRouter()

  const handleClick = () => {
    router.push("/home/learning-tool")
  }

  return (
    <div className="text-white opacity-90 bg-black">
      <div className="w-1/2 bg-violet mx-auto">
        <h1 className="py-6 font-semibold text-4xl leading-normal">My Learning</h1>
        <div className="flex gap-5 text-base font-semibold py-4">
          <h3 className="hover:cursor-pointer ">My learning</h3>
          <h3 className="hover:cursor-pointer ">My Lists</h3>
          <h3 className="hover:cursor-pointer ">Whishlist</h3>
          <h3 className="hover:cursor-pointer ">Archived</h3>
          <h3 onClick={() => handleClick()} className="hover:cursor-pointer ">Learning tools</h3>
        </div>
      </div>
    </div>
  );
};

export default ListItems;
