import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ triggerComponent, dropdownContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close the dropdown
      }
    };

    // Add the event listener when the dropdown is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener on component unmount or when dropdown closes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
      >
        {triggerComponent}
      </div>

      {isOpen && (
        <div
          className="absolute min-w-[210px] right-0 left-auto bg-white border border-gray-300 shadow-lg rounded-lg z-100 mt-1 overflow-hidden"
        >
          {dropdownContent}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
