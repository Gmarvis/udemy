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
    <div className="max-[740px]:hidden transition-duration:150ms -z-20">
      <div className="sidebar peer min-h-screen w-[3.35rem] bg-[#222323] overflow-hidden  hover:w-[270px] hover:shadow-lg fixed top-0 left-0  ease-in-out">
        <div className="bg-[#222323] flex flex-col">
          <div className="w-max pl-2.5">
            <Link href="/">
              <Image
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
                className="py-4 pl-3 hover:bg-slate-600 text-white"
                width={180}
                height={90}
                alt="logo"
              />
            </Link>
          </div>
          <ul className="space-y-2 tracking-wide">
            <li className="min-w-max flex gap-8 items-center py-4 pl-4 hover:bg-slate-600">
              <PiMonitorPlayBold className="text-white w-[25px] h-[25px]" />
              <Link href="#" legacyBehavior>
                <a href="#" className="text-[18px] font-bold text-white">
                  Courses
                </a>
              </Link>
            </li>
            <li className="min-w-max flex gap-8 items-center py-4 pl-4 hover:bg-slate-600">
              <BiMessageDetail className="text-white w-[25px] h-[25px]" />
              <Link href="#" legacyBehavior>
                <a href="#" className="text-[18px] font-bold text-white">
                  Communication
                </a>
              </Link>
            </li>
            <li className="min-w-max flex gap-8 items-center py-4 pl-4 hover:bg-slate-600">
              <BiSolidBarChartAlt2 className="text-white w-[25px] h-[25px]" />
              <Link href="#" legacyBehavior>
                <a href="#" className="text-[18px] font-bold text-white">
                  Performances
                </a>
              </Link>
            </li>
            <li className="min-w-max flex gap-8 items-center py-4 pl-4 hover:bg-slate-600">
              <FiTool className="text-white w-[25px] h-[25px]" />
              <Link href="#" legacyBehavior>
                <a href="#" className="text-[18px] font-bold text-white">
                  Tools
                </a>
              </Link>
            </li>
            <li className="min-w-max flex gap-8 items-center py-4 pl-4 hover:bg-slate-600">
              <HiOutlineQuestionMarkCircle className="text-white w-[25px] h-[25px]" />
              <Link href="#" legacyBehavior>
                <a href="#" className="text-[18px] font-bold text-white">
                  Resources
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
