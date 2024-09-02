import React from 'react';
import Accordion from '../UI/Accordion';
const EducationCard = ({ title, institution, duration, details }) => {
  return (
    <Accordion
      header={
        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-700">{institution}</p>
            <p className="text-sm text-gray-500">{duration}</p>
          </div>
        </div>
      }
    >
      <p className="mt-4 text-gray-600">{details}</p>
    </Accordion>
  );
};

export default EducationCard;
