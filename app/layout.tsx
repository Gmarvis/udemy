import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainNav from "./components/MainNav";
import LogiNav from "./components/organisms/login-navbar";
import { Providers } from "./context/Provider";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <LogiNav /> */}
        {/* <MainNav/> */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
