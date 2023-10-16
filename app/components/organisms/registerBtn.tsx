"use client"

import React from 'react'
import Button from '../atoms/Button'
import { useRouter } from 'next/navigation'

const RegisterBtn = () => {
 const router = useRouter();

 const handleClick = () => {
  router.push("/register")
 }

  return (
    <div>
        <Button className='border-black border bg-black text-white font-bold px-3 py-2' label='Register' type='submit' onClick={handleClick}/>

    </div>
  )
}

export default RegisterBtn