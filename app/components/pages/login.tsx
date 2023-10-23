"use client";

import React, { useState } from "react";
import InputField from "../atoms/input";
import Image from "next/image";
import Button from "../atoms/Button";
import { NextPage } from "next";
import Link from "next/link";
import PasswordField from "../atoms/passwordField";
// import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";
import validator from "validator";
import { login } from "@/services/utils";
import { LOCAL_STORAGE } from "@/services/storage";
const LoginForm: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMassage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log({ email, password });
    const isValidEmail = validator.isEmail(email);

    if (!isValidEmail) {
      setIsError(true);
      setErrorMassage("incurrect email");
      return;
    } else {
      login({
        email,
        password,
      }).then((res) => {
        setIsLoading(false);
        if (res.token) {
          LOCAL_STORAGE.save("token", res.token);
          setIsError(false);
          setErrorMassage("");
          router.push("/");
        } else {
          setIsError(true);
          setErrorMassage(res.message);
        }
      });
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 justify-center mt-10 mb-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-[350px]">
        <h3 className="text-[16px] font-bold">Log in to your Udemy account</h3>
        <div className="flex flex-col w-[350px] gap-2">
          <li className="border border-gray-950 flex items-center gap-4 font-bold px-4 py-2 h-[50px]">
            <Image
              src="/google.jpg"
              alt="google_logo"
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
        {isError && (
          <div className=" p-4 bg-red-300">
            <h3>{errorMessage}</h3>
          </div>
        )}
        <InputField
          name="email"
          type="text"
          value={email}
          placeholder="E-mail"
          className="w-full placeholder:text-black placeholder:font-bold h-[60px] text-[12px] px-4 pb-4"
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordField
          password={password}
          setPassword={setPassword}
          className="w-full h-[60px] placeholder:text-black placeholder:font-bold text-[12px] px-4 pb-8"
          icon="eye"
          name="password"
        />
        <button
          className="bg-violet-600 text-white font-black text-[16px] p-3"
          disabled={isLoading}
        >
          {isLoading ? "loading..." : "login"}
        </button>
      </form>
      <h3>
        or {""}
        <Link legacyBehavior href="#">
          <a className="text-violet-600 font-bold text-[14px]">
            Forgot Password?
          </a>
        </Link>
      </h3>

      <hr className="w-[350px] h-[1px] my-3 bg-gray-200 border-0 rounded  dark:bg-gray-700" />

      <p className="text-[15px] text-center">
        Don&lsquo;t have an account?
        <Link href="/register" legacyBehavior>
          <a href="/register" className="text-violet-600 font-bold text-[14px]">
            Sign up <br /> Log in with your organisation{" "}
          </a>
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
