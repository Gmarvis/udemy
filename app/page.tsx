import Logo from './components/molecules/logo'
import Logos from './components/molecules/logos'
import HeroSection from './components/organisms/heroSection'
import MenuItems from './components/organisms/menu-items'

export default function Home() {
  return (
    <main>
       <HeroSection/>  
       <Logos/>
      {/* <MenuItems/> */}
    </main>
  )
}
