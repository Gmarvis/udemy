import React, { useState } from 'react';

type CurriculumFormProps = {
  onAddSection: (title: string, objectives: string) => void;
};

const CurriculumForm: React.FC<CurriculumFormProps> = ({ onAddSection }) => {
  const [newSectionTitle, setNewSectionTitle] = useState<string>('');
  const [newSectionObjectives, setNewSectionObjectives] = useState<string>('');

  const handleAddSection = () => {
    if (newSectionTitle && newSectionObjectives) {
      onAddSection(newSectionTitle, newSectionObjectives);
      setNewSectionTitle('');
      setNewSectionObjectives('');
    }
  };

  return (
    <div className="border border-black p-4">
      <div>
        <h3 className="font-bold mb-4">New Section:</h3>
        <div>
          <div className="flex border border-black p-2 mb-6">
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
            What will students be able to do at the end of this section?
          </label>
          <div className="flex border border-black p-2 mt-4 mb-4">
            <input
              id="objectivesInput"
              value={newSectionObjectives}
              onChange={(e) => setNewSectionObjectives(e.target.value)}
              className="flex-grow outline-none bg-transparent"
              maxLength={200}
              placeholder="Enter learning objectives"
            />
          </div>
          <div className="flex justify-end">
            <button className="font-bold mr-4">Cancel</button>
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
  );
};

export default CurriculumForm;