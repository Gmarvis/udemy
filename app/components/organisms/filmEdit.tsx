import React from "react"
import Image from "next/image"

type Props = {}

export default function CourseStructure({ }: Props) {
  return (
    <div>
      <h1 className="font-bold font-segoe text-black text-3xl  py-10 pl-14">Film & Edit</h1>
      <p className="border-b border-gray2"></p>

      <div className="flex bg-gray2 text-lg mb-6 px-14 py-6">

        <div className="max-w-2xl mr-6 mt-20">
          <h2 className="font-bold mb-6 text-2xl">You&apos;re ready to share your knowledge.</h2>
          <p className="mb-10 max-w-3xl">
          This is your moment! If you&apos;ve structured your course and used our guides, you&apos;re well prepared for the actual shoot. Pace yourself, take time to make it just right, and fine-tune when you edit.
          </p>
        </div>

        <div className="shadow bg-white p-4 text-center" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Image src="/test-video.jpg" width={150} height={150} alt="library book" className="object-center" />
          <h2 className="font-bold my-4 text-xl">You&apos;re in good company</h2>
          <p className="text-base">Chat and get production help with other Udemy instructors</p>
          <button className="border border-black py-4 px-6 font-bold mt-4 mb-5">Join the community</button>
        </div>
      </div>
      <div className="px-14 py-8">
        <h2 className="font-bold mb-6 text-2xl">Tips</h2>
        <h4 className="font-bold mb-3">Take breaks and review frequently.</h4>
        <p className="mb-6 max-w-4xl">
        Check often for any changes such as new noises. Be aware of your own energy levels--filming can tire you out and that translates to the screen.
        </p>

        <h4 className="font-bold mb-3">Build rapport.
</h4>
        <p className="mb-6">Students want to know who&apos;s teaching them. Even for a course that is mostly screencasts, film yourself for your introduction. Or go the extra mile and film yourself introducing each section!
        </p>

        <h4 className="font-bold mb-3">Being on camera takes practice.</h4>
        <p className="mb-6">Make eye contact with the camera and speak clearly. Do as many retakes as you need to get it right.</p>

        <h4 className="font-bold mb-3">Set yourself up for editing success.</h4>
        <p className="mb-6">You can edit out long pauses, mistakes, and ums or ahs. Film a few extra activities or images that you can add in later to cover those cuts.</p>

        <h4 className="font-bold mb-3">Create audio marks.</h4>
        <p className="mb-6">Clap when you start each take to easily locate the audio spike during editing. Use our guides to manage your recording day efficiently.</p>

        <h4 className="font-bold mb-3">For screencasts, clean up.</h4>
        <p className="mb-6">Move unrelated files and folders off your desktop and open any tabs in advance. Make on-screen text at least 24pt and use zooming to highlight.
        </p>

        <h2 className="font-bold mb-5 text-2xl">Requirements</h2>
        <ul className="mb-6 list-disc list-inside">
          <li className="mb-2">Film and export in HD to create videos of at least 720p, or 1080p if possible</li>
          <li className="mb-2">Audio should come out of both the left and right channels and be synced to your video</li>
          <li className="mb-2">Audio should be free of echo and background noise so as not to be distracting to students</li>
        </ul>

        <h2 className="font-bold mb-4 text-2xl">Resources</h2>

        <a href="/#" className="underline decoration-purple text-purple">Create a test video</a>
        <p className="mb-5">Get feedback before filming your whole course</p>

        <a href="/#" className="underline decoration-purple text-purple">Teaching Center: Guide to quality A/V</a>
        <p className="mb-5">Film and edit with confidence</p>

        <a href="/#" className="underline decoration-purple text-purple">Udemy trust & safety</a>
        <p className="mb-5">Our policies for instructors and students</p>
      </div>
    </div>
  )
}