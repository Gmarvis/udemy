
import React from 'react'
import Image from 'next/image'
import { AiOutlineTrophy } from 'react-icons/ai'
import { RiArrowDownSLine } from 'react-icons/ri'
import {CiMenuKebab} from 'react-icons/ci'

const CourseNavBar = () => {


  return (
    <div className='flex justify-between px-6 py-2 bg-black opacity-95 text-white h-fit'>
      <div className='divide-x-2 divide-gray2 flex h-fit  my-auto'>
        <Image
          src="	https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
          width={91}
          height={34}
          alt="logo"
          loading="lazy"
          className="w-20 pr-4 my-auto"
        />
        <span className='my-auto px-4 hover:cursor-pointer'>Web development</span>
      </div>
      <div className='flex justify-between gap-2'>
        <div className='border-2 rounded-full hover:cursor-pointer'>
          <AiOutlineTrophy size={50} className='p-2' />
        </div>
        <div className='flex my-auto gap-2'>
          <p>Your progress</p>
          <span className='my-auto'><RiArrowDownSLine /></span> 
        </div>
        <div className='border-2 hover:cursor-pointer gap-2 flex'>
          <span className='my-auto'>Share </span>
          <RiArrowDownSLine className='my-auto'/>
        </div>
        <div className='border-2 hover:cursor-pointer gap-2 flex'>
          <CiMenuKebab size={30} className='my-auto'/>
        </div>
      </div>
    </div>
  )
}
export default CourseNavBar