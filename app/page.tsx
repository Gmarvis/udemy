
import TopCategories from './components/molecules/topCategories'
import Logos from "./components/molecules/logos";
import SliderComponent from "./components/organisms/slide/Slider";
import HeroSection from "./components/organisms/heroSection";
import Testimonials from './components/organisms/testimonails'
import AbroadSelection from "./components/organisms/abroadSelection/AbroadSelectionLandingPage";
import ResponsiveTab from "./components/organisms/abroadSelection/ResponsiveTab";

export default function Home({
  searchParams,
}: {
  searchParams: { ["showDialog"]: string };
}) {
  return (
    <main>
      <HeroSection />
      <Logos />
      <AbroadSelection
        title="A broad selection of courses"
        textContent="Choose from over 210,000 online video courses with new additions
        published every month"
      />
      <div className="mb-10 ml-3">
        <SliderComponent title="Learners are viewing" />
        <ResponsiveTab />
      </div>
          <Testimonials />
       <TopCategories />
    </main>
  );
}
