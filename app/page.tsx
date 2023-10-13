import Logo from './components/molecules/logo'
import Logos from './components/molecules/logos'
import SliderComponent from './components/organisms/Slider';
import HeroSection from './components/organisms/heroSection'

export default function Home() {
  return (
    <main>
       <HeroSection/>  
       <Logos/>
        <SliderComponent/>  
    </main>
  );
}
