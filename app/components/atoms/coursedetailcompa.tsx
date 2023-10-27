import React from "react";

const Coursedetailcompa = ({ course }) => {
  return (
    <div>
      <div className="bg-black w-full h-[350px]">
        <div className=" flex">
          <p>{course.category}</p>
          <p>{course.subCategory}</p>
          <p>{}</p>
        </div>
      </div>
    </div>
  );
};

export default Coursedetailcompa;
