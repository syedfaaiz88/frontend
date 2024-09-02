import React from 'react';
import { FaCheckCircle, FaCircle } from "react-icons/fa";

export const CalisthenicsAchievment = ({ skill, details, completed }) => {
    return (
        <div className="mb-6 p-4 border rounded-lg shadow-md bg-white">
          <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
            {completed ? (
              <FaCheckCircle className="text-green-500 mr-2" />
            ) : (
              <FaCircle className="text-gray-500 mr-2" />
            )}
            {skill}
          </h4>
          <div className="text-gray-700 space-y-2">
            {details.reps > 0 && (
              <p className="flex items-center">
                <strong className="mr-2">Reps:</strong>
                {details.reps}
              </p>
            )}
            {details.time > 0 && (
              <p className="flex items-center">
                <strong className="mr-2">Time:</strong>
                {details.time} secs
              </p>
            )}
            {details.notes && (
              <p className="text-sm text-gray-600">{details.notes}</p>
            )}
          </div>
        </div>
    );
};
