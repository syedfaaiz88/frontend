import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi'; // Import the icon you want to use

const Accordion = ({ header, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="p-4 bg-white rounded-lg border border-b-2 cursor-pointer transition-all duration-300">
      <div
        className="flex items-center justify-between space-x-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          {header}
        </div>
        <div
          className={`text-2xl transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
        >
          <HiChevronDown size={30} />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-screen' : 'max-h-0'}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
