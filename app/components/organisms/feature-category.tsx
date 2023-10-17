import React from "react";
import Button from "../atoms/Button";

type Props = {};

const FeatureCategory = (props: Props) => {
  return (
    <div className="bg-gray-50">
      <div className="py-10 leading-loose w-[68%] mx-auto">
        <h1 className="font-semibold">Featured topics by category</h1>
        <div className="md:flex w-full">
          <div className="flex md:w-1/2">
            <div className="w-1/2 md:w-1/2">
              <h3 className="font-semibold">Development</h3>
              <div className="py-2">
                <p className="font-semibold underline hover:cursor-pointer text-base text-indigo-700">
                  Python
                </p>
                <p className="text-sm text-gray-400 py-1">
                  36,354,994 learners
                </p>
              </div>
              <div className="py-2">
                <p className="font-semibold underline hover:cursor-pointer text-base text-indigo-700">
                  Web Development
                </p>
                <p className="text-sm text-gray-400 py-1">
                  11,415,615 learners
                </p>
              </div>
              <div className="py-2">
                <p className="font-semibold hover:cursor-pointer text-base text-indigo-700 underline">
                  Machine Learning
                </p>
                <p className="text-sm text-gray-400 py-1">7,070,015 learners</p>
              </div>
              <Button
                label="Explore more topics"
                className="hover:cursor-pointer text-xs font-semibold hover:bg-slate-100 border-2 border-black px-3 py-2"
              />
            </div>
            <div className="w-1/2">
              <h3 className="font-semibold">Business</h3>
              <div className="py-2">
                <p className="font-semibold underline hover:cursor-pointer text-base text-indigo-700">
                  Financial Analysis
                </p>
                <p className="text-sm text-gray-400 py-1">1,195,282 learners</p>
              </div>
              <div className="py-2">
                <p className="font-semibold underline hover:cursor-pointer text-base text-indigo-700">
                  SQL
                </p>
                <p className="text-sm text-gray-400 py-1">5,977,561 learners</p>
              </div>
              <div className="py-2">
                <p className="font-semibold underline hover:cursor-pointer text-base text-indigo-700">
                  PMP
                </p>
                <p className="text-sm text-gray-400 py-1">1,733,398 learners</p>
              </div>
            </div>
          </div>

          <div className="flex md:w-1/2">
            <div className="w-1/2 leading-8">
              <h3 className="font-semibold">IT and Software</h3>
              <div className="py-2">
                <p className="font-semibold underline hover:cursor-pointer text-base text-indigo-700">
                  Amazone AWS
                </p>
                <p className="text-sm text-gray-400 py-1">6,123,456 learners</p>
              </div>
              <div className="py-2">
                <p className="font-semibold underline hover:cursor-pointer text-base text-indigo-700">
                  Ethical Hacking
                </p>
                <p className="text-sm text-gray-400 py-1">
                  10,931,066 learners
                </p>
              </div>
              <div className="py-2">
                <p className="font-semibold underline hover:cursor-pointer text-base text-indigo-700">
                  Cyber Security
                </p>
                <p className="text-sm text-gray-400 py-1">3,998,037 learners</p>
              </div>
            </div>
            <div className="leading-8">
              <h3 className="font-semibold">Design</h3>
              <div className="py-2">
                <p className="font-semibold underline hover:cursor-pointer text-base text-indigo-700">
                  Photoshop
                </p>
                <p className="text-sm text-gray-400 py-1">
                  10,909,736 learners
                </p>
              </div>
              <div className="py-2">
                <p className="font-semibold underline hover:cursor-pointer text-base text-indigo-700">
                  Graphic Design
                </p>
                <p className="text-sm text-gray-400 py-1">3,381,052 learners</p>
              </div>
              <div className="py-2">
                <p className="font-semibold underline hover:cursor-pointer text-base text-indigo-700">
                  Drawing
                </p>
                <p className="text-sm text-gray-400 py-1">2,410,849 learners</p>
              </div>
            </div>
          </div>
        </div>
        <Button
          label="Explore more topics"
          className="hover:cursor-pointer hover:bg-slate-100 border-2 md:hidden w-full border-gray-500 mx-[-6px] px-2 py-2"
        />
      </div>
    </div>
  );
};

export default FeatureCategory;
