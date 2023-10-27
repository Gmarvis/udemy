"use client";
import React, { useState } from "react";
import { HiPencil } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import Popup from "./popup";
import LogiNav from "../organisms/login-navbar";
type Props = {};

const MyList = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex gap-4 w-1/2 pb-3 items-center">
        <h1 className="font-semibold text-lg">Instructor Collaborator</h1>
        <HiPencil onClick={() => setIsOpen((prev) => !prev)} />
        <MdDelete />
      </div>
      {isOpen && (
        <Popup
          handleClose={() => setIsOpen((prev) => !prev)}
        >
          <LogiNav/>
        </Popup>
      )}
      <p>Learn the ins and outs on how to be a successfull instructor on Udemy</p>
      <br></br>
      <p>No courses in this list yet</p>
    </div>
  );
};

export default MyList;
