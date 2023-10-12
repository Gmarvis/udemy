
import Logo from './components/molecules/logo'
import HeroSection from './components/organisms/heroSection'
import Image from 'next/image'
import Footer from './components/organisms/footer-logout'

export default function Home() {
  return (
    <main className=''>
       <HeroSection/>  
       <Logo/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Udemy Clone</h1>
      {/* <Footer/>  */}
    </main>
  )
}
