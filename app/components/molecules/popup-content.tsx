import React from "react";
import { IoMdClose } from "react-icons/io";

type Props = {};

const EditYourList = (props: Props) => {
  return (
    <div>
      <div className="flex justify-between p-8">
        <h1>Edit your list</h1>
        <IoMdClose />
      </div>
      <input type="text" maxLength={39} value="Instructor collection" />
      <textarea maxLength={132} ></textarea>
      <div>
        <p></p>
        <div>
          <button className="hover:cursor-pointer hover:bg-slate-100 border-2 border-gray-500 px-3 py-1">
            Cancel
          </button>
          <button className="hover:cursor-pointer text-white hover:opacity-70 bg-black py-1 px-3">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditYourList;
