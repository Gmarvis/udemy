"use client"

import React, { useState } from "react";
import InputField from "../atoms/input";
import Button from "../atoms/Button";
import Link from "next/link";
import PasswordStrenght from "../atoms/passwordStrenght";
import { NextPage } from "next";

const RegisterPage: NextPage = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleSubmit =  async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget)
  const response = await fetch(`api/auth/register`, {
    method: 'POST',
    body: JSON.stringify({
      fullname: formData.get('fullname'),
      email: formData.get('email'),
      password: formData.get('password')
    }),
  });
  console.log(response);
  
  }

  return (
    <div className="flex flex-col items-center justify-center  gap-2 mt-10 mb-8">
      <form  onSubmit={handleSubmit} className="flex flex-col w-[350px] gap-2">
      <h3 className="font-bold text-left">Sign up and start learning</h3>

        <InputField
          type="text"
          name='fullname'
          value={fullname}
          placeholder="Full name"
          className="w-full placeholder:text-black placeholder:font-bold h-[60px] text-[12px] px-4"
          onChange={(e) => setFullName(e.target.value)}
        />
        <InputField
          name='email'
          type="text"
          value={email}
          placeholder="Email"
          className="w-full placeholder:text-black placeholder:font-bold h-[60px] text-[12px] px-4 "
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          name='password'
          type="password"
          placeholder="Password"
          className="w-full placeholder:text-black placeholder:font-bold h-[60px] text-[12px] px-4"
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
        />
        <PasswordStrenght password={password}/>
      <div className="flex  text-start">
        <input
          id="checked-checkbox"
          type="checkbox"
          className="mr-2 mt-1 w-4 h-4 text-black-600  border-gray-300 focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
         />{" "}
        <p className="text-[14px]">
          send me special offers, personalized <br /> recommendations and
          learning tips
        </p>
      </div>

      <div className="flex items-center justify-center bg-violet-600 w-[350px] h-[50px] my-2">
        <Button
          className="text-white font-black text-[16px]"
          label="Sign up"
          type="submit"
        />
      </div>
      </form>

      <p className="text-[11px]">
        By signing up, you agree to our{" "}
        <span className="underline">Terms of Use</span> and{" "}
        <span className="underline">Privacy Policy.</span>
      </p>

      <hr className="w-[350px] h-[1px] my-3 bg-gray-200 border-0 rounded  dark:bg-gray-700" />
      <p className="text-[13px] text-center">
        Already have an account?
        <Link href="/login" legacyBehavior>
          <a
            href="/login"
            className="text-violet-600 font-bold text-[14px] underline"
          >
            Log in{" "}
          </a>
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
