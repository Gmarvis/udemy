"use client";
import React, { useState, useEffect } from "react";
import Slide from "../components/molecules/Slide";
import SliderComponent from "../components/organisms/slide/Slider";
import TabSliderLogout from "../components/organisms/abroadSelection/TabSliderLogoutPage";
import ResponsiveTab from "../components/organisms/abroadSelection/ResponsiveTab";
import { BsCheckCircleFill } from "react-icons/bs";

import UdemyBusinessCard from "./components/UdemyBusinessCard";
import UdemyLogoutLogo from "./components/UdemyLogoutLogo";

import MainNav from "../components/organisms/MainNav";
import Footer from "../components/organisms/footer-logout";

type Props = {};

const Page = (props: Props) => {
  const [loggedOut, setLoggedOut] = useState<boolean>(true);
  const [hasmounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasmounted) return null;

  return (
    <div className=" m-5 ">
      <MainNav />
      <div className=" bg-[#acd2cc] py-2 px-4  my-[2.4rem] text-[#2d2f31] text-sm flex items-center gap-4 justify-start">
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

      <div className="mb-5 ml-0 hidden sm:block sm:mt-0  md:mt-24">
        <TabSliderLogout />
      </div>
      <div className="mb-5 ml-0 sm:hidden mt-44 sm:mt-0">
        <ResponsiveTab />
      </div>
      <div>
        <SliderComponent title="Learners are viewing" />
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
