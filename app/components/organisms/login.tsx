import React from 'react'
import Button from '../atoms/Button'
// import { useRouter } from 'next/router'

const Login = () => {
  // const router = useRouter();

  // const handleClick = () => {

  // }

  return (
    <div>
        <Button className='border-black border bg:slate-white text-black font-bold px-3 py-2' label='Log in' type='submit'/>
    </div> 
  )
}

export default Login