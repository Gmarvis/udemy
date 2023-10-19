import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiMonitorPlayBold } from "react-icons/pi";
import { BiMessageDetail } from "react-icons/bi";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { FiTool } from "react-icons/fi";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

const Sidenav = () => {
  return (
    <div className="bg-black w-[330px] flex flex-col">
      <Image
        src="/logo-udemy.svg"
        className="py-4 pl-8 hover:bg-slate-600"
        width={90}
        height={45}
        alt="logo"
      />
      <li className="flex gap-8 items-center py-4 pl-8 hover:bg-slate-600">
        <PiMonitorPlayBold className="text-white w-[25px] h-[25px]"/>
        <Link href="#" legacyBehavior className="">
          <a href="#" className="text-[18px] font-bold text-white">
            Courses
          </a>
        </Link>
      </li>
      <li className="flex gap-8 items-center py-4 pl-8 hover:bg-slate-600">
        <BiMessageDetail  className="text-white w-[25px] h-[25px]"/>
        <Link
          href="#"
          legacyBehavior
          className=""
        >
          <a href="#" className='text-[18px] font-bold text-white'>Communication</a>
        </Link>
      </li>
      <li className="flex gap-8 items-center py-4 pl-8 hover:bg-slate-600">
        <BiSolidBarChartAlt2  className="text-white w-[25px] h-[25px]"/>
        <Link
          href="#"
          legacyBehavior
          className=""
        >
          <a href="#" className='text-[18px] font-bold text-white'>Performances</a>
        </Link>
      </li>
      <li className="flex gap-8 items-center py-4 pl-8 hover:bg-slate-600">
        <FiTool className="text-white w-[25px] h-[25px]"/>
        <Link
          href="#"
          legacyBehavior
          className=""
        >
          <a href="#" className='text-[18px] font-bold text-white'>Tools</a>
        </Link>
      </li>
      <li className="flex gap-8 items-center py-4 pl-8 hover:bg-slate-600">
        <HiOutlineQuestionMarkCircle className="text-white w-[25px] h-[25px]" />
        <Link
          href="#"
          legacyBehavior
          className=" "
        >
          <a href="#" className='text-[18px] font-bold text-white'>Resources</a>
        </Link>
      </li>
    </div>
  );
};

export default Sidenav;
