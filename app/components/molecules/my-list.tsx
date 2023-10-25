import React from "react";
import { HiPencil } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
type Props = {};

const MyList = (props: Props) => {
  return (
    <div className="flex gap-4 w-1/2 mx-auto">
      <h1>
        Instructor Collaborator
      </h1>
      <HiPencil/>
      <MdDelete/>
    </div>
  );
};

export default MyList;
