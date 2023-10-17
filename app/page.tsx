import Logos from './components/molecules/logos'
import HeroSection from './components/organisms/heroSection'
import Testimonials from './components/organisms/testimonails'

export default function Home({searchParams}:{searchParams: {['showDialog'] : string} }) {
 
  return (
    <main>
       <HeroSection/>  
       <Logos/>
       <Testimonials />
    </main>
  );
}
