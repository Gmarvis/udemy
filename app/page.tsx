import Logos from "./components/molecules/logos";
import SliderComponent from "./components/organisms/slide/Slider";
import HeroSection from "./components/organisms/heroSection";

export default function Home({searchParams}:{searchParams: {['showDialog'] : string} }) {
 
  return (
    <main>
       <HeroSection/>  
       <Logos/>
      {/* <MenuItems/> */}
    </main>
  );
}
