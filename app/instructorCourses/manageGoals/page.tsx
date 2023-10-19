'use client'

import { useState } from 'react';

const checkboxes = [
  {
    id: 1,
    name: 'Plan Your Course',
    checks: ['Intended learners', 'Course structure', 'Setup & test video'],
  },
  {
    id: 2,
    name: 'Create Your Content',
    checks: ['Film & edit', 'Curriculum', 'Captions (optional)', 'Accessibility'],
  },
  {
    id: 3,
    name: 'Publish Your Course',
    checks: ['Course Landing Page', 'Pricing', 'Promotions', 'Course messages'],
  },
];

const ManageGoals = () => {
  const [activePage, setActivePage] = useState('');

  const handleCheckboxClick = (page: string) => {
    setActivePage(page);
  };

  return (
    <div>
      <div className="flex flex-col space-y-2">
        {checkboxes.map((checkbox) => (
          <div key={checkbox.id}>
            <h2>{checkbox.name}</h2>
            {checkbox.checks.map((check, index) => (
              <label className="flex items-center space-x-2" key={index}>
                <input
                  type="checkbox"
                  checked={activePage === checkbox.name && activePage === check}
                  onChange={() => handleCheckboxClick(check)}
                />
                <span>{check}</span>
              </label>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-4">
        {activePage && (
          <h2>
            {checkboxes.find((checkbox) => checkbox.checks.includes(activePage))?.name}
          </h2>
        )}
      </div>
    </div>
  );
};

export default ManageGoals;