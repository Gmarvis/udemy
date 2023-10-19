"use client"
import React, { useState } from 'react'
import Privset from '../organisms/privset'
import Avatar from '../organisms/avatar'
import Inputdetails from './inputdetails'
 


const Profilheader = () => {
  const [selectedComponent, setSelectedComponent] = useState(<Inputdetails/>)

  const handleButtonClick = (component) => {
     setSelectedComponent(component);
  }


  return (
    <div className='ml-[10%]'>
        <h1 className='text-[35px] font-bold pb-12'>
            Profile and settings
        </h1>
        <div className='flex'>
          <p className='pr-4 text-[17px] font-bold text-slate-600 focus:underline' onClick={() => handleButtonClick(<Inputdetails/>)}>Udemy profile</p>
          <p className='pl-4 text-[17px] font-bold text-slate-600 focus:underline' onClick={() => handleButtonClick(<Avatar/>)}>Profile picture</p>
          <p className='pl-8 text-[17px] font-bold text-slate-600 focus:underline' onClick={() => handleButtonClick(<Privset/>)}>Privacy settings</p>
        </div>
        <hr  className='mt-6'/>
        {selectedComponent}
    </div>
  )
}

export default Profilheader