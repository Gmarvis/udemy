import Image from "next/image";
import React from "react";
import Button from "../atoms/Button";

type Props = {};

const UdemyBusiness = (props: Props) => {
  return (
    <div className="">
      <div className="md:hidden mx-auto">
        <Image
          className="w-[90%] mx-auto"
          src="/UB_Promo_800x800.jpeg"
          alt="man and woman"
          width={400}
          height={400}
        />
        <Image
          className="flex justify-center mx-auto py-6"
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
          alt="udemy business"
          width={192}
          height={32}
        />
        <ul className="list-inside list-disc w-[90%] mx-auto">
          <li >
            Unlimited access to 22,000+ top Udemy courses, anytime, anywhere
          </li>
          <li>International course collection in 14 languages</li>
          <li>Top certifications in tech and business</li>
        </ul>
        <div className="bg-red-400">
            <Button
              label="Get udeny Business"
              className="hover:cursor-pointer w-[90%] text-white hover:opacity-70 bg-black p-2"
            />
            <Button
              label="Learn more"
              className="hover:cursor-pointer w-[90%] hover:bg-slate-100 border p-2"
            />
          </div>
      </div>
      <div className="hidden ">
        <div className="leading-loose ">
          <div>
            <Image
              className=""
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
              alt="udemy business"
              width={192}
              height={32}
            />
            <h3 className="">Upskill your team with Udemy Business</h3>
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
          <div className="">
            <Button
              label="Get udeny Business"
              className="hover:cursor-pointer text-white hover:opacity-70 bg-black p-2"
            />
            <Button
              label="Learn more"
              className="hover:cursor-pointer hover:bg-slate-100 border p-2"
            />
          </div>
        </div>
        <div className="">
          <Image
            className=""
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
