import React from 'react'
import Image from 'next/image'

type Props = {}

export default function CourseStructure({ }: Props) {
  return (
    <div className="">
      <h1 className="font-bold text-slate-700 text-2xl  py-10 pl-14">Course Structure</h1>
      <p className='border-b border-gray-300'></p>

      <div className='flex bg-gray-100 text-lg mb-6 px-14 py-6'>

        <div className='max-w-2xl mr-6 mt-20'>
          <h2 className='font-bold mb-6 text-2xl'>There's a course in you. Plan it out.</h2>
          <p className='mb-10 max-w-3xl'>
            Planning your course carefully will create a clear learning path for students and help you once you film. Think down to the details of each lecture including the skill you'll teach, estimated video length, practical activities to include, and how you'll create introductions and summaries.
          </p>
        </div>

        <div className='shadow bg-white p-4 text-center' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image src='/library.jpg' width={150} height={150} alt='library book' className='object-center' />
          <h2 className='font-bold my-4 text-xl'>Our library of resources</h2>
          <p className='text-base'>Tips and guides to structuring a course students love</p>
          <button className='border border-black py-4 px-6 font-bold mt-4 mb-5'>Teaching Center</button>
        </div>
      </div>
<div className='px-14 py-8'>
      <h2 className='font-bold mb-6 text-2xl'>Tips</h2>
      <h4 className='font-bold mb-3'>Start with your goals</h4>
      <p className='mb-6 max-w-4xl'>
        Setting goals for what learners will accomplish in your course (also known as  <a href="/#" className="underline decoration-blue-500 text-blue-700">learning objectives</a>) at the beginning will help you determine what content to include in your course and how you will teach the content to help your learners achieve the goals.
      </p>

      <h4 className='font-bold mb-3'>Create an outline.</h4>
      <p className='mb-6'>Setting goals for what learners will accomplish in your course (also known as<a href="/#" className="underline decoration-blue-500 text-blue-700">learning objectives</a>) at the beginning will help you determine what content to include in your course and how you will teach the content to help your learners achieve the goals.
      </p>

      <h4 className='font-bold mb-3'>Introduce yourself and create momentum.</h4>
      <p className='mb-6'>People online want to start learning quickly. Make an introduction section that gives learners something to be excited about in the first 10 minutes.</p>

      <h4 className='font-bold mb-3'>Sections have a clear learning objective.</h4>
      <p className='mb-6'>Introduce each section by describing the section's <a href="/#" className="underline decoration-blue-500 text-blue-700">goal and why it's important.</a> Give lectures and sections titles that reflect their content and have a logical flow.</p>

      <h4 className='font-bold mb-3'>Lectures cover one concept.</h4>
      <p className='mb-6'>A good lecture length is 2-7 minutes to keep students interested and help them study in short bursts. Cover a single topic in each lecture so learners can easily find and re-watch them later.</p>


      <h4 className='font-bold mb-3'>Mix and match your lecture types.</h4>
      <p className='mb-6'>Alternate between filming yourself, your screen, and slides or other visuals. Showing yourself can help learners feel connected.
      </p>

      <h4 className='font-bold mb-3'>Practice activities create hands-on learning.</h4>
      <p className='mb-6'>Help learners <a href="/#" className="underline decoration-blue-500 text-blue-700">apply your lessons</a> to their real world with projects, assignments, coding exercises, or worksheets.</p>

      <h2 className='font-bold mb-5 text-2xl'>Requirements</h2>
      <ul className='mb-6 list-disc list-inside'>
        <li className='mb-2'>See the <a href="/#" className="underline decoration-blue-500 text-blue-700">complete list</a> of course quality requirements</li>
        <li className='mb-2'>Your course must have at least five lectures</li>
        <li className='mb-2'>All lectures must add up to at least 30+ minutes of total video</li>
        <li className='mb-2'>Your course is composed of valuable educational content and free of promotional or distracting materials</li>
      </ul>

      <h2 className='font-bold mb-4 text-2xl'>Resources</h2>

      <a href="/#" className="underline decoration-blue-500 text-blue-700">Udemy Trust & Safety</a>
      <p className='mb-5'>Our policies for instructors and students</p>

      <a href="/#" className="underline decoration-blue-500 text-blue-700">Join the instructor community</a>
      <p className='mb-5'>A place to connect with other instructors</p>

      <a href="/#" className="underline decoration-blue-500 text-blue-700">Official Udemy Course: How to Create an Online Course</a>
      <p className='mb-5'>Learn about course creation from the Udemy Instructor Team and experienced instructors</p>
      </div>
    </div>
  )
}