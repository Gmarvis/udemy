"use client";

import Popup from "@/app/components/molecules/popup";
import { countriesNameAndCodes } from "@/public/data/dummydata";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import useCart from "@/app/Hooks/useCart";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";

import { IoMdLock } from "react-icons/io";

type Props = {};

const CheckoutPage = (props: Props) => {
  const router = useRouter();
  const [paypalActive, setPaypalActive] = React.useState(false);
  const [cartActive, setCartActive] = React.useState(false);
  const [name, setName] = React.useState("");
  const [cartNumber, setCartNumber] = React.useState("");
  const [expireDate, setExpireDate] = React.useState("");
  const [cvc, setCvc] = React.useState("");
  const [popupActive, setPopupActive] = React.useState(false);
  const countries: { name: string; code: string }[] = countriesNameAndCodes;

  const { dispatch, REDUCER_ACTION } = useCart();

  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs();

  const handleCart = () => {
    setCartActive((prev) => !prev);
    setPaypalActive(false);
  };

  const handlePaypal = () => {
    setPaypalActive((prev) => !prev);
    setCartActive(false);
  };

  function handleClick(): void {
    console.log("this is the function");
  }

  const handleCheckout = () => {
    setPopupActive((prev) => !prev);
    router.push("/home/my-learning");
  };

  const completeCheckout = () => {
    setPopupActive((prev) => !prev);

    dispatch({
      type: REDUCER_ACTION.CHECKOUT,
      payload2: { courseList: [] },
    });
  };

  return (
    <div>
      <div className="flex justify-between md:px-5 px-3 shadow md:py-2">
        <Image
          src="/logo-udemy (1).svg"
          alt="udemy logo"
          className="py-2 md:pl-8 md:hidden"
          width={75}
          height={28}
          onClick={() => router.push("/")}
        />

        <Image
          src="/logo-udemy (1).svg"
          alt="udemy logo"
          className="py-2 hidden md:flex"
          width={100}
          height={100}
        />
        <p
          className="my-auto hover:cursor-pointer font-semibold text-violt"
          onClick={() => handleClick()}
        >
          Cancel
        </p>
      </div>
      <div className="md:flex md:px-4 px-5">
        <div className="md:w-[55%] md:flex">
          <p className="flex-1"></p>
          <div className="md:pr-10 md:w-[40rem]">
            <div>
              <h1 className="py-4 md:py-6 font-semibold text-2xl md:text-4xl leading-normal">
                Checkout
              </h1>
              <h2 className="py-4 md:py-6 font-semibold text-xl md:text-2xl leading-normal">
                Billing address
              </h2>
            </div>
            <div className="w-full md:w-1/2 py-3">
              <div className="flex justify-between py-2">
                <label className="font-bold">Country</label>
                <span className="text-sm text-gray2">Required</span>
              </div>
              <select className="border p-4 w-full flex">
                {countries.map((item, index) => (
                  <option key={index}>{item.name}</option>
                ))}
              </select>
            </div>
            <span className="text-xs text-black pt-4">
              Udemy is required by law to collect applicable transaction taxes
              for purchases made in certain tax jurisdictions.
            </span>
            <section className="py-5">
              <div className="flex justify-between py-3">
                <h2 className="font-semibold text-xl md:text-2xl leading-normal">
                  Payment method
                </h2>
                <div className="flex justify-between gap-2 pt-4">
                  <span className="text-sm text-gray2">Secured connection</span>
                  <IoMdLock />
                </div>
              </div>
              <div className="bg-gray2 border">
                <div
                  className="hover:cursor-pointer  p-3 flex gap-3 "
                  onClick={() => handlePaypal()}
                >
                  <input
                    type="radio"
                    className="hover:cursor-pointer w-4"
                    onChange={() => handleCart}
                  />
                  <div className="bg-white rounded">
                    <Image
                      width={40}
                      height={20}
                      src="https://www.udemy.com/staticx/udemy/images/v9/hpp-paypal.svg"
                      alt="paypal logo"
                    />
                  </div>
                  <p className=" font-semibold">PayPal</p>
                </div>
                <hr />
                <p className={paypalActive ? "flex p-6 bg-white" : "hidden"}>
                  In order to complete your transaction, we will transfer you
                  over to PayPals secure servers.
                </p>
                <div
                  className="hover:cursor-pointer p-3"
                  onClick={() => handleCart()}
                >
                  <div className="flex justify-between w-full">
                    <div className="flex gap-3 flex-1 w-[60%] ">
                      <input
                        type="radio"
                        className="hover:cursor-pointer w-4"
                        onChange={() => setCartActive((prev) => !prev)}
                      />
                      <div className="bg-white h-fit my-auto rounded">
                        <Image
                          width={40}
                          height={20}
                          src="https://www.udemy.com/staticx/udemy/images/v9/card-default.svg"
                          alt="cart deault logo"
                        />
                      </div>
                      <p className="my-auto font-semibold flex-1">
                        Credit/Debit Cart
                      </p>
                    </div>
                    <div className="flex gap-2 flex-wrap w-[40%]  pl-8">
                      <div className="bg-white rounded">
                        <Image
                          height={20}
                          width={40}
                          src="https://www.udemy.com/staticx/udemy/images/v9/card-amex.svg"
                          alt="card-amex"
                        />
                      </div>
                      <div className="bg-white rounded">
                        <Image
                          height={20}
                          width={40}
                          src="	https://www.udemy.com/staticx/udemy/images/v9/card-discover.svg"
                          alt="card-amex"
                        />
                      </div>
                      <div className="bg-white rounded">
                        <Image
                          height={20}
                          width={40}
                          src="https://www.udemy.com/staticx/udemy/images/v9/card-mastercard.svg"
                          alt="card-mastercard"
                        />
                      </div>
                      <div className="bg-white rounded">
                        <Image
                          height={20}
                          width={40}
                          src="	https://www.udemy.com/staticx/udemy/images/v9/card-visa.svg"
                          alt="card-visa"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr className={cartActive ? "flex" : "hidden"} />
                <div className={cartActive ? "w-full px-5 py-5" : "hidden"}>
                  <div className="flex justify-between py-2">
                    <label className="font-bold">Name on cart</label>
                    <span className="text-sm text-gray2">Required</span>
                  </div>

                  <input
                    className="border border-gray2 px-4 py-2 w-[200px]"
                    placeholder="name on cart"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />

                  <div className="flex justify-between py-2">
                    <label className="font-bold">Cart number</label>
                    <span className="text-sm text-gray2">Required</span>
                  </div>
                  <PaymentInputsWrapper {...wrapperProps}>
                    <input
                      className="border px-4 py-3 w-full"
                      {...getCardNumberProps()}
                    />
                  </PaymentInputsWrapper>
                  {/* <input
                    className="border px-4 py-3 w-full"
                    placeholder="1234 5678 9012 3456"
                    type="text"
                    onChange={(e) => setCartNumber(e.target.value)}
                  /> */}
                  <div className="flex gap-2 pb-5">
                    <div className="w-1/2">
                      <div className="flex justify-between py-2">
                        <label className="font-bold">Expire date</label>
                        <span className="text-sm text-gray2">Required</span>
                      </div>
                      <PaymentInputsWrapper {...wrapperProps}>
                        <input
                          className="border px-4 py-3 w-full"
                          {...getExpiryDateProps()}
                        />
                      </PaymentInputsWrapper>
                      {/* <input
                        className="border px-4 py-3 w-full"
                        placeholder="MM/YY"
                        type="text"
                        onChange={(e) => setExpireDate(e.target.value)}
                      /> */}
                    </div>
                    <div className="w-1/2">
                      <div className="flex justify-between py-2">
                        <label className="font-bold">CVC/CVV</label>
                        <span className="text-sm text-gray2">Required</span>
                      </div>
                      <PaymentInputsWrapper {...wrapperProps}>
                        <input
                          className="border px-4 py-3 w-full"
                          {...getExpiryDateProps()}
                        />
                      </PaymentInputsWrapper>
                      {/* <input
                        className="border px-4 py-3 w-full"
                        type="text"
                        placeholder="CVC"
                        onChange={(e) => setCvc(e.target.value)}
                      /> */}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input type="checkbox" className="w-4 border" />
                    <span>Securely save this cart for my later purchase</span>
                  </div>
                </div>
              </div>
              <div className="">
                <h2 className="font-semibold py-4 text-xl md:text-2xl leading-normal">
                  Order details
                </h2>
                <p className="text-violt">
                  Potential puchased course will be displayed here
                </p>
              </div>
            </section>
          </div>
        </div>
        <div className="md:bg-gray2 md:opacity-90 md:min-h-[100vh] text-black md:w-[45%] md:px-10 md:pt-20">
          <div className="w-[320px]">
            <h2 className="font-semibold py-4 text-xl md:text-2xl leading-normal">
              Summary
            </h2>
            <div className="flex justify-between py-3">
              <p>Original Price: </p>
              <span>$153.46</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold py-3">
              <p>Total: </p>
              <span>$153.46</span>
            </div>
            <p className="text-xs text-black pt-4 pb-4">
              By completing your purchase you agree to these{" "}
              <span className="text-violt opacity-70 hover:opacity-70">
                Terms of Service.
              </span>
            </p>
            <button
              onClick={() => setPopupActive((prev) => !prev)}
              className="py-4 bg-violt text-white w-full"
            >
              {paypalActive ? "Proceed" : "complete checkout"}
            </button>
            {popupActive && (
              <Popup handleClose={() => setPopupActive((prev) => !prev)}>
                <div>
                  <h1 className="py-4 md:py-6 font-semibold text-2xl md:text-4xl leading-normal">
                    🎉 Thank you for purchasing the course 🎉
                  </h1>
                  <button
                    onClick={() => handleCheckout()}
                    className="p-4 bg-violt text-white w-fit flex justify-center"
                  >
                    Go to my learning
                  </button>
                </div>
              </Popup>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
