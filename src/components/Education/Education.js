import React from 'react';
import { FcReading } from 'react-icons/fc';
import EducationCard from './EducationCard';

const Education = () => {
  const educationDetails = [
    {
      title: 'Bachelor of Computer Science (BSCS)',
      institution: 'Punjab University College Of Information Technology, PUCIT, Lahore',
      duration: '2019 - 2024',
      details: 'I scored 113 out of 140 on the test, achieving an overall aggregate of 95%. I ranked 41st on the list of selected students for the BSCS program at PUCIT. Consequently, I secured admission to the highest merit section, the BSCS Morning section, at the old campus, which consistently has a higher merit than the new campus.',
    },
    {
      title: 'Intermediate in Computer Science (ICS)',
      institution: 'Punjab Group of Colleges, PGC, Lahore',
      duration: '2017 - 2019',
      details: 'I got 100% merit based scholarship due to my matric marks and studied in super model section.',
    },
    {
      title: 'Matriculation in Computer Science',
      institution: 'Govt. High School, GHS, Lahore',
      duration: '2015 - 2017',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 flex items-center justify-center">
        <FcReading size={40} className="mr-3" />
        Academics & Education
      </h2>
      <div className="space-y-4">
        {educationDetails.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ))}
      </div>
    </div>
  );
};

export default Education;
