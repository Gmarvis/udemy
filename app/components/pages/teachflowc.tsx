  "use client"
import Image from 'next/image'
import React from 'react'
import Button from '../atoms/Button'
import { useRouter } from 'next/navigation';

const Teachflowc = () => {
   
    const router = useRouter();


  const handleClickb = () => {
    router.push("/teachflowb")
  } 
  
  const handleClickd = () => {
    router.push("/teachflowd")
  }

  return (
    <div className="relative h-[100vh]">
    <div className="flex justify-between items-center h-[80px] shadow">
      <div className="flex items-center">
        <div className="  px-8">
          <Image
            src="/logo-udemy.svg"
            width={80}
            height={45}
            alt="logo"
            className=""
          />
        </div>

        <div className="border border-r-gray-400 h-[80px]"></div>
        <div className="px-8">
          <h3>Step 3 of 4</h3>
        </div>
      </div>

      <div className="px-8 text-purple-600 font-bold">
        <span className="text-violet">Exit</span>
      </div>
    </div>

    <div className="flex flex-col items-center gap-7 py-10">
      <h1 className="text-[30px] font-extrabold">What category best fits the knowledge you'll share</h1>
      <p>
        It's ok if you can't think of a good title now. you can change it
        later.
      </p>
       
      <select className="border border-black py-4 px-4 w-1/3">
              <option value="0">Choose a category</option>
              <option value="2">Development</option>
              <option value="3">Business</option>
              <option value="4">Finance & Accounting</option>
              <option value="5">IT & Software</option>
              <option value="6">Ofiice Productivity</option>
              <option value="7">Personal Development</option>
              <option value="8">Design</option>
              <option value="9">Marketing</option>
              <option value="10">LifeStyle</option>
              <option value="11">Photography & Video</option>
              <option value="12">Health & Fitness</option>
              <option value="13">Music</option>
              <option value="14">Teaching & Academic</option>
              <option value="15">I don't know yet</option>
            </select>
    </div>

    <div className="flex text-center justify-between px-6 border w-full absolute bottom-0 shadow shadow-gray">
      <Button
        type="submit"
        className=" bg-gray px-6 py-[12px] my-2"
        label="Previous"
        onClick={handleClickb}
      />
      <Button
        type="submit"
        className=" bg-gray px-6 py-[12px] my-2"
        label="Continue"
        onClick={handleClickd}
      />
    </div>
  </div>
  )
}

export default Teachflowc