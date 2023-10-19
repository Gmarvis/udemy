'use client'

import { useState } from 'react';

const checkboxes = [
  {
    id: 1,
    name: 'Plan Your Course',
    checks: [
      {
        id: 1,
        name: 'Intended learners',
        content: 'Content for Intended learners...',
      },
      {
        id: 2,
        name: 'Course structure',
        content: 'Content for Course structure...',
      },
      {
        id: 3,
        name: 'Setup & test video',
        content: 'Content for Setup & test video...',
      },
    ],
  },
  {
    id: 2,
    name: 'Create Your Content',
    checks: [
      {
        id: 1,
        name: 'Film & edit',
        content: 'Content for Film & edit...',
      },
      {
        id: 2,
        name: 'Curriculum',
        content: 'Content for Curriculum...',
      },
      {
        id: 3,
        name: 'Captions (optional)',
        content: 'Content for Captions (optional)...',
      },
      {
        id: 4,
        name: 'Accessibility',
        content: 'Content for Accessibility...',
      },
    ],
  },
  {
    id: 3,
    name: 'Publish Your Course',
    checks: [
      {
        id: 1,
        name: 'Course Landing Page',
        content: 'Content for Course Landing Page...',
      },
      {
        id: 2,
        name: 'Pricing',
        content: 'Content for Pricing...',
      },
      {
        id: 3,
        name: 'Promotions',
        content: 'Content for Promotions...',
      },
      {
        id: 4,
        name: 'Course messages',
        content: 'Content for Course messages...',
      },
    ],
  },
];

const ManageGoals = () => {
  const [activePage, setActivePage] = useState('Intended learners');
  const [showContent, setShowContent] = useState(true);

  const handleCheckboxClick = (page: string) => {
    setActivePage(page);
    setShowContent(true);
  };

  return (
    <div className="flex mx-72 my-6">
      <div className="flex flex-col space-y-2 mt-8 p-4">
        {checkboxes.map((checkbox) => (
          <div key={checkbox.id} className='pb-4'>
            <h2 className='font-bold mb-2'>{checkbox.name}</h2>
            {checkbox.checks.map((check) => (
              <label
                className={`flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-200 ${activePage === check.name ? 'border-l-4 border-black' : ''
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
        <button
          className="bg-fuchsia-600 text-white px-10 py-3 mt-4 font-bold text-base"
        >
          Submit for Review
        </button>
      </div>

      <div className="ml-8">
        {showContent && (
          <div className="shadow-xl p-8">
            {checkboxes.map((checkbox) =>
              checkbox.checks.map(
                (check) =>
                  check.name === activePage && (
                    <div key={check.id}>
                      <h2>{check.name}</h2>
                      <p>{check.content}</p>
                    </div>
                  )
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};


export default ManageGoals;