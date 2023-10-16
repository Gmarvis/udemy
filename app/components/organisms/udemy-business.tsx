import Image from "next/image";
import React from "react";
import Button from "../atoms/Button";

type Props = {};

const UdemyBusiness = (props: Props) => {
  return (
    <div>
      <div className="md:hidden py-12 mx-auto">
        <Image
          className="w-[90%] mx-auto"
          src="/UB_Promo_800x800.jpeg"
          alt="man and woman"
          width={400}
          height={400}
        />
        <Image
          className="flex justify-center mx-auto py-5"
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
          alt="udemy business"
          width={192}
          height={32}
        />
        <h3 className="text-center px-2 pb-4 font-semibold  text-xl">Upskill your team with Udemy Business</h3>
        <ul className="list-inside list-disc w-[90%] mx-auto">
          <li >
            Unlimited access to 22,000+ top Udemy courses, anytime, anywhere
          </li>
          <li>International course collection in 14 languages</li>
          <li>Top certifications in tech and business</li>
        </ul>
        <div className="">
            <Button
              label="Get udemy Business"
              className=" hover:cursor-pointer w-full text-white hover:opacity-70 bg-black p-2"
            />
            <Button
              label="Learn more"
              className="border-gray-500 hover:cursor-pointer w-full hover:bg-slate-100 border p-2"
            />
          </div>
      </div>
      <div className="hidden md:flex gap-10 w-fit justify-between mx-auto py-10">
        <div className="leading-loose w-[40%]">
          <div className="">
            <Image
              className="py-6"
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
              alt="udemy business"
              width={192}
              height={32}
            />
            <h3 className="text-2xl font-semibold pb-4">Upskill your team with Udemy Business</h3>
          </div>
          <div>
            <ul className="list-inside list-disc">
              <li>
                Unlimited access to 22,000+ top Udemy courses, anytime, anywhere
              </li>
              <li>International course collection in 14 languages</li>
              <li>Top certifications in tech and business</li>
            </ul>
          </div>
          <div className="flex pt-2">
            <Button
              label="Get udeny Business"
              className="hover:cursor-pointer text-white hover:opacity-70 bg-black py-1 px-3"
            />
            <Button
              label="Learn more"
              className="hover:cursor-pointer hover:bg-slate-100 border-2 border-gray-500 px-3 py-1"
            />
          </div>
        </div>
        <div>
          <Image
            src="/UB_Promo_800x800.jpeg"
            alt="man and woman"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default UdemyBusiness;
