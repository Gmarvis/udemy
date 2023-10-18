import React from 'react'

const Profilheader = () => {

  return (
    <div className='ml-[10%]'>
        <h1 className='text-[35px] font-bold pb-12'>
            Profile and settings
        </h1>
        <div className='flex'>
          <p className='pr-4 text-[17px] font-bold text-slate-600 focus:underline'>Udemy profile</p>
          <p className='pl-4 text-[17px] font-bold text-slate-600 focus:underline'>Profile picture</p>
          <p className='pl-8 text-[17px] font-bold text-slate-600 focus:underline'>Privacy settings</p>
        </div>
        <hr  className='mt-6'/>
    </div>
  )
}

export default Profilheader