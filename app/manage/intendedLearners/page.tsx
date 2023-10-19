'use client'


import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';

type Props = {
  placeholder: string;
};

const InputWithCharacterLimit = ({ placeholder }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const characterLimit = 160;

  return (
    <div className="flex items-center border border-black p-4 my-5 max-w-5xl">
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        className="flex-grow outline-none bg-transparent"
      />
      <span className="text-gray-600 text-sm">{characterLimit}</span>
    </div>
  );
};

export default function IntendedLearners({}: Props) {
  return (
    <div className="p-4 max-w-6xl text-xl">
      <div>
        <h1 className="font-bold text-4xl mt-4 mb-6">Intended Learners</h1>
        <p className='border-b border-gray-300 mb-12'></p>
        <p className='mb-10'>
          The following description will be publicly visible on your{' '}
          <a href="/#" className="underline decoration-blue-500 text-blue-700">Course Landing Page</a> and will have a direct impact on your course
          performance. These descriptions will help learners decide if your course is right for
          them.
        </p>
        <h3 className='font-bold mb-2'>What will students learn in your course?</h3>
        <p className='mb-6'>
          You must enter at least 4 <a href="/#" className="underline decoration-blue-500 text-blue-700">Learning Objectives or outcomes </a> that learners can expect to
          achieve after completing your course.
        </p>

        <InputWithCharacterLimit placeholder="Example: Define the roles and responsibilities of a project manager" />
        <InputWithCharacterLimit placeholder="Example: Estimate project timelines and budgets" />
        <InputWithCharacterLimit placeholder="Example: Identify and manage project risks" />
        <InputWithCharacterLimit placeholder="Example: Complete a case study to manage a project from conception to completion" />
      </div>

      <h2><BsPlus/></h2>
      
    </div>
  );
}