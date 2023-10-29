"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineTrophy } from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
//video play libery import
import ReactPlayer from "react-player";

const courseData = {
  totalHours: 0,
  lectures: 0,
  participants: 0,
  title: "The brand called you",
  subTitle: "learn the brand and stand out",
  description: "what you need to stand out in every area of life",
  price: 24.99,
  image:
    "https://firebasestorage.googleapis.com/v0/b/udemy-clone-uploads.appspot.com/o/image%2FCory%20Henry%20_%20Artists.jpegc23b6301-a588-4544-b1d9-c7b3621acc8d?alt=media&token=a7e76f3d-7139-493a-a8c7-7de0a6a367fd",
  materials: [
    {
      sectionTitle: "react",
      objective: "react",
      video: "https://www.youtube.com/watch?v=eOZ1EsrMtc4",
    },
    {
      sectionTitle: "java",
      objective: "java",
      video: "https://www.youtube.com/watch?v=fvxVIkGwIdw",
    },
    {
      sectionTitle: "introduction to machine learning",
      objective: "introduction to machine learning",
      video:
        "https://firebasestorage.googleapis.com/v0/b/udemy-clone-uploads.appspot.com/o/video%2FScreencast%20from%2004-29-2023%2005%3A16%3A44%20PM.webm110b5e4b-b9e9-4e4d-abf6-9369080f1687?alt=media&token=235d956b-ee71-4a07-a69b-51af81ea7842",
    },
    {
      sectionTitle: "intro",
      objective: "intro",
      video:
        "https://firebasestorage.googleapis.com/v0/b/udemy-clone-uploads.appspot.com/o/video%2FScreencast%20from%2004-29-2023%2005%3A16%3A44%20PM.webmf6afe8a8-d2e3-4249-a949-b7425b47ec78?alt=media&token=cf215f12-1e4c-4d29-8964-095de063ff95",
    },
  ],
  category: "Personal Development",
  subcategory: "Career Development",
  language: "Nederlands",
  level: "Beginner Level",
  likes: 0,
  dislikes: 0,
  author: "sam",
  authorInfor: [],
  createdAt: "2023-10-27T14:10:07.119Z",
  updatedAt: "2023-10-27T14:10:07.119Z",
  id: "653bc4bf2e60bb4fee720af6",
};

const CourseNavBar = () => {
  const [videoUrl, setVideoUrl] = useState("");

  //   const clickHandler = () => {
  //   return (event: React.MouseEvent) => {
  //     ...do stuff...
  //     event.preventDefault();
  //   }
  // }
  return (
    <>
      <div className="flex justify-between px-6 py-2 bg-dark opacity-95 text-white h-fit">
        <div className="divide-x-2 divide-gray2 flex h-fit  my-auto">
          <Image
            src="	https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
            width={91}
            height={34}
            alt="logo"
            loading="lazy"
            className="w-20 pr-4 my-auto"
          />
          <span className="my-auto px-4 hover:cursor-pointer">
            {courseData.title}
          </span>
        </div>
        <div className="flex justify-between gap-2">
          <div className="border-2 rounded-full hover:cursor-pointer">
            <AiOutlineTrophy size={30} className="p-2" />
          </div>
          <div className="flex my-auto gap-2">
            <p className="text-sm">Your progress</p>
            <span className="my-auto ">
              <RiArrowDownSLine />
            </span>
          </div>
          <div className="border-1 hover:cursor-pointer gap-2 flex px-2">
            <span className="my-auto text-xs ">Share</span>
            <RiArrowDownSLine className="my-auto" />
          </div>
          <div className="border-1 p-1 hover:cursor-pointer gap-2 flex">
            <CiMenuKebab size={20} className="my-auto " />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex w-9/12 items-center justify-center h-3/6 bg-dark py-1">
          <ReactPlayer
            // url="https://firebasestorage.googleapis.com/v0/b/udemy-clone-uploads.appspot.com/o/video%2FReact_Styled_Components_-_6_-_Pseudo_classes(0).mp4b43fb9dd-a53c-4bde-829d-967213b1020e?alt=media&token=6227b620-9ac2-4aed-b5ea-75362126f5c9"
            url={videoUrl}
            controls
          />
        </div>
        <div className="w-3/12">
          <div className="flex justify-between w-full px-3 font-bold border-b border-lightGray py-3">
            <h3> Course content</h3>
            <button className="h-1 font-normal">x</button>
          </div>
          {courseData.materials.map((material, index) => (
            <div key={index} className="">
              <h3 className="font-bold px-2 py-3 ">
                Section {index + 1} {material.sectionTitle}
              </h3>
              <div
                onClick={() => setVideoUrl(material.video)}
                className="flex gap-3 px-3 py-3 hover:bg-lightGray hover:cursor-pointer"
              >
                <input
                  type="checkbox"
                  name={material.objective}
                  value={material.objective}
                />
                <p>{material.objective}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CourseNavBar;
