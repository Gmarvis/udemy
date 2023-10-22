"use client";
import React from "react";
import Logos from "./components/molecules/logos";
import HeroSection from "./components/organisms/heroSection";
import UdemyBusiness from "./components/organisms/udemy-business";

import { LOCAL_STORAGE } from "@/services/storage";
import { getUserData } from "@/services/utils";

export default function Home() {
  const token = localStorage.getItem("token");

  // console.log("userToken: ", token);
  React.useEffect(() => {
    if (token) {
      try {
        getUserData(token).then((res) => console.log(res));
      } catch (err) {
        console.log(err);
      }
    }
  }, [token]);
  return (
    <main>
      <HeroSection />
      <Logos />
      <UdemyBusiness />
    </main>
  );
}
