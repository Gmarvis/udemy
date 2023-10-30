"use client";
import { LOCAL_STORAGE } from "@/services/storage";
import React, { useState, ChangeEvent } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";

type Props = {};

export default function ManagePricing({}: Props) {
  const [price, setPrice] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleSetPrice = () => {
    const localData = LOCAL_STORAGE.get("courseContent");
    const updatedData = {
      ...localData,
      price: price,
    };
    LOCAL_STORAGE.save("courseContent", updatedData);
    setSuccess(true);
    console.log("updatedData: ", updatedData);
  };

  return (
    <div className="pb-40">
      <h1 className="font-bold font-segoe px-14 py-10 text-black text-3xl">
        Pricing
      </h1>

      <p className="border-b border-gray"></p>

      <h3 className="px-14 mt-6 font-bold">Set a price for your course</h3>

      <p className="py-2 px-14">
        Please select the currency and the price tier for your course. If
        you&apos;d like to offer your course for free, it must have a total
        video length of less than 2 hours. Also, courses with practice tests
        cannot be free.
      </p>

      <div className="flex px-14 py-4 align-middle items-center">
        <div className="mr-7">
          <label className="font-bold flex">Currency</label>
          <select className="border border-black px-6 py-3 bg-white">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="NGN">NGN</option>
            {/* more options*/}
          </select>
        </div>

        <div>
          <label className="flex items-center font-bold">
            Price Tier
            <BsFillInfoCircleFill className="ml-3" />
          </label>
          <select
            className="border border-black px-6 py-3 bg-white"
            onChange={(e) => setPrice(+e.target.value)}
          >
            <option value="0">Select</option>
            <option value="0">Free</option>
            <option value="19.99">$19.99(tier 1)</option>
            <option value="24.99">$24.99(tier 2)</option>
            <option value="29.99">$29.99(tier 3)</option>
            <option value="34.99">$34.99(tier 4)</option>
            <option value="39.99">$39.99(tier 5)</option>
            {/*more options */}
          </select>
        </div>
      </div>
      <div className="items-center gap-5">
        <button
          onClick={handleSetPrice}
          className="px-6 py-3 mt-2 bg-dark flex items-center text-white text-base font-bold ml-14"
        >
          Save
        </button>

        {success && (
          <p className="text-green py-4 px-2 items-center text-center">saved</p>
        )}
      </div>
    </div>
  );
}
