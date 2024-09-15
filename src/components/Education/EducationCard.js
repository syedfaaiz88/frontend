import React from 'react';
import Accordion from '../UI/Accordion';
const EducationCard = ({ title, institution, duration, details }) => {
  return (
    <Accordion
      header={
        <div className="flex items-center space-x-2">
          <div>
            <h3 className="text-sm md:text-xl font-bold">{title}</h3>
            <p className="text-xs md:text-sm text-gray-700">{institution}</p>
            <p className="text-xs md:text-sm text-gray-500">{duration}</p>
          </div>
        </div>
      }
    >
      <p className="mt-4 text-xs md:text-sm text-gray-600">{details}</p>
    </Accordion>
  );
};

export default EducationCard;
