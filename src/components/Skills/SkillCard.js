import Tippy from '@tippyjs/react';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const levelColors = {
  Basic: 'bg-gray-200 text-gray-800',
  Intermediate: 'bg-yellow-200 text-yellow-800',
  Advanced: 'bg-orange-200 text-orange-800',
  Expert: 'bg-green-200 text-green-800',
};

const getLatestMilestone = (milestones) => {
  // Find the latest checked milestone
  return milestones.slice().reverse().find(milestone => milestone.checked);
};

const SkillCard = ({ skill, Icon }) => {
  const latestMilestone = getLatestMilestone(skill.milestones);

  return (
    <Tippy content={skill.name} placement='top' arrow={false}>
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4 justify-center">
        {Icon}
      </div>
      {latestMilestone ? (
        <div className={`flex items-center p-2 rounded ${levelColors[latestMilestone.level]}`}>
          <FaCheckCircle className="mr-2" />
          <span>{latestMilestone.level}</span>
        </div>
      ) : (
        <div className="text-gray-600">No milestones achieved</div>
      )}
    </div>
    </Tippy>
  );
};

export default SkillCard;
