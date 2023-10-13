import React from 'react'
import MainNav from '../organisms/MainNav'
import LoginForm from '../pages/login'
import Footer from '../organisms/footer-logout'

const Layoutloginform = ({
   children
    }:{ 
      children:React.ReactNode  
   }) => {
  return (
    <div>
       {/* Add header elements or components here */}
       {/* Render the content of the page here */}
       {children}
        {/* Add your footer components here */}
    </div>
  )
}

export default Layoutloginform