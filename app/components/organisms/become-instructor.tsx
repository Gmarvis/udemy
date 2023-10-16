import Image from "next/image";
import React from "react";

type Props = {};

const BecomeInstructor = (props: Props) => {
  return (
    <div>
      <div>
        <Image
        className=""
        src="https://s.udemycdn.com/home/non-student-cta/instructor-mobile-v3.jpg"
        alt="become instructor"
        width={600}
        height={450}
        />
        <h2>Become an instructor</h2>
        <p>Instructors from around the world teach millions of learners from 
          Udemy. We provide the tool and skills to teach what you like.</p>
      </div>
    </div>
  );
};

export default BecomeInstructor;
