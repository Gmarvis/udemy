import React from "react";

type Props = {

};

const Development = ({}: Props) => {
  return (
    <div className="relative">
      <p className="peer hover:cursor-pointer">
        Development
      </p>

      <div className="group-hover:visible text-white hidden peer-hover:flex z-10 w-full hover:flex focus:outline-none absolute bg-black">
        <a href="#" className="">Web development</a>
        <a href="#" className="">Mobile development</a>
      </div>
    </div>
  );
};

export default Development;
