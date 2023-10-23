import TopCategories from "./components/molecules/topCategories";
import Logos from "./components/molecules/logos";
import SliderComponent from "./components/organisms/slide/Slider";
import HeroSection from "./components/organisms/heroSection";
import Testimonials from "./components/organisms/testimonails";
import AbroadSelection from "./components/organisms/abroadSelection/AbroadSelectionLandingPage";
import ResponsiveTab from "./components/organisms/abroadSelection/ResponsiveTab";
import MainNav from "./components/organisms/MainNav";
import FooterLandingPage from "./components/organisms/footer-landingpage";
import BecomeInstructor from "./components/organisms/become-instructor";
import FeatureCategory from "./components/organisms/feature-category";
import UdemyBusiness from "./components/organisms/udemy-business";
import React from "react";

export default function Home({
  searchParams,
}: {
  searchParams: { ["showDialog"]: string };
}) {
  return (
    <main>
      <MainNav />
      <HeroSection />
      <Logos />
      <AbroadSelection
        title="A broad selection of courses"
        textContent="Choose from over 210,000 online video courses with new additions
        published every month"
      />

      <Testimonials />
      <div className="mb-10 ml-3">
        <SliderComponent title="Learners are viewing" />
        {/* <ResponsiveTab /> */}
      </div>
      <FeatureCategory />
      <TopCategories />
      <UdemyBusiness />
      <BecomeInstructor />
      <FooterLandingPage />
    </main>
  );
}
