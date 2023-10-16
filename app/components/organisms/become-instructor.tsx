import Image from "next/image";
import React from "react";
import Button from "../atoms/Button";

type Props = {};

const BecomeInstructor = (props: Props) => {
  return (
    <div>
      <div>
        <Image
        className=" h-[350px] md:h-auto"
        src="/herosec1.jpeg"
        alt="become instructor"
        loading="lazy"
        width={600}
        height={450}
        />
        <h1 className=" ">Become an instructor</h1>
        <p>Instructors from around the world teach millions of learners from 
          Udemy. We provide the tool and skills to teach what you like.
        </p>
        <Button
          label="Start teaching today"
          className=" hover:cursor-pointer w-full text-white hover:opacity-70 bg-black p-2"/>
      </div>
    </div>
  );
};

export default BecomeInstructor;
