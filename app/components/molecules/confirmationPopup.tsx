import React, { useRef, useEffect } from 'react';
import { BsX } from 'react-icons/bs';

type ConfirmationPopupProps = {
  onCancel: () => void;
  onDelete: () => void;
};

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({ onCancel, onDelete }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onCancel();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onCancel]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={popupRef} className="bg-white p-4">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Please confirm</h2>
          <BsX className="cursor-pointer" onClick={onCancel} />
        </div>
        <p>Are you sure you want to delete this section?</p>
        <div className="flex justify-end mt-4">
          <button className="mr-2" onClick={onCancel}>
            Cancel
          </button>
          <button className='px-4 py-2 bg-black text-white font-bold' onClick={onDelete}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;