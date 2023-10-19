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
    <div className="flex items-center border border-black p-3 my-5 max-w-2xl">
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

export default function IntendedLearners({ }: Props) {
  return (
    <div className="p-4 w-screen text-base">
      <div>
        <h1 className="font-bold text-slate-700 text-3xl mb-8">Intended Learners</h1>
        <p className='border-b border-gray-300 mb-12 max-w-4xl'></p>
        <p className='mb-10 max-w-3xl'>
          The following description will be publicly visible on your{' '}
          <a href="/#" className="underline decoration-blue-500 text-blue-700">Course Landing Page</a> and will have a direct impact on your course
          performance. These descriptions will help learners decide if your course is right for
          them.
        </p>
        <h3 className='font-bold mb-2'>What will students learn in your course?</h3>
        <p className='mb-6 max-w-3xl'>
          You must enter at least 4 <a href="/#" className="underline decoration-blue-500 text-blue-700">Learning Objectives or outcomes </a> that learners can expect to
          achieve after completing your course.
        </p>

        <InputWithCharacterLimit placeholder="Example: Define the roles and responsibilities of a project manager" />
        <InputWithCharacterLimit placeholder="Example: Estimate project timelines and budgets" />
        <InputWithCharacterLimit placeholder="Example: Identify and manage project risks" />
        <InputWithCharacterLimit placeholder="Example: Complete a case study to manage a project from conception to completion" />
      </div>

      <h2 className='text-blue-700 cursor-pointer mt-6 mb-6 flex text-center'><BsPlus size='2rem' /> Add more to your response</h2>
      <h3 className='font-bold mb-2 max-w-3xl'>What are the requirements or prerequisites for taking your course?</h3>
      <p className='max-w-3xl'>List the required skills, experience, tools or equipment learners should have prior to taking your course.
        If there are no requirements, use this space as an opportunity to lower the barrier for beginners.</p>

      <InputWithCharacterLimit placeholder="Example: No programming experience needed you will learn everything you need to know" />

      <h2 className='text-blue-700 cursor-pointer mt-6 mb-6 flex text-center'><BsPlus size='2rem' /> Add more to your response</h2>
      <h3 className='font-bold mb-2'>Who is this course for?</h3>
      <p className='max-w-3xl'>Write a clear description of the <a href="/#" className="underline decoration-blue-500 text-blue-700">intended learners </a> for your course who will find your course content valuable.
        This will help you attract the right learners to your course.</p>

      <InputWithCharacterLimit placeholder="Example: No programming experience needed you will learn everything you need to know" />

      <h2 className='text-blue-700 mt-6 mb-6 flex text-center cursor-pointer'><BsPlus size='2rem' /> Add more to your response</h2>

    </div>
  );
}