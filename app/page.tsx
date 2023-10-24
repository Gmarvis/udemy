"use client";
import TopCategories from "./components/molecules/topCategories";
import Logos from "./components/molecules/logos";
import SliderComponent from "./components/organisms/slide/Slider";
import HeroSection from "./components/organisms/heroSection";
import Testimonials from "./components/organisms/testimonails";
import AbroadSelection from "./components/organisms/abroadSelection/AbroadSelectionLandingPage";
import ResponsiveTab from "./components/organisms/abroadSelection/ResponsiveTab";
// import MainNav from "./components/organisms/MainNav";
import FooterLandingPage from "./components/organisms/footer-landingpage";
import BecomeInstructor from "./components/organisms/become-instructor";
import FeatureCategory from "./components/organisms/feature-category";
import UdemyBusiness from "./components/organisms/udemy-business";
import React, { useState, useEffect } from "react";
import MainNav from "./components/organisms/MainNav";
import LogiNav from "./components/organisms/login-navbar";
import { LOCAL_STORAGE } from "@/services/storage";

export default function Home({
  searchParams,
}: {
  searchParams: { ["showDialog"]: string };
}) {
  const [isToken, setIsToken] = useState<boolean>(false);

  useEffect(() => {
    // let token: string = JSON.parse(localStorage.getItem("token") || "");
    let token: string = LOCAL_STORAGE.get("token")

    if (token !== "") {
      setIsToken(!isToken);
    }
  }, []);

  return (
    <main>
      <MainNav className={isToken ? "hidden md:hidden" : "contents"} />
      <LogiNav className={isToken ? "contents" : "hidden md:hidden"} />
      <HeroSection />
      <Logos className={isToken ? "hidden md:hidden" : "contents"} />
      <AbroadSelection
        title="A broad selection of courses"
        textContent="Choose from over 210,000 online video courses with new additions
        published every month"
      />

      <Testimonials className={isToken ? "hidden md:hidden" : "contents"} />
      <div className="mb-10 ml-3">
        <SliderComponent title="Learners are viewing" />
        {/* <ResponsiveTab /> */}
      </div>
      <FeatureCategory className={isToken ? "hidden md:hidden" : "contents"} />
      <TopCategories />
      <UdemyBusiness className={isToken ? "hidden md:hidden" : "contents"} />
      <BecomeInstructor className={isToken ? "hidden md:hidden" : "contents"} />
      <FooterLandingPage />
    </main>
  );
}
