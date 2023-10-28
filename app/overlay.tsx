"use client"
import React from 'react'

const Overlay = ({Click}: any) => {
  return (
    <div className='bg-gray-700 opacity-25 h-screen relative' 
    onClick={Click}
    >
        <h1>this Overlay</h1>
    </div>
  )
}

export default Overlay