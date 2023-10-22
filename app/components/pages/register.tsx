"use client";
import React, { useState } from "react";
import InputField from "../atoms/input";
import Button from "../atoms/Button";
import Link from "next/link";
import PasswordStrenght from "../atoms/passwordStrenght";
import { NextPage } from "next";
import { signUp } from "@/services/utils";
import { LOCAL_STORAGE } from "@/services/storage";
// validator import
import validator from "validator";
import { useRouter } from "next/navigation";

const RegisterPage: NextPage = () => {
  const [fullname, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log("formData: ", { fullname, email, password });
    const isValidEmail = validator.isEmail(email);
    const isStrongPassword = validator.isStrongPassword(password);

    if (!isValidEmail) {
      setIsError(true);
      setErrorMessage("Enter a valid Email");
      return;
    }

    if (fullname && email && password) {
      signUp({
        name: fullname,
        email,
        password,
      }).then((res) => {
        if (res.token) {
          LOCAL_STORAGE.save("token", res.token);
          router.push("/");
          setIsError(false);
          setFullName("");
          setEmail("");
          setPassword("");
        } else {
          setIsError(true);
          if (res.statusCode === 500) {
            setErrorMessage("Email already exist");
          } else setErrorMessage(res.message);
        }
      });
    } else {
      setIsError(true);
      setErrorMessage("Please input all fields");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center  gap-2 mt-10 mb-8">
      <form onSubmit={handleSubmit} className="flex flex-col w-[350px] gap-2">
        <h3 className="font-bold text-left">Sign up and start learning</h3>
        <InputField
          type="text"
          name="fullname"
          value={fullname}
          placeholder="Full name"
          className="w-full placeholder:text-black placeholder:font-bold h-[60px] text-[12px] px-4"
          onChange={(e) => setFullName(e.target.value)}
        />
        <InputField
          name="email"
          type="text"
          value={email}
          placeholder="Email"
          className="w-full placeholder:text-black placeholder:font-bold h-[60px] text-[12px] px-4 "
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          name="password"
          type="password"
          placeholder="Password"
          className="w-full placeholder:text-black placeholder:font-bold h-[60px] text-[12px] px-4"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <PasswordStrenght password={password} />
        {isError && (
          <div className="bg-red-300 p-2 ">
            <h2>{errorMessage}</h2>
          </div>
        )}
        <div className="flex  text-start">
          <input
            id="checked-checkbox"
            type="checkbox"
            className="mr-2 mt-1 w-4 h-4 text-black-600  border-black focus:ring-blue-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />{" "}
          <p className="text-[14px]">
            I would like to recieve special offers, personalized <br />{" "}
            recommendations and learning tips
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
      <p className="text-[11px] text-center">
        By signing up, you agree to our{" "}
        <span className="underline">Terms of Use</span> and{" "}
        <span className="underline">
          Privacy <br /> Policy.
        </span>
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
