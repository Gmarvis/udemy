import React from 'react'
import Image from 'next/image'

type Props = {}

export default function CourseStructure({ }: Props) {
  return (
    <div className="">
      <h1 className="font-bold text-slate-700 text-2xl  py-10 pl-14">Setup & test video</h1>
      <p className='border-b border-gray-300'></p>

      <div className='flex bg-gray-100 text-lg mb-6 px-14 py-6'>

        <div className='max-w-2xl mr-6 mt-20'>
          <h2 className='font-bold mb-6 text-2xl'>Arrange your ideal studio and get early feedback
          </h2>
          <p className='mb-10 max-w-3xl'>
            It&apos;s important to get your audio and video set up correctly now, because it&apos;s much more difficult to fix your videos after you&apos;ve recorded. There are many creative ways to use what you have to create professional looking video.
          </p>
        </div>

        <div className='shadow bg-white p-4 text-center' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image src='/test-video.jpg' width={150} height={150} alt='library book' className='object-center' />
          <h2 className='font-bold my-4 text-xl'>Free expert video help</h2>
          <p className='text-base'>Get personalized advice on your audio and video</p>
          <button className='border border-black py-4 px-6 font-bold mt-4 mb-5'>Create a test video</button>
        </div>
      </div>
      <div className='px-14 py-8'>
        <h2 className='font-bold mb-6 text-2xl'>Tips</h2>
        <h4 className='font-bold mb-3'>Equipment can be easy</h4>
        <p className='mb-6 max-w-4xl'>
          You don&apos;t need to buy fancy equipment. Most smartphone cameras can capture video in HD, and you can record audio on another phone or external microphone.
        </p>

        <h4 className='font-bold mb-3'>Students need to hear you.</h4>
        <p className='mb-6'>A good microphone is the most important piece of equipment you will choose. There are lot of affordable options.. Make sure it&apos;s correctly plugged in and 6-12 inches (15-30 cm) from you.
        </p>

        <h4 className='font-bold mb-3'>Make a studio.</h4>
        <p className='mb-6'>Clean up your background and arrange props. Almost any small space can be transformed with a backdrop made of colored paper or an ironed bed sheet.</p>

        <h4 className='font-bold mb-3'>Light the scene and your face</h4>
        <p className='mb-6'>Turn off overhead lights. Experiment with three point lighting by placing two lamps in front of you and one behind aimed on the background.</p>

        <h4 className='font-bold mb-3'>Reduce noise and echo</h4>
        <p className='mb-6'>Turn off fans or air vents, and record at a time when it&apos;s quiet. Place acoustic foam or blankets on the walls, and bring in rugs or furniture to dampen echo.</p>


        <h4 className='font-bold mb-3'>Be creative.</h4>
        <p className='mb-6'>Students won&apos;t see behind the scenes. No one will know if you&apos;re surrounded by pillows for soundproofing...unless you tell other instructors in the community!
        </p>

        <h2 className='font-bold mb-5 text-2xl'>Requirements</h2>
        <ul className='mb-6 list-disc list-inside'>
          <li className='mb-2'>Film and export in HD to create videos of at least 720p, or 1080p if possible</li>
          <li className='mb-2'>Audio should come out of both the left and right channels and be synced to your video</li>
          <li className='mb-2'>All lectures must add up to at least 30+ minutes of total video</li>
          <li className='mb-2'>Audio should be free of echo and background noise so as not to be distracting to students</li>
        </ul>

        <h2 className='font-bold mb-4 text-2xl'>Resources</h2>

        <a href="/#" className="underline decoration-blue-500 text-blue-700">Teaching Center: Guide to equipment</a>
        <p className='mb-5'>Make a home studio on a budget</p>

        <a href="/#" className="underline decoration-blue-500 text-blue-700">Udemy Trust & Safetyy</a>
        <p className='mb-5'>Our policies for instructors and students</p>

        <a href="/#" className="underline decoration-blue-500 text-blue-700">Join the community</a>
        <p className='mb-5'>A place to talk with other instructors</p>
      </div>
    </div>
  )
}