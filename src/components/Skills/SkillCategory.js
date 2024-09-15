// SkillCategory.jsx
import React from 'react';
import SkillCard from './SkillCard';

const SkillCategory = ({ category, skills }) => {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold pb-2 mb-6 text-center lg:text-left">{category}</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} Icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
