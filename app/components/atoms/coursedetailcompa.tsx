import React from "react";

const Coursedetailcompa = ({ course }) => {
  return (
    <div>
      <div className="bg-black w-full h-[350px]">
        <div className=" flex">
          <p className="text-violet">{course.category}</p>
          <p className="text-violet">{course.subCategory}</p>
          <p className="text-violet">{course.title}</p>
        </div>
        <h1 className="text-[35px]">{course}</h1>
        <p>{course.description}</p>
      </div>
    </div>
  );
};

export default Coursedetailcompa;
