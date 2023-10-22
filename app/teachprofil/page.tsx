import React from 'react'
import Teachprofil from '../components/pages/teachprofil'
import Sidenav from '../components/organisms/sidenav'

const page = () => {
  return (
    <div className='flex w-full'>
     <Sidenav/>
     <Teachprofil/>
    </div>
  )
}

export default page