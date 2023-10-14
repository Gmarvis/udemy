import React from "react";

interface List {
  l1?: string;
  l2?: string;
  l3?: string;
  l4?: string;
  l5?: string;
  className?: string
}

function UnOrderedList ({l1, l2, l3, l4, l5 }: List) {
  return (
    <>
      <ul className="md:w-2/12 ">
        <li className="hover:underline hover:cursor-pointer">{l1}</li>
        <li className="hover:underline hover:cursor-pointer">{l2} </li>
        <li className="hover:underline hover:cursor-pointer">{l3} </li>
        <li className="hover:underline hover:cursor-pointer">{l4} </li>
        <li className="hover:underline hover:cursor-pointer">{l5} </li>
      </ul>
    </>
  );
}
export default UnOrderedList;
