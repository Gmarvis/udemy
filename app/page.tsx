import TopCategories from './components/molecules/topCategories'
import Logos from './components/molecules/logos'
import HeroSection from './components/organisms/heroSection'
import Testimonials from './components/organisms/testimonails'


export default function Home() {
  return (
    <main>
       <HeroSection/>  
       <Logos/>
       <Testimonials />
       <TopCategories />
    </main>
  );
}
