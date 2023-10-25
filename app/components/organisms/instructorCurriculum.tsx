import React, { useState, ChangeEvent } from 'react';
import ConfirmationPopup from '../molecules/confirmationPopup';
import { BsPlus, BsX, BsFileEarmark, BsTrash, BsPencil, BsFillCheckCircleFill, BsChevronDown, BsChevronUp, BsPlayFill } from 'react-icons/bs';

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

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [showVideo, setShowVideo] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [isAddingVideo, setIsAddingVideo] = useState(false);

  const handleVideoClick = () => {
    setIsAddingVideo(true);
  };
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    // Logic to handle file upload
    const selectedFile = event.target.files?.[0];
    console.log('Selected file:', selectedFile);
  };

  const handleContentButtonClick = () => {
    setShowVideo(true);
    setShowInput(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };


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

      {/* header of page  */}
      <div className="flex justify-between py-6 px-14">
        <h1 className="font-bold text-slate-700 text-2xl mt-6">Curriculum</h1>
        <button className="px-6 py-4 mt-4 font-bold border border-black">Bulk Uploader</button>
      </div>
      <p className="border-b border-gray-300"></p>

      <p className="py-10 px-14">
        Start putting together your course by creating sections, lectures, and practice (quizzes,
        coding exercises, and assignments). Start putting together your course by creating sections,
        lectures, and practice activities{' '}
        <a href="/#" className="underline decoration-purple text-purple">
          (quizzes, coding exercises, and assignments)
        </a>
        . Use your{' '}
        <a href="/#" className="underline decoration-purple text-purple">
          course outline
        </a>{' '}
        to structure your content and label your sections and lectures clearly. If you&apos;re intending
        to offer your course for free, the total length of video content must be less than 2 hours.
      </p>
      {/* end of header  */}

      {/* whole section for lectures  */}
      <div className="border mx-14 mb-4 border-black bg-gray2 p-4">

        {sections.map((section) => (
          <h3 key={section.id} className='flex items-center p-2 mb-8 font-bold'>Lecture1:
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

        <div className='border border-black px-3 py-2 bg-white ml-8 justify-between items-center flex'>

          <div>
            <h3 className='flex items-center hover:bg-gray2 p-2'> <BsFillCheckCircleFill className='mr-2' />Lecture 1:
              <span className='flex ml-2 mr-4 text-base items-center'>
                <BsFileEarmark className='mr-2 items-center' />
                Introduction
              </span></h3>
          </div>

          <div className="flex items-center">
            {/* content bottom and select type  */}
            {showVideo ? (
              <h3
                className="flex items-center bg-white border border-black border-b-0 -mb-6 cursor-pointer px-2 py-1 font-bold text-sm"
                onClick={() => {
                  setShowVideo(false)
                  setDropdownOpen(false);
                }}
              >
                <span>Select content type</span>
                <BsX className="text-2xl" />
              </h3>
            ) : (
              <button
                className="flex items-center space-x-1 cursor-pointer border border-black px-2 py-1 font-bold text-sm hover:bg-gray2"
                onClick={() => setShowVideo(true)}
              >
                <BsPlus className="text-2xl" />
                <span>Content</span>
              </button>
            )}

            {/* dropdown icon description  */}

            {isDropdownOpen ? (
              <BsChevronUp className="ml-4 cursor-pointer" onClick={toggleDropdown} />
            ) : (
              <BsChevronDown className="ml-4 cursor-pointer" onClick={toggleDropdown} />
            )}

          </div>

        </div>
        {isDropdownOpen && !showVideo && (
          <div className="border border-black px-3 py-2 bg-white mb-4 ml-8 justify-between items-center flex border-t-0">
            <button
              className="px-3 py-2 mt-2 bg-white flex items-center text-black text-sm font-bold hover:bg-gray border border-black"
            >
              <BsPlus className="text-xl" /> Description
            </button>
          </div>
        )}


        {/* uploading video and article section  */}
        {showVideo && (
          <div className="border border-black px-3 py-2 bg-white mb-4 ml-8 justify-between items-center border-t-0">
            {isAddingVideo ? (
              <div>
                <button className='flex border-gray w-full mb-2 border-b-small font-bold' onClick={() => setIsAddingVideo(false)}>Upload</button>
                <input type="file" onChange={handleFileUpload} className='border border-black mt-2 cursor-pointer px-4 py-2' />

                <p className='text-xs py-2'>Note: All files should be at least 720p and less than 4.0 GB.</p>
              </div>

            ) : (
              <>
                <h3 className="text-sm text-center mb-4">Select the main type of content. Files and links can be added as resources. Learn about content types.</h3>
                <div className="flex justify-center">
                  {/* video box  */}
                  <div className="px-14">
                    <div className="video-box border border-gray cursor-pointer w-17" onClick={handleVideoClick}>
                      <BsPlayFill className="bg-gray2 text-white text-xl rounded-full m-2 ml-6 hover:animate-bounce" />
                      <p className="bg-gray items-center text-xs p-1 flex justify-center">video</p>
                    </div>
                  </div>

                  {/* article box  */}
                  <div className="video-box border cursor-pointer border-gray w-17 ml-4">
                    <BsFileEarmark className="bg-gray2 text-white text-xl m-2 ml-6 hover:animate-bounce" />
                    <p className="bg-gray items-center text-xs p-1 flex justify-center">article</p>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        {/* end of upload section  */}

        <div className='items-center ml-8'>
          <button className="px-4 py-2 mt-2 bg-white flex text-black font-bold hover:bg-gray border border-black"><BsPlus className='text-2xl' /> Curriculum item</button>
        </div>
      </div>

      {/* popup section  */}
      {showConfirmationPopup && (
        <ConfirmationPopup
          onCancel={() => setShowConfirmationPopup(false)}
          onDelete={() => {
            // Handle section deletion logic here
            setShowConfirmationPopup(false);
          }}
        />
      )}

      {/* the curriculum form section to add section  */}
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

            <div>
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
                    className="px-4 py-2 mt-2 bg-black text-white font-bold hover:bg-gray2"
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