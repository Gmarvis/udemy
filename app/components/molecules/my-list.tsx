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
      <div className="flex gap-4 w-1/2 mx-auto">
        <h1>Instructor Collaborator</h1>
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
    </div>
  );
};

export default MyList;
