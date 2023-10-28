"use client";

import { useState, createElement } from "react";
import IntendedLearners from "../components/organisms/intendedLearners/page";
import CourseStructure from "../components/organisms/courseStructure";
import InstructorCurriculum from "../components/organisms/instructorCurriculum";
import FilmEdit from "../components/organisms/filmEdit";
import { ComponentType } from "react";
import SetupTest from "../components/organisms/setupTest";
import ManagePricing from "../components/organisms/managePricing";
import Basics from "../components/pages/basics";
//icons imports
import { GrFormPrevious } from "react-icons/gr";
import { AiFillSetting } from "react-icons/ai";
import { LOCAL_STORAGE } from "@/services/storage";
import { createCourse } from "@/services/utils";

type Checkbox = {
  id: number;
  name: string;
  checks: Check[];
};

type Check = {
  id: number;
  name: string;
  content: string;
};

type Props = {
  // Define the props for your components here
  placeholder: string;
};

const checkboxes: Checkbox[] = [
  {
    id: 1,
    name: "Plan Your Course",
    checks: [
      {
        id: 1,
        name: "Intended learners",
        content: "Content for Intended learners...",
      },
      {
        id: 2,
        name: "Course structure",
        content: "Content for Course structure...",
      },
      {
        id: 3,
        name: "Setup & test video",
        content: "Content for Setup & test video...",
      },
    ],
  },
  {
    id: 2,
    name: "Create Your Content",
    checks: [
      {
        id: 1,
        name: "Film & edit",
        content: "Content for Film & edit...",
      },
      {
        id: 2,
        name: "Curriculum",
        content: "Content for Curriculum...",
      },
      {
        id: 3,
        name: "Captions (optional)",
        content: "Content for Captions (optional)...",
      },
      {
        id: 4,
        name: "Accessibility",
        content: "Content for Accessibility...",
      },
    ],
  },
  {
    id: 3,
    name: "Publish Your Course",
    checks: [
      {
        id: 1,
        name: "Course Landing Page",
        content: "Content for Course Landing Page...",
      },
      {
        id: 2,
        name: "Pricing",
        content: "Content for Pricing...",
      },
      {
        id: 3,
        name: "Promotions",
        content: "Content for Promotions...",
      },
      {
        id: 4,
        name: "Course messages",
        content: "Content for Course messages...",
      },
    ],
  },
];

const ManageGoals = () => {
  const pageComponents: { [key: string]: ComponentType<Props> } = {
    "Intended learners": IntendedLearners,
    "Course structure": CourseStructure,
    "Setup & test video": SetupTest,
    "Film & edit": FilmEdit,
    Curriculum: InstructorCurriculum,
    "Course Landing Page": Basics,
    Pricing: ManagePricing,
    // ...add other checkboxes and their corresponding page components here
  };
  const [activePage, setActivePage] = useState("Intended learners");
  const [showContent, setShowContent] = useState(true);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState("");

  const handleCheckboxClick = (page: string) => {
    setActivePage(page);
    setShowContent(true);
  };

  // submit course data to the backendprev
  const handleSubmit = () => {
    setLoading(true);
    // const courseData = localStorage.getItem("courseContent");
    const courseContent = LOCAL_STORAGE.get("courseContent");
    // const coursemat = localStorage.get("course_materials");
    const courseMaterials = LOCAL_STORAGE.get("course_materials");
    if (!courseContent || !courseMaterials) {
      setError("course content is incomplete");
      setSuccess(false);
      setLoading(false);
      return;
    }

    const updatedContent = {
      ...courseContent,
      materials: courseMaterials,
    };
    console.log("updatedContent: ", updatedContent);
    // console.log("token: ", LOCAL_STORAGE.get("token"));

    // post course
    createCourse(updatedContent).then((res) => {
      if (res.statusCode === 401) {
        setError(`${res.message} please login first`);
        setLoading(false);
      } else {
        console.log("response: ", res);
        setSuccess(true);
        setLoading(false);
        setError("");
        localStorage.removeItem("courseContent");
        localStorage.removeItem("course_materials");

        // LOCAL_STORAGE.delete("courseContent");
        // LOCAL_STORAGE.delete("course_materials");
      }
    });
  };
  return (
    <div>
      <div className="bg-dark py-2 flex justify-between fixed top-0 left-0 right-0">
        <div className="flex text-white gap-2">
          <button className="flex text-white items-center">
            <GrFormPrevious className="fill-white" />
            <span className="font-normal">Back to course</span>
          </button>
          <h3 className="font-bold self-center">Course Title</h3>
        </div>
        <div className="flex mx-1 gap-3">
          <button className="bg-gray px-4 py-1">Save</button>
          <button className="items-center">
            <AiFillSetting className="fill-white size-xl text-2xl items-center" />
          </button>
        </div>
      </div>
      <div className="flex mx-72 lg:mx-24 my-6">
        <div className="flex flex-col space-y-2 mt-8 p-4">
          {checkboxes.map((checkbox) => (
            <div key={checkbox.id} className="pb-4">
              <h2 className="font-bold mb-2">{checkbox.name}</h2>
              {checkbox.checks.map((check) => (
                <label
                  className={`flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray ${
                    activePage === check.name ? "border-l-4 border-black" : ""
                  }`}
                  key={check.id}
                >
                  <input
                    type="checkbox"
                    checked={activePage === check.name}
                    onChange={() => handleCheckboxClick(check.name)}
                  />
                  <span>{check.name}</span>
                </label>
              ))}
            </div>
          ))}
          <div className="flex">
            <button
              onClick={handleSubmit}
              className="bg-purple text-white px-10 py-3 mt-4 font-bold text-base"
            >
              {!loading ? "Submit for Review" : "loading..."}
            </button>
            {success && (
              <p className="text-green py-4 px-2 items-center text-center">
                successful
              </p>
            )}
            {err && (
              <p className="text-errRed py-4 px-2 items-center text-center">
                {err}
              </p>
            )}
          </div>
        </div>

        <div className="ml-6">
          {showContent && (
            <div className="text-base shadow-2xl max-w-5xl mt-6">
              {activePage &&
                pageComponents[activePage] &&
                createElement(pageComponents[activePage])}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageGoals;
