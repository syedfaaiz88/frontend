import React from 'react';
import { FcGraduationCap, FcManager, FcReading } from 'react-icons/fc';
import { PiCertificateFill } from 'react-icons/pi';

export const Education = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 flex items-center">
        <FcReading size={50} className="text-blue-500 mr-2" /> Academics
      </h2>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <FcGraduationCap className="text-green-500 text-4xl" />
          <div>
            <h3 className="text-xl font-bold">Bachelor of Computer Science (BSCS)</h3>
            <p className="text-gray-600">Punjab University College Of Information Technology, PUCIT, Lahore</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <PiCertificateFill className="text-blue-500 text-4xl" />
          <div>
            <h3 className="text-xl font-bold">Intermediate in Computer Science (ICS)</h3>
            <p className="text-gray-600">Punjab Group of Colleges, PGC, Lahore</p>            
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <FcManager className="text-yellow-500 text-4xl" />
          <div>
            <h3 className="text-xl font-bold">Matriculation in Computer Science</h3>
            <p className="text-gray-600">Govt. High School, GHS, Lahore</p>
          </div>
        </div>
      </div>
    </div>
  );
};
