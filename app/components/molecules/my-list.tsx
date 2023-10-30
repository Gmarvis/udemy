"use client";
import React, { useState } from "react";
import { HiPencil } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import Popup from "./popup";
import LogiNav from "../organisms/login-navbar";
import EditYourList from "./popup-content";
type Props = {};

const MyList = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex gap-4 md:w-1/2 px-3 w-full pb-3 items-center p">
        <h1 className="font-semibold text-lg">Instructor Collaborator</h1>
        <HiPencil
          className="hover:cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        />
        <MdDelete className="hover:cursor-pointer" />
      </div>
      {isOpen && (
        <Popup handleClose={() => setIsOpen((prev) => !prev)}>
          <EditYourList />
        </Popup>
      )}
      <div className="px-3">
        <p>
          Learn the ins and outs on how to be a successfull instructor on Udemy
        </p>
        <br></br>
        <p>No courses in this list yet</p>
      </div>
    </div>
  );
};

export default MyList;
