"use client"

import React from 'react'
import MainNav from '../components/organisms/MainNav'
import HeroSection from '../components/organisms/heroSection'
import Logos from '../components/molecules/logos'
import UdemyBusiness from '../components/organisms/udemy-business'

const page = () => {
  return (
    <main>
        <MainNav/>
        <HeroSection/>
        <Logos/>
        <UdemyBusiness/>
    </main>
  )
}

export default page