import Image from "next/image";
import React from "react";
import Button from "../atoms/Button";

type Props = {};

const BecomeInstructor = (props: Props) => {
  return (
    <div>
      <div className="py-10 md:w-[800px] md:mx-auto md:justify-between md:flex md:gap-6">
        <Image
          className=" md:h-[350px] w-[350px] "
          src="/herosec1.jpeg"
          alt="become instructor"
          loading="lazy"
          width={600}
          height={450}
        />
        <div className="md:w-[350px] leading-loose pt-16">
          <h1 className="text-2xl md:text-left py-4 font-semibold text-center ">
            Become an instructor
          </h1>
          <p className="text-center md:text-left">
            Instructors from around the world teach millions of learners from
            Udemy. We provide the tool and skills to teach what you like.
          </p>
          <Button
            label="Start teaching today"
            className="my-4 md:ml-[-6px] text-sm font-semibold hover:cursor-pointer md:justify-self-start md:w-fit w-full text-white hover:opacity-70 bg-black py-3 md:px-3"
          />
        </div>
      </div>
    </div>
  );
};

export default BecomeInstructor;
