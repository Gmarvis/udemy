'use client'


import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';

type InputWithCharacterLimitProps = {
  placeholder: string;
};

const InputWithCharacterLimit = ({ placeholder }: InputWithCharacterLimitProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const characterLimit = 160;

  return (
    <div className="flex items-center border border-black p-3 my-5 max-w-3xl">
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        className="flex-grow outline-none bg-transparent"
      />
      <span className="text-gray text-sm">{characterLimit}</span>
    </div>
  );
};

type IntendedLearnersProps = {};

const IntendedLearners = ({}: IntendedLearnersProps) => {
  return (
    <div className="py-8 px-20 ">
      <h1 className="font-bold text-black font-segoe text-3xl mb-8 mt-4">Intended Learners</h1>
      <p className="border-b border-gray mb-12"></p>
      <p className="mb-10 max-w-4xl">
        The following description will be publicly visible on your{' '}
        <a href="/#" className="underline decoration-purple text-purple">
          Course Landing Page
        </a>{' '}
        and will have a direct impact on your course performance. These descriptions will help
        learners decide if your course is right for them.
      </p>
      <h3 className="font-bold mb-2">What will students learn in your course?</h3>
      <p className="mb-6 max-w-4xl">
        You must enter at least 4{' '}
        <a href="/#" className="underline decoration-purple text-purple">
          Learning Objectives or outcomes
        </a>{' '}
        that learners can expect to achieve after completing your course.
      </p>

      <InputWithCharacterLimit placeholder="Example: Define the roles and responsibilities of a project manager" />
      <InputWithCharacterLimit placeholder="Example: Estimate project timelines and budgets" />
      <InputWithCharacterLimit placeholder="Example: Identify and manage project risks" />
      <InputWithCharacterLimit placeholder="Example: Complete a case study to manage a project from conception to completion" />

      <h2 className="text-purple cursor-pointer mt-6 mb-6 flex text-center">
        <BsPlus size="2rem" /> Add more to your response
      </h2>
      <h3 className="font-bold mb-2 max-w-4xl">What are the requirements or prerequisites for taking your course?</h3>
      <p className="max-w-4xl">
        List the required skills, experience, tools or equipment learners should have prior to taking
        your course. If there are no requirements, use this space as an opportunity to lower the
        barrier for beginners.
      </p>

      <InputWithCharacterLimit placeholder="Example: No programming experience needed you will learn everything you need to know" />

      <h2 className="text-purple cursor-pointer mt-6 mb-6 flex text-center">
        <BsPlus size="2rem" /> Add more to your response
      </h2>
      <h3 className="font-bold mb-2">Who is this course for?</h3>
      <p className="max-w-4xl">
        Write a clear description of the{' '}
        <a href="/#" className="underline decoration-purple text-purple">
          intended learners
        </a>{' '}
        for your course who will find your course content valuable. This will help you attract the
        right learners to your course.
      </p>

      <InputWithCharacterLimit placeholder="Example: No programming experience needed you will learn everything you need to know" />

      <h2 className="text-purple mt-6 mb-6 flex text-center cursor-pointer">
        <BsPlus size="2rem" /> Add more to your response
      </h2>
    </div>
  );
};

export default IntendedLearners;