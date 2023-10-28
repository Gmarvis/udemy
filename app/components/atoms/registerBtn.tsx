"use client";

import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterBtn = () => {
  const router = useRouter();

  // const handleClick = () => {
  //   router.push("/register");
  // };

  return (
    <div>
      <Link href="/register">
        <Button
          className="border-black border bg-black text-white font-bold px-3 py-2"
          label="Register"
          type="submit"
          // onClick={handleClick}
        />
      </Link>
    </div>
  );
};

export default RegisterBtn;
