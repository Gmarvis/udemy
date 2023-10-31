"use client";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import "rsuite/dist/rsuite.min.css";
import { Popover, Whisper } from "rsuite";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/navigation";

const list = [
  "Newest",
  "Oldest",
  "A-Z",
  "Z-A",
  "Publish first",
  "Unpublish first",
];
type Props = {};

const SearchSelectNewCourse = (props: Props) => {
  const [buttonValue, setButtonValue] = useState("Newest");
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const options = list.map((prop, i) => (
    <option
      key={i}
      className="hover:text-violt text-[#2d2f31] "
      onClick={() => setButtonValue(prop)}
    >
      {" "}
      {prop}
    </option>
  ));

  return (
    <div className="flex justify-between items-center my-5 ">
      <div className="flex item-center justify-center gap-10">
        <div className="flex item-center justify-center gap-0">
          <input
            type="search"
            id="searck"
            name="search"
            placeholder="Search your courses"
            className=" py-1 pl-4 p w-fit border border-[#2d2f31] text-[13px] outline-0 outline-none"
          />
          <span className="p-1 w-14  bg-[#3e4143] text-white border border-[#2d2f31] text-[12px] flex justify-center items-center">
            <GoSearch size={30} />
          </span>
        </div>
        <div className="w-fit">
          <Whisper
            trigger="click"
            speaker={
              <Popover arrow={false}>
                <div className="h-fit flex flex-col gap-3 w-48  text-[12px] text-black font-sans ">
                  {options}
                </div>
              </Popover>
            }
            placement="bottomStart"
            enterable
            controlId="control-id-hover-enterable"
          >
            <button
              className=" py-3 px-4 bg-white hover:bg-[#1739531f] border border-ctitle w-fit flex justify-between"
              onClick={() => setOpenModal(true)}
            >
              {" "}
              <b>{buttonValue}</b>
              <MdKeyboardArrowDown size={20} className="ml-2" />
            </button>
          </Whisper>
        </div>
      </div>
      <div className=" w-fit bg-violt text-white py-3 px-2 max-[767px]:hidden imd:visible">
        <button className="w-full " onClick={() => router.push("/teachflowa")}>
          <b>New course</b>
        </button>
      </div>
    </div>
  );
};

export default SearchSelectNewCourse;
