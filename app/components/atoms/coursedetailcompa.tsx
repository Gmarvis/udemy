// import React from "react";
// import Rate from "../molecules/Rating";
// import { TbWorld } from "react-icons/tb";
// import { BsPatchQuestionFill, BsCardText } from "react-icons/bs";
// import { MdNavigateNext } from "react-icons/md";

// const Coursedetailcompa = ({ course }) => {
//   return (
//     <div>
//       <div className="bg-black w-full h-[350px]">
//         <div className=" flex">
//           <div className="flex gap-2">
//             <p className="text-violet">{course.category}</p>
//             <MdNavigateNext />
//           </div>
//           <div className="flex gap-2">
//             <p className="text-violet">{course.subCategory}</p>
//             <MdNavigateNext />
//           </div>
//           <p className="text-violet">{course.title}</p>
//         </div>

//         <h1 className="text-[35px] font-bold">{course.title}</h1>
//         <p>{course.description}</p>
//       </div>
//       <div className="flex flex-col items-center gap-4">
//         <button className="text-black bg-bestseller py-2 px-2">
//           Best Seller
//         </button>
//         <Rate />
//         <p className="text-violet Underline">(20,714 rating)</p>
//         <p>88, 595 students</p>
//       </div>
//       <div className="">
//         <p>
//           Created by <span>{course.Created}</span>
//         </p>
//       </div>
//       <div className="flex flex-col">
//         <div className="flex flex-col gap-4">
//           <BsPatchQuestionFill className="bg-white" />
//           <p>Last undate 8/2023</p>
//         </div>
//         <div className="flex flex-col gap-4">
//           <TbWorld className="bg-white" />
//           <p>English</p>
//         </div>
//         <div className="flex flex-col gap-4">
//           <BsCardText />
//           English, Bulgarian [Auto],{" "}
//           <span className="text-violet">16 more</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Coursedetailcompa;
