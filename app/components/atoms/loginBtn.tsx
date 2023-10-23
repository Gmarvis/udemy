"use client";

import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

const LoginBtn = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/login");
  };

  return (
    <div>
      <Button
        className="border-black border bg:slate-white text-black font-bold px-3 py-2 shadow-gray-300"
        label="Log in"
        type="submit"
        onClick={handleClick}
      />
    </div>
  );
};

export default LoginBtn;
