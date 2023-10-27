"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BiBold } from "react-icons/bi";
import {
  MdOutlineFormatItalic,
  MdOutlineFormatListNumbered,
  MdFormatListNumbered,
} from "react-icons/md";
// firebase imports
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/firebase";
import { v4 } from "uuid";
import { LOCAL_STORAGE } from "@/services/storage";

const Basics = () => {
  const [counta, setCounta] = useState(0);
  const [countb, setCountb] = useState(0);
  const maxLengtha = 60;
  const maxLengthb = 120;

  const [isLoading, setLoading] = useState(false);
  // create course data
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  // const [materials, setMaterials] = useState(
  //   LOCAL_STORAGE.get("course_materials")
  // );
  const [category, setCategory] = useState("");
  const [subcategory, setSubCategory] = useState("");
  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("");

  // sub-category data
  const [subCatData, setSubCatData] = useState<Array>();

  // alert states
  const [errMassage, setErrMassage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChangea = (event: any) => {
    const value = event.target.value;
    if (value.length <= maxLengtha) {
      setCounta(value.length);
      setTitle(value);
    }
  };

  const courseContent = {
    title,
    subTitle,
    description,
    image,
    // materials,
    category,
    subcategory,
    language,
    level,
  };

  const handleSaveData = () => {
    if (
      title &&
      subTitle &&
      description &&
      image &&
      category &&
      subcategory &&
      language &&
      level
    ) {
      LOCAL_STORAGE.save("courseContent", courseContent);
      console.log("course data: ", courseContent);
      setErrMassage("");
      setSuccess(true);
    } else {
      setErrMassage("course content is incomplete");
      setSuccess(false);
    }
  };

  const handleChangeb = (event: any) => {
    const value = event.target.value;
    if (value.length <= maxLengthb) {
      setCountb(value.length);
      setSubTitle(value);
    }
  };

  const handleSetCategory = (e: any) => {
    const value = e.target.value;
    const findSub = courseCategories.find(
      (category) => category.name === value
    );

    // console.log("category: ", value);
    // console.log("sub-category: ", findSub);

    setCategory(value);
    setSubCatData(findSub?.subCategories);
  };

  // handle uploadPicture
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    // Logic to handle file upload
    setLoading(true);
    const picUpload = event.target.files?.[0];
    console.log("Selected picture:", picUpload);
    if (picUpload == null) return;
    const picRef = ref(storage, `image/${picUpload.name + v4()}`);
    uploadBytes(picRef, picUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImage(url);
        setLoading(false);
        console.log("picture: ", url);
      });
    });
  };

  const courseCategories = [
    {
      name: "Development",
      subCategories: [
        { name: "Web Development" },
        { name: "Mobile Development" },
        { name: "Game Development" },
        { name: "Data Science & Machine Learning" },
        { name: "DevOps & Cloud Computing" },
      ],
    },
    {
      name: "Business",
      subCategories: [
        { name: "Entrepreneurship" },
        { name: "Marketing" },
        { name: "Finance" },
        { name: "Leadership" },
        { name: "Productivity" },
      ],
    },
    {
      name: "Design",
      subCategories: [
        { name: "Graphic Design" },
        { name: "Web Design" },
        { name: "UI/UX Design" },
        { name: "Photography" },
        { name: "Video Editing" },
      ],
    },
    {
      name: "Personal Development",
      subCategories: [
        { name: "Health & Fitness" },
        { name: "Happiness & Wellbeing" },
        { name: "Relationships" },
        { name: "Personal Finance" },
        { name: "Career Development" },
      ],
    },
  ];

  return (
    <div className="px-10 flex flex-col justify-center w-[100%] h-full pb-20 shadow-2xl">
      <div className="py-8">
        <h1 className="text-[26px] font-bold">Course Landing page</h1>
      </div>
      <hr className="w-full  text-gray" />
      <p className="pt-5 pb-6">
        Your course landing page is crucial to your success on Udemy. If
        it&apos;s done right, it can also help you gain visibility in search
        engines like Google. As you complete this section, think about creating
        a compelling Course Landing Page that demonstrates why someone would
        want to enroll in your course. Learn more about{" "}
        <a href="#" className="text-violet underline">
          creating your course landing page{" "}
        </a>
        and{" "}
        <a href="#" className="text-violet underline">
          course title standards.
        </a>
      </p>

      <div className="">
        <div className="flex flex-col gap-2 pt-6 pb-3">
          <h3 className="font-bold ">Course title</h3>
          <div className="flex border border-black">
            <input
              type="text"
              placeholder="Insert your course title."
              className="focus:outline-none focus:border-none border-collapse w-full px-4 py-4"
              maxLength={maxLengtha}
              onChange={handleChangea}
            />
            <p className="text-gray pt-4 pr-4">{maxLengtha - counta}</p>
          </div>
          <p className="text-[12px] text-gray-400 ">
            Your title should be a mix of attention-grabbing, informative, and
            optimized for search
          </p>
        </div>

        <div className="flex flex-col gap-2 py-3">
          <h3 className="font-bold">Course subtitle</h3>
          <div className="flex border border-black">
            <input
              type="text"
              placeholder="Insert your course subtitle."
              className="focus:outline-none focus:border-none border-collapse w-full px-4 py-4"
              maxLength={maxLengtha}
              onChange={handleChangeb}
            />
            <p className="text-gray pt-4 pr-4">{maxLengthb - countb}</p>
          </div>
          <p className="text-[12px] text-gray-400">
            Use 1 or 2 related keywords, and mention 3-4 of the most important
            areas that you&apos;ve covered during your course.
          </p>
        </div>

        <div className="flex flex-col gap-2 py-3">
          <h3 className="font-bold">Course description</h3>
          <div className="flex flex-col">
            <div className="border border-black flex gap-4 px-4 py-3">
              <button>
                <BiBold />
              </button>
              <button>
                <MdOutlineFormatItalic />
              </button>
              <button>
                <MdOutlineFormatListNumbered />
              </button>
              <button>
                <MdFormatListNumbered />
              </button>
            </div>
            <input
              type="text"
              placeholder="Insert your course description."
              onChange={(e) => setDescription(e.target.value)}
              className="border border-black border-t-transparent w-full pt-4 pb-10  px-4"
            />
          </div>
          <p className="text-[12px] text-gray-400">
            Description should have minimum 200 words.
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <select
          name=""
          id=""
          onChange={(e) => setLanguage(e.target.value)}
          className="border border-black w-1/3 py-4 px-4"
        >
          <option value="English (US)">English (US)</option>
          <option value="English (UK)">English (UK)</option>
          <option value="Afrikaans">Afrikaans</option>
          <option value="Francais (Canada)">Francais (Canada)</option>
          <option value="Francais (France)">Francais (France)</option>
          <option value="Nederlands">Nederlands</option>
          <option value="Nederlands (Belgie)">Nederlands (Belgie)</option>
          <option value="Espagnol">Espagnol</option>
          <option value="Slovacina">Slovacina</option>
          <option value="Romana">Romana</option>
        </select>

        <select
          onChange={(e) => setLevel(e.target.value)}
          name=""
          id=""
          className="border border-black w-1/3 py-4 px-4"
        >
          <option value="1">-- Select Level --</option>
          <option value="Beginner Level">Beginner Level</option>
          <option value="Intermediate Level">Intermediate Level</option>
          <option value="Expert Level">Expert Level</option>
          <option value="All Level">All Level</option>
        </select>

        <select
          onChange={handleSetCategory}
          name=""
          id=""
          className="border border-black w-1/3 py-4 px-4"
        >
          <option value="1">-- Select Category --</option>
          {courseCategories.map((category, index) => (
            <option value={category.name} key={index}>
              {category.name}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => setSubCategory(e.target.value)}
          name=""
          id=""
          className="border border-black w-1/3 py-4 px-4"
        >
          <option value="">select sub-category</option>
          {subCatData?.map((sub: any, index: React.Key | null | undefined) => (
            <option value={sub.name} key={index}>
              {sub.name}
            </option>
          ))}
        </select>
      </div>
      <div className="pt-8">
        <p className="flex items-center font-bold pb-2">
          What is primarily taught in your course? <AiFillQuestionCircle />{" "}
        </p>
        <input
          type="text"
          placeholder="e.g. Landscape Photography"
          className="border border-black px-4 py-4 w-1/2"
        />
      </div>
      <div className="flex w-full gap-4 items-start">
        <div className="w-1/2 py-6">
          <p className="font-bold pb-2">Course image</p>
          <div className="h-[300px] border border-black relative">
            {image && (
              <Image
                src={image}
                alt="course image"
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
        </div>

        <div className="w-1/2">
          <p className="pt-12">
            Upload your course image here. It must meet our{" "}
            <a href="#" className="text-violet underline">
              course image quality standards
            </a>{" "}
            to be accepted. Important guidelines: 750x422 pixels; .jpg, .jpeg,.
            gif, or .png. no text on the image.
          </p>
          {isLoading && <p className="text-purple">Loading...</p>}
          {image && <p className="text-green">Upload successfull</p>}
          <input
            className="block w-full text-lg text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 black:text-gray-400 focus:outline-none black:bg-gray-700 black:border-gray-600 placeholder:gray-400 mt-2 py-2"
            id="large_size"
            type="file"
            onChange={handleFileUpload}
          />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <button
          className="bg-dark text-white w-32 py-4 items-end"
          onClick={handleSaveData}
          disabled={!title ? true : false}
        >
          save
        </button>
        {errMassage && (
          <p className="bg-errRed py-4 px-2 text-dark items-center text-center">
            {errMassage}
          </p>
        )}

        {success && (
          <p className="text-green py-4 px-2 items-center text-center">saved</p>
        )}
      </div>

      {/* 
      <div className="flex w-full gap-4 items-start">
        <div className="w-1/2 py-6">
          <p className="font-bold pb-2">Promotional Video</p>
          <div className="h-[300px] border border-black"></div>
        </div>

        <div className="w-1/2">
          <p className="pt-12">
            Your promo video is a quick and compelling way for students to
            preview what they&apos;ll learn in your course. Students considering
            your course are more likely to enroll if your promo video is
            well-made.
            <a href="#" className="text-violet underline">
              Learn how to make your promo video awesome!
            </a>
          </p>
          <input
            className="block w-full text-lg text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 black:text-gray-400 focus:outline-none black:bg-gray-700 black:border-gray-600 placeholder:gray-400 mt-2 py-2"
            id="large_size"
            type="file"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Basics;
