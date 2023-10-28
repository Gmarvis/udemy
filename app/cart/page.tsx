"use client";
import React, { useState } from "react";
import useCart from "../Hooks/useCart";
import ModalCourseCard from "../components/organisms/cart/modalCourseCard";
import DisplayTotalAmount from "../components/organisms/cart/DisplayTotalAmount";
import SliderComponent from "../components/organisms/slide/Slider";
import CartCourseList from "../components/organisms/cart/CartCourseList";
import { useWindowSize } from "../Hooks/useWindowSize";
import { CartItemType } from "@/types";
import { Toaster } from "react-hot-toast";

const CartPage = () => {
  const { cart, totalPrice } = useCart();
  const size = useWindowSize();
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  if (typeof sessionStorage === "undefined") return;

  const cartStorage: string | null = sessionStorage.getItem("cart");
  if (typeof cartStorage !== "string") {
    return null;
  }

  const localStorCart = JSON.parse(cartStorage);

  let cartCourses = [];
  if (cart.length) {
    console.log("cart", cart);
    cartCourses = cart?.map((course: any, i: number) => (
      <CartCourseList {...course} key={i} />
    ));
  } else {
    console.log("localStorCart", localStorCart);
    cartCourses = localStorCart?.map((course: any, i: number) => (
      <CartCourseList {...course} key={i} />
    ));
  }

  const price: number = !isNaN(Number(totalPrice))
    ? Number(totalPrice)
    : localStorCart
        .reduce((sum: number, cartItem: CartItemType) => {
          return sum + Number(cartItem.price);
        }, 0)
        .toFixed(2);

  let content;
  if (size.width < 700) {
    content = (
      <div className="p-10 w-full">
        <h1 className="text-3xl font-bold">Shoppoing Cart</h1>

        <div className=" flex flex-col justify-between mb-10 w-full">
          <Toaster position="top-right" reverseOrder={false} />
          <DisplayTotalAmount
            price={price}
            listOfCourses={
              localStorCart.length ? localStorCart : cart.length ? cart : []
            }
          />
          <h5 className="mb-2  text-xs md:text-[16px]  mt-5 text-black font-segoe">
            {cart.length ? cart.length : localStorCart.length} Course(s) in Cart{" "}
          </h5>
          <div className="flex flex-col gap-3">{cartCourses}</div>
        </div>

        <div>
          <h3 className="text-black"> You might also like</h3>
          <SliderComponent title="" />
        </div>
      </div>
    );
  } else {
    content = (
      <div className="p-10">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <h5 className="mb-2 text-xs mt-5 text-black font-segoe">
          {cart.length ? cart.length : localStorCart.length} Course(s) in Cart{" "}
        </h5>
        <div className=" flex  mb-10">
          <div className="flex flex-col flex-1 gap-3">{cartCourses}</div>
          <Toaster position="top-right" reverseOrder={false} />
          <DisplayTotalAmount
            price={Number(price)}
            listOfCourses={
              localStorCart.length ? localStorCart : cart.length ? cart : []
            }
          />
        </div>

        <div>
          <h3 className="text-black"> You might also like</h3>
          <SliderComponent title="" />
        </div>
      </div>
    );
  }

  return content;
};

export default CartPage;
