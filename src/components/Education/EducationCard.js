import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi'; // Import a beautiful icon

const EducationCard = ({ title, institution, duration, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="p-4 bg-white rounded-lg shadow-md cursor-pointer transition-all duration-300"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center justify-between space-x-4">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-700">{institution}</p>
          <p className="text-sm text-gray-500">{duration}</p>
        </div>
        <div className={`text-2xl transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
          <HiChevronDown size={30}/>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <p className="mt-4 text-gray-600">{details}</p>
      </div>
    </div>
  );
};

export default EducationCard;
