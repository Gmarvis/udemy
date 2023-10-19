import React from 'react';
import Link from 'next/link';
import SliderComponent from '../slide/Slider';

const SliderContainer = () => {
  return (
    <div className=' flex flex-col gap-4'>
      <h4 className='mb-3'>Expand your career opportunities with python</h4>
      <p className='mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut laboriosam odit eos error ullam aliquid velit doloremque iusto reprehenderit, explicabo optio, natus eligendi atque inventore at tempore reiciendis porro et.</p>

      <Link href = {"#"} className=' ring ring-ctitle p-3'> <span> Explore Python</span> </Link>
      <div className='my-5 '>
        <SliderComponent/>
      </div>
    </div>
  )
}

export default SliderContainer
