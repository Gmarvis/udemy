"use client";

import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginBtn = () => {
  const router = useRouter();

  // const handleClick = () => {
  //   router.push("/login");
  // };

  return (
    <div>
      <Link href="/login">
        <Button
          className="border-black border bg:slate-white text-black font-bold px-3 py-2 shadow-gray-300"
          label="Log in"
          type="submit"
          style=""
          // onClick={handleClick}
        />
      </Link>
    </div>
  );
};

export default LoginBtn;
