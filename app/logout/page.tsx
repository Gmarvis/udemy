"use client";
import React, { useState } from "react";
import Slide from "../components/molecules/Slide";
import SliderComponent from "../components/organisms/slide/Slider";
import TabSliderLogout from "../components/organisms/abroadSelection/TabSliderLogoutPage";
import ResponsiveTab from "../components/organisms/abroadSelection/ResponsiveTab";
import { BsCheckCircleFill } from "react-icons/bs";
import UdemyBusinessCard from "./components/UdemyBusinessCard";
import UdemyLogoutLogo from "./components/UdemyLogoutLogo";

type Props = {};

const Page = (props: Props) => {
  const [loggedOut, setLoggedOut] = useState<boolean>(true);
  return (
    <div className=" m-5 mt-3 ">
      <div className=" bg-[#acd2cc] py-2 px-4  mb-6 mt-5 text-[#2d2f31] text-sm flex items-center gap-4 justify-start">
        <BsCheckCircleFill
          className="bg-transparant text-[#2d2f31] text-xl mr-1 rounded-full border-0 mt-3 outline-none w-8 h-8"
          // size={50}
        />
        {/* {loggedOut && ( */}
        <h5> You’ve successfully logged out of Udemy. Come back soon!</h5>
        {/* )}{" "} */}
      </div>
      <div className=" h-[350px] mb-3">
        {" "}
        <UdemyLogoutLogo img="https://s.udemycdn.com/logout/ufb-logout-hero-desktop-v2.jpg" />
        <UdemyBusinessCard />
      </div>

      <div className="mb-5 ml-0 hidden sm:block mt-36 smd:mt-0 lg:mt-48">
        <TabSliderLogout />
      </div>
      <div className="mb-5 ml-0 sm:hidden">
        <ResponsiveTab />
      </div>
      <div>
        <SliderComponent title="Learners are viewing" />
      </div>
    </div>
  );
};

export default Page;
