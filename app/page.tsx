import Logos from "./components/molecules/logos";
import SliderComponent from "./components/organisms/slide/Slider";
import HeroSection from "./components/organisms/heroSection";
import AbroadSelection from "./components/organisms/abroadSelection/AbroadSelection";

export default function Home({
  searchParams,
}: {
  searchParams: { ["showDialog"]: string };
}) {
  return (
    <main>
      <HeroSection />
      <Logos />
      <AbroadSelection />
      <SliderComponent />
    </main>
  );
}
