"use client";
import React, { useState } from "react";
import Slide from "../components/molecules/Slide";
import SliderComponent from "../components/organisms/slide/Slider";
import SliderContainer from "../components/organisms/abroadSelection/SliderContainer";
import AbroadSelection from "../components/organisms/abroadSelection/AbroadSelectionLandingPage";
import TabSliderLogout from "../components/organisms/abroadSelection/TabSliderLogoutPage";
import ResponsiveTab from "../components/organisms/abroadSelection/ResponsiveTab";

type Props = {};

const Page = (props: Props) => {
  const [loggedOut, setLoggedOut] = useState<boolean>(false);
  return (
    <div className=" m-5 ">
      <p>
        {loggedOut && (
          <span> You’ve successfully logged out of Udemy. Come back soon!</span>
        )}{" "}
      </p>
      <div className=" mb-12 ">
        <Slide
          img="https://s.udemycdn.com/logout/ufb-logout-hero-desktop-v2.jpg"
          mainTitle="Skills for your present (and your future). Get started with us"
          title="Learning that gets you"
        />
      </div>
      <div className="mb-5 ml-0 hidden sm:block">
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
