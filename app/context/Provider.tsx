"use client";

// import {NextUIProvider} from '@nextui-org/react'
import { ReactElement } from "react";
import CartProvider from "./CartProvider";
import CourseProvider from "./courseProvider";
import WatchCourseProvider from "./viewcourseProvider";

type Props = {
  children: ReactElement | ReactElement[];
};

export function Providers({ children }: Props) {
  return (
    <WatchCourseProvider>
      <CartProvider>
        <CourseProvider>{children}</CourseProvider>
      </CartProvider>
    </WatchCourseProvider>
  );
}
