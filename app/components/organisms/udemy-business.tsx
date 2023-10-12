import Image from "next/image";
import React from "react";
import Button from "../atoms/Button";

type Props = {};

const UdemyBusiness = (props: Props) => {
  return (
    <div className="flex gap-8 w-fit py-20 mx-auto">
      <div className="w-1/3 leading-loose ">
        <div>
          <Image
            className=""
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
            alt="udemy business"
            width={192}
            height={32}
          />
          <h3 className="text-5xl font-bold">Upskill your team with Udemy Business</h3>
        </div>
        <div>
          <ul>
            <li>
              Unlimited access to 22,000+ top Udemy courses, anytime, anywhere
            </li>
            <li>International course collection in 14 languages</li>
            <li>Top certifications in tech and business</li>
          </ul>
        </div>
        <div className="flex">
          <Button
            label="Get udeny Business"
            className="hover:cursor-pointer text-white hover:opacity-70 bg-black p-3"
          />
          <Button
            label="Learn more"
            className="hover:cursor-pointer hover:bg-slate-100 border p-3"
          />
        </div>
      </div>
      <div>
        <Image
          className="bg-yellow"
          src="/UB_Promo_800x800.jpeg"
          alt="man and woman"
          width={400}
          height={400}     
        />
      </div>
    </div>
  );
};

export default UdemyBusiness;
