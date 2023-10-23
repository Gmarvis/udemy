import React, { useState } from 'react';
import ConfirmationPopup from '../molecules/confirmationPopup';
import { BsPlus, BsX, BsFileEarmark, BsTrash, BsPencil, BsFillCheckCircleFill } from 'react-icons/bs';

type Section = {
  id: string;
  title: string;
  objectives: string;
};

const InstructorCurriculum = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const [newSectionTitle, setNewSectionTitle] = useState('');
  const [newSectionObjectives, setNewSectionObjectives] = useState('');
  const [isAddingSection, setIsAddingSection] = useState(false);

  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);


  const handleAddSection = () => {
    if (newSectionTitle && newSectionObjectives) {
      const newSection: Section = {
        id: Date.now().toString(),
        title: newSectionTitle,
        objectives: newSectionObjectives,
      };

      setSections([...sections, newSection]);
      setNewSectionTitle('');
      setNewSectionObjectives('');
      setIsAddingSection(false);
    }
  };

  return (
    <div className='pb-20'>
      <div className="flex justify-between py-6 px-14">
        <h1 className="font-bold text-slate-700 text-2xl mt-6">Curriculum</h1>
        <button className="px-6 py-4 mt-4 font-bold border border-black">Bulk Uploader</button>
      </div>
      <p className="border-b border-gray-300"></p>

      <p className="py-10 px-14">
        Start putting together your course by creating sections, lectures, and practice (quizzes,
        coding exercises, and assignments). Start putting together your course by creating sections,
        lectures, and practice activities{' '}
        <a href="/#" className="underline decoration-blue-500 text-blue-700">
          (quizzes, coding exercises, and assignments)
        </a>
        . Use your{' '}
        <a href="/#" className="underline decoration-blue-500 text-blue-700">
          course outline
        </a>{' '}
        to structure your content and label your sections and lectures clearly. If you're intending
        to offer your course for free, the total length of video content must be less than 2 hours.
      </p>




      <div className="border mx-14 mb-4 border-black bg-gray-100 p-4">

        {sections.map((section) => (
          <h3 key={section.id} className='flex items-center hover:bg-gray-200 p-2 text-xl font-bold'>Lecture1:
            <span className='flex ml-2 mr-4 font-normal text-base items-center'>
              <BsFileEarmark className='mr-2 items-center' />
              {section.title}
            </span>
            <div className='flex items-center space-x-1'>

              <BsTrash className='cursor-pointer mr-2 text-base'
                onClick={() => {
                  setSelectedSectionId(section.id);
                  setShowConfirmationPopup(true);
                }} />

              <BsPencil className='cursor-pointer text-base'
              onClick={() => {
                // Handle navigation to the initial section
              }} />
            </div>
          </h3>
        ))}

        <div className='border border-black px-3 py-2 bg-white mb-4 ml-8 justify-between items-center flex'>

          <div>
          <h3 className='flex items-center hover:bg-gray-200 p-2'> <BsFillCheckCircleFill className='mr-2'/>Lecture 1:
            <span className='flex ml-2 mr-4 text-base items-center'>
              <BsFileEarmark className='mr-2 items-center' />
              Introduction
            </span></h3>
          </div>

          <div>
          <button
            className="flex items-center space-x-1 cursor-pointer border border-black px-2 py-1 font-bold text-sm"
          >
            <BsPlus className='text-3xl' />
            <span>Content</span>
          </button>
          </div>

        </div>



        <div className='items-center ml-8'>
          <button className="px-4 py-2 mt-2 bg-white flex text-black font-bold hover:bg-gray-500 border border-black"><BsPlus className='text-2xl'/> Curriculum item</button>
        </div>


      </div>


      {showConfirmationPopup && (
        <ConfirmationPopup
          onCancel={() => setShowConfirmationPopup(false)}
          onDelete={() => {
            // Handle section deletion logic here
            setShowConfirmationPopup(false);
          }}
        />
      )}



      {isAddingSection ? (
        <div className="px-14">
          <button
            onClick={() => setIsAddingSection(false)}
            className="flex items-center space-x-1 font-bold cursor-pointer mb-4 text-3xl"
          ><BsX />
            {sections.map((section) => (
              <div key={section.id} className="mb-4">
                <h2 className="text-xl font-bold">{section.title}</h2>
              </div>
            ))}
          </button>

          <div className='border border-black p-4'>

            <div className="">
              <h3 className='font-bold mb-4'>New Section:</h3>
              <div>

                <div className='flex border border-black p-2 mb-6'>
                  <input
                    id="titleInput"
                    type="text"
                    value={newSectionTitle}
                    onChange={(e) => setNewSectionTitle(e.target.value)}
                    className="flex-grow outline-none bg-transparent"
                    maxLength={80}
                    placeholder="Enter a Title"
                  />
                </div>
                <label htmlFor="objectivesInput" className="font-bold">
                  what will student be able to do at the end of this section?
                </label>
                <div className='flex border border-black p-2 mt-4 mb-4'>
                  <input
                    id="objectivesInput"
                    value={newSectionObjectives}
                    onChange={(e) => setNewSectionObjectives(e.target.value)}
                    className="flex-grow outline-none bg-transparent"
                    maxLength={200}
                    placeholder="Enter learning objectives"
                  />
                </div>

                <div className='flex justify-end'>
                  <button className='font-bold mr-4'>Cancel</button>

                  <button
                    onClick={handleAddSection}
                    className="px-4 py-2 mt-2 bg-black text-white font-bold hover:bg-gray-500"
                  >
                    Add Section
                  </button>
                </div>

              </div>
            </div>

          </div>


        </div>
      ) : (
        <div className="mt-4 px-14">
          <button
            onClick={() => setIsAddingSection(true)}
            className="flex items-center space-x-1 cursor-pointer border border-black px-2 py-1 font-bold text-sm"
          >
            <BsPlus className='text-3xl' />
            <span>Section</span>
          </button>
        </div>
      )}


    </div>


  );
};

export default InstructorCurriculum;