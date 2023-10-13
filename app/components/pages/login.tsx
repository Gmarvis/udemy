import React from "react";
import InputField from "../atoms/input";
import Image from "next/image";

const LoginForm = () => {
  return (
    <div className="flex flex-col">
      <h3>Log in to yoour Udemy account</h3>
      <div className="flex flex-col w-[300px]">
        <ul className="">
          <li className="border border-gray-950 flex items-center gap-4 px-4 py-2">
            <Image src="/google.jpg"  alt="lgoogle_ogo" width={40} height={40} className="bg-transparent"/> 
            <h3>Continue with Google</h3>
          </li>
          <li className="border border-gray-950 flex items-center gap-4 px-4 py-2">
            <Image src="/facebook.png" alt="facebook_logo" width={40} height={40}/> 
            <h3>Continue with Facebook</h3>
          </li>
          <li className="border border-gray-950 flex items-center gap-4 px-4 py-2">
            <Image src="/apple.jpg" alt="apple_logo" width={35} height={35}/> 
            <h3>Continue with Apple</h3>
          </li>
          
        </ul>
      </div>
      <div >
        <InputField  type="text" placeholder="E-mail" className="w-[300px] h-[100px] border border-gray-800 placeholder:text-gray-950"/>
        <InputField  type="text" placeholder="password" className=""/>
      </div>
    </div>
  );
};

export default LoginForm;
