"use client"

import React, { useState } from "react";
import InputField from "../atoms/input";
import Image from "next/image";
import Button from "../atoms/Button";
import { NextPage } from "next";
import Link from "next/link";
import PasswordField from "../atoms/passwordField";

const LoginForm: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col items-center gap-2 justify-center mt-10">
      <div className="">
      <h3 className="text-[16px] font-bold">Log in to yoour Udemy account</h3>
      </div>
      <div className="flex flex-col w-[350px] gap-2">
        <li className="border border-gray-950 flex items-center gap-4 font-bold px-4 py-2 h-[50px]">
          <Image
            src="/google.jpg"
            alt="lgoogle_ogo"
            width={40}
            height={40}
            className="bg-transparent"
          />
          <h3>Continue with Google</h3>
        </li>
        <li className="border border-gray-950 flex items-center gap-4 font-bold px-4 py-2 h-[50px]">
          <Image
            src="/facebook.png"
            alt="facebook_logo"
            width={40}
            height={40}
          />
          <h3>Continue with Facebook</h3>
        </li>
        <li className="border border-gray-950 flex items-center gap-4 font-bold px-4 py-2 h-[50px]">
          <Image src="/apple.jpg" alt="apple_logo" width={35} height={30} />
          <h3>Continue with Apple</h3>
        </li>
      </div>
      <div  onSubmit={handleSubmit} className="flex flex-col gap-2 w-[350px]">
        <InputField
          type="text"
          placeholder="E-mail"
          className="w-full placeholder:text-black placeholder:font-bold h-[60px] text-[12px] px-4 pb-4"
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordField
          password={password} setPassword={setPassword}  
          className="w-full h-[60px] placeholder:text-black placeholder:font-bold text-[12px] px-4 pb-8"
          icon="eye"
          
        />
      </div>
      <div className="flex items-center justify-center bg-violet-600 w-[350px] h-[50px] my-2">
        <Button className="text-white font-black text-[16px]" label="Log in" type={"submit"} />
      </div>
      <h3>
        or {""}
        <Link legacyBehavior href="#">
        <a className="text-violet-600 font-bold text-[14px]">Forgot Password?</a>
        </Link>
      </h3>

      <hr className="w-[350px] h-[1px] my-3 bg-gray-200 border-0 rounded  dark:bg-gray-700" />

      <p className="text-[15px] text-center">
        Don't have an account?
        <Link href="/register" legacyBehavior>
           <a href="/register" className="text-violet-600 font-bold text-[14px]">Sign up <br /> Log in with your organisation </a>
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;