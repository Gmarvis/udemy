"use client";

// import {NextUIProvider} from '@nextui-org/react'
import { ReactElement } from "react";
import CartProvider from "./CartProvider";
import CourseProvider from "./courseProvider";

type Props = {
  children: ReactElement | ReactElement[];
};

export function Providers({ children }: Props) {
  return (
    <CartProvider>
      <CourseProvider>
        {/* <NextUIProvider> */}

        {children}

        {/* </NextUIProvider> */}
      </CourseProvider>
    </CartProvider>
  );
}
