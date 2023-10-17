// import Logo from "./components/molecules/logo";
import Logos from "./components/molecules/logos";
import SliderComponent from "./components/organisms/slide/Slider";
import HeroSection from "./components/organisms/heroSection";
// import Logos from './components/molecules/logos'
// import HeroSection from './components/organisms/heroSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Logos />
      <SliderComponent />
    </main>
  );
}
