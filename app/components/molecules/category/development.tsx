import React from "react";

type Props = {
  label: string
  l1?: string
  l2?: string
  l3?: string
  l4?: string
  l5?: string
  l6?: string
};

const Category = ({label, l1, l2, l3, l4, l5 ,l6}: Props) => {
  return (
    <div className="relative ">
      <p className="peer hover:cursor-pointer " >
        {label}
      </p>

      <div className="group-hover:visible gap-5 mx-auto mt-4 py-4 text-white hidden peer-hover:flex z-10 w-[1000px] hover:flex focus:outline-none absolute justify-center bg-black">
        <a href="#" className="text-white">{l1}</a>
        <a href="#" className="text-white">{l2} </a>
        <a href="#" className="text-white">{l3} </a>
        <a href="#" className="text-white">{l4} </a>
        <a href="#" className="text-white">{l5} </a>
        <a href="#" className="text-white">{l6} </a>
      </div>
    </div>
  );
};

export default Category;
