import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';

type Section = {
  id: string;
  title: string;
};

const InstructorCurriculum = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const [newSectionTitle, setNewSectionTitle] = useState('');
  const [isAddingSection, setIsAddingSection] = useState(false);

  const handleAddSection = () => {
    if (newSectionTitle) {
      const newSection: Section = {
        id: Date.now().toString(),
        title: newSectionTitle,
      };

      setSections([...sections, newSection]);
      setNewSectionTitle('');
      setIsAddingSection(false);
    }
  };

  return (
    <div>
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

      <div className="mt-8">
        {sections.map((section) => (
          <div key={section.id} className="mb-4">
            <h2 className="text-xl font-bold">{section.title}</h2>
          </div>
        ))}
      </div>

      {isAddingSection ? (
        <div className="mt-4 px-14">
          <input
            type="text"
            value={newSectionTitle}
            onChange={(e) => setNewSectionTitle(e.target.value)}
            className="px-2 py-1 border rounded"
            placeholder="Section Title"
          />
          <button
            onClick={handleAddSection}
            className="px-4 py-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Section
          </button>
        </div>
      ) : (
        <div className="mt-4 px-14">
          <button
            onClick={() => setIsAddingSection(true)}
            className="flex items-center space-x-2 text-blue-500 cursor-pointer"
          >
            <BsPlus />
            <span>Add Section</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default InstructorCurriculum;