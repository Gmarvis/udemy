import React from "react";
import { IoMdClose } from "react-icons/io";

interface Props {
  handleClose(): void;
  children: React.ReactElement;
}

const Popup: React.FC<Props> = ({ handleClose, children }: Props) => {
  return (
    <div className="fixed bg-black opacity-80 w-full h-full top-0 left-0">
      <div className="w-[70%] relative bg-white opacity-20 rounded p-5 border overflow-auto shadow md:w-[40%] max-h-fit my-0 mx-auto mt-[calc[100vh_-_90vh_-_20px]] md:mt-[calc[100vh_-_85vh_-_20px]]">
        <span
          onClick={handleClose}
          className="content-['x'] cursor-pointer text-center right-[calc[15%-30px]] fixed md:right-[calc[30%-30px]]  top-[calc[100vh-90vh-33px]] md:top-[calc[100vh-85vh-33px]] bg-gray w-5 h-5 text-red rounded-full leading-5 border text-xl"
        >
          <IoMdClose />
        </span>
        {children}
      </div>
    </div>
  );
};

export default Popup;
