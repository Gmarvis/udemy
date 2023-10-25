import React from 'react';
import { BsFillInfoCircleFill } from 'react-icons/bs';

type Props = {};

export default function managePricing({ }: Props) {
  return (
    <div className='pb-40'>
      <h1 className="font-bold font-segoe px-14 py-10 text-black text-3xl">Pricing</h1>

      <p className="border-b border-gray"></p>

      <h3 className='px-14 mt-6 font-bold'>Set a price for your course</h3>

      <p className="py-2 px-14">
        Please select the currency and the price tier for your course. If you&apos;d like to offer your course for free, it must have a total video length of less than 2 hours. Also, courses with practice tests cannot be free.
      </p>

      <div className='flex px-14 py-4 align-middle items-center'>
        <div className='mr-5'>
          <label>Currency</label>
          <select>
            <option value='USD'>USD</option>
            <option value='EUR'>EUR</option>
            <option value='GBP'>GBP</option>
            {/* Add more options for other currencies */}
          </select>
        </div>

        <div>

          <label>Price Tier<BsFillInfoCircleFill /></label>
          <select>
            <option value='0'>Free</option>
            <option value='10'>Tier 1</option>
            <option value='20'>Tier 2</option>
            {/* Add more options for other price tiers */}
          </select>
        </div>
      </div>
      <button
        className="px-6 py-3 mt-2 bg-gray flex items-center text-white text-base font-bold hover:cursor-not-allowed ml-14"
      >
        Save
      </button>
    </div>
  );
}